/**
 * Enhanced Project Card Loader with performance optimizations
 * - Prioritizes above-the-fold rendering
 * - Uses IntersectionObserver for efficient loading
 * - Implements content prioritization strategies
 * - Optimizes DOM operations and rendering
 */
class ProjectCardLoader {
    constructor() {
        // Core elements
        this.projectsContainer = document.getElementById('projects-container') || document.querySelector('.project-grid');
        this.cardTemplate = document.getElementById('project-card-template');

        // State tracking
        this.loadedProjects = new Set();
        this.isLoading = false;
        this.initialLoadComplete = false;
        this.projectsData = [];

        // Configuration
        this.aboveTheFoldCount = 4; // Cards visible without scrolling (adjust based on viewport)
        this.batchSize = 4; // Number of cards to load in each subsequent batch
        this.preloadDistance = 300; // px from bottom to trigger preloading

        // Initialize
        this.init();
    }

    /**
     * Initialize the card loader with performance optimizations
     */
    init() {
        // Check for preloaded data first (fastest path)
        this.projectsData = window.projectsListData || [];

        // If no preloaded data, fetch data
        if (!this.projectsData.length) {
            this.fetchProjectsData().then(() => {
                this.performInitialRender();
            });
        } else {
            this.performInitialRender();
        }

        // Use passive event listeners for better performance
        window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
        window.addEventListener('resize', this.checkVisibility.bind(this), { passive: true });
    }

    /**
     * Optimized initial render path focusing on visible content first
     */
    performInitialRender() {
        // 1. Critical Path: Render above-the-fold cards immediately
        this.renderAboveTheFold();

        // 2. After paint: Setup observers and load remaining visible cards
        requestAnimationFrame(() => {
            // Setup intersection observer for remaining cards
            this.setupIntersectionObserver();

            // Check if we need to load more visible cards after initial render
            this.checkVisibility();

            // Mark initial load complete
            this.initialLoadComplete = true;
        });
    }

