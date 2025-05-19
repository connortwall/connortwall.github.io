// File: js/projectData.js
/**
 * Project data for modal content
 * Separated to make it easier to maintain
 */
let projectData = {
    "modal-omnivores-rule": `
<span class="close-modal" onclick="closeModal()">&times;</span>
<h2>omnivOres Rule</h2>
<h3><strong>Solo Developer</strong> (Unreal Engine, C++, HLSL)</h3>
<h5>Timeframe: 10 months</h5>
  <h4>My most recent solo dev project! Originally developed as a prototype from the <a style="color: #00b4cc" href="https://itch.io/jam/just-play-jam-climate/rate/2694711" >Climate Futures Game Jam</a>. Explore mile-high jungles. Echolocate through storms. Embrace local cycles. Shift between extractive and symbiotic recharging mechanics, unraveling ecosystem-based puzzles.</h4>

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
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;" class="zoomable-video" onclick="toggleMediaExpansion(this)">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/Echolocation.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Echolocate.</div>
                            </div>
                            <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;" class="zoomable-video" onclick="toggleMediaExpansion(this)">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Omnivores_Rule/GodMode.webm"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Fly.</div>
                            </div>
                            <div class="image-container">
                             <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;" class="zoomable-video" onclick="toggleMediaExpansion(this)">
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
<h3><strong>Game Programmer, Narrative Designer</strong> (Unity, C#)</h3>
<h5>Timeframe: 6 weeks</h5>
  <h4>I wrote narrative and programmed a 3rd-person dark, comedic, narrative puzzle
     game about a robot alone in space (Unity's HDRP) — working on a team of 19 members.
     My goals were to integrate systems into gameplay and polish the UX of the save-load & UI systems.
     My primary technical contributions were design and implementation of UI, localization, save-load
     system, procedural obstacle generation, player movement, and cinematics.</h4>


<div class="game-dev-bubbles">
  <a href="https://github.com/connortwall/Roboleon-Game"><div class="dev-bubble">View Code</div></a>
  <a href="https://dadiu.itch.io/roboleon"><div class="dev-bubble">Play Demo</div></a>
  <div class="dev-bubble" data-section="gameplay">Technical Details</div>
</div>

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
  <div class="dev-bubble" data-section="gameplay">Game UX & Programming</div>
  <div class="dev-bubble" data-section="save">Save & Load</div>
  <div class="dev-bubble" data-section="procedural">Procedural Obstacle Generation</div>
  <div class="dev-bubble" data-section="localization">Localization</div>
  <div class="dev-bubble" data-section="movement">Player Movement</div>
  <div class="dev-bubble" data-section="cinematics">Cinematics</div>
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
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Main Menu Documentation</div>
                            </div>

                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation11.webp"
                             width="100%;" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">In-Game UI Documentation</div>
                            </div>
                       </div>
  
</div>
</div>

<div id="mini-modal-save" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Save & Load System</h3>
<span class="close-mini-modal" onclick="closeMiniModal('art')">&times;</span>
</div>
<div class="mini-modal-content">
<p>I developed a Save - Load system with a manager and saveable interface.</p>

         <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation7.webp"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Save & Load Documentation</div>
                            </div>
                       </div>

 <h5>CODE SNIPPET - Save Load</h5>
 <p>The following code demonstrates the manager code used to save game data</p>
                         <div style="display: inline-flex;">
    <pre data-code-block data-modal-id="mini-modal-tech" data-language="csharp">

// This class keeps track of current state of game data, organizes save and load logic
public class SaveableManager : MonoBehaviour
{
    [Header("Debugging")]
    [SerializeField] private bool disableDataPersistence = false;
    private bool initializeDataIfNull = true;
    public bool printDebugs = false;

    private string fileName = "SaveData.json";
    private bool useEncryption = false;

    [Header("Auto Saving Configuration")] [SerializeField]
    private float autoSaveTimeSeconds = 60f;
    public bool enableAutoSave = false;

    [HideInInspector]
    private Coroutine autoSaveCoroutine;

    // need a data handler to save game
    [HideInInspector]
    private FileDataHandler dataHandler;
    // list of saveable objects
    [HideInInspector]
    private List<ISaveable> dataPersistenceObjects;
    [HideInInspector]
    private GameData gameData;
    [HideInInspector]
    private string selectedProfileId = null;
    private string defaultProfileName = "SavedGame";



    // only want one SaveableManager in scene (Singleton), can get instance publically but only modify it here
    public static SaveableManager instance { get; private set; }

    public void StartSM()
    {
        // if there is an instance of this class error
        if (instance != null)
        {
            printMsg("Found more than one Data Persistence Manager in the scene. Destroying the newest one.");
            Destroy(gameObject);
            return;
        }

        instance = this;
        //DontDestroyOnLoad(gameObject);

        if (disableDataPersistence) Debug.LogWarning("Data Persistence is currently disabled!");

        dataHandler = new FileDataHandler(Application.persistentDataPath, fileName, useEncryption);

        InitializeSelectedProfileId();
    }

    private void UpdateSM()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            printMsg("Saving Game ");
            SaveGame();
        }

        if (Input.GetKeyDown(KeyCode.L))
        {
            printMsg("Loading Game ");
            LoadGame();
        }

        if (Input.GetKeyDown(KeyCode.N))
        {
            printMsg("New Game ");
            NewGame();
        }

        if (Input.GetKeyDown(KeyCode.P)) printMsg(JsonUtility.ToJson(gameData));
    }

    private void OnEnable()
    {
        SceneManager.sceneLoaded += OnSceneLoaded;
    }

    private void OnDisable()
    {
        SceneManager.sceneLoaded -= OnSceneLoaded;
    }

    private void OnApplicationQuit()
    {
        //SaveGame();
    }

    public void OnSceneLoaded(Scene scene, LoadSceneMode mode)
    {
        dataPersistenceObjects = FindAllDataPersistenceObjects();
        //LoadGame();

        // start up the auto saving coroutine
        if (!enableAutoSave) return;
        if (autoSaveCoroutine != null) StopCoroutine(autoSaveCoroutine);
        autoSaveCoroutine = StartCoroutine(AutoSave());
    }

    public void ChangeSelectedProfileId(string newProfileId)
    {
        // update the profile to use for saving and loading
        selectedProfileId = newProfileId;
        // load the game, which will use that profile, updating our game data accordingly
        LoadGame();
    }

    public bool CanLoadGame(){
        // return if data persistence is disabled
        if (disableDataPersistence) return false;

        // load any saved data from a file using the data handler
        gameData = dataHandler.Load(selectedProfileId);

        // check if game data actually exits
        if (gameData != null) return true;
        else return false;
    }

    public void DeleteProfileData(string profileId)
    {
        // delete the data for this profile id
        dataHandler.Delete(profileId);
        // initialize the selected profile id
        InitializeSelectedProfileId();
        // reload the game so that our data matches the newly selected profile id
        LoadGame();
    }

    private void InitializeSelectedProfileId()
    {
        selectedProfileId = dataHandler.GetMostRecentlyUpdatedProfileId();
        if (string.IsNullOrWhiteSpace(selectedProfileId)){
            selectedProfileId = defaultProfileName;
        }
    }

    // create new GameData object
    public void NewGame()
    {
        gameData = new GameData();
    }

    // loads game by passing each object in the ISaveable interface and calling its LoadData function in its script from GameData
    public bool LoadGame()
    {
        // return if data persistence is disabled
        if (disableDataPersistence) return false;

        // load any saved data from a file using the data handler
        gameData = dataHandler.Load(selectedProfileId);

        // start a new game if the data is null and we're configured to initialize data for debugging purposes


        // if no data can be loaded, stop
        if (gameData == null){
            if (initializeDataIfNull){
                NewGame();
                printMsg("GameData was null; New Game created");
            }
            else {
                printMsg("Error loading:No data was found. A New Game needs to be started before data can be loaded.");
                return false;
            }
        }

        //update list of objects in the scene
        dataPersistenceObjects = FindAllDataPersistenceObjects();
        if (dataPersistenceObjects == null){
            printMsg("Error loading: there are no data persistence objects in scene");
            return false;
        }
        // push the loaded data to all other scripts that need it
        foreach (var dataPersistenceObj in dataPersistenceObjects)
        {
            dataPersistenceObj.LoadData(gameData);
        }

        printMsg("Loading game from disk completed.");
        return true;
    }


    // saves game by passing each object in the ISaveable interface and calling its SaveData function in its script
    // these scripts modify GameData object
    public void SaveGame()
    {
        // return right away if data persistence is disabled
        if (disableDataPersistence) return;

        // if we don't have any data to save, log a warning here
        if (gameData == null)
        {
            if (initializeDataIfNull){
                printMsg("No save data found, creating a new game");
                NewGame();
            }
            else {
                Debug.LogWarning("No data was found. A New Game needs to be started before data can be saved.");
                return;
            }
        }


        // load in new objects from scene to be saved
        dataPersistenceObjects = FindAllDataPersistenceObjects();
        gameData.savedGameManagerData.Clear();
        gameData.savedScrewPanelData.Clear();

        // pass the data to other scripts so they can update it
        foreach (var dataPersistenceObj in dataPersistenceObjects)
        {
            dataPersistenceObj.SaveData(gameData);
        }

        //printMsg("Game Saved");

        // timestamp the data so we know when it was last saved
        gameData.lastUpdated = DateTime.Now.ToBinary();

        // save that data to a file using data handler
        dataHandler.Save(gameData, selectedProfileId);
    }


    private List<ISaveable> FindAllDataPersistenceObjects()
    {
        // FindObjectsofType takes in an optional boolean to include inactive gameobjects
        // must extend from monobehavior to function to search completely for all objects in IEnumerable
        var dataPersistenceObjects = FindObjectsOfType<MonoBehaviour>(true)
            .OfType<ISaveable>();

        return new List<ISaveable>(dataPersistenceObjects);
    }

    public bool HasGameData()
    {
        return gameData != null;
    }

    public Dictionary<string, GameData> GetAllProfilesGameData()
    {
        return dataHandler.LoadAllProfiles();
    }

    private IEnumerator AutoSave()
    {
        while (true)
        {
            yield return new WaitForSeconds(autoSaveTimeSeconds);
            SaveGame();
            printMsg("Auto Saved Game");
        }
    }

    public void printMsg(string msg){
        if (!printDebugs) return;
        Debug.Log(msg);
    }
}</pre>
        </div>
</div>
</div>

<div id="mini-modal-procedural" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Procedural Obstacle Generation</h3>
<span class="close-mini-modal" onclick="closeMiniModal('procedural')">&times;</span>
</div>
<div class="mini-modal-content">
<p>I developed a procedural object spawner using Poisson Disk Sampling.</p>

         <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation8.webp"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Obstacle Generation Documentation</div>
                            </div>
                           <!-- <div class="image-container">
                                   <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;" class="zoomable-video" onclick="toggleMediaExpansion(this)">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/gifs/GG_puttingOutFire.mp4"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Procedurally placed fires.</div>-->
                            </div>
                            
                       

 <h5>CODE SNIPPET - Procedural Fire Spawning</h5>
 <p>The following code demonstrates the algorithm used to spawn game objects in the game
                                scene.</p>
                         <div style="display: inline-flex;">
    <pre data-code-block data-modal-id="mini-modal-tech" data-language="csharp">


public class FireSpawner : MonoBehaviour
{

    [Header("Fire Prefabs to use")]
    public List<GameObject> firePrefabs;
    [Header("Tuning")]
    public Vector2 zone = Vector2.one;
    public float spaceBetweenFires = 1;
    public float prefabScale = 1;
    private int k = 2;
    private List<Vector2> samples;

    public List<GameObject> StartFire()
    {
        List<GameObject> fireObjects = new List<GameObject>();
        samples = Poisson.GeneratePoint(spaceBetweenFires, zone, k);
        if(samples != null)
        {
            int index;
            foreach(Vector2 sample in samples)
            {

                //instantiate fire
                index = Random.Range(0, firePrefabs.Count);
                GameObject fire = Instantiate(firePrefabs[index], new Vector3(sample.x, 0, sample.y)+transform.position, Quaternion.identity)as GameObject;
                Assert.IsNotNull(fire.GetComponent<FireObject>());
                fire.transform.Rotate(0, Random.Range(0, 360), 0);
                fire.transform.localScale = Vector3.one * prefabScale;
                //add fire to fire list
                fireObjects.Add(fire);
            }
        }
        // if by chance no fires are added to the scene in each sample (i.e count = 0) spawn a fire in the middle of the hub
        if (fireObjects.Count <= 0)
        {
            // instantiate fire in middle of fire spawner zone
            GameObject fire = Instantiate(firePrefabs[0], new Vector3(zone.x/2, 0, zone.y/2)+transform.position, Quaternion.identity)as GameObject;
            fireObjects.Add(fire);
        }

        if (fireObjects.Count > 0) return fireObjects;
        else return null;
    }

    private void OnDrawGizmos()
    {
        Gizmos.color = Color.yellow;
        Gizmos.DrawWireCube((new Vector3(zone.x, 0, zone.y) / 2)+transform.position, new Vector3(zone.x, 0, zone.y));

    }

}
                        </pre>
                        </div>
                            <p>The following code is part of procedural algortihm itself:</p>
                            <div>
                            <pre class="prettyprint lang-csharp">

    public static List<Vector2> GeneratePoint(float radius, Vector2 grid_size, int numSamplesBeforeRejection  = 30)
    {
        // find the size of a cell's square
        float cell_size = radius / Mathf.Sqrt(2);

        // number of times the cell size fits into sample region size, for each cell
        // grid will tell us for each cell, what the index is of each point, (0 means no point, 1 has index 0)
        // to get the number of columns divide the width / cell_size and rows
        int[,] grid = new int[Mathf.CeilToInt(grid_size.x / cell_size), Mathf.CeilToInt(grid_size.y / cell_size)];

        // create new vectors of sample candidate points
        List<Vector2> samples = new List<Vector2>();
        List<Vector2> spawn_samples = new List<Vector2>();

        // create spawn point list
        spawn_samples.Add(grid_size / 2);
        // while spawn point list is not empty
        while (spawn_samples.Count > 0)
        {
            int index = Random.Range(0, spawn_samples.Count);
            Vector2 current_spawn_sample = spawn_samples[index];
            bool rejected_sample = true;
            for (int i = 0; i < numSamplesBeforeRejection; i++)
            {
                // angle of candidate point
                float angle_offset = Random.value * Mathf.PI * 2;
                //rotate a vector at a given angle
                float x = Mathf.Sin(angle_offset);
                float y = Mathf.Cos(angle_offset);

                Vector2 offset_direction = new Vector2(x, y);

                // new magnitude
                // radius is min so that candidate is spawned outside spawn center
                float new_magnitude = Random.Range(radius, 2 * radius);
                offset_direction *= new_magnitude;

                // assign info to sample
                Vector2 sample = current_spawn_sample + offset_direction;
                if (is_valid(samples, grid, sample, grid_size, radius, cell_size))
                {
                    // add sample to point list
                    samples.Add(sample);
                    // add sample as new spawn point
                    spawn_samples.Add(sample);
                    // record which cell the sample point ends up in
                    grid[(int)(sample.x / cell_size), (int)(sample.y / cell_size)] = samples.Count;
                    rejected_sample = false;
                    break;
                }
            }

            // if not accepted remove from spawn point list
            if (rejected_sample)
            {
                spawn_samples.RemoveAt(index);
            }
        }
        return samples;
    }</pre>
        </div>
</div>
</div>

<div id="mini-modal-localization" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Procedural Obstacle Generation</h3>
<span class="close-mini-modal" onclick="closeMiniModal('localization')">&times;</span>
</div>
<div class="mini-modal-content">
<p>I developed a translation manager using Unity's built-in localization  system.</p>

         <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation9.webp"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Localization Documentation</div>
                            </div>
                            </div>
                            
</div>
</div>

<div id="mini-modal-movement" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Player Movement</h3>
<span class="close-mini-modal" onclick="closeMiniModal('movement')">&times;</span>
</div>
<div class="mini-modal-content">
<p>I developed a physics-based movement system.</p>

         <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation5.webp"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Player Movement Documentation</div>
                            </div>
                            </div>
</div>
</div>

<div id="mini-modal-cinematics" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Player Movement</h3>
<span class="close-mini-modal" onclick="closeMiniModal('cinematics')">&times;</span>
</div>
<div class="mini-modal-content">
<p>I developed a camera manager for game designers to create cutscenes.</p>

         <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Roboleon/technicaldocument/DADIU_2022_Team3_TechnicalDesignPresentation12.webp"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Cinematics Documentation</div>
                            </div>
                            </div>
</div>
</div>
`,
    "modal-totally-accurate-warehouse-simulator": `
<span class="close-modal" onclick="closeModal()">&times;</span>
<h2>Totally Accurate Warehouse Simulator</h2>
<h3><strong>Game Programmer</strong> (Unity, C#)</h3>
<h5>Timeframe: 1 week</h5>
  <h4>I programmed <b>rigid  body movement</b>, <b>procedural content</b>, <b>UI</b>, and <b>localization</b>
                            systems for a 3rd-person order delivery game in Unity's HDRP — working on a team of 19 members.</h4>


<div class="game-dev-bubbles">
  <a href="https://github.com/connortwall/Totally-Accurate-Warehouse-Simulator-Game"><div class="dev-bubble">View Code</div></a>
  <a href="hhttps://connortwall.itch.io/race-delivery-game"><div class="dev-bubble">Play Demo</div></a>
  <div class="dev-bubble" data-section="gameplay">Technical Details</div>
</div>

<div style="display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;">
<iframe
                    src="https://www.youtube.com/embed/L9dLvSPTLko? &autoplay=1"
                        style="width:100%;
                        max-width: 760px;
                        aspect-ratio: 16 / 9;"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen></iframe>
   </div>
<h2>Read More</h2>
<div class="game-dev-bubbles">
  <div class="dev-bubble" data-section="gameplay">Gameplay Programming</div>
  <div class="dev-bubble" data-section="procedural">Procedural Obstacle Generation</div>
   <div class="dev-bubble" data-section="movement">Physics-Based Movement System</div>
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
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/gameplayGif.gif"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Gameplay</div>
                            </div>

                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/2.svg"
                             width="100%;" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Game Summary pt1</div>
                            </div>
                            
                                  <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/3.png"
                             width="100%;" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Game Summary pt2</div>
                            </div>
                            
                                  <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/4.svg"
                             width="100%;" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Game Summary pt3</div>
                            </div>
                       </div>
  
</div>
</div>


<div id="mini-modal-procedural" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Procedural Obstacle Generation</h3>
<span class="close-mini-modal" onclick="closeMiniModal('procedural')">&times;</span>
</div>
<div class="mini-modal-content">
<p><li>I developed a procedural object spawner using Poisson Disk Sampling.</li>
                        <li>The following code demonstrates the algorithm used to spawn game objects in the game scene.</li>
                        <li>A Poisson disk sampling algorithm populates a list of spawn points using editor parameters such as density and is created and used to add
                            randomness into fast-paced gameplay</li>
                        <li>This is repeated for each new type of spawned item. </li></p>

       
                                        

 <h5>CODE SNIPPET - Poisson Disk Sampling Algorithm</h5>
  <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/5.png"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Obstacle Generation Documentation</div>
                            </div>
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/6.svg"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Obstacle Generation Documentation</div>
                            </div>
                        
                            </div>
 <p>The following code demonstrates the algorithm used to spawn game objects in the game
                                scene.</p>
                         <div style="display: inline-flex;">
    <pre data-code-block data-modal-id="mini-modal-tech" data-language="csharp">

public static class PoissonProceduralObstacleGeneration
{
    static bool is_valid(List<Vector2> samples, int[,] grid, Vector2 sample, Vector2 sample_zone,float radius, float cell_size)
    {
        // candidate sample vector must be within sample region/zone
        if(sample.x < sample_zone.x && sample.x >= 0 && sample.y < sample_zone.y && sample.y >= 0)
        {
            // find out which cell the candidate is in, and search surround cells
            int x = (int)(sample.x / cell_size);
            int y = (int)(sample.y / cell_size);
            //start two cells to the left and end two cells to the right
            int offset_x = Mathf.Max(0, x - 2);
            int out_x = Mathf.Min(x + 2, grid.GetLength(0) - 1);
            int offset_y = Mathf.Max(0, y - 2);
            int out_y = Mathf.Min(y + 2, grid.GetLength(1) - 1);

            for (int i = offset_x; i < out_x; i++)
            {
                for (int j = offset_y; j < out_y; j++)
                {
                    // get sample point's index
                    int s_index = grid[i, j] - 1;
                    // if there is no point in the cell
                    if(s_index != -1)
                    {
                        // get distance between point at index and candidate point (using sqrMagnitude bc its cheaper on system to get than mag)
                        float dist = (sample - samples[s_index]).sqrMagnitude;
                        // if radius is too close to the point reject point
                        if(dist < radius*radius)
                        {
                            return false;
                        }
                    }
                }
            }
            // is valid
            return true;
        }
        // not valid
        return false;
    }
    public static List<Vector2> GeneratePoint(float radius, Vector2 grid_size, int numSamplesBeforeRejection  = 30)
    {
        // find the size of a cell's square
        float cell_size = radius / Mathf.Sqrt(2);

        // number of times the cell size fits into sample region size, for each cell
        // grid will tell us for each cell, what the index is of each point, (0 means no point, 1 has index 0)
        // to get the number of columns divide the width / cell_size and rows
        int[,] grid = new int[Mathf.CeilToInt(grid_size.x / cell_size), Mathf.CeilToInt(grid_size.y / cell_size)];

        // create new vectors of sample candidate points
        List<Vector2> samples = new List<Vector2>();
        List<Vector2> spawn_samples = new List<Vector2>();

        // create spawn point list
        spawn_samples.Add(grid_size / 2);
        // while spawn point list is not empty
        while (spawn_samples.Count > 0)
        {
            int index = Random.Range(0, spawn_samples.Count);
            Vector2 current_spawn_sample = spawn_samples[index];
            bool rejected_sample = true;
            for (int i = 0; i < numSamplesBeforeRejection; i++)
            {
                // angle of candidate point
                float angle_offset = Random.value * Mathf.PI * 2;
                //rotate a vector at a given angle
                float x = Mathf.Sin(angle_offset);
                float y = Mathf.Cos(angle_offset);

                Vector2 offset_direction = new Vector2(x, y);

                // new magnitude
                // radius is min so that candidate is spawned outside spawn center
                float new_magnitude = Random.Range(radius, 2 * radius);
                offset_direction *= new_magnitude;

                // assign info to sample
                Vector2 sample = current_spawn_sample + offset_direction;
                if (is_valid(samples, grid, sample, grid_size, radius, cell_size))
                {
                    // add sample to point list
                    samples.Add(sample);
                    // add sample as new spawn point
                    spawn_samples.Add(sample);
                    // record which cell the sample point ends up in
                    grid[(int)(sample.x / cell_size), (int)(sample.y / cell_size)] = samples.Count;
                    rejected_sample = false;
                    break;
                }
            }

            // if not accepted remove from spawn point list
            if (rejected_sample)
            {
                spawn_samples.RemoveAt(index);
            }
        }
        return samples;
    }

}
                                </pre>
                        </div>

 <h5>CODE SNIPPET - Procedural Object Spawning Manager</h5>
<div>
                                <pre class="prettyprint lang-csharp">public class ProceduralObjectManager : MonoBehaviour
{
    private List<Vector2> samples;
    public List<GameObject> obstacles;

    public Vector2 zone= Vector2.one;
    public float sparcity = 1;
    private int k = 2;
    public float scale = 1;

    private void Start()
    {
        samples = Poisson.GeneratePoint(sparcity, zone, k);
        if(samples != null)
        {
            foreach(Vector2 sample in samples)
            {

                int index = Random.Range(0, obstacles.Count);
                GameObject obstacle = Instantiate(obstacles[index], new Vector3(sample.x, 0, sample.y)+transform.position, Quaternion.identity)as GameObject;
                obstacle.transform.Rotate(0, Random.Range(0, 360), 0);
                obstacle.transform.localScale = Vector3.one * scale;
            }
        }
    }
    private void OnDrawGizmos()
    {
        Gizmos.color = Color.yellow;
        Gizmos.DrawWireCube((new Vector3(zone.x, 0, zone.y) / 2)+transform.position, new Vector3(zone.x, 0, zone.y));

    }

}


</pre>
</div>

</div>

</div>

<div id="mini-modal-movement" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Player Movement System</h3>
<span class="close-mini-modal" onclick="closeMiniModal('movement')">&times;</span>
</div>
<div class="mini-modal-content">
<p>I developed a physics-based movement system.</p>

         <div class="mini-gallery">
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/MGP2%20Technical%20Design%20Presentation.png"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Player Movement Documentation pt1</div>
                            </div>
                            <div class="image-container">
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Warehouse_Simulator/MGP2%20Technical%20Design%20Presentation2.png"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Player Movement Documentation pt2</div>
                            </div>
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
<h2>Quipu</h2>
<h3><strong>Solo Developer</strong> (Unreal Engine, C++, Unity, C#)</h3>
<h5>Timeframe: 3 months (Unity) + 2 months (Unreal 5.2)</h5>
  <h4>I solo developed a 3rd-person souls-like combat, stylized, action RPG game in
                    <b>Unity</b> and <b>Unity Version Control</b> using Unity asset store assets.
                    My goal was to learn Unreal Engine while restructuring the project, integrating Metahumans, environment foliage, and
                    Niagara effects into the UI and overall game.</h4>
                    <h4>
                <b>Primary features include:</b>
                <li>Modular weapon combat (staggering, stat-based blocking, stamina-based parries)</li>
                <li>Responsive item inventory</li>
                <li>Enemies</li>
                <li>Player + Enemy stats</li>
                <li>Consumables</li>
                <li>UI</li>
                <li>Enemy Combat + Detection AI</li>
                <li>Level event triggers</li>
                <li>(and more)...</li></h4>
<div class="game-dev-bubbles">
  <a href="https://github.com/connortwall/Personal-RPG-Project/tree/main/Assets/Scripts"><div class="dev-bubble">Early GitHub (Unity)</div></a>
  <a href="https://github.com/connortwall/Personal-RPG-Project-Unreal/tree/main/Source/OpenWorldRPG"><div class="dev-bubble">Early GitHub (Unreal)</div></a>
  <div class="dev-bubble" data-section="unreal">Technical Details</div>
</div>
<div style="display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;">
                <iframe
                    src="https://youtu.be/vceRLDM8p0w?si=_rI8LnaOUAoRCcSo"
                        style="width:100%;
                        max-width: 760px;
                        aspect-ratio: 16 / 9;"
                        title="YouTube video player"
                        frameborder="0"
                        allowfullscreen></iframe>
   </div>
<h2>Read More</h2>
<div class="game-dev-bubbles">

  <div class="dev-bubble" data-section="narrative">Narrative</div>
    <div class="dev-bubble" data-section="unity">Unity Programming</div>
     <div class="dev-bubble" data-section="unreal">Unreal Programming</div>
</div>

<div id="mini-modal-narrative" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Screenplays & Narrative Design</h3>
<span class="close-mini-modal" onclick="closeMiniModal('narrative')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Narrative Vision</h5>
 <p>I wrote a film screenplay following an orphaned free diver living in a technocracy. 
 First part of an <b>Indigenous-futuristic</b> immersive action story based in pre-colonial, pre-Incan Peru. 
 The purpose of this piece is to explore imaginative realism -especially with South American, Andean Indigenous culture and technology.
 What if the secrets Quipus held were retained and not destroyed?</p>
                                  <h5><iframe src="uploads/ConnorWall_Portfolio/Written_Work/Quipu/VisionPitch.pdf"
                                               width="60%" height="600px"></iframe>  </h5>
                    
                            
  <h5>Film Screenplay</h5> 
  <p>I developed 12-page screenplay in a writers workshop over 4 weeks. </p>
                
                        <h5><iframe src="uploads/ConnorWall_Portfolio/Written_Work/Quipu/Quipu-Screenplay-ConnorWall-FinalwithNote.pdf"
                                               width="60%" height="600px"></iframe></h5>

 <h5>Comic Screenplay</h5> 
 <p>I wrote, storyboarded, sketched, and colored a comic book screenplay adaptation following an orphaned free diver living in a technocracy. 
 First part of an indigenous-futuristic immersive action story based in pre-colonial, pre-Incan Peru.</p>
<h5><iframe src="uploads/ConnorWall_Portfolio/Written_Work/Quipu/Quipu-ComicScript-ConnorWall-Final.pdf"
                                               width="60%" height="600px"></iframe></h5>
                        

 <h5>Early Storyboard</h5> 
<h5><iframe src="uploads/ConnorWall_Portfolio/Written_Work/Quipu/Connor%20Wall%20Storyboard.pdf"
                                              width="60%" height="600px"></iframe></h5>

 <h5>Personal Reflections</h5>             
<h5><iframe src="uploads/ConnorWall_Portfolio/Written_Work/Quipu/Writing_Reflections.pdf"
                                               width="60%" height="600px"></iframe></h5>

</div>
</div>
<div id="mini-modal-unreal" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Early Unreal Programming</h3>
<span class="close-mini-modal" onclick="closeMiniModal('unreal')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Environment</h5>
<p>I developed a breakable object system where the meshes of "BreakableActors" explode in the direction they are hit with an impact sound. 
I used Unreal Engine's Chaos Module for the randomized break behavior in the meshes. Note the breakable object spawns a collectible treasure item on destruction.</p>
                       <div class="mini-gallery">
                            <div class="image-container">
                       
                            <img src="uploads/ConnorWall_Portfolio/Game_Design/Personal_RPG/Unreal/Gifs/breakableactor.gif"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Player breaks a vase into Chaos-simulated pieces.</div>
                            </div>
                                <!--<p>The following code demonstrates how a breakable actor is set up with necessary geometry
                            components on specific collision layers, a random treasure object spawns from the break
                            site, and the BreakableActor's mesh disappears after breaking. </p>
                            <div>// Sets default values
ABreakableActor::ABreakableActor()
{
 \t// Set this actor to call Tick() every frame.  Can turn this off to improve performance if necessary it.
\tPrimaryActorTick.bCanEverTick = false;

\tGeometryCollection = CreateDefaultSubobject<UGeometryCollectionComponent>(TEXT("Geometry Component"));
\tSetRootComponent(GeometryCollection);
\tGeometryCollection->SetGenerateOverlapEvents(true);
\tGeometryCollection->SetCollisionResponseToChannel(ECollisionChannel::ECC_Camera, ECR_Ignore);
\tGeometryCollection->SetCollisionResponseToChannel(ECollisionChannel::ECC_Pawn, ECR_Ignore);

\tCapsule = CreateDefaultSubobject<UCapsuleComponent>(TEXT("Capsule"));
\tCapsule->SetupAttachment(GetRootComponent());
\tCapsule->SetCollisionResponseToChannel(ECollisionChannel::ECC_Camera, ECR_Ignore);
\tCapsule->SetCollisionResponseToChannel(ECollisionChannel::ECC_Pawn, ECR_Block);

}

// Called when the game starts or when spawned
void ABreakableActor::BeginPlay()
{
\tSuper::BeginPlay();

\tGeometryCollection->OnChaosBreakEvent.AddDynamic(this, &ABreakableActor::OnBreak);
}

// Called every frame
void ABreakableActor::Tick(float DeltaTime)
{
\tSuper::Tick(DeltaTime);

}

void ABreakableActor::GetHit_Implementation(const FVector& ImpactPoint, AActor* Hitter)
{
\tif(bBroken) return;
\tbBroken = true;
\tUWorld* World = GetWorld();

\tif(World && TreasureClasses.Num() > 0)
\t{
\t\tFVector Location = GetActorLocation();
\t\tLocation.Z += 75.f;
\t\tint32 Selection = FMath::RandRange(0, TreasureClasses.Num() - 1);
\t\tWorld->SpawnActor<ATreasure>(TreasureClasses[0], Location, GetActorRotation());
\t}


}

void ABreakableActor::OnBreak(const FChaosBreakEvent& BreakEvent)
{
\tthis->SetLifeSpan(5.f);
\tCapsule->SetCollisionResponseToChannel(ECC_Pawn, ECR_Ignore);
}
                        </div>
                            -->
                            <!--<p>The following code demonstrates the code used in the header file for BreakableActor.cpp </p>-->
                            </div>
                            
  <h5>Characters</h5> 
  <p>I developed a modular character system that uses animation instance states, montages, and
                        EnhancedInput. The player can get hit and respond with an animation from the corresponding direction.
                        Enemies may equip a sword, shield, none, or both to hand sockets in their skeletons and adjust animations accordingly.</p>
                        <li>When hit, the character reacts with a directional animation corresponding to the hit
                            direction along with hit particles and a hit sound.
                        </li>
                        <li>Characters also have random death montages that link to dead poses and randomized attack
                            montages that use translation-rotation-warp to targets.
                        </li>
                        <li>Characters have weapon hit boxes that may collide with other objects or characters.</li>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;" class="zoomable-video" onclick="toggleMediaExpansion(this)">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Personal_RPG/Unreal/Gifs/directionalhit-motionwarp.mp4"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Enemies attack player wherever player is mid-animation.</div>
                            </div>
</div>

 <h5>Heads Up Display (HUD)</h5> 
 <p>I developed an heads-up display that shows player health, enemy health bars above their heads, and pick up prompts. 
 Note Niagara systems for weapon trail, blood splatter, items, and soul that spawns on character death.
 The following code demonstrates the setup of a character actor with attributes (health,
                            stamina, exp).</p>
                        
                        <li>A game hud is set up using the players attributes (health, stamina, gold, exp).</li>
                        <li>Currently, the player moves using keyboard directional movement, a mouse to look, space to
                            jump, 'E' to interact, and clicking to attack.
                        </li>
                        <li>Interacting with a weapon causes it to be placed on the players back and can ten be
                            unsheathed or sheathed for combat.
                        </li>
                        <li>Finally, the enemy may die when health is 0.</li>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;" class="zoomable-video" onclick="toggleMediaExpansion(this)">
                                <source src="uploads/ConnorWall_Portfolio/Game_Design/Personal_RPG/Unreal/Gifs/enemy-death.mp4"
                                        type="video/mp4"/>
                            </video>
                            <div class="caption">Enemy staggers in direction hit, dies, and enters a new animation state.</div>
                            </div>
</div>

 <h5>Enemy AI</h5> 
 <p>I improved the enemy AI combat system with several states to motion warp and have clearer attack
                        radius checks. Enemies can also have attack frequency modified in editor (AttackTimer).</p>
                        <li>Patrolling State: enemies patrol along a list of specified targets in-level, unaware of
                        player.
                    </li>
                    <li>Chase State: enemies notice player based on line-of-sight and hearing, or player attack, then
                        chase player.
                    </li>
                    <li>Attack State: enemy attacks player.</li>
                    <li>Dead State: enemy lost all health and soon disappears from level.</li>
<div class="mini-gallery">
<div class="image-container">
                             <img src="uploads/ConnorWall_Portfolio/Game_Design/Personal_RPG/Unreal/Gifs/enemypursuit.gif"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Two enemies: pursuit radii small & large. Chasing player when close, walking when far.</div>
                            </div>
</div>

 <h5>Items</h5> 
 <p>I developed the item system so that collectible items float in air before being collected.
                        Here a sword weapon is picked up and automatically equipped, then sheathed and unsheathed.</p>
                 
<div class="mini-gallery">
<div class="image-container">
                             <img src="uploads/ConnorWall_Portfolio/Game_Design/Personal_RPG/Unreal/Gifs/equip-sword.gif"
                             width="100%" class="zoomable-image" onclick="toggleMediaExpansion(this)">
                            <div class="caption">Two enemies: pursuit radii (small & large). Chase player when close, walk when far.</div>
                            </div>
</div>

</div>
</div>

<div id="mini-modal-unity" class="mini-modal">
<div class="mini-modal-header">
<h3 class="mini-modal-title">Early Unity Programming</h3>
<span class="close-mini-modal" onclick="closeMiniModal('unity')">&times;</span>
</div>
<div class="mini-modal-content">
<h5>Gameplay Demo 1:</h5> 
\t\t\t\t\t<li>Unity store assets</li>
\t\t\t\t\t<li>Player 8 directional movement + sprint</li>
\t\t\t\t\t<li>Basic + combo attack</li>
\t\t\t\t\t<li>Block, blocked + unblocked enemy attack</li>
\t\t\t\t\t<li>Poison build up + damage.</li><div class="mini-gallery">

</div>
<ul>
</ul>
<div class="mini-gallery">
<div class="image-container">
                            <video autoplay muted loop style="\tmax-width: 100%; max-height: 100%;">
                            <source src="uploads/ConnorWall_Portfolio/Game_Design/Personal_RPG/Unity/Videos/UnityRPGVideo1.mp4"
                                    type="video/mp4"/>
                        </video>
    <div class="caption">To capture beauty, I added rich, saturated color.</div>
</div>

  <div>
<h5>Enemy AI</h5> 
<p>I developed an enemy AI combat system with several states.</p>
                    <li>Idle State: enemies patrol unaware</li>
                    <li>Ambush State: enemies lie stationary, unaware, get up and react</li>
                    <li>Combat State: enemies stand guard</li>
                    <li>Pursue Target State: enemies chase player</li>
                    <li>Attack State: enemy attacks player</li>
                    <li>Boss Combat State: boss switches attack animations based on state change</li>
               
<h5>User Interface (UI)</h5> 
<p>I developed a user interface system with a pause menu with three options and in-game UI.</p>
                    <li>Inventory: view current inventory items, replace and equip new ones</li>
                    <li>Game Settings: template buttons for volume and language</li>
                    <li>Equipped Items: view character items</li>
                    <li>Pop Up UI: pop up messages that show item icon and name</li>
                    <li>Quick Slots: cyclable items to use in combat and gameplay for left and right hand, spell, and
                        consumable.
                    </li>
                    <li>Player Stats: Health, Magic, Stamina, Experience, Current Poison Effects</li>
                    
<h5>Player Combat Mechanics</h5> 
<p>I developed a combat system with a series of combat colliders that detect various forms of
                        damage.</p>
                    <li>Damage Collider: general collider for when characters are hit</li>
                    <li>Spell Damage Collider: detects spell damage and elemental damage types (fire, poison,
                        physical)
                    </li>
                    <li>Bomb Damage Collider: impacts characters in a radius of explosion and adjusts damage based on
                        proximity to blast impact
                    </li>
                    <li>Blocking Collider: detects when character is blocking and receive reduced damaged based on
                        shield stats and stagger attacker if timed correctly
                    </li>
                    <li>Critical Damage Collider: detects when a critical attack is attempted and possible; allows for
                        special assassination animation
                    </li>
                    <li>Posion: poisons character with a damage-over-time status after a limit of poison resistance is
                        reached
                    </li>
                    
<h5>Player Character Managers</h5> 
<p>I developed a player system with input and camera behavior managers. Note: Enemies have
                        corresponding modularized
                        versions that have similar functionality for non-playable characters.</p>
                    <li>Camera Manager: Determines camera behavior when player is moving or locking onto enemy targets
                    </li>
                    <li>Input Handler: Determines input behavior based on states and defined inputs</li>
                    <li>Player Animator Manager: determines which animations and overlays will play based on player
                        state (attacking, blocking, sprinting, etc)
                    </li>
                    <li>Player Combat Manager: determines enemy "teams", player combat states (attacking, blocking,
                        dying, staggering, etc), enemy lock on targets, and available
                        attacks based on current weapons, stamina, and magic
                    </li>
                    <li>Player Effects Manager: instantiates blood splatter and fire effects</li>
                    <li>Player Inventory Manager: holds UI information for left hand, right hand, current spell, current
                        consumable, pause menu, and picked-up items
                    </li>
                    <li>Player Stats Manager: holds health, stamina, magic, experience points, and poise (likelihood to
                        stagger from enemy attack). Player shrugs when out of stamina or magic
                    </li>
                    <li>Player Equipment Manager: holds equipment information for inventory and combat use</li>
                    <li>Player Locomotion Manager: holds movement behavior data based on combat and movement behavior
                        such as dodging, jumping, sprinting, etc.</li>
                        
<h5>Items (weapons, armor, consumables)</h5> 
<p>I developed an item system collection system where weapons
                        and consumables can be collected and appear in chests, producing a sparkle effect until
                        collected. Each item has its own consume animation an effects.
                        Weapons and consumables exist as scriptable objects with customizable damage, animaitons, and
                        meshes. Equipment can be equipped and replaced.
                        Consumable and equipment types include:</p>
                    <li>Bomb: a throwable object that explodes on impact with modifiable arc, damage, and explosion</li>
                    <li>Cure: a potion that heals health and stops poison effects</li>
                    <li>Flask: a potion that heals magic and boosts regeneration</li>
                    <li>Equipment Items: Helmet, Feet, Torso, Legs, Hands</li>

<h5>Inventory</h5> 
<p>I developed an inventory system with weapon slots, inventory consumable slots, and item pick up
                        funcitonality.</p>
                        
<h5>Events</h5> 
<p>I developed several events systems that trigger on command.</p>
                    <li>Open Chest: player opens chest and collects item</li>
                    <li>Enter Boss Arena: player enters an arena by diving over fire and is blocked from re-entering
                    </li>
                    <li>Fog Wall/Illusionary Door: a pathway is blocked by fog until player steps through</li>
<h5>Misc</h5> 
<p>I developed a series of managers to modularize all characters' inventories, locomotion,
                        animation, effects, stats, UI, and behavior.</p>
</div>

</div>
</div>
</div>

`
    // Add more modal templates here as needed
};

