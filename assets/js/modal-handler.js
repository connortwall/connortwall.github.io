const modal = document.getElementById("project-modal");
const modalContent = document.getElementById("project-modal-content");

const projectDetails = {
    "modal-omnivores": `
      <span class="close-modal" onclick="closeModal()">&times;</span>
      <h2>Omnivores Rule</h2>
      <p><strong>Tools:</strong> Unreal Engine, C++, HLSL</p>
      <p>
        A surreal solarpunk exploration game that merges ecological simulation with poetic storytelling.
        Players shift between extractive and symbiotic recharging mechanics, unraveling ecosystem-based puzzles.
      </p>
      <video controls style="width: 100%; border-radius: 0.5rem; margin-top: 1rem;">
        <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/OmnivoresRuleTrailerReel.webm" type="video/webm">
        Your browser does not support the video tag.
      </video>
    `,
    "modal-metawalker":`
      <span class="close-modal" onclick="closeModal()">&times;</span>
        <h2>Trailer + Studio Update</h2>
        <h4 style="margin-top: -0.5rem; text-align: center; color: #aaa;">Timeframe: 5 months</h4>
        <p>I wrote character bios and chapters for the central storyline in a new action-RPG mobile game at <a style="color: #00b4cc" href= "https://nordicstonestudio.com">Nordic Stone Studios.</a></p>
        <p>Collect heroes and important people from the past to fight for the future. Set off on a quest to find an ancient Talisman before it can fall into the wrong hands!</p>
        <iframe width="100%" height="415" src="https://www.youtube.com/embed/vr-b1dk_OHs" title="YouTube video player" allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    `,
    "modal-prey":`
      <span class="close-modal" onclick="closeModal()">&times;</span>
      <h2>Prey and Indigenous Futures</h2>
  <h4 style="margin-top: -0.5rem; text-align: center; color: #aaa;">Blog Post</h4>
  <div style="margin: 1.5rem 0; text-align: center;">
    <img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey-LinkedIn.png" alt="Main Feature" style="max-width: 100%; border-radius: 1rem;" />
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
    <img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey%20Movie%20-%201.png" alt="Image 1" style="width: 100%; border-radius: 0.5rem;" />
    <img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey%20Movie%20-%202.png" alt="Image 2" style="width: 100%; border-radius: 0.5rem;" />
    <img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey%20Movie%20-%203.png" alt="Image 3" style="width: 100%; border-radius: 0.5rem;" />
    <img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey%20Movie%20-%204.png" alt="Image 4" style="width: 100%; border-radius: 0.5rem;" />
   <!--<img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey%20Movie%20-%205.png" alt="Image 5" style="width: 100%; border-radius: 0.5rem;" />-->

  </div>
    `,
    "modal-scavengers":`
      <span class="close-modal" onclick="closeModal()">&times;</span>
      <h2>Scavengers Reign & Authentic Speculative Biology</h2>
  <h4 style="margin-top: -0.5rem; text-align: center; color: #aaa;">Blog Post</h4>
  <div style="margin: 1.5rem 0; text-align: center;">
    <img src="uploads/ConnorWall_Portfolio/Blog/Scavengers/Scavengers-LinkedIn.png" alt="Main Feature" style="max-width: 100%; border-radius: 1rem;" />
  </div>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 0.75rem; margin-top: 1rem;">
    <img src="uploads/ConnorWall_Portfolio/Blog/Scavengers/1.png" alt="Image 1" style="width: 100%; border-radius: 0.5rem;" />
    <img src="uploads/ConnorWall_Portfolio/Blog/Scavengers/2.png" alt="Image 2" style="width: 100%; border-radius: 0.5rem;" />
    <img src="uploads/ConnorWall_Portfolio/Blog/Scavengers/3.png" alt="Image 3" style="width: 100%; border-radius: 0.5rem;" />
    <img src="uploads/ConnorWall_Portfolio/Blog/Scavengers/4.png" alt="Image 4" style="width: 100%; border-radius: 0.5rem;" />
   <!--<img src="uploads/ConnorWall_Portfolio/Blog/Prey/Prey%20Movie%20-%205.png" alt="Image 5" style="width: 100%; border-radius: 0.5rem;" />-->

  </div>
    `
    // Add more modal entries for other project cards like "modal-roboleon", etc.
};


document.addEventListener("DOMContentLoaded", () => {
    function openModal(modalId) {
        const content = projectDetails[modalId];
        if (content) {
            modalContent.innerHTML = content;
            modal.classList.remove("hidden");
        }

        // Update the hash
        const hashId = modalId.replace("modal-", "");
        history.pushState(null, "", `#${hashId}`);

        window.scrollTo(0, 0);
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add("show");
            modal.setAttribute("aria-hidden", "false");
            modal.style.display = "block";
            document.body.classList.add("modal-open");
        }
    }


    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    }

    // Check hash on load (e.g., #modal-prey)
    const hash = window.location.hash;
    if (hash && hash.startsWith("#modal-")) {
        const modalId = hash.replace("#", "");
        openModal(modalId);
    }

    // Allow modals to be closed when clicking on the background or close button
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal") || e.target.classList.contains("modal-close")) {
                closeModal(modal.id);
                history.replaceState(null, null, " "); // Remove hash from URL
            }
        });
    });



    // Hook up clickable triggers (in case you’re using `onclick="openModal('modal-id')"` elsewhere)
    window.openModal = openModal;
    window.closeModal = closeModal;
});