    /**
     * Fetch projects data from the server with timeout and caching
     * @returns {Promise} Promise that resolves when data is loaded
     */
    async fetchProjectsData() {
        // Use cache if available
        const cachedData = sessionStorage.getItem('projectsData');
        if (cachedData) {
            try {
                this.projectsData = JSON.parse(cachedData);
                return this.projectsData;
            } catch (e) {
                console.warn('Failed to parse cached projects data');
            }
        }

        // Fetch with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        try {
            const response = await fetch('/api/projects-list', {
                signal: controller.signal,
                headers: { 'Accept': 'application/json' }
            });
            clearTimeout(timeoutId);

            if (!response.ok) throw new Error('Network response was not ok');

            this.projectsData = await response.json();

            // Cache the data
            try {
                sessionStorage.setItem('projectsData', JSON.stringify(this.projectsData));
            } catch (e) {
                console.warn('Failed to cache projects data');
            }

            return this.projectsData;
        } catch (error) {
            console.error('Failed to load projects data:', error);
            // Fallback to empty array if fetch fails
            return [];
        }
    }

    /**
     * Render only the above-the-fold cards immediately for fast initial paint
     */
    renderAboveTheFold() {
        if (!this.projectsData.length) return;

        // Create fragment for batch DOM insertion (single reflow)
        const fragment = document.createDocumentFragment();
        const aboveTheFoldProjects = this.projectsData.slice(0, this.aboveTheFoldCount);

        // Prepare content without adding to DOM yet
        aboveTheFoldProjects.forEach(project => {
            const card = this.createCardElement(project, true); // true = high priority
            this.loadedProjects.add(project.id);
            fragment.appendChild(card);
        });

        // Single DOM insertion for all cards
        this.projectsContainer.appendChild(fragment);
    }

    /**
     * Setup intersection observer for efficient lazy loading
     */
    setupIntersectionObserver() {
        // Create observer for cards
        this.cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    this.loadCardMedia(card);
                    this.cardObserver.unobserve(card);
                }
            });
        }, {
            rootMargin: '200px',
            threshold: 0.1
        });

        // Create observer for loading more cards when approaching bottom
        this.containerObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !this.isLoading) {
                this.loadNextBatch();
            }
        }, {
            rootMargin: `0px 0px ${this.preloadDistance}px 0px`,
            threshold: 0
        });

        // Observe existing cards
        document.querySelectorAll('.project-card').forEach(card => {
            this.cardObserver.observe(card);
        });

        // Create sentinel element at bottom of container to trigger more loading
        this.createLoadSentinel();
    }

    /**
     * Create a sentinel element that triggers loading when visible
     */
    createLoadSentinel() {
        const sentinel = document.createElement('div');
        sentinel.className = 'load-sentinel';
        sentinel.style.height = '1px';
        sentinel.style.width = '100%';
        this.projectsContainer.appendChild(sentinel);
        this.containerObserver.observe(sentinel);
    }

    /**
     * Handle scroll event with throttling for performance
     */
    handleScroll() {
        // Throttle scroll events for performance
        if (this.scrollTimeout) return;

        this.scrollTimeout = setTimeout(() => {
            if (this.isScrollNearBottom()) {
                this.loadNextBatch();
            }
            this.scrollTimeout = null;
        }, 100);
    }

    /**
     * Check if scroll position is near the bottom
     * @returns {boolean} True if scroll is near bottom
     */
    isScrollNearBottom() {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bodyHeight = document.body.offsetHeight;
        return scrollPosition >= bodyHeight - this.preloadDistance;
    }

    /**
     * Check if more cards need to be loaded based on visibility
     */
    checkVisibility() {
        if (this.isLoading || this.loadedProjects.size >= this.projectsData.length) {
            return;
        }

        // Check if container is not tall enough to fill viewport
        const containerRect = this.projectsContainer.getBoundingClientRect();
        if (containerRect.bottom < window.innerHeight + this.preloadDistance) {
            this.loadNextBatch();
        }
    }

    /**
     * Load the next batch of project cards efficiently
     */
    loadNextBatch() {
        if (this.isLoading || this.loadedProjects.size >= this.projectsData.length) {
            return;
        }

        this.isLoading = true;
        const fragment = document.createDocumentFragment();
        let cardsToLoad = [];
        let count = 0;

        // Find next batch of unloaded projects
        for (const project of this.projectsData) {
            if (!this.loadedProjects.has(project.id) && count < this.batchSize) {
                cardsToLoad.push(project);
                this.loadedProjects.add(project.id);
                count++;
            }

            if (count >= this.batchSize) break;
        }

        // Create all DOM elements before insertion
        cardsToLoad.forEach(project => {
            const card = this.createCardElement(project, false); // false = normal priority
            fragment.appendChild(card);
        });

        // Single DOM update for better performance
        if (cardsToLoad.length > 0) {
            // Update sentinel position by removing and re-adding
            const sentinel = this.projectsContainer.querySelector('.load-sentinel');
            if (sentinel) this.projectsContainer.removeChild(sentinel);

            // Add new cards
            this.projectsContainer.appendChild(fragment);

            // Re-add sentinel at bottom
            this.createLoadSentinel();

            // Observe new cards
            cardsToLoad.forEach(project => {
                const card = this.projectsContainer.querySelector(`.project-card[data-project="${project.id}"]`);
                if (card) this.cardObserver.observe(card);
            });
        }

        this.isLoading = false;

        // Check if we need more cards after this batch
        if (this.initialLoadComplete) {
            requestAnimationFrame(() => this.checkVisibility());
        }
    }

    /**
     * Create a project card DOM element with optimizations
     * @param {Object} project - The project data
     * @param {boolean} highPriority - Whether this is a high priority card (above the fold)
     * @returns {HTMLElement} The card element
     */
    createCardElement(project, highPriority) {
        const card = document.createElement('div');
        card.className = 'project-card show';
        card.setAttribute('data-project', project.id);
        card.setAttribute('data-tags', project.tags || '');

        // Handle clicking on card (with optimization to avoid memory leaks)
        card.addEventListener('click', () => {
            if (typeof window.openModal === 'function') {
                window.openModal(`modal-${project.id}`);
            }
        });

        // For high priority cards (above the fold), include media immediately
        // For others, use placeholder and load media when visible
        let mediaHtml = '';

        if (project.mediaType === 'video') {
            if (highPriority) {
                // For high priority, load video with preload="metadata"
                mediaHtml = `
                    <video class="project-thumbnail" ${highPriority ? 'autoplay' : ''} muted loop playsinline preload="metadata">
                        <source data-src="${project.mediaUrl}" type="video/webm">
                    </video>
                `;
            } else {
                // For lower priority, use poster image first
                mediaHtml = `
                    <video class="project-thumbnail" muted loop playsinline preload="none"
                           poster="${project.posterUrl || '/images/placeholder.webp'}" data-src="${project.mediaUrl}">
                    </video>
                `;
            }
        } else {
            // For images, use native lazy loading for non-high-priority
            mediaHtml = `
                <img 
                    class="project-thumbnail" 
                    src="${highPriority ? project.thumbnailUrl : '/images/placeholder.webp'}" 
                    ${!highPriority ? `data-src="${project.thumbnailUrl}"` : ''} 
                    alt="${project.title}" 
                    loading="${highPriority ? 'eager' : 'lazy'}"
                >
            `;
        }

        // Minimal HTML structure for initial render
        card.innerHTML = `
            <div class="card-inner">
                ${mediaHtml}
                <div class="project-overlay">
                    <h3>${project.title}</h3>
                    <p>${project.summary}</p>
                    ${project.description ? `<p class="hover-text">${project.description}</p>` : ''}
                    ${project.duration ? `<h5>${project.duration}</h5>` : ''}
                </div>
            </div>
        `;

        return card;
    }

    /**
     * Load media for a card when it becomes visible
     * @param {HTMLElement} card - The card element
     */
    loadCardMedia(card) {
        // Load image if present
        const img = card.querySelector('img[data-src]');
        if (img) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        }

        // Load and play video if present
        const video = card.querySelector('video');
        if (video) {
            const source = video.querySelector('source[data-src]') || video.dataset.src;
            if (source) {
                if (typeof source === 'string') {
                    // Handle case where data-src is on the video element
                    video.src = video.dataset.src;
                    video.removeAttribute('data-src');
                } else {
                    // Handle case where data-src is on the source element
                    source.src = source.dataset.src;
                    source.removeAttribute('data-src');
                    video.load();
                }

                // Only play if in viewport
                if (this.isElementInViewport(video)) {
                    // Use play promise to handle autoplay restrictions gracefully
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            // Autoplay prevented, do nothing (this is fine)
                        });
                    }
                }
            }
        }
    }

    /**
     * Check if element is in viewport
     * @param {HTMLElement} el - Element to check
     * @returns {boolean} - Whether element is in viewport
     */
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= -rect.height &&
            rect.left >= -rect.width &&
            rect.bottom <= (window.innerHeight + rect.height) &&
            rect.right <= (window.innerWidth + rect.width)
        );
    }
}

// Initialize the card loader when DOM is ready with requestIdleCallback for non-critical work
if ('requestIdleCallback' in window) {
    // Use requestIdleCallback to initialize after critical content is loaded
    requestIdleCallback(() => {
        window.projectCardLoader = new ProjectCardLoader();
    }, { timeout: 1000 }); // Ensure it runs within 1 second even if browser is busy
} else {
    // Fallback to standard DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        window.projectCardLoader = new ProjectCardLoader();
    });
}