// File: js/projectModal.js
/**
 * Handles main project modal functionality with performance optimizations
 */
class ProjectModal {
    constructor() {
        this.modal = document.getElementById("project-modal");
        this.modalContent = document.getElementById("project-modal-content");
        this.modalIsOpen = false;
        this.cachedModalContents = {};

        this.init();
    }

    /**
     * Initialize modal functionality
     */
    init() {
        // Optimize event listener attachment with delegation
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card[data-project]');
            if (card) {
                // Only prevent default if we're not on mobile or if overlay is already shown
                const isMobile = window.innerWidth <= 768;
                if (!isMobile || card.classList.contains('show-overlay')) {
                    e.preventDefault();
                    const projectId = card.getAttribute('data-project');
                    this.openModal(`modal-${projectId}`);
                }
            }

            // Handle close button click
            if (e.target.closest('.close-modal')) {
                this.closeModal();
            }

            // Handle backdrop click
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal on Escape key
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modalIsOpen) {
                this.closeModal();
            }
        });

        // Check for hash on page load and open corresponding modal
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1); // remove the '#'
            const modalId = `modal-${targetId}`;
            if (projectData[modalId]) {
                // Short delay to ensure page has loaded
                setTimeout(() => this.openModal(modalId), 300);
            }
        }

        // Preload modal content for visible cards
        this.preloadModalContent();

        // Expose methods globally for HTML onclick attributes
        window.openModal = this.openModal.bind(this);
        window.closeModal = this.closeModal.bind(this);
    }

    /**
     * Preload modal content for visible cards to improve response time
     */
    preloadModalContent() {
        // Use requestIdleCallback for non-critical preloading
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                document.querySelectorAll('.project-card[data-project]').forEach(card => {
                    const projectId = card.getAttribute('data-project');
                    const modalId = `modal-${projectId}`;

                    if (projectData[modalId] && !this.cachedModalContents[modalId]) {
                        this.cachedModalContents[modalId] = projectData[modalId];
                    }
                });
            }, { timeout: 2000 });
        }
    }

    /**
     * Opens a project modal with the specified ID
     * @param {string} modalId - The ID of the modal to open
     */
    openModal(modalId) {
        // Get content from cache or project data
        let content = this.cachedModalContents[modalId] || projectData[modalId];

        if (content) {
            // Add a loading state
            this.modal.classList.remove("hidden");
            this.modalContent.innerHTML = '<div class="modal-loading"><div class="spinner"></div></div>';
            this.modalIsOpen = true;

            // Use requestAnimationFrame for smoother UI
            requestAnimationFrame(() => {
                this.modalContent.innerHTML = content;

                // Setup bubble listeners after content is added to DOM
                if (['modal-omnivores-rule', 'modal-roboleon',
                    'modal-totally-accurate-warehouse-simulator', 'modal-quipu']
                    .includes(modalId)) {

                    // Use setTimeout with 0ms to defer to next event loop
                    setTimeout(() => {
                        if (typeof window.setupBubbleListeners === 'function') {
                            window.setupBubbleListeners();
                        }
                    }, 0);
                }

                // Update URL hash without scrolling
                const hashId = modalId.replace("modal-", "");
                history.pushState(null, "", `#${hashId}`);

                // Prevent body scrolling
                document.body.style.overflow = 'hidden';
            });
        }
    }

    /**
     * Closes the currently open modal
     */
    closeModal() {
        if (!this.modalIsOpen) return;

        // Add closing animation
        this.modal.classList.add("closing");

        setTimeout(() => {
            this.modal.classList.remove("closing");
            this.modal.classList.add("hidden");
            this.modalContent.innerHTML = ""; // Clear content on close
            this.modalIsOpen = false;

            // Reset URL without scrolling
            history.pushState("", document.title, window.location.pathname + window.location.search);

            // Restore body scrolling
            document.body.style.overflow = '';
        }, 300);
    }
}