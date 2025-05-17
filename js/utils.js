/**
 * Utility functions for the portfolio site
 */

/**
 * Gets URL query parameter by name
 * @param {string} param - Parameter name to retrieve
 * @return {string|null} Parameter value or null if not found
 */
function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}