using System;
using System.Collections;
using System.Collections.Generic;

using UnityEngine;

namespace CW
{
   public class BombDamageCollider : DamageCollider
{
   [Header("Explosive Damage & Radius")] 
   public int explosiveRadius = 1;
   public int explosionDamage;
   public int explosionSplashDamage; // other damage types etc

   public Rigidbody bombRigidbody;
   private bool hasCollided = false;
   public GameObject impactParticles;

   protected override void Awake()
   {
      damageCollider = GetComponent<Collider>();
      bombRigidbody = GetComponent<Rigidbody>();
   }

   private void OnCollisionEnter(Collision collision)
   {
      if (!hasCollided)
      {
         hasCollided = true;
         impactParticles = Instantiate(impactParticles, transform.position, Quaternion.identity);
         Explode();

         CharacterStatsManager character = collision.transform.GetComponent<CharacterStatsManager>();

         if (character != null)
         {
            if (character.teamIDNumber != teamIDNumber)
            {
               // check for friendly fire
               character.TakeDamage(physicalDamage, explosionDamage, true);
            }
         }

         Destroy(impactParticles, 5f);
        Destroy(transform.parent.gameObject);
      }
   }

   private void Explode()
   {
      // iterate through characters in radius to deal damage to
      Collider[] characters = Physics.OverlapSphere(transform.position, explosiveRadius);
      foreach (Collider objectsInExplosion in characters)
      {
         CharacterStatsManager character = objectsInExplosion.GetComponent<CharacterStatsManager>();
         if (character != null)
         {
            if (character.teamIDNumber != teamIDNumber)
            {
               // deal fire damage
               character.TakeDamage(0, explosionSplashDamage, true);
            }
         }
      }
   }
}
}