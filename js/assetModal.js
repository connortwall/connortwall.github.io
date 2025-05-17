
    // Expand/collapse media functions
    let currentExpanded = null;
    let overlay = null;
    let captionElement = null;
    let closeButton = null;

    function toggleMediaExpansion(element) {
    // If it's already expanded, collapse it
    if (element.classList.contains('expanded-media')) {
    collapseMedia();
    return;
}

    // If another element is expanded, collapse it first
    if (currentExpanded) {
    collapseMedia();
}

    // Get the caption text
    const captionText = element.nextElementSibling ?
    element.nextElementSibling.textContent :
    "";

    // Create overlay
    overlay = document.createElement('div');
    overlay.className = 'media-overlay';
    overlay.onclick = collapseMedia;
    document.body.appendChild(overlay);

    // Create caption
    if (captionText) {
    captionElement = document.createElement('div');
    captionElement.className = 'expanded-caption';
    captionElement.textContent = captionText;
    document.body.appendChild(captionElement);
}

    // Create close button
    closeButton = document.createElement('span');
    closeButton.className = 'expanded-close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = collapseMedia;

        // Set custom styles directly on the element
        closeButton.style.color = '#0c1924'; // Red color (you can change this to any color)


        document.body.appendChild(closeButton);

    // Expand the media
    element.classList.add('expanded-media');
    currentExpanded = element;

    // If it's a video element, ensure controls are visible
    if (element.tagName === 'VIDEO') {
    element.controls = true;
}

    // Prevent scrolling
    document.body.style.overflow = 'hidden';
}

    function collapseMedia() {
    if (!currentExpanded) return;

    // Remove expanded class from media
    currentExpanded.classList.remove('expanded-media');

    // If it's a video, remove controls
    if (currentExpanded.tagName === 'VIDEO') {
    currentExpanded.controls = false;
}

    // Clean up overlay, caption and close button
    if (overlay) {
    document.body.removeChild(overlay);
    overlay = null;
}

    if (captionElement) {
    document.body.removeChild(captionElement);
    captionElement = null;
}

    if (closeButton) {
    document.body.removeChild(closeButton);
    closeButton = null;
}

    // Reset current expanded
    currentExpanded = null;

    // Re-enable scrolling
    document.body.style.overflow = '';
}


    // External link function
    function openExternalLink(url) {
    // Check if URL is valid
    if (!url || typeof url !== 'string') {
    console.error('Invalid URL provided to openExternalLink()');
    return;
}

    // Open the URL in a new tab/window
    window.open(url, '_blank');
}

    // Section scrolling function
    function scrollToSection(sectionId) {
    document.getElementById(`mini-modal-${sectionId}`).scrollIntoView({ behavior: 'smooth' });
}

    // Close modals when clicking outside of them
    window.onclick = function(event) {
    const downloadModal = document.getElementById("downloadOptionsModal");

    if (event.target === downloadModal) {
    closeDownloadOptions();
}
}

    // Add escape key functionality
    document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
    collapseMedia();
    closeDownloadOptions();
}
});