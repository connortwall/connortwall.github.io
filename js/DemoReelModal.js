
    // Demo Reel Modal Handler
    class DemoReelModal {
    constructor() {
    this.modal = null;
    this.init();
}

    init() {
    this.createModal();

    const demoReelCard = document.getElementById('demo-reel-card');
    if (demoReelCard) {
    demoReelCard.addEventListener('click', () => this.openModal());
}

    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && this.modal && !this.modal.classList.contains('hidden')) {
    this.closeModal();
}
});

    window.openDemoReel = this.openModal.bind(this);
    window.closeDemoReel = this.closeModal.bind(this);
}

    createModal() {
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

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('demo-reel-modal');

    this.modal.addEventListener('click', (e) => {
    if (e.target === this.modal) {
    this.closeModal();
}
});
}

    openModal() {
    if (!this.modal) return;

    const iframe = document.getElementById('demo-reel-iframe');
    iframe.src = 'https://www.youtube.com/embed/5lX65mrn3xc?autoplay=1';

    this.modal.classList.remove('hidden');
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

    closeModal() {
    if (!this.modal) return;

    const iframe = document.getElementById('demo-reel-iframe');
    iframe.src = '';

    this.modal.classList.remove('active');
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
}
}

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new DemoReelModal());
} else {
    new DemoReelModal();
}
