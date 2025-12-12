/**
 * Handles demo reel video modal functionality
 */
class DemoReelModal {
    constructor() {
        this.modal = null;
        this.init();
    }

    init() {
        console.log('DemoReelModal: Initializing...');

        // Create modal structure
        this.createModal();

        // Add click handler to demo reel card
        const demoReelCard = document.getElementById('demo-reel-card');
        if (demoReelCard) {
            console.log('DemoReelModal: Card found, adding click listener');
            demoReelCard.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('DemoReelModal: Card clicked');
                this.openModal();
            });

            // Also add to the video element directly
            const video = demoReelCard.querySelector('video');
            if (video) {
                video.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('DemoReelModal: Video clicked');
                    this.openModal();
                });
            }
        } else {
            console.error('DemoReelModal: Card with id="demo-reel-card" not found');
        }

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });

        // Expose globally for potential HTML onclick usage
        window.openDemoReel = this.openModal.bind(this);
        window.closeDemoReel = this.closeModal.bind(this);

        console.log('DemoReelModal: Initialization complete');
    }

    createModal() {
        // Check if modal already exists
        if (document.getElementById('demo-reel-modal')) {
            console.log('DemoReelModal: Modal already exists');
            this.modal = document.getElementById('demo-reel-modal');
            return;
        }

        // Create modal HTML structure
        const modalHTML = `
            <div id="demo-reel-modal" class="video-modal hidden">
                <div class="video-modal-content">
                    <button class="video-close-btn" onclick="closeDemoReel()">&times;</button>
                    <iframe 
                        id="demo-reel-iframe"
                        src="" 
                        title="Demo Reel"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;

        // Add to body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('demo-reel-modal');
        console.log('DemoReelModal: Modal created');

        // Click backdrop to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    openModal() {
        console.log('DemoReelModal: Opening modal');
        if (!this.modal) {
            console.error('DemoReelModal: Modal not found');
            return;
        }

        const iframe = document.getElementById('demo-reel-iframe');
        if (!iframe) {
            console.error('DemoReelModal: Iframe not found');
            return;
        }

        // Add autoplay parameter to YouTube URL
        iframe.src = 'https://www.youtube.com/embed/5lX65mrn3xc?autoplay=1';

        this.modal.classList.remove('hidden');
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        console.log('DemoReelModal: Modal opened');
    }

    closeModal() {
        console.log('DemoReelModal: Closing modal');
        if (!this.modal) return;

        const iframe = document.getElementById('demo-reel-iframe');
        if (iframe) {
            // Stop video by removing src
            iframe.src = '';
        }

        this.modal.classList.remove('active');
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';

        console.log('DemoReelModal: Modal closed');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded: Creating DemoReelModal');
    new DemoReelModal();
});

// Fallback if DOMContentLoaded already fired
if (document.readyState === 'interactive' || document.readyState === 'complete') {
    console.log('DOM already loaded: Creating DemoReelModal');
    new DemoReelModal();
}