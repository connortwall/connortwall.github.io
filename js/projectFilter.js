// File: js/projectFilter.js
/**
 * Handles project filtering functionality with performance optimizations
 */
class ProjectFilter {
    constructor() {
        this.buttons = document.querySelectorAll('.filter-btn');
        this.cards = document.querySelectorAll('.project-card');
        this.mobileFilter = document.getElementById('mobile-filter');
        this.activeFilter = 'all';
        this.isAnimating = false;

        this.init();
    }

    /**
     * Initialize filtering functionality
     */
    init() {
        // Set initial filter from URL if present
        const initialFilter = this.getQueryParam('filter');
        if (initialFilter) {
            this.activeFilter = initialFilter;
            this.applyFilter(initialFilter, false); // No animation on initial load
            if (this.mobileFilter) this.mobileFilter.value = initialFilter;
        }

        // Use event delegation for filter buttons
        const filterContainer = document.querySelector('.filter-buttons');
        if (filterContainer) {
            filterContainer.addEventListener('click', (e) => {
                const btn = e.target.closest('.filter-btn');
                if (btn) {
                    const filter = btn.getAttribute('data-filter');
                    if (filter !== this.activeFilter) {
                        this.activeFilter = filter;
                        this.applyFilter(filter, true);
                        if (this.mobileFilter) this.mobileFilter.value = filter;
                    }
                }
            });
        }

        // Add event listener to mobile dropdown if it exists
        if (this.mobileFilter) {
            this.mobileFilter.addEventListener('change', () => {
                const filter = this.mobileFilter.value;
                if (filter !== this.activeFilter) {
                    this.activeFilter = filter;
                    this.applyFilter(filter, true);
                }
            });
        }

        // Handle tap-to-show-overlay on mobile with improved performance
        document.addEventListener('click', (e) => {
            const isMobile = window.innerWidth <= 768;
            if (!isMobile) return;

            const card = e.target.closest('.project-card');

            // Close all overlays when clicking outside
            if (!card) {
                document.querySelectorAll('.project-card.show-overlay').forEach(c =>
                    c.classList.remove('show-overlay'));
                return;
            }

            // If already showing overlay, follow link behavior
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
        });
    }

    /**
     * Apply filter to project cards with optional animation
     * @param {string} filter - The filter to apply ('all' or a specific tag)
     * @param {boolean} animate - Whether to animate the transition
     */
    applyFilter(filter, animate = true) {
        // Prevent multiple filter operations at once
        if (this.isAnimating) return;
        this.isAnimating = true;

        // Update UI
        this.updateActiveButton(filter);

        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
            // Process cards in batches for better performance
            const cardsToShow = [];
            const cardsToHide = [];

            this.cards.forEach(card => {
                const tags = card.getAttribute('data-tags');
                if (filter === 'all' || tags.includes(filter)) {
                    cardsToShow.push(card);
                } else {
                    cardsToHide.push(card);
                }
            });

            // Handle animations
            if (animate) {
                // Hide cards first
                this.animateCards(cardsToHide, false);

                // Then show cards after a short delay
                setTimeout(() => {
                    this.animateCards(cardsToShow, true);
                    this.isAnimating = false;
                }, 300);
            } else {
                // No animation, just update classes
                cardsToHide.forEach(card => card.classList.remove('show'));
                cardsToShow.forEach(card => card.classList.add('show'));
                this.isAnimating = false;
            }
        });
    }

    /**
     * Animate cards in or out
     * @param {Array} cards - Cards to animate
     * @param {boolean} show - Whether to show or hide cards
     */
    animateCards(cards, show) {
        cards.forEach((card, index) => {
            // Use setTimeout with minimal delays for staggered animation
            setTimeout(() => {
                if (show) {
                    card.classList.add('show');
                } else {
                    card.classList.remove('show');
                }
            }, index * 30); // Small stagger for natural effect
        });
    }

    /**
     * Update active button in the UI
     * @param {string} filter - The active filter
     */
    updateActiveButton(filter) {
        // Remove active class from all buttons
        this.buttons.forEach(b => b.classList.remove('active'));

        // Add active class to the selected button
        const matchedBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        if (matchedBtn) matchedBtn.classList.add('active');
    }

    /**
     * Get query parameter value
     * @param {string} name - Parameter name
     * @returns {string|null} Parameter value
     */
    getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
}