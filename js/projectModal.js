// File: js/projectModal.js
/**
 * Handles main project modal functionality
 */
class ProjectModal {
    constructor() {
        this.modal = document.getElementById("project-modal");
        this.modalContent = document.getElementById("project-modal-content");

        this.init();
    }

    /**
     * Initialize modal functionality
     */
    init() {
        // Add click event listeners to all cards that should open modals
        document.querySelectorAll('.project-card[data-project]').forEach(card => {
            card.addEventListener('click', (e) => {
                // Only prevent default if we're not on mobile or if overlay is already shown
                const isMobile = window.innerWidth <= 768;
                if (!isMobile || card.classList.contains('show-overlay')) {
                    e.preventDefault();
                    const projectId = card.getAttribute('data-project');
                    this.openModal(`modal-${projectId}`);
                }
            });
        });

        // Close modal on Escape key
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && !this.modal.classList.contains("hidden")) {
                this.closeModal();
            }
        });

        // Close modal on backdrop click
        this.modal.addEventListener("click", (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Check for hash on page load and open corresponding modal
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1); // remove the '#'
            const modalId = `modal-${targetId}`;
            if (projectData[modalId]) {
                this.openModal(modalId);
            }
        }

        // Expose methods globally for HTML onclick attributes
        window.openModal = this.openModal.bind(this);
        window.closeModal = this.closeModal.bind(this);
    }

    /**
     * Opens a project modal with the specified ID
     * @param {string} modalId - The ID of the modal to open
     */
    openModal(modalId) {
        const content = projectData[modalId];
        if (content) {
            this.modalContent.innerHTML = content;
            this.modal.classList.remove("hidden");

            // Setup bubble listeners after content is added to DOM
            if (modalId === 'modal-omnivores-rule' || modalId === 'modal-roboleon') {
                setTimeout(() => {
                    window.setupBubbleListeners();
                }, 100);
            }
        }

        // Update the hash
        const hashId = modalId.replace("modal-", "");
        history.pushState(null, "", `#${hashId}`);

        window.scrollTo(0, 0);
    }

    /**
     * Closes the currently open modal
     */
    closeModal() {
        this.modal.classList.add("hidden");
        this.modalContent.innerHTML = ""; // Clear content on close
        history.pushState("", document.title, window.location.pathname + window.location.search); // clear hash
    }
}