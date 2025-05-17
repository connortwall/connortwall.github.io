// File: js/projectFilter.js
/**
 * Handles project filtering functionality
 */
class ProjectFilter {
    constructor() {
        this.buttons = document.querySelectorAll('.filter-btn');
        this.cards = document.querySelectorAll('.project-card');
        this.mobileFilter = document.getElementById('mobile-filter');

        this.init();
    }

    /**
     * Initialize filtering functionality
     */
    init() {
        // Set initial filter from URL if present
        const initialFilter = getQueryParam('filter');
        if (initialFilter) {
            this.applyFilter(initialFilter);
            if (this.mobileFilter) this.mobileFilter.value = initialFilter;
        }

        // Add event listeners to filter buttons
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.applyFilter(filter);
                if (this.mobileFilter) this.mobileFilter.value = filter;
            });
        });

        // Add event listener to mobile dropdown if it exists
        if (this.mobileFilter) {
            this.mobileFilter.addEventListener('change', () => {
                const filter = this.mobileFilter.value;
                this.applyFilter(filter);
            });
        }

        // Enable tap-to-show-overlay on mobile
        this.cards.forEach(card => {
            card.addEventListener('click', (e) => this.handleCardClick(e, card));
        });

        // Close overlays when clicking outside
        document.addEventListener('click', (e) => this.handleOutsideClick(e));
    }

    /**
     * Apply filter to project cards
     * @param {string} filter - The filter to apply ('all' or a specific tag)
     */
    applyFilter(filter) {
        // Remove active class from all buttons
        this.buttons.forEach(b => b.classList.remove('active'));

        // Add active class to the selected button
        const matchedBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (matchedBtn) matchedBtn.classList.add('active');

        // Show/hide cards based on filter
        this.cards.forEach(card => {
            const tags = card.getAttribute('data-tags');
            if (filter === 'all' || tags.includes(filter)) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    }

    /**
     * Handle card click for mobile overlay functionality
     * @param {Event} e - Click event
     * @param {Element} card - The clicked card element
     */
    handleCardClick(e, card) {
        const isMobile = window.innerWidth <= 768;

        if (!isMobile) return;

        // If already showing overlay, follow link
        if (card.classList.contains('show-overlay')) {
            return true; // allow default behavior
        }

        // Prevent navigation on first tap
        e.preventDefault();

        // Remove overlay from all cards
        document.querySelectorAll('.project-card').forEach(c =>
            c.classList.remove('show-overlay'));

        // Add overlay to tapped card
        card.classList.add('show-overlay');
    }

    /**
     * Handle clicks outside of cards to close overlays
     * @param {Event} e - Click event
     */
    handleOutsideClick(e) {
        const isCard = e.target.closest('.project-card');
        if (!isCard) {
            document.querySelectorAll('.project-card').forEach(c =>
                c.classList.remove('show-overlay'));
        }
    }
}