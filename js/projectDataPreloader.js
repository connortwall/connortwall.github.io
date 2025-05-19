
/**
 * Project data preloader - loads project data ahead of time
 * This is a critical optimization for faster initial loading
 */
(function() {
    // Configuration
    const API_ENDPOINT = '/api/projects-list';
    const CACHE_KEY = 'projectsData';
    const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

    /**
     * Initialize project data preloading
     */
    function initProjectDataPreloader() {
        // Immediately set up the global project data objects
        window.projectsListData = window.projectsListData || [];
        window.projectData = window.projectData || {};

        // Check for cached data first (fastest path)
        const cachedData = getCachedData();
        if (cachedData) {
            window.projectsListData = cachedData;
            // Start rendering immediately with cached data
            dispatchDataReadyEvent();
            // Still refresh in background for next visit
            setTimeout(fetchFreshData, 100);
        } else {
            // No cache, fetch immediately
            fetchFreshData();
        }
    }

    /**
     * Get cached project data if available and valid
     * @returns {Array|null} Cached projects data or null
     */
    function getCachedData() {
        try {
            const cached = sessionStorage.getItem(CACHE_KEY);
            if (!cached) return null;

            const { data, timestamp } = JSON.parse(cached);

            // Check if cache is still valid
            if (Date.now() - timestamp < CACHE_EXPIRY && Array.isArray(data)) {
                return data;
            }
            return null;
        } catch (e) {
            console.warn('Error reading cached project data');
            return null;
        }
    }

    /**
     * Fetch fresh project data from the server
     */
    function fetchFreshData() {
        fetch(API_ENDPOINT)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                // Update the global data
                window.projectsListData = data;

                // Cache the data for future visits
                try {
                    sessionStorage.setItem(CACHE_KEY, JSON.stringify({
                        data,
                        timestamp: Date.now()
                    }));
                } catch (e) {
                    console.warn('Failed to cache projects data');
                }

                // Only dispatch event if this is the first data load
                if (!document.getElementById('projects-data-ready')) {
                    dispatchDataReadyEvent();
                }

                // Start preloading high-priority project details
                preloadHighPriorityProjects(data);
            })
            .catch(error => {
                console.error('Failed to fetch projects list:', error);
            });
    }

    /**
     * Dispatch event indicating project data is ready
     */
    function dispatchDataReadyEvent() {
        // Create a marker element to avoid duplicate events
        if (document.getElementById('projects-data-ready')) return;

        const marker = document.createElement('div');
        marker.id = 'projects-data-ready';
        marker.style.display = 'none';
        document.body.appendChild(marker);

        // Dispatch custom event for other components
        document.dispatchEvent(new CustomEvent('projectsDataReady', {
            detail: { projectsData: window.projectsListData }
        }));
    }

    /**
     * Preload high-priority project details (first 3-4 projects)
     * @param {Array} projectsList - List of projects
     */
    function preloadHighPriorityProjects(projectsList) {
        if (!projectsList || !projectsList.length) return;

        // Calculate number of visible projects based on viewport
        // We only preload what's likely to be above the fold
        const visibleCount = Math.min(
            4, // Maximum projects to preload
            projectsList.length
        );

        // Use requestIdleCallback for non-blocking preloading
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                for (let i = 0; i < visibleCount; i++) {
                    preloadProjectDetails(projectsList[i].id);
                }
            }, { timeout: 2000 });
        } else {
            // Fallback to setTimeout with low priority
            setTimeout(() => {
                for (let i = 0; i < visibleCount; i++) {
                    preloadProjectDetails(projectsList[i].id);
                }
            }, 500);
        }
    }

    /**
     * Preload individual project details
     * @param {string} projectId - The project ID to preload
     */
    function preloadProjectDetails(projectId) {
        const modalId = `modal-${projectId}`;

        // Skip if already in cache
        if (window.projectData && window.projectData[modalId]) return;

        // Use fetch with low priority
        fetch(`/api/projects/${projectId}`, {
            method: 'GET',
            priority: 'low',
            cache: 'force-cache'
        })
            .then(response => {
                if (!response.ok) throw new Error('Preload failed');
                return response.text();
            })
            .then(content => {
                // Store in the global cache
                window.projectData = window.projectData || {};
                window.projectData[modalId] = content;
            })
            .catch(() => {
                // Silently fail for preloads
            });
    }

    // Start preloading as early as possible
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initProjectDataPreloader);
    } else {
        initProjectDataPreloader();
    }
})();