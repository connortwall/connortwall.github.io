/**
 * Enhanced project modal system with performance optimizations and prefetching
 */
class ProjectModal {
    constructor() {
        // Core elements
        this.modal = document.getElementById("project-modal");
        this.modalContent = document.getElementById("project-modal-content");
        this.loadingIndicator = document.getElementById("modal-loading") || this.createLoadingIndicator();

        // Performance optimizations
        this.projectCache = {}; // Cache for loaded project content
        this.prefetchQueue = [];  // Queue for prefetching content
        this.prefetchInProgress = false;
        this.visibleCards = new Set(); // Track visible cards for prefetching priority

        this.init();
    }

    /**
     * Creates an optimized loading spinner
     * @returns {HTMLElement} The loading indicator element
     */
    createLoadingIndicator() {
        const loader = document.createElement('div');
        loader.id = 'modal-loading';
        loader.className = 'loading-spinner';
        loader.innerHTML = '<div class="spinner"></div>';
        document.body.appendChild(loader);
        return loader;
    }

    /**
     * Initialize modal functionality with performance optimizations
     */
    init() {
        // Setup intersection observer for prefetching
        this.setupPrefetchObserver();

        // Add event delegation for all card clicks (more efficient than individual listeners)
        document.addEventListener('click', (e) => {
            // Find closest project card if there is one
            const card = e.target.closest('.project-card[data-project]');
            if (!card) return;

            // Only handle if we're not on mobile or if overlay is shown
            const isMobile = window.innerWidth <= 768;
            if (!isMobile || card.classList.contains('show-overlay')) {
                e.preventDefault();
                const projectId = card.getAttribute('data-project');
                this.openModal(`modal-${projectId}`);
            }
        });

        // Optimize event listeners
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modal && !this.modal.classList.contains("hidden")) {
                this.closeModal();
            }
        });

        if (this.modal) {
            this.modal.addEventListener("click", (e) => {
                if (e.target === this.modal) {
                    this.closeModal();
                }
            });
        }

        // Check for hash on page load and open corresponding modal
        this.handleUrlHash();

        // Expose methods globally with performance protections
        window.openModal = this.openModal.bind(this);
        window.closeModal = this.closeModal.bind(this);

        // Start prefetching after initial content is loaded
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => this.startPrefetching(), { timeout: 2000 });
        } else {
            setTimeout(() => this.startPrefetching(), 2000);
        }
    }

    /**
     * Sets up intersection observer for tracking visible cards for prefetching
     */
    setupPrefetchObserver() {
        const options = {
            root: null,
            rootMargin: '100px',
            threshold: 0.1
        };

        this.prefetchObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const projectId = entry.target.getAttribute('data-project');
                if (!projectId) return;

                const modalId = `modal-${projectId}`;

                if (entry.isIntersecting) {
                    // Add to visible set and queue for prefetching
                    this.visibleCards.add(modalId);
                    this.queuePrefetch(modalId, true); // true = high priority
                } else {
                    // Remove from visible set
                    this.visibleCards.delete(modalId);
                }
            });
        }, options);

        // Observe all project cards
        requestAnimationFrame(() => {
            document.querySelectorAll('.project-card[data-project]').forEach(card => {
                this.prefetchObserver.observe(card);
            });
        });
    }

    /**
     * Queue a project modal for prefetching
     * @param {string} modalId - The modal ID
     * @param {boolean} highPriority - Whether this is high priority
     */
    queuePrefetch(modalId, highPriority = false) {
        // Skip if already cached
        if (this.projectCache[modalId]) return;

        // Add to queue with priority
        const existingIndex = this.prefetchQueue.findIndex(item => item.id === modalId);
        if (existingIndex >= 0) {
            // Update priority if needed
            if (highPriority && !this.prefetchQueue[existingIndex].highPriority) {
                this.prefetchQueue[existingIndex].highPriority = true;
                // Re-sort queue by priority
                this.prefetchQueue.sort((a, b) => (b.highPriority ? 1 : 0) - (a.highPriority ? 1 : 0));
            }
        } else {
            // Add new item
            this.prefetchQueue.push({ id: modalId, highPriority });
            // Sort by priority
            this.prefetchQueue.sort((a, b) => (b.highPriority ? 1 : 0) - (a.highPriority ? 1 : 0));
        }

        // Start prefetching if not already in progress
        if (!this.prefetchInProgress) {
            this.processPrefetchQueue();
        }
    }

    /**
     * Process the prefetch queue one item at a time
     */
    processPrefetchQueue() {
        if (this.prefetchQueue.length === 0) {
            this.prefetchInProgress = false;
            return;
        }

        this.prefetchInProgress = true;
        const next = this.prefetchQueue.shift();

        // Fetch the content with low priority
        this.prefetchModalContent(next.id).finally(() => {
            // Continue with next item, but allow a small break for other operations
            setTimeout(() => this.processPrefetchQueue(), 50);
        });
    }

    /**
     * Start prefetching visible cards
     */
    startPrefetching() {
        // Queue visible cards first
        this.visibleCards.forEach(modalId => {
            this.queuePrefetch(modalId, true);
        });

        // Then queue other cards with lower priority
        document.querySelectorAll('.project-card[data-project]').forEach(card => {
            const projectId = card.getAttribute('data-project');
            const modalId = `modal-${projectId}`;
            if (!this.visibleCards.has(modalId)) {
                this.queuePrefetch(modalId, false);
            }
        });
    }

    /**
     * Prefetch modal content with low priority
     * @param {string} modalId - The modal ID to prefetch
     */
    async prefetchModalContent(modalId) {
        // Skip if already cached
        if (this.projectCache[modalId]) return;

        try {
            // Check if static data is available (fastest path)
            if (window.projectData && window.projectData[modalId]) {
                this.projectCache[modalId] = window.projectData[modalId];
                return;
            }

            // Fetch with low priority
            const projectId = modalId.replace('modal-', '');
            const response = await fetch(`/api/projects/${projectId}`, {
                priority: 'low',
                cache: 'force-cache'
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const content = await response.text();
            this.projectCache[modalId] = content;
        } catch (error) {
            console.warn(`Failed to prefetch ${modalId}:`, error);
        }
    }

    /**
     * Checks URL hash and opens corresponding modal if needed
     */
    handleUrlHash() {
        const hash = window.location.hash;
        if (hash) {
            const targetId = hash.substring(1); // remove the '#'
            const modalId = `modal-${targetId}`;
            // Use requestAnimationFrame to ensure DOM is ready
            requestAnimationFrame(() => {
                this.openModal(modalId);
            });
        }
    }

    /**
     * Opens a project modal with the specified ID
     * @param {string} modalId - The ID of the modal to open
     */
    openModal(modalId) {
        if (!this.modal) return;

        // Show loading indicator
        this.loadingIndicator.style.display = 'flex';

        // If we have this content cached, use it immediately
        if (this.projectCache[modalId]) {
            this.displayModalContent(modalId, this.projectCache[modalId]);
            return;
        }

        // Check if static data is available
        if (window.projectData && window.projectData[modalId]) {
            const content = window.projectData[modalId];
            this.projectCache[modalId] = content;
            this.displayModalContent(modalId, content);
            return;
        }

        // Otherwise fetch with high priority
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        fetch(`/api/projects/${modalId.replace('modal-', '')}`, {
            signal: controller.signal,
            priority: 'high'
        })
            .then(response => {
                clearTimeout(timeoutId);
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(content => {
                this.projectCache[modalId] = content;
                this.displayModalContent(modalId, content);
            })
            .catch(error => {
                console.error("Error loading project content:", error);
                this.modalContent.innerHTML = "<p>Failed to load project content. Please try again later.</p>";
                this.modal.classList.remove("hidden");
                this.loadingIndicator.style.display = 'none';
            });
    }

    /**
     * Displays the modal content with performance optimizations
     * @param {string} modalId - The ID of the modal
     * @param {string} content - The HTML content to display
     */
    displayModalContent(modalId, content) {
        // If modal is not available, do nothing
        if (!this.modal || !this.modalContent) return;

        // Batch DOM operations
        requestAnimationFrame(() => {
            this.modalContent.innerHTML = content;
            this.modal.classList.remove("hidden");
            this.loadingIndicator.style.display = 'none';

            // Update the URL hash
            const hashId = modalId.replace("modal-", "");
            history.pushState(null, "", `#${hashId}`);

            // Scroll to top of modal
            this.modalContent.scrollTop = 0;

            // Setup any special content after a small delay
            if (['modal-omnivores-rule', 'modal-roboleon',
                'modal-totally-accurate-warehouse-simulator', 'modal-quipu'].includes(modalId)) {
                setTimeout(() => {
                    if (typeof window.setupBubbleListeners === 'function') {
                        window.setupBubbleListeners();
                    }
                }, 50);
            }
        });
    }

    /**
     * Closes the currently open modal
     */
    closeModal() {
        if (!this.modal) return;

        this.modal.classList.add("hidden");
        history.pushState("", document.title, window.location.pathname + window.location.search);

        // Don't clear content immediately to avoid flickering if reopened
        setTimeout(() => {
            if (this.modal.classList.contains("hidden")) {
                // Use requestAnimationFrame for smoother transitions
                requestAnimationFrame(() => {
                    this.modalContent.innerHTML = "";
                });
            }
        }, 300);
    }
}

// Use requestIdleCallback to initialize after critical content is loaded
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        window.projectModalSystem = new ProjectModal();
    }, { timeout: 1000 });
} else {
    // Fallback
    window.addEventListener('load', () => {
        setTimeout(() => {
            window.projectModalSystem = new ProjectModal();
        }, 100);
    });
}