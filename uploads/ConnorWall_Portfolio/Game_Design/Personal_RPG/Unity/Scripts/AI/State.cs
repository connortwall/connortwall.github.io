using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace CW
{
    
public abstract class State : MonoBehaviour
{
    public abstract State Tick(EnemyManager enemyManager, EnemyStatsManager enemyStatsManager,
        EnemyAnimationManager enemyAnimationManager);

}
}