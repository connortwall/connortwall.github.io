// File: js/projectLoader.js
/**
 * Handles efficient loading of project cards
 */
class ProjectLoader {
    constructor() {
        this.projectGrid = document.querySelector('.project-grid');
        this.cards = Array.from(document.querySelectorAll('.project-card'));
        this.cardCount = this.cards.length;
        this.loadingDelay = 80; // ms between each card animation (smaller delay for more cards)
        this.batchSize = 5; // How many cards to load at once
        this.imagesLoaded = 0;
        this.totalImages = 0;
        this.videoElements = [];
    }

    /**
     * Initialize the loader and start loading process
     */
    init() {
        // Hide all cards initially
        this.cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });

        // Add loading indicator
        this.addLoadingIndicator();

        // Start preloading images and videos
        this.preloadMedia();

        // Fallback in case media takes too long
        setTimeout(() => {
            if (this.projectGrid.querySelector('.loading-indicator')) {
                this.removeLoadingIndicator();
                this.animateCards();
            }
        }, 2000);
    }

    /**
     * Add loading indicator to the grid
     */
    addLoadingIndicator() {
        const loader = document.createElement('div');
        loader.className = 'loading-indicator';
        loader.innerHTML = `
            <div class="spinner"></div>
            <p>Loading projects...</p>
        `;
        this.projectGrid.prepend(loader);
    }

    /**
     * Remove loading indicator
     */
    removeLoadingIndicator() {
        const loader = this.projectGrid.querySelector('.loading-indicator');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 300);
        }
    }

    /**
     * Preload all media elements
     */
    preloadMedia() {
        // Count images and videos to load
        const images = Array.from(this.projectGrid.querySelectorAll('img'));
        this.videoElements = Array.from(this.projectGrid.querySelectorAll('video'));
        this.totalImages = images.length + this.videoElements.length;

        // If no media to load, animate immediately
        if (this.totalImages === 0) {
            this.removeLoadingIndicator();
            this.animateCards();
            return;
        }

        // Preload images
        images.forEach(img => {
            if (img.complete) {
                this.handleMediaLoaded();
            } else {
                img.onload = () => this.handleMediaLoaded();
                img.onerror = () => this.handleMediaLoaded();
            }
        });

        // Handle videos
        this.videoElements.forEach(video => {
            // Consider video ready when metadata is loaded
            if (video.readyState >= 1) { // HAVE_METADATA
                this.handleMediaLoaded();
            } else {
                video.onloadedmetadata = () => this.handleMediaLoaded();
                video.onerror = () => this.handleMediaLoaded();
            }

            // Optimization for videos
            video.setAttribute('preload', 'metadata');
            video.setAttribute('loading', 'lazy');
        });
    }

    /**
     * Handle when a media element has loaded
     */
    handleMediaLoaded() {
        this.imagesLoaded++;

        // If all images are loaded or we've hit 80% loaded and it's been over 1 second
        if (this.imagesLoaded >= this.totalImages ||
            (this.imagesLoaded / this.totalImages >= 0.8 && performance.now() > 1000)) {
            this.removeLoadingIndicator();
            this.animateCards();
        }
    }

    /**
     * Animate cards in sequence from top to bottom
     */
    animateCards() {
        // Start animation only if not already animated
        if (this.cards[0].style.opacity === '1') return;

        this.cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';

                // Start video playback when card becomes visible
                const video = card.querySelector('video');
                if (video) {
                    video.play().catch(e => console.log('Auto-play prevented:', e));
                }
            }, index * this.loadingDelay);
        });
    }
}

// Create and initialize the project loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize existing classes
    new ProjectModal();
    new ProjectFilter();

    // Initialize new loader
    const loader = new ProjectLoader();
    loader.init();

    // Add intersection observer for video optimization
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // Only play if not already playing
                if (video.paused) {
                    video.play().catch(e => {});
                }
            } else {
                // Pause when out of view
                if (!video.paused) {
                    video.pause();
                }
            }
        });
    }, { threshold: 0.1 });

    // Observe all videos
    document.querySelectorAll('.project-card video').forEach(video => {
        observer.observe(video);
    });
});