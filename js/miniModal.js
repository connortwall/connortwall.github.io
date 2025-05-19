// File: js/miniModal.js
/**
 * Handles mini-modal functionality within project modals
 */
class MiniModal {
    constructor() {
        // Expose methods globally for HTML onclick attributes
        window.openMiniModal = this.openMiniModal.bind(this);
        window.closeMiniModal = this.closeMiniModal.bind(this);
        window.setupBubbleListeners = this.setupBubbleListeners.bind(this);
    }

    /**
     * Opens a mini-modal with the specified section
     * @param {string} section - The section ID of the mini-modal to open
     */
    openMiniModal(section) {
        // Close any open mini-modals first
        document.querySelectorAll('.mini-modal').forEach(modal => {
            modal.classList.remove('active');
        });

        // Remove active class from all bubbles
        document.querySelectorAll('.dev-bubble').forEach(bubble => {
            bubble.classList.remove('active');
        });

        // Add active class to clicked bubble
        document.querySelector(`.dev-bubble[data-section="${section}"]`).classList.add('active');

        // Show the selected mini modal
        document.getElementById(`mini-modal-${section}`).classList.add('active');

        // Scroll to the mini modal with a smooth animation
        document.getElementById(`mini-modal-${section}`).scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }

    /**
     * Closes a mini-modal with the specified section
     * @param {string} section - The section ID of the mini-modal to close
     */
    closeMiniModal(section) {
        document.getElementById(`mini-modal-${section}`).classList.remove('active');
        document.querySelector(`.dev-bubble[data-section="${section}"]`).classList.remove('active');
    }

    /**
     * Sets up event listeners for dev bubbles in the modal
     */
    setupBubbleListeners() {
        document.querySelectorAll('.dev-bubble').forEach(bubble => {
            const section = bubble.getAttribute('data-section');

            bubble.onclick = () => this.openMiniModal(section);
        });
    }
}

// Make sure to instantiate the class
document.addEventListener('DOMContentLoaded', () => {
    new MiniModal();
});