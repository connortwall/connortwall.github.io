using System;
using Unity.VisualScripting.Dependencies.NCalc;
using UnityEngine;

namespace CW
{
    public class PlayerLocomotionManager : MonoBehaviour
    {
        public Vector3 moveDirection;
        private CameraHandler cameraHandler;
        private PlayerStatsManager playerStatsManager;
        [HideInInspector] public Transform myTransform;
        [HideInInspector] public PlayerAnimatorManager playerAnimatorManager;
        [HideInInspector] public new Rigidbody rigidbody;
        public GameObject normalCamera;

        [Header("Ground and Air Detection Stats")]
        // location of bottom of floating player capsule collider
        [SerializeField]
        private float groundDetectionRayStartPoint = 0.5f;

        [SerializeField] private float minimumDistanceNeededToBeginFall = 0.9f;
        [SerializeField] private float groundDirectionRayDistance = 0.01f;
        public float inAirTimer;

        [Header("Movement Stats")] [SerializeField]
        private float movementSpeed = 5;

        [SerializeField] private float walkingSpeed = 3;
        [SerializeField] private float sprintSpeed = 7;
        [SerializeField] private float rotationSpeed = 10;
        [SerializeField] private float fallingSpeed = 700;

        [Header("Stamina Costs")] [SerializeField]
        private int rollStaminaCost = 15;
        private int backstepStaminaCost = 12;
        private int sprintStaminaCost = 1;
        
        private Transform cameraObject;
        public LayerMask groundLayer;
        private InputHandler inputHandler;
        private PlayerManager playerManager;
        
        [HideInInspector]
        [Header("Colliders")]
        public CapsuleCollider characterCollider;
        [HideInInspector]
        public CapsuleCollider characterCollisionBlockerCollider;
        
        private void Awake()
        {
            inputHandler = GetComponent<InputHandler>();
            cameraHandler = FindObjectOfType<CameraHandler>();
            playerManager = GetComponent<PlayerManager>();
            playerStatsManager = GetComponent<PlayerStatsManager>();
            rigidbody = GetComponent<Rigidbody>();

            characterCollider = GetComponent<CapsuleCollider>();
            
            playerAnimatorManager = GetComponent<PlayerAnimatorManager>();
            cameraObject = Camera.main.transform;
            myTransform = transform;

            playerManager.isGrounded = true;
            // layers that are ignored in ground check
            groundLayer = ~((1 << 8) | (1 << 11));
            
            // ignore collision between character and character collider
            Physics.IgnoreCollision(characterCollider, characterCollisionBlockerCollider, true);

        }
        

        #region Movement

        private Vector3 normalVector;
        private Vector3 targetPosition;

        // rotate character w
        public void HandleRotation(float delta)
        {
            
            // handle rotation
            if (playerAnimatorManager.canRotate)
            {

                // if locked on
                if (inputHandler.lockOnFlag)
                {
                    // if sprinting or rolling, rotate the camera
                    if (inputHandler.sprintFlag || inputHandler.rollFlag)
                    {
                        Vector3 targetDirection = Vector3.zero;
                        targetDirection = cameraHandler.cameraTransform.forward * inputHandler.vertical;
                        targetDirection += cameraHandler.cameraTransform.right * inputHandler.horizontal;
                        targetDirection.Normalize();
                        targetDirection.y = 0;

                        if (targetDirection == Vector3.zero)
                        {
                            targetDirection = transform.forward;
                        }

                        Quaternion tr = Quaternion.LookRotation(targetDirection);
                        // slerp creates a smooth rotation between rotations using a time ratio
                        Quaternion targetRotation =
                            Quaternion.Slerp(transform.rotation, tr, rotationSpeed * Time.deltaTime);
                        transform.rotation = targetRotation;
                    }
                    else
                    {
                        Vector3 rotationDirection = moveDirection;
                        rotationDirection = cameraHandler.currentLockOnTarget.transform.position - transform.position;
                        rotationDirection.y = 0;
                        rotationDirection.Normalize();
                        Quaternion tr = Quaternion.LookRotation(rotationDirection);
                        Quaternion targetRotation =
                            Quaternion.Slerp(transform.rotation, tr, rotationSpeed * Time.deltaTime);
                        transform.rotation = targetRotation;
                    }


                }

                // if not locked on
                else
                {
                    Vector3 targetDir = Vector3.zero;
                    float moveOverride = inputHandler.moveAmount;

                    targetDir = cameraObject.forward * inputHandler.vertical;
                    targetDir += cameraObject.right * inputHandler.horizontal;

                    targetDir.Normalize();
                    // don't want movemnt on y
                    targetDir.y = 0;

                    if (targetDir == Vector3.zero) targetDir = myTransform.forward;

                    var rs = rotationSpeed;
                    var tr = Quaternion.LookRotation(targetDir);
                    var targetRotation = Quaternion.Slerp(myTransform.rotation, tr, rs * delta);

                    // assign to transform in class
                    myTransform.rotation = targetRotation;
                }

            }

        }

