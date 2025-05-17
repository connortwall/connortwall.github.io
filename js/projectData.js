// File: js/projectData.js
/**
 * Project data for modal content
 * Separated to make it easier to maintain
 */
const projectData = {
    "modal-omnivores-rule": `
<span class="close-modal" onclick="closeModal()">&times;</span>
<h2>omnivOres Rule</h2>
<h3><strong>Solo Developer</strong> (Unreal Engine, C++, HLSL)</h3>
<h5>Timeframe: 10 months</h5>
  <h4>My most recent solo dev project! Originally developed as a protoype from the <a style="color: #00b4cc" href="https://itch.io/jam/just-play-jam-climate/rate/2694711" >Climate Futures Game Jam</a>. Explore mile-high jungles. Echolocate through storms. Embrace local cycles. Shift between extractive and symbiotic recharging mechanics, unraveling ecosystem-based puzzles.</h4>

<div style="display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;">
                <iframe
                    src="https://www.youtube.com/embed/6yPzknO44BA?si=EBUdpLak_QmhwqVF"
                        style="width:100%;
                        max-width: 760px;
                        aspect-ratio: 16 / 9;"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen></iframe>
   </div>
<h2>Read More</h2>
<div class="game-dev-bubbles">
  <div class="dev-bubble" data-section="gameplay">Gameplay Design</div>
  <div class="dev-bubble" data-section="art">Tech Art</div>
  <div class="dev-bubble" data-section="systems">AI & Systems Design</div>
  <!--<div class="dev-bubble" data-section="narrative">Narrative</div>-->
  <!--<div class="dev-bubble" data-section="tech">Graphics Programming</div>-->
</div>

<div id="mini-modal-gameplay" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Core Gameplay</h3>
<span class="close-mini-modal" onclick="closeMiniModal('gameplay')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The central gameplay loop revolves around balancing extractive and symbiotic relationships with the environment.
The following mechanics are available to the player and slowly learned through environmental puzzles.</p>
                       <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/Echolocation.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Echolocate.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/GodMode.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fly.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FlyingShout.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Shout.</div>
                            </div>
                            </div>
   <table>
   <tbody>
       <thead>
      <tr>
      <th><h3 stlye="bold">Player Action</h3></th>
      <th><h3>Emotion</h3></th>
      <th><h3>Game Effects</h3></th>
      </tr>
      </thead>
   <tr>
      <td><ul><h3>Shout</h3></ul></td>
      <td><ul><h4>Aggressive</h4></ul></td>
      <td><ul><h4>Intimidate predators</h4>Destroy obstacles</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Whisper</h3></ul></td>
      <td><ul><h4>Submissive</h4></ul></td>
      <td><ul><h4>Slow down</h4>Connect with wildlife</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Ping</h3></ul></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Echolocate</h4>Query Relationship Status</ul></td>
      </tr>
      <tr>
      <td><h3>Power Off</h3></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Hide from predators</h4>Shelter during storms</ul></td>
      </tr>
      <tr>
      <td><h3>Flight</h3></td>
      <td><ul><h4>Powerful</h4></ul></td>
      <td><ul><h4>Navigate vertically</h4>follow airborn wildlife</ul></td>
      </tr>
      </tbody>
   </table>
<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-art" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Tech Art Direction</h3>
<span class="close-mini-modal" onclick="closeMiniModal('art')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The art direction of this project combines stylized volumetric shaders, Niagara particle systems, weather + time of day systems, and foliage interactions. The goal for the feel of this project is "beauty and brutality". Inspired by Moebius and Miyazaki, the volumetric shader combines a colorful physical based cell shader, textured shadows, black gritty outlines (day), and white outlines (night)</p>
<div class="mini-gallery">

</div>
<ul>
</ul>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FallingFog.webm"
                                    type="video/mp4"/>
                        </video>
    <div class="caption">To capture beauty, I added rich, saturated color.</div>
    </div>
<div class="image-container">
                          <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaIntro.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To capture brutality, I added outlines and noise (black spots) to make a gritty feel.</div>
</div>
<div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/PlayerCloseUp.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To make it feel alien, I added yellow highlights and purple shadows (avoiding the colors green and blue as much as possible).</div>
</div>

 Each "call and response" ability also creates wind impulses that affect trees, leaves, and grass.
</div>
</div>
</div>

<div id="mini-modal-systems" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Game AI Programming & Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('systems')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Part 1: Researching Common Behavior Patterns</h5>
<p>An overview of the seeking system (seen in mammals) [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7219919/]</p>
<ol><i>
                                1. SEEKING--Expectancy. Stimulating the nucleus accumbens and the lateral hypothalamus, areas associated with the SEEKING System, will generate an urge to seek, expect, investigate, and be motivated. Related to Dopamine.
                                <br>
                                2. FEAR--Anxiety. When the amygdala and periaqueductal gray (PAG) areas of the brain are stimulated, the “fight, flight, or freeze” reaction will quickly emerge.
                                <br>
                                3. RAGE--Anger. When the medial area of the amygdala is stimulated, the animal will propel themself forward to fend off the offensive object, and snarl or bite.
                                <br>
                                4. LUST--Sexual excitement. This primary emotion is generated in the amygdala and
                                hypothalamus.
                                <br>
                                5. CARE--Nurturance. When this system is aroused, an animal has strong impulses to tenderly take care of another.
                                <br>
                                6. PANIC/GRIEF--Sadness. This primary emotion is often triggered by separation distress.
                                <br>
                                7. PLAY--Social joy. Playful and light-hearted movements and laughter characterize this primary emotion.</i>
                            </ol>

<h5>Part 2: Abstracting Behavior into Gameplay</h5>
<p>In abstracting forms of universal gameplay, I determined two categories for action-oriented behavior (accessible to the player and NPCs):</p>
                        <table>
      <thead>
      <tr>
      <th><h3>Interaction</h3></th>
      <th><h3>Movement</h3></th>
      </tr>
      </thead>
      <tbody>

      <tr>
      <td>
      <i><li>Take: (consuming / destroying a resource)</li>
      <li>Give: (creating / sharing a resource)</li>
      <li>Aggression / Attack / Dominance:</li>
      <li>Submission / Mate / Care / Collaboration:</li></i>
      </td>
      <td>
      <i><li>Wait: (freeze, resting)</li>
      <li>Follow: (fight, searching for food, stalking)</li>
      <li>Leave: (flight, loss of interest, searching for safety)</li></i>
      </td>
      </tr>
      </tr>
      </tbody>
      </tfoot>
      </table>
    <p>These categories apply to all organisms and can be used in various combinations to achieve more complex behavior on an individual, community, and species level.</p>
                            <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaCircles.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna leads the way.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SquidDisappear.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna becomes translucent after using ink.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SpiderCrawl.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna runs and changes color.</div>


                            </div>
                            </div>

<br>
<h5>Part 3: Creating Emotional Beats by Combining Behaviors</h5>
<p>Combining behaviors can easily balloon scope.
                            I focused on the most player-centered interactions that
                            suggest intrinsic (emotional) rewards for the player. The natural world operates without us
                            watching. It’s especially important to optimize for what players notice.
                            These limits maintain performance and reduce the potential of obscure
                            systems that “feel unfair”. I believe the most exciting (and manageable)
                            emergent behavior occurs through interaction.
                            As such, I identified the focus of this gameplay as the
                            intersection of <i>independent</i> and <i>social behaviors</i>.</p>
                    <div class="table-wrapper">
                            <table>

      <thead>
      <tr>
      <th><h3 stlye="bold">Type of Behavior</h3></th>
      <th><h3>Effect on Donor</h3></th>
      <th><h3>Effect on Receiver</h3></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><h3>Egoistic</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Entitlement, manipulative</ul></td>
      <td><ul><h4>Decreases fitness</h4>Unhappy, angry, bitter</ul></td>
      </tr>
      <tr>
      <td><h3>Cooperative</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4> Gratitude, connection</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Connection</ul></td>
      </tr>
      <tr>
      <td><h3>Altruistic</h3></td>
      <td><ul><h4>Decreases fitness</h4>Connection, nurturing</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Gratitude, manipulative</ul></td>
      </tr>
      <tr>
      <td><h3>Revengeful</h3></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      </tr>
      </tbody>
      </tfoot>
      </table>
      </div>

      <p>This table provides a clear action-reaction framework for player and NPC behavior while maintaining flexibility (including relationships such as
      mutualism, parasitism, and predation).</p>
      </div>

  <h5>Part 4: Player Influence</h5>
   <p>To create a similar simple behavior structure for the player I reduced the interactions to 3 forms:</p>
   <table>
    <td><ul><h3>Aggressive</h3>Shout</ul></td>
    <td><ul><h3>Submissive</h3>Whisper</ul></td>
    <td><ul><h3>Neutral</h3>Ping</ul></td>

   </table>
<div class="mini-gallery">
 <div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/goo-pt1.webm"
                                    type="video/mp4"/>
                        </video>
                        <div class="caption">A tentacled creature responds to shouts and whispers.</div>
                        </div>
                              <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/MantaMessage.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">A flying creature responds.</div>
                        </div>
                        </div>
<br>
<h5>Part 5: Refinements</h5>
<p>Evolution of species through children with randomized traits
Community “memory” (some societal behavior is learned, some is genetic) Some species inherit automatic responses instinctually while others inherit it by learning.
                    </p>

<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-narrative" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Narrative Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('narrative')">&times;</span>
</div>
<div class="mini-modal-content">

<div class="mini-gallery">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
</div>
</div>
</div>

<div id="mini-modal-tech" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Technical Features</h3>
<span class="close-mini-modal" onclick="closeMiniModal('tech')">&times;</span>
</div>
<div class="mini-modal-content">
<p>Procedural caves, </p>
<p>Key technical implementations include:</p>
<ul>
<li>Custom HLSL shaders for interactive plant movement and bioluminescence</li>
<li>Procedural animation system for organic movement of foliage</li>
<li>Advanced particle systems for energy visualization</li>
<li>Custom C++ components for the ecological simulation backend</li>
<li>Optimized LOD system allowing for dense vegetation while maintaining performance</li>
</ul>
<div class="mini-gallery">

</div>
</div>
</div>
`,
    "modal-roboleon": `
<span class="close-modal" onclick="closeModal()">&times;</span>
<h2>Roboleon</h2>
<h3><strong>Solo Developer</strong> (Unreal Engine, C++, HLSL)</h3>
<h5>Timeframe: 6 weeks</h5>
  <h4>I wrote narrative and programmed a 3rd-person dark, comedic, narrative puzzle
     game about a robot alone in space (Unity's HDRP) — working on a team of 19 members.
     My goals were to integrate systems into gameplay and polish the UX of the save-load & UI systems.
     My primary technical contributions were design and implementation of UI, localization, save-load
     system, procedural obstacle generation, player movement, and cinematics.</h4>

<div style="display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;">
<iframe
                    src="https://player.vimeo.com/video/777125803?h=33fa2df818&autoplay=1&loop=1"
                        style="width:100%;
                        max-width: 760px;
                        aspect-ratio: 16 / 9;"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen></iframe>
   </div>
<h2>Read More</h2>
<div class="game-dev-bubbles">
  <div class="dev-bubble" data-section="gameplay">Game UX and Programming</div>
  <div class="dev-bubble" data-section="art">Tech Art</div>
  <div class="dev-bubble" data-section="systems">AI & Systems Design</div>
  <!--<div class="dev-bubble" data-section="narrative">Narrative</div>-->
  <!--<div class="dev-bubble" data-section="tech">Graphics Programming</div>-->
</div>

<div id="mini-modal-gameplay" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Gameplay UI</h3>
<span class="close-mini-modal" onclick="closeMiniModal('gameplay')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The central gameplay loop revolves around balancing extractive and symbiotic relationships with the environment.
The following mechanics are available to the player and slowly learned through environmental puzzles.</p>
                       <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation10.webp"
                             width="100%;">
                            <div class="caption">Echolocate.</div>
                            </div>

                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation11.webp"
                             width="100%;">
                            <div class="caption">Fly.</div>
                            </div>
                       </div>
   <table>
   <tbody>
       <thead>
      <tr>
      <th><h3 stlye="bold">Player Action</h3></th>
      <th><h3>Emotion</h3></th>
      <th><h3>Game Effects</h3></th>
      </tr>
      </thead>
   <tr>
      <td><ul><h3>Shout</h3></ul></td>
      <td><ul><h4>Aggressive</h4></ul></td>
      <td><ul><h4>Intimidate predators</h4>Destroy obstacles</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Whisper</h3></ul></td>
      <td><ul><h4>Submissive</h4></ul></td>
      <td><ul><h4>Slow down</h4>Connect with wildlife</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Ping</h3></ul></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Echolocate</h4>Query Relationship Status</ul></td>
      </tr>
      <tr>
      <td><h3>Power Off</h3></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Hide from predators</h4>Shelter during storms</ul></td>
      </tr>
      <tr>
      <td><h3>Flight</h3></td>
      <td><ul><h4>Powerful</h4></ul></td>
      <td><ul><h4>Navigate vertically</h4>follow airborn wildlife</ul></td>
      </tr>
      </tbody>
   </table>
<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-art" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Tech Art Direction</h3>
<span class="close-mini-modal" onclick="closeMiniModal('art')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The art direction of this project combines stylized volumetric shaders, Niagara particle systems, weather + time of day systems, and foliage interactions. The goal for the feel of this project is "beauty and brutality". Inspired by Moebius and Miyazaki, the volumetric shader combines a colorful physical based cell shader, textured shadows, black gritty outlines (day), and white outlines (night)</p>
<div class="mini-gallery">

</div>
<ul>
</ul>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FallingFog.webm"
                                    type="video/mp4"/>
                        </video>
    <div class="caption">To capture beauty, I added rich, saturated color.</div>
    </div>
<div class="image-container">
                          <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaIntro.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To capture brutality, I added outlines and noise (black spots) to make a gritty feel.</div>
</div>
<div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/PlayerCloseUp.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To make it feel alien, I added yellow highlights and purple shadows (avoiding the colors green and blue as much as possible).</div>
</div>

 Each "call and response" ability also creates wind impulses that affect trees, leaves, and grass.
</div>
</div>
</div>

<div id="mini-modal-systems" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Game AI Programming & Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('systems')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Part 1: Researching Common Behavior Patterns</h5>
<p>An overview of the seeking system (seen in mammals) [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7219919/]</p>
<ol><i>
                                1. SEEKING--Expectancy. Stimulating the nucleus accumbens and the lateral hypothalamus, areas associated with the SEEKING System, will generate an urge to seek, expect, investigate, and be motivated. Related to Dopamine.
                                <br>
                                2. FEAR--Anxiety. When the amygdala and periaqueductal gray (PAG) areas of the brain are stimulated, the “fight, flight, or freeze” reaction will quickly emerge.
                                <br>
                                3. RAGE--Anger. When the medial area of the amygdala is stimulated, the animal will propel themself forward to fend off the offensive object, and snarl or bite.
                                <br>
                                4. LUST--Sexual excitement. This primary emotion is generated in the amygdala and
                                hypothalamus.
                                <br>
                                5. CARE--Nurturance. When this system is aroused, an animal has strong impulses to tenderly take care of another.
                                <br>
                                6. PANIC/GRIEF--Sadness. This primary emotion is often triggered by separation distress.
                                <br>
                                7. PLAY--Social joy. Playful and light-hearted movements and laughter characterize this primary emotion.</i>
                            </ol>

<h5>Part 2: Abstracting Behavior into Gameplay</h5>
<p>In abstracting forms of universal gameplay, I determined two categories for action-oriented behavior (accessible to the player and NPCs):</p>
                        <table>
      <thead>
      <tr>
      <th><h3>Interaction</h3></th>
      <th><h3>Movement</h3></th>
      </tr>
      </thead>
      <tbody>

      <tr>
      <td>
      <i><li>Take: (consuming / destroying a resource)</li>
      <li>Give: (creating / sharing a resource)</li>
      <li>Aggression / Attack / Dominance:</li>
      <li>Submission / Mate / Care / Collaboration:</li></i>
      </td>
      <td>
      <i><li>Wait: (freeze, resting)</li>
      <li>Follow: (fight, searching for food, stalking)</li>
      <li>Leave: (flight, loss of interest, searching for safety)</li></i>
      </td>
      </tr>
      </tr>
      </tbody>
      </tfoot>
      </table>
    <p>These categories apply to all organisms and can be used in various combinations to achieve more complex behavior on an individual, community, and species level.</p>
                            <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaCircles.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna leads the way.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SquidDisappear.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna becomes translucent after using ink.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SpiderCrawl.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna runs and changes color.</div>


                            </div>
                            </div>

<br>
<h5>Part 3: Creating Emotional Beats by Combining Behaviors</h5>
<p>Combining behaviors can easily balloon scope.
                            I focused on the most player-centered interactions that
                            suggest intrinsic (emotional) rewards for the player. The natural world operates without us
                            watching. It’s especially important to optimize for what players notice.
                            These limits maintain performance and reduce the potential of obscure
                            systems that “feel unfair”. I believe the most exciting (and manageable)
                            emergent behavior occurs through interaction.
                            As such, I identified the focus of this gameplay as the
                            intersection of <i>independent</i> and <i>social behaviors</i>.</p>
                    <div class="table-wrapper">
                            <table>

      <thead>
      <tr>
      <th><h3 stlye="bold">Type of Behavior</h3></th>
      <th><h3>Effect on Donor</h3></th>
      <th><h3>Effect on Receiver</h3></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><h3>Egoistic</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Entitlement, manipulative</ul></td>
      <td><ul><h4>Decreases fitness</h4>Unhappy, angry, bitter</ul></td>
      </tr>
      <tr>
      <td><h3>Cooperative</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4> Gratitude, connection</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Connection</ul></td>
      </tr>
      <tr>
      <td><h3>Altruistic</h3></td>
      <td><ul><h4>Decreases fitness</h4>Connection, nurturing</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Gratitude, manipulative</ul></td>
      </tr>
      <tr>
      <td><h3>Revengeful</h3></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      </tr>
      </tbody>
      </tfoot>
      </table>
      </div>

      <p>This table provides a clear action-reaction framework for player and NPC behavior while maintaining flexibility (including relationships such as
      mutualism, parasitism, and predation).</p>
      </div>

  <h5>Part 4: Player Influence</h5>
   <p>To create a similar simple behavior structure for the player I reduced the interactions to 3 forms:</p>
   <table>
    <td><ul><h3>Aggressive</h3>Shout</ul></td>
    <td><ul><h3>Submissive</h3>Whisper</ul></td>
    <td><ul><h3>Neutral</h3>Ping</ul></td>

   </table>
<div class="mini-gallery">
 <div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/goo-pt1.webm"
                                    type="video/mp4"/>
                        </video>
                        <div class="caption">A tentacled creature responds to shouts and whispers.</div>
                        </div>
                              <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/MantaMessage.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">A flying creature responds.</div>
                        </div>
                        </div>
<br>
<h5>Part 5: Refinements</h5>
<p>Evolution of species through children with randomized traits
Community “memory” (some societal behavior is learned, some is genetic) Some species inherit automatic responses instinctually while others inherit it by learning.
                    </p>

<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-narrative" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Narrative Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('narrative')">&times;</span>
</div>
<div class="mini-modal-content">

<div class="mini-gallery">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
</div>
</div>
</div>

<div id="mini-modal-tech" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Technical Features</h3>
<span class="close-mini-modal" onclick="closeMiniModal('tech')">&times;</span>
</div>
<div class="mini-modal-content">
<p>Procedural caves, </p>
<p>Key technical implementations include:</p>
<ul>
<li>Custom HLSL shaders for interactive plant movement and bioluminescence</li>
<li>Procedural animation system for organic movement of foliage</li>
<li>Advanced particle systems for energy visualization</li>
<li>Custom C++ components for the ecological simulation backend</li>
<li>Optimized LOD system allowing for dense vegetation while maintaining performance</li>
</ul>
<div class="mini-gallery">

</div>
</div>
</div>
`,
    "modal-totally-accurate-warehouse-simulator": `
<span class="close-modal" onclick="closeModal()">&times;</span>
<h2>omnivOres Rule</h2>
<h3><strong>Solo Developer</strong> (Unreal Engine, C++, HLSL)</h3>
  <p>Explore mile-high jungles. Echolocate through storms. Embrace local cycles. Shift between extractive and symbiotic recharging mechanics, unraveling ecosystem-based puzzles.</p>

<div style="display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;">
                <iframe
                    src="https://www.youtube.com/embed/6yPzknO44BA?si=EBUdpLak_QmhwqVF"
                        style="width:100%;
                        max-width: 760px;
                        aspect-ratio: 16 / 9;"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen></iframe>
   </div>
<h2>Read More</h2>
<div class="game-dev-bubbles">
  <div class="dev-bubble" data-section="gameplay">Gameplay Design</div>
  <div class="dev-bubble" data-section="art">Tech Art</div>
  <div class="dev-bubble" data-section="systems">AI & Systems Design</div>
  <!--<div class="dev-bubble" data-section="narrative">Narrative</div>-->
  <!--<div class="dev-bubble" data-section="tech">Graphics Programming</div>-->
</div>

<div id="mini-modal-gameplay" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Core Gameplay</h3>
<span class="close-mini-modal" onclick="closeMiniModal('gameplay')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The central gameplay loop revolves around balancing extractive and symbiotic relationships with the environment.
The following mechanics are available to the player and slowly learned through environmental puzzles.</p>
                       <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/Echolocation.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Echolocate.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/GodMode.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fly.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FlyingShout.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Shout.</div>
                            </div>
                            </div>
   <table>
   <tbody>
       <thead>
      <tr>
      <th><h3 stlye="bold">Player Action</h3></th>
      <th><h3>Emotion</h3></th>
      <th><h3>Game Effects</h3></th>
      </tr>
      </thead>
   <tr>
      <td><ul><h3>Shout</h3></ul></td>
      <td><ul><h4>Aggressive</h4></ul></td>
      <td><ul><h4>Intimidate predators</h4>Destroy obstacles</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Whisper</h3></ul></td>
      <td><ul><h4>Submissive</h4></ul></td>
      <td><ul><h4>Slow down</h4>Connect with wildlife</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Ping</h3></ul></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Echolocate</h4>Query Relationship Status</ul></td>
      </tr>
      <tr>
      <td><h3>Power Off</h3></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Hide from predators</h4>Shelter during storms</ul></td>
      </tr>
      <tr>
      <td><h3>Flight</h3></td>
      <td><ul><h4>Powerful</h4></ul></td>
      <td><ul><h4>Navigate vertically</h4>follow airborn wildlife</ul></td>
      </tr>
      </tbody>
   </table>
<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-art" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Tech Art Direction</h3>
<span class="close-mini-modal" onclick="closeMiniModal('art')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The art direction of this project combines stylized volumetric shaders, Niagara particle systems, weather + time of day systems, and foliage interactions. The goal for the feel of this project is "beauty and brutality". Inspired by Moebius and Miyazaki, the volumetric shader combines a colorful physical based cell shader, textured shadows, black gritty outlines (day), and white outlines (night)</p>
<div class="mini-gallery">

</div>
<ul>
</ul>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FallingFog.webm"
                                    type="video/mp4"/>
                        </video>
    <div class="caption">To capture beauty, I added rich, saturated color.</div>
    </div>
<div class="image-container">
                          <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaIntro.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To capture brutality, I added outlines and noise (black spots) to make a gritty feel.</div>
</div>
<div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/PlayerCloseUp.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To make it feel alien, I added yellow highlights and purple shadows (avoiding the colors green and blue as much as possible).</div>
</div>

 Each "call and response" ability also creates wind impulses that affect trees, leaves, and grass.
</div>
</div>
</div>

<div id="mini-modal-systems" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Game AI Programming & Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('systems')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Part 1: Researching Common Behavior Patterns</h5>
<p>An overview of the seeking system (seen in mammals) [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7219919/]</p>
<ol><i>
                                1. SEEKING--Expectancy. Stimulating the nucleus accumbens and the lateral hypothalamus, areas associated with the SEEKING System, will generate an urge to seek, expect, investigate, and be motivated. Related to Dopamine.
                                <br>
                                2. FEAR--Anxiety. When the amygdala and periaqueductal gray (PAG) areas of the brain are stimulated, the “fight, flight, or freeze” reaction will quickly emerge.
                                <br>
                                3. RAGE--Anger. When the medial area of the amygdala is stimulated, the animal will propel themself forward to fend off the offensive object, and snarl or bite.
                                <br>
                                4. LUST--Sexual excitement. This primary emotion is generated in the amygdala and
                                hypothalamus.
                                <br>
                                5. CARE--Nurturance. When this system is aroused, an animal has strong impulses to tenderly take care of another.
                                <br>
                                6. PANIC/GRIEF--Sadness. This primary emotion is often triggered by separation distress.
                                <br>
                                7. PLAY--Social joy. Playful and light-hearted movements and laughter characterize this primary emotion.</i>
                            </ol>

<h5>Part 2: Abstracting Behavior into Gameplay</h5>
<p>In abstracting forms of universal gameplay, I determined two categories for action-oriented behavior (accessible to the player and NPCs):</p>
                        <table>
      <thead>
      <tr>
      <th><h3>Interaction</h3></th>
      <th><h3>Movement</h3></th>
      </tr>
      </thead>
      <tbody>

      <tr>
      <td>
      <i><li>Take: (consuming / destroying a resource)</li>
      <li>Give: (creating / sharing a resource)</li>
      <li>Aggression / Attack / Dominance:</li>
      <li>Submission / Mate / Care / Collaboration:</li></i>
      </td>
      <td>
      <i><li>Wait: (freeze, resting)</li>
      <li>Follow: (fight, searching for food, stalking)</li>
      <li>Leave: (flight, loss of interest, searching for safety)</li></i>
      </td>
      </tr>
      </tr>
      </tbody>
      </tfoot>
      </table>
    <p>These categories apply to all organisms and can be used in various combinations to achieve more complex behavior on an individual, community, and species level.</p>
                            <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaCircles.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna leads the way.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SquidDisappear.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna becomes translucent after using ink.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SpiderCrawl.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna runs and changes color.</div>


                            </div>
                            </div>

<br>
<h5>Part 3: Creating Emotional Beats by Combining Behaviors</h5>
<p>Combining behaviors can easily balloon scope.
                            I focused on the most player-centered interactions that
                            suggest intrinsic (emotional) rewards for the player. The natural world operates without us
                            watching. It’s especially important to optimize for what players notice.
                            These limits maintain performance and reduce the potential of obscure
                            systems that “feel unfair”. I believe the most exciting (and manageable)
                            emergent behavior occurs through interaction.
                            As such, I identified the focus of this gameplay as the
                            intersection of <i>independent</i> and <i>social behaviors</i>.</p>
                    <div class="table-wrapper">
                            <table>

      <thead>
      <tr>
      <th><h3 stlye="bold">Type of Behavior</h3></th>
      <th><h3>Effect on Donor</h3></th>
      <th><h3>Effect on Receiver</h3></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><h3>Egoistic</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Entitlement, manipulative</ul></td>
      <td><ul><h4>Decreases fitness</h4>Unhappy, angry, bitter</ul></td>
      </tr>
      <tr>
      <td><h3>Cooperative</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4> Gratitude, connection</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Connection</ul></td>
      </tr>
      <tr>
      <td><h3>Altruistic</h3></td>
      <td><ul><h4>Decreases fitness</h4>Connection, nurturing</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Gratitude, manipulative</ul></td>
      </tr>
      <tr>
      <td><h3>Revengeful</h3></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      </tr>
      </tbody>
      </tfoot>
      </table>
      </div>

      <p>This table provides a clear action-reaction framework for player and NPC behavior while maintaining flexibility (including relationships such as
      mutualism, parasitism, and predation).</p>
      </div>

  <h5>Part 4: Player Influence</h5>
   <p>To create a similar simple behavior structure for the player I reduced the interactions to 3 forms:</p>
   <table>
    <td><ul><h3>Aggressive</h3>Shout</ul></td>
    <td><ul><h3>Submissive</h3>Whisper</ul></td>
    <td><ul><h3>Neutral</h3>Ping</ul></td>

   </table>
<div class="mini-gallery">
 <div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/goo-pt1.webm"
                                    type="video/mp4"/>
                        </video>
                        <div class="caption">A tentacled creature responds to shouts and whispers.</div>
                        </div>
                              <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/MantaMessage.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">A flying creature responds.</div>
                        </div>
                        </div>
<br>
<h5>Part 5: Refinements</h5>
<p>Evolution of species through children with randomized traits
Community “memory” (some societal behavior is learned, some is genetic) Some species inherit automatic responses instinctually while others inherit it by learning.
                    </p>

<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-narrative" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Narrative Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('narrative')">&times;</span>
</div>
<div class="mini-modal-content">

<div class="mini-gallery">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
</div>
</div>
</div>

<div id="mini-modal-tech" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Technical Features</h3>
<span class="close-mini-modal" onclick="closeMiniModal('tech')">&times;</span>
</div>
<div class="mini-modal-content">
<p>Procedural caves, </p>
<p>Key technical implementations include:</p>
<ul>
<li>Custom HLSL shaders for interactive plant movement and bioluminescence</li>
<li>Procedural animation system for organic movement of foliage</li>
<li>Advanced particle systems for energy visualization</li>
<li>Custom C++ components for the ecological simulation backend</li>
<li>Optimized LOD system allowing for dense vegetation while maintaining performance</li>
</ul>
<div class="mini-gallery">

</div>
</div>
</div>
`,
    "modal-amazing-puppet-show": `
<span class="close-modal" onclick="closeModal()">&times;</span>
<h2>omnivOres Rule</h2>
<h3><strong>Solo Developer</strong> (Unreal Engine, C++, HLSL)</h3>
  <p>Explore mile-high jungles. Echolocate through storms. Embrace local cycles. Shift between extractive and symbiotic recharging mechanics, unraveling ecosystem-based puzzles.</p>

<div style="display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;">
                <iframe
                    src="https://www.youtube.com/embed/6yPzknO44BA?si=EBUdpLak_QmhwqVF"
                        style="width:100%;
                        max-width: 760px;
                        aspect-ratio: 16 / 9;"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen></iframe>
   </div>
<h2>Read More</h2>
<div class="game-dev-bubbles">
  <div class="dev-bubble" data-section="gameplay">Gameplay Design</div>
  <div class="dev-bubble" data-section="art">Tech Art</div>
  <div class="dev-bubble" data-section="systems">AI & Systems Design</div>
  <!--<div class="dev-bubble" data-section="narrative">Narrative</div>-->
  <!--<div class="dev-bubble" data-section="tech">Graphics Programming</div>-->
</div>

<div id="mini-modal-gameplay" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Core Gameplay</h3>
<span class="close-mini-modal" onclick="closeMiniModal('gameplay')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The central gameplay loop revolves around balancing extractive and symbiotic relationships with the environment.
The following mechanics are available to the player and slowly learned through environmental puzzles.</p>
                       <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/Echolocation.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Echolocate.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/GodMode.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fly.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FlyingShout.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Shout.</div>
                            </div>
                            </div>
   <table>
   <tbody>
       <thead>
      <tr>
      <th><h3 stlye="bold">Player Action</h3></th>
      <th><h3>Emotion</h3></th>
      <th><h3>Game Effects</h3></th>
      </tr>
      </thead>
   <tr>
      <td><ul><h3>Shout</h3></ul></td>
      <td><ul><h4>Aggressive</h4></ul></td>
      <td><ul><h4>Intimidate predators</h4>Destroy obstacles</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Whisper</h3></ul></td>
      <td><ul><h4>Submissive</h4></ul></td>
      <td><ul><h4>Slow down</h4>Connect with wildlife</ul></td>
      </tr>
      <tr>
      <td><ul><h3>Ping</h3></ul></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Echolocate</h4>Query Relationship Status</ul></td>
      </tr>
      <tr>
      <td><h3>Power Off</h3></td>
      <td><ul><h4>Neutral</h4></ul></td>
      <td><ul><h4>Hide from predators</h4>Shelter during storms</ul></td>
      </tr>
      <tr>
      <td><h3>Flight</h3></td>
      <td><ul><h4>Powerful</h4></ul></td>
      <td><ul><h4>Navigate vertically</h4>follow airborn wildlife</ul></td>
      </tr>
      </tbody>
   </table>
<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-art" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Tech Art Direction</h3>
<span class="close-mini-modal" onclick="closeMiniModal('art')">&times;</span>
</div>
<div class="mini-modal-content">
<p>The art direction of this project combines stylized volumetric shaders, Niagara particle systems, weather + time of day systems, and foliage interactions. The goal for the feel of this project is "beauty and brutality". Inspired by Moebius and Miyazaki, the volumetric shader combines a colorful physical based cell shader, textured shadows, black gritty outlines (day), and white outlines (night)</p>
<div class="mini-gallery">

</div>
<ul>
</ul>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/FallingFog.webm"
                                    type="video/mp4"/>
                        </video>
    <div class="caption">To capture beauty, I added rich, saturated color.</div>
    </div>
<div class="image-container">
                          <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaIntro.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To capture brutality, I added outlines and noise (black spots) to make a gritty feel.</div>
</div>
<div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/PlayerCloseUp.webm"
                                    type="video/mp4"/>
                        </video>
  <div class="caption">To make it feel alien, I added yellow highlights and purple shadows (avoiding the colors green and blue as much as possible).</div>
</div>

 Each "call and response" ability also creates wind impulses that affect trees, leaves, and grass.
</div>
</div>
</div>

<div id="mini-modal-systems" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Game AI Programming & Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('systems')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Part 1: Researching Common Behavior Patterns</h5>
<p>An overview of the seeking system (seen in mammals) [https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7219919/]</p>
<ol><i>
                                1. SEEKING--Expectancy. Stimulating the nucleus accumbens and the lateral hypothalamus, areas associated with the SEEKING System, will generate an urge to seek, expect, investigate, and be motivated. Related to Dopamine.
                                <br>
                                2. FEAR--Anxiety. When the amygdala and periaqueductal gray (PAG) areas of the brain are stimulated, the “fight, flight, or freeze” reaction will quickly emerge.
                                <br>
                                3. RAGE--Anger. When the medial area of the amygdala is stimulated, the animal will propel themself forward to fend off the offensive object, and snarl or bite.
                                <br>
                                4. LUST--Sexual excitement. This primary emotion is generated in the amygdala and
                                hypothalamus.
                                <br>
                                5. CARE--Nurturance. When this system is aroused, an animal has strong impulses to tenderly take care of another.
                                <br>
                                6. PANIC/GRIEF--Sadness. This primary emotion is often triggered by separation distress.
                                <br>
                                7. PLAY--Social joy. Playful and light-hearted movements and laughter characterize this primary emotion.</i>
                            </ol>

<h5>Part 2: Abstracting Behavior into Gameplay</h5>
<p>In abstracting forms of universal gameplay, I determined two categories for action-oriented behavior (accessible to the player and NPCs):</p>
                        <table>
      <thead>
      <tr>
      <th><h3>Interaction</h3></th>
      <th><h3>Movement</h3></th>
      </tr>
      </thead>
      <tbody>

      <tr>
      <td>
      <i><li>Take: (consuming / destroying a resource)</li>
      <li>Give: (creating / sharing a resource)</li>
      <li>Aggression / Attack / Dominance:</li>
      <li>Submission / Mate / Care / Collaboration:</li></i>
      </td>
      <td>
      <i><li>Wait: (freeze, resting)</li>
      <li>Follow: (fight, searching for food, stalking)</li>
      <li>Leave: (flight, loss of interest, searching for safety)</li></i>
      </td>
      </tr>
      </tr>
      </tbody>
      </tfoot>
      </table>
    <p>These categories apply to all organisms and can be used in various combinations to achieve more complex behavior on an individual, community, and species level.</p>
                            <div class="mini-gallery">
                            <div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/JerboaCircles.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna leads the way.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SquidDisappear.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna becomes translucent after using ink.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/SpiderCrawl.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fauna runs and changes color.</div>


                            </div>
                            </div>

<br>
<h5>Part 3: Creating Emotional Beats by Combining Behaviors</h5>
<p>Combining behaviors can easily balloon scope.
                            I focused on the most player-centered interactions that
                            suggest intrinsic (emotional) rewards for the player. The natural world operates without us
                            watching. It’s especially important to optimize for what players notice.
                            These limits maintain performance and reduce the potential of obscure
                            systems that “feel unfair”. I believe the most exciting (and manageable)
                            emergent behavior occurs through interaction.
                            As such, I identified the focus of this gameplay as the
                            intersection of <i>independent</i> and <i>social behaviors</i>.</p>
                    <div class="table-wrapper">
                            <table>

      <thead>
      <tr>
      <th><h3 stlye="bold">Type of Behavior</h3></th>
      <th><h3>Effect on Donor</h3></th>
      <th><h3>Effect on Receiver</h3></th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td><h3>Egoistic</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Entitlement, manipulative</ul></td>
      <td><ul><h4>Decreases fitness</h4>Unhappy, angry, bitter</ul></td>
      </tr>
      <tr>
      <td><h3>Cooperative</h3></td>
      <td><ul><h4>Neutral / Increases fitness</h4> Gratitude, connection</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Connection</ul></td>
      </tr>
      <tr>
      <td><h3>Altruistic</h3></td>
      <td><ul><h4>Decreases fitness</h4>Connection, nurturing</ul></td>
      <td><ul><h4>Neutral / Increases fitness</h4>Gratitude, manipulative</ul></td>
      </tr>
      <tr>
      <td><h3>Revengeful</h3></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      <td><ul><h4>Decreases fitness.</h4>Unhappy, angry</ul></td>
      </tr>
      </tbody>
      </tfoot>
      </table>
      </div>

      <p>This table provides a clear action-reaction framework for player and NPC behavior while maintaining flexibility (including relationships such as
      mutualism, parasitism, and predation).</p>
      </div>

  <h5>Part 4: Player Influence</h5>
   <p>To create a similar simple behavior structure for the player I reduced the interactions to 3 forms:</p>
   <table>
    <td><ul><h3>Aggressive</h3>Shout</ul></td>
    <td><ul><h3>Submissive</h3>Whisper</ul></td>
    <td><ul><h3>Neutral</h3>Ping</ul></td>

   </table>
<div class="mini-gallery">
 <div class="image-container">
                        <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/goo-pt1.webm"
                                    type="video/mp4"/>
                        </video>
                        <div class="caption">A tentacled creature responds to shouts and whispers.</div>
                        </div>
                              <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/MantaMessage.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">A flying creature responds.</div>
                        </div>
                        </div>
<br>
<h5>Part 5: Refinements</h5>
<p>Evolution of species through children with randomized traits
Community “memory” (some societal behavior is learned, some is genetic) Some species inherit automatic responses instinctually while others inherit it by learning.
                    </p>

<div class="mini-gallery">
</div>
</div>
</div>

<div id="mini-modal-narrative" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Narrative Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('narrative')">&times;</span>
</div>
<div class="mini-modal-content">

<div class="mini-gallery">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
<img src="/api/placeholder/200/150" alt="Narrative placeholder">
</div>
</div>
</div>

<div id="mini-modal-tech" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Technical Features</h3>
<span class="close-mini-modal" onclick="closeMiniModal('tech')">&times;</span>
</div>
<div class="mini-modal-content">
<p>Procedural caves, </p>
<p>Key technical implementations include:</p>
<ul>
<li>Custom HLSL shaders for interactive plant movement and bioluminescence</li>
<li>Procedural animation system for organic movement of foliage</li>
<li>Advanced particle systems for energy visualization</li>
<li>Custom C++ components for the ecological simulation backend</li>
<li>Optimized LOD system allowing for dense vegetation while maintaining performance</li>
</ul>
<div class="mini-gallery">

</div>
</div>
</div>
`,
    "modal-metawalker": `
<span class="close-modal" onclick="closeModal()">&times;</span>
  <h2>Trailer + Studio Update</h2>
  <h4 style="margin-top: -0.5rem; text-align: center; color: #aaa;">Timeframe: 5 months</h4>
  <p>I wrote character bios and chapters for the central storyline in a new action-RPG mobile game at <a style="color: #00b4cc" href= "https://nordicstonestudio.com">Nordic Stone Studios.</a></p>
  <p>Collect heroes and important people from the past to fight for the future. Set off on a quest to find an ancient Talisman before it can fall into the wrong hands!</p>
  <iframe width="100%" height="415" src="https://www.youtube.com/embed/vr-b1dk_OHs" title="YouTube video player" allow="accelerometer; &autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`,
    "modal-prey": `
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
</div>
`,
    "modal-scavengers": `
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
</div>
`,
    "modal-environment-ai-hackathon": `
<span class="close-modal" onclick="closeModal()">&times;</span>
  <h2>Environment Hackathon @AGI House</h2>
  <h3><strong>Hacker</strong></h3>
  <h4 style="margin-top: -0.5rem; text-align: center; color: #aaa;">Timeframe: 6 hours</h4>
<br>
  Won 2nd place crafting a UE plugin that makes landscape crafting faster using MasterpieceX🏔️ (bc us tech artists have had enough material node spaghetti graphs 🍝😆). </p>
  <div class="mini-gallery">
<div class="image-container">
  <img src="uploads/ConnorWall_Portfolio/Hackathons/Environment1.png" alt="Environment AI Hackathon Image 1" style="width: 100%; border-radius: 0.5rem;" />
</div>
<div class="image-container">
  <img src="uploads/ConnorWall_Portfolio/Hackathons/environment-green.png" alt="Environment AI Hackathon Image 1" style="width: 100%; border-radius: 0.5rem;" />
</div>
</div>
<a href="https://github.com/connortwall/MasterpieceX" target="_blank" class="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
</a>
 <h2 style="color: #00b4cc;" target="_blank" class="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition">
  <a href="https://github.com/connortwall/MasterpieceX" style="color: #00b4cc;"><i class="fab fa-github mr-2" style="color: #00b4cc;text-align: center;"></i> GitHub</a>
</h2>
`,
    "modal-ffu": `
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
</div>
`,
    "modal-quipu": `
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
</div>
`
    // Add more modal templates here as needed
};