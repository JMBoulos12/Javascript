



/**
  #Instructions
  Given two buckets of different size and which bucket to fill first, determine how many actions are required to measure an exact number of liters by strategically transferring fluid between the buckets.

  There are some rules that your solution must follow:

  * You can only do one action at a time.
  * There are only 3 possible actions:
    1-  Pouring one bucket into the other bucket until either: a) the first bucket is empty b) the second bucket is full
    2-  Emptying a bucket and doing nothing to the other.
    3-  Filling a bucket and doing nothing to the other.
  * After an action, you may not arrive at a state where the starting bucket is empty and the other bucket is full.
  * Your program will take as input:

  the size of bucket one
  the size of bucket two
  the desired number of liters to reach
  which bucket to fill first, either bucket one or bucket two
  Your program should determine:

  the total number of actions it should take to reach the desired number of liters, including the first fill of the starting bucket
  which bucket should end up with the desired number of liters - either bucket one or bucket two
  how many liters are left in the other bucket
  Note: any time a change is made to either or both buckets counts as one (1) action.

  Example: Bucket one can hold up to 7 liters, and bucket two can hold up to 11 liters. Let's say at a given step, bucket one is holding 7 liters and bucket two is holding 8 liters (7,8). If you empty bucket one and make no change to bucket two, leaving you with 0 liters and 8 liters respectively (0,8), that counts as one action. Instead, if you had poured from bucket one into bucket two until bucket two was full, resulting in 4 liters in bucket one and 11 liters in bucket two (4,11), that would also only count as one action.

  Another Example: Bucket one can hold 3 liters, and bucket two can hold up to 5 liters. You are told you must start with bucket one. So your first action is to fill bucket one. You choose to empty bucket one for your second action. For your third action, you may not fill bucket two, because this violates the third rule -- you may not end up in a state after any action where the starting bucket is empty and the other bucket is full.

  Written with <3 at Fullstack Academy by Lindsay Levine.

  Output format
  The solve() method is expected to return an object with these properties:

  moves - the number of bucket actions required to reach the goal (includes filling the start bucket),
  goalBucket - the name of the bucket that reached the goal amount,
  otherBucket - the amount contained in the other bucket.
  Example:

  {
    "moves": 5,
    "goalBucket": "one",
    "otherBucket": 2
  }
  
  02-May-2023
*/


class Bucket {
  constructor(n, v, i, g, i2) {
    this.name = n
    this.volume = v
    this.holds = 0
    this.index = i
    this.pairIndex = i2
    this.actions = 0
    this.goal = g
  }
  isFull() {
    return this.volume == this.holds
  }
  isEmpty() {
    return this.holds == 0
  }
  goalCheck() {
    if (this.holds == this.goal) {
      throw this
    }
  }
  fill() {
    if (this.isFull()) {
      return
    }
    this.holds = this.volume
    ++this.actions
    this.goalCheck()
  }
  pourOut() {
    if (this.isEmpty()) {
      return
    }
    this.holds = 0
    ++this.actions
    this.goalCheck()
  }
  pourInto(another) {
    if (this == another) {
      throw new Error("Cant't pour into itself!")
    }
    const space = another.volume - another.holds
    if (space >= this.holds) {
      another.holds += this.holds
      this.holds = 0
    } else {
      this.holds -= space
      another.holds = another.volume
    }
    ++this.actions
    this.goalCheck()
    another.goalCheck()
  }
}
export class TwoBucket {
  constructor(buckOne, buckTwo, goal, starterBuck) {
    let gcd = this.gcd(buckOne, buckTwo)
    if (parseInt(goal % gcd) || (goal > buckOne && goal > buckTwo)) {
      throw new Error()
    }
    this.bucks = []
    this.bucks.push(new Bucket('one', buckOne, 0, goal, 1))
    this.bucks.push(new Bucket('two', buckTwo, 1, goal, 0))
    this.goal = goal
    this.starter = (starterBuck == 'one')? 0 : 1
    this.second = this.starter? 0 : 1
    this.steps = 0
  }
  gcd(a, b) {
    if (!b) {
      return a
    }
    return this.gcd(b, parseInt(a % b))
  }
  solve() {
    const first = this.bucks[this.starter]
    const second = this.bucks[this.second]
    try {
      while (true) {
        if (first.isEmpty()) {
          first.fill()
        }
        if (second.volume == this.goal) {
          second.fill()
        }
        console.log(first.holds, second.holds)
        first.pourInto(second) 
        console.log(first.holds, second.holds)
        if (second.isFull()) {
          second.pourOut()
        }
      }
    } catch (goal) {
      let o = {}
      o.moves = first.actions + second.actions
      o.goalBucket = goal.name
      o.otherBucket = this.bucks[goal.pairIndex].holds
      return o
    }
  }
}
