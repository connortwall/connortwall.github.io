
using UnityEngine;

namespace CW
{
    public class InputHandler : MonoBehaviour
    {
        public float horizontal;
        public float vertical;
        public float moveAmount;
        public float mouseX;
        public float mouseY;

        public bool aInput;
        public bool b_input;
        public bool consume_Input;
        public bool y_Input;
        public bool rightbumper_Input;
        public bool righttrigger_Input;
        public bool leftbumper_Input;
        public bool lefttrigger_Input;
        public bool critical_Attack_Input;
        public bool jump_Input;
        public bool inventory_Input;
        public bool lockOn_Input;

        public bool rightStick_Right_Input;
        public bool rightStick_Left_Input;
        
        public bool d_Pad_Up;
        public bool d_Pad_Down;
        public bool d_Pad_Left;
        public bool d_Pad_Right;

        public bool rollFlag;
        public bool twoHandFlag;
        public bool sprintFlag;
        public bool comboFlag;
        public bool lockOnFlag;
        public bool inventoryFlag;
        public float rollInputTimer;
        
        // need a specific transform for critical attack (or else raycast will come from ground (default))
        public Transform criticalAttackRaycatStartPoint;

        private PlayerControls inputActions;
        private PlayerCombatManager playerCombatManager;
        private PlayerInventoryManager playerInventoryManager;
        private PlayerManager playerManager;
        private PlayerFXManager playerFXManager;
        private PlayerStatsManager playerStatsManager;
        private BlockingCollider blockingCollider;
        private PlayerWeaponSlotManager playerWeaponSlotManager;
        private CameraHandler cameraHandler;
        private PlayerAnimatorManager playerAnimatorManager;
        private UIManager uIManager;

        private Vector2 movementInput;
        private Vector2 cameraInput;
        
        private void Awake()
        {
            playerCombatManager = GetComponent<PlayerCombatManager>();
            playerInventoryManager = GetComponent<PlayerInventoryManager>();
            playerManager = GetComponent<PlayerManager>();
            playerFXManager = GetComponent<PlayerFXManager>();
            playerStatsManager = GetComponent<PlayerStatsManager>();
            // calling this bc we must reload weapons on addition of new wepon
            playerWeaponSlotManager = GetComponent<PlayerWeaponSlotManager>();
            blockingCollider = GetComponentInChildren<BlockingCollider>();
            cameraHandler = FindObjectOfType<CameraHandler>();
            playerAnimatorManager = GetComponent<PlayerAnimatorManager>();
            uIManager = FindObjectOfType<UIManager>();
        }

        public void OnEnable()
        {
            if (inputActions == null)
            {
                inputActions = new PlayerControls();
                inputActions.PlayerMovement.Movement.performed +=
                    inputActions => movementInput = inputActions.ReadValue<Vector2>();
                inputActions.PlayerMovement.Camera.performed += i => cameraInput = i.ReadValue<Vector2>();

                inputActions.PlayerActions.SelectButton.performed += inputActions => aInput = true;
                
                // handle attack input
                inputActions.PlayerActions.RB.performed += i => rightbumper_Input = true;
                inputActions.PlayerActions.RT.performed += i => righttrigger_Input = true;
                inputActions.PlayerActions.LeftBumper.performed += i => leftbumper_Input = true;
                inputActions.PlayerActions.LeftBumper.canceled += i => leftbumper_Input = false;
                inputActions.PlayerActions.LeftTrigger.performed += inputActions => lefttrigger_Input = true;
                
                // handle quick slot
                inputActions.PlayerActions.DPadRight.performed += i => d_Pad_Right = true;
                inputActions.PlayerActions.DPadLeft.performed += i => d_Pad_Left = true;
                
                // handle select
                inputActions.PlayerActions.SelectButton.performed += i => aInput = true;
                inputActions.PlayerActions.X.performed += i => consume_Input = true;
                // handle roll input
                // when input is cancelled
                inputActions.PlayerActions.Roll.performed += i => b_input = true;
                inputActions.PlayerActions.Roll.canceled += i => b_input = false;
                
                // handle jump input
                inputActions.PlayerActions.Jump.performed += i => jump_Input = true;
                
                //handle inventory input
                inputActions.PlayerActions.Inventory.performed += i => inventory_Input = true;
                
                // handle lock on input
                inputActions.PlayerActions.LockOn.performed += i => lockOn_Input = true;
                
                //handle lock on right and left
                inputActions.PlayerMovement.LockOnTargetRight.performed += i => rightStick_Right_Input = true;
                inputActions.PlayerMovement.LockOnTargetLeft.performed += i => rightStick_Left_Input = true;

                //handle 
                inputActions.PlayerActions.Y.performed += i => y_Input = true;

                // handle critical attack
                inputActions.PlayerActions.CriticalAttack.performed += i => critical_Attack_Input = true;

                Debug.DrawRay(criticalAttackRaycatStartPoint.position,transform.TransformDirection(Vector3.forward), Color.red, 0.5f);

            }

            inputActions.Enable();
        }

        private void OnDisable()
        {
            inputActions.Disable();
        }
 
        public void TickInput(float delta)
        {
            if (playerStatsManager.isDead)
            {
                return;
            }
            HandleMoveInput(delta);
            HandleRollInput(delta);
            HandleCombatInput(delta);
            HandleQuickSlotInput();
            HandleInventoryInput();
            HandleLockOnInput();
            HandleTwoHandInput();
            HandleCriticalAttackInput();
            HandleConsumableInput();
        }
        