        public void HandleMovement(float delta)
        {
            var speed = movementSpeed;

            if (inputHandler.rollFlag) return;

            if (playerManager.isInteracting) return;

            // only activate sprinting if movement and sprint button is pressed
            if (inputHandler.sprintFlag && inputHandler.moveAmount > 0.5)
            {
                speed = sprintSpeed;
                playerManager.isSprinting = true;
                moveDirection *= speed;
                playerStatsManager.TakeStaminaDamage(sprintStaminaCost);
            }

            else
            {
                if (inputHandler.moveAmount < 0.5)
                {
                    moveDirection *= walkingSpeed;
                    playerManager.isSprinting = false;
                }
                moveDirection *= speed;
                playerManager.isSprinting = false;
            }

            moveDirection = cameraObject.forward * inputHandler.vertical;
            moveDirection += cameraObject.right * inputHandler.horizontal;
            moveDirection.Normalize();
            // freezing the movement on the y axis
            moveDirection.y = 0;

            speed = movementSpeed;
            moveDirection *= speed;

            var projectedVelocity = Vector3.ProjectOnPlane(moveDirection, normalVector);
            rigidbody.velocity = projectedVelocity;

            if (inputHandler.lockOnFlag && inputHandler.sprintFlag == false)
            {
                playerAnimatorManager.UpdateAnimatorValues(inputHandler.vertical, inputHandler.horizontal, playerManager.isSprinting);
            }

            else
            {
                // change vertical movement of animator
                playerAnimatorManager.UpdateAnimatorValues(inputHandler.moveAmount, 0, playerManager.isSprinting);
            }

        }

        public void HandleRollingAndSprinting(float delta)
        {
            // dont want tpo roll while interacting
            if (playerAnimatorManager.animator.GetBool("isInteracting")) return;

            //check if sufficient stamina, if not return
            if (playerStatsManager.currentStamina <= 0)
            {
                return;
            }
            
            if (inputHandler.rollFlag)
            {
                moveDirection = cameraObject.forward * inputHandler.vertical;
                moveDirection += cameraObject.right * inputHandler.horizontal;

                if (inputHandler.moveAmount > 0)
                {
                    playerAnimatorManager.PlayTargetAnimation("QuickRoll", true);
                    // reset corrected hand placement for animation
                    playerAnimatorManager.EraseHandIKForWeapon();
                    moveDirection.y = 0;
                    var rollRotation = Quaternion.LookRotation(moveDirection);
                    myTransform.rotation = rollRotation;
                    // take stamina damage
                    playerStatsManager.TakeStaminaDamage(rollStaminaCost);
                }
                else
                {
                    playerAnimatorManager.PlayTargetAnimation("StandingDodgeBackward", true);
                    // reset corrected hand placement for animation
                    playerAnimatorManager.EraseHandIKForWeapon();
                    playerStatsManager.TakeStaminaDamage(backstepStaminaCost);

                }
            }
        }

        public void HandleFalling(float delta, Vector3 moveDirection)
        {
            playerManager.isGrounded = false;
            RaycastHit hit;
            var origin = myTransform.position;
            origin.y += groundDetectionRayStartPoint;

            if (Physics.Raycast(origin, myTransform.forward, out hit, 0.4f))
                // not moving if somethign in front of you
                moveDirection = Vector3.zero;

            if (playerManager.isInAir)
            {
                // at rate of falling speed
                rigidbody.AddForce(-Vector3.up * fallingSpeed);
                // when falling of an edge add a little directional boost, avoid stuck falling
                rigidbody.AddForce(moveDirection * fallingSpeed / 10f);
            }

            var dir = moveDirection;
            dir.Normalize();
            origin = origin + dir * groundDirectionRayDistance;

            targetPosition = myTransform.position;

            // debug the ray caster in game
            Debug.DrawRay(origin, -Vector3.up * minimumDistanceNeededToBeginFall, Color.blue, 0.1f, false);
            if (Physics.Raycast(origin, -Vector3.up, out hit, minimumDistanceNeededToBeginFall, groundLayer))
            {
                normalVector = hit.normal;
                var tp = hit.point;
                targetPosition.y = tp.y;

                if (playerManager.isInAir)
                {
                    if (inAirTimer > 0.5f)
                    {
                        Debug.Log("in air for " + inAirTimer);
                        playerAnimatorManager.PlayTargetAnimation("FallingToLanding", true);
                        inAirTimer = 0;
                    }
                    else
                    {
                        playerAnimatorManager.PlayTargetAnimation("Empty", false);
                        inAirTimer = 0;
                    }

                    // reset in air timer
                    playerManager.isInAir = false;
                }
            }
            else
            {
                if (playerManager.isGrounded) playerManager.isGrounded = false;

                if (playerManager.isInAir == false)
                {
                    if (playerManager.isInteracting == false) playerAnimatorManager.PlayTargetAnimation("FallingIdle", true);

                    var ve1 = rigidbody.velocity;
                    ve1.Normalize();
                    rigidbody.velocity = ve1 * (movementSpeed / 2);
                    playerManager.isInAir = true;
                }
            }

            if (playerManager.isGrounded)
            {
                if (playerManager.isInteracting || inputHandler.moveAmount > 0)
                    myTransform.position = Vector3.Lerp(myTransform.position, targetPosition, Time.deltaTime / 0.1f);
                else
                    myTransform.position = targetPosition;
            }
        }

        public void HandleJumping()
        {
            if (playerManager.isInteracting)
            {
                return;
            }

            if (inputHandler.jump_Input)
            {
                if (inputHandler.moveAmount > 0)
                {
                    moveDirection = cameraObject.forward * inputHandler.vertical;
                    moveDirection += cameraObject.right * inputHandler.horizontal;
                    //playerAnimatorManager.PlayTargetAnimation("sword and shield jump (2)", true);
                    playerAnimatorManager.PlayTargetAnimation("sword and shield jump", true);
                    // keep y direction constant
                    //moveDirection.y = 0;
                    Quaternion jumpRotation = Quaternion.LookRotation(moveDirection);
                    // turn the way you are facing when jumping
                    myTransform.rotation = jumpRotation;
                }
            }
        }

        #endregion
    }
}