        public void HandleMoveInput(float delta)
        {
            horizontal = movementInput.x;
            vertical = movementInput.y;
            moveAmount = Mathf.Clamp01(Mathf.Abs(horizontal) + Mathf.Abs(vertical));
            mouseX = cameraInput.x;
            mouseY = cameraInput.y;
        }

        private void HandleRollInput(float delta)
        {
            // will detect when key is pressed and make bool true
            //b_input = inputActions.PlayerActions.Roll.phase == UnityEngine.InputSystem.InputActionPhase.Started;
            //b_input = inputActions.PlayerActions.Roll.IsPressed();

            if (b_input)
            {
                rollInputTimer += delta;
                if (playerStatsManager.currentStamina <= 0)
                {
                    b_input = false;
                    sprintFlag = false;
                }

                if (moveAmount > 0.5f && playerStatsManager.currentStamina > 0)
                {
                    sprintFlag = true;
                }
            }
            else
            {
                sprintFlag = false;
                
                // tapping b
                if (rollInputTimer > 0 && rollInputTimer < 0.5f)
                {
                    rollFlag = true;
                }

                //reset the timer
                rollInputTimer = 0;
            }
        }

        private void HandleCombatInput(float delta)
        {
            if (rightbumper_Input == true)
            {
                playerCombatManager.HandleRBAction();
            }
            if (righttrigger_Input == true)
            {
                playerCombatManager.HandleHeavyAttack(playerInventoryManager.rightWeapon);
            }
            

            if (lefttrigger_Input)
            {
                // if two handing handle weapon animation
                if (twoHandFlag)
                {
                    // else handle light attack if melee weapon handle weapon art
                    // handle sheild attack
                }
                else
                {
                    playerCombatManager.HandleLTAction();
                }
            }
            if (leftbumper_Input)
            {
                // do a block
                playerCombatManager.HandleLBAction();
            }
            else
            {
                playerManager.isBlocking = false;
                if (blockingCollider.blockingBoxCollider.enabled)
                {
                    blockingCollider.DisableBlockingCollider();
                }
            }
        }

        private void HandleQuickSlotInput()
        {
            if (d_Pad_Right)
            {
                playerInventoryManager.ChangeRightWeapon();
            }
            else if (d_Pad_Left)
            {
                playerInventoryManager.ChangeLeftWeapon();
            }
        }
        
        private void HandleInventoryInput()
        {
            if (inventory_Input)
            {
                inventoryFlag = !inventoryFlag;
                if (inventoryFlag)
                {
                    uIManager.OpenSelectWindow();
                    uIManager.UpdateUI();
                    uIManager.hudWindow.SetActive(false);
                }
                else
                {
                    uIManager.CloseSelectWindow();
                    uIManager.CloseAllInventoryWindows();
                    uIManager.hudWindow.SetActive(true);
                }
            }

        }

        private void HandleLockOnInput()
        {
            // if no target is currently locked on
            if (lockOn_Input && lockOnFlag == false)
            {
                lockOn_Input = false;
                // find nearest lock on target to move camer to
                cameraHandler.HandleLockOn();
                if (cameraHandler.nearestLockOnTarget != null)
                {
                    cameraHandler.currentLockOnTarget = cameraHandler.nearestLockOnTarget;
                    lockOnFlag = true;
                }
            }
            else if (lockOn_Input && lockOnFlag)
            {
                lockOn_Input = false;
                lockOnFlag = false;
                cameraHandler.ClearLockOnTargets();
            }

            if (lockOnFlag && rightStick_Left_Input)
            {
                rightStick_Left_Input = false;
                cameraHandler.HandleLockOn();
                if (cameraHandler.leftLockTarget != null)
                {
                    // assign current lock on target to target in left
                    cameraHandler.currentLockOnTarget = cameraHandler.leftLockTarget;
                }
            }

            else if (lockOnFlag && rightStick_Right_Input)
            {
                rightStick_Right_Input = false;
                cameraHandler.HandleLockOn();
                if (cameraHandler.rightLockTarget != null)
                {
                    // assign current lock on target to target in right
                    cameraHandler.currentLockOnTarget = cameraHandler.rightLockTarget;
                }
            }
            cameraHandler.SetCameraHeight();
        }

        private void HandleTwoHandInput()
        {
            if (y_Input)
            {
                // switch to false so that it activates only once per frame
                y_Input = false;
                // switch state of flag
                twoHandFlag = !twoHandFlag;
                if (twoHandFlag)
                {
                    //enable two handed w. right weapon
                    playerManager.isTwoHandingWeapon = true;
                    playerWeaponSlotManager.LoadWeaponOnSlot(playerInventoryManager.rightWeapon, false);
                    playerWeaponSlotManager.LoadTwoHandIKTargets(true);
                }
                else
                {
                    //disable two handed
                    playerManager.isTwoHandingWeapon = false;
                    playerWeaponSlotManager.LoadWeaponOnSlot(playerInventoryManager.rightWeapon, false);
                    playerWeaponSlotManager.LoadWeaponOnSlot(playerInventoryManager.leftWeapon, true);
                    playerWeaponSlotManager.LoadTwoHandIKTargets(false);
                }
            }
        }

        private void HandleCriticalAttackInput()
        {
            if (critical_Attack_Input)
            {
                // disable after use
                critical_Attack_Input = false;
                playerCombatManager.AttemptBackstabOrRiposte();
            }
        }

        private void HandleConsumableInput()
        {
            if (consume_Input)
            {
                consume_Input = false;
                // sue current consumable 
                playerInventoryManager.currentConsumableItem.AttemptToConsumeItem(playerAnimatorManager, playerWeaponSlotManager, playerFXManager);
            }
        }
    }
}