



/**
  #Instructions
  Score a bowling game.

  Bowling is a game where players roll a heavy ball to knock down pins arranged in a triangle. 
  Write code to keep track of the score of a game of bowling.

  #Scoring Bowling
  The game consists of 10 frames. A frame is composed of one or two ball throws with 10 pins standing at frame initialization. 
  There are three cases for the tabulation of a frame.

  * An open frame is where a score of less than 10 is recorded for the frame. In this case the score for the frame is the number of pins knocked down.
  * A spare is where all ten pins are knocked down by the second throw. 
    The total value of a spare is 10 plus the number of pins knocked down in their next throw.
  * A strike is where all ten pins are knocked down by the first throw. 
    The total value of a strike is 10 plus the number of pins knocked down in the next two throws. 
    If a strike is immediately followed by a second strike, then the value of the first strike cannot be determined until the ball is thrown one more time.

  Here is a three frame example:

  Frame 1	Frame 2	Frame 3
  X (strike)	5/ (spare)	9 0 (open frame)
  Frame 1 is (10 + 5 + 5) = 20

  Frame 2 is (5 + 5 + 9) = 19

  Frame 3 is (9 + 0) = 9

  This means the current running total is 48.

  The tenth frame in the game is a special case. If someone throws a strike or a spare then they get a fill ball. Fill balls exist to calculate the total of the 10th frame. Scoring a strike or spare on the fill ball does not give the player more fill balls. The total value of the 10th frame is the total number of pins knocked down.

  For a tenth frame of X1/ (strike and a spare), the total value is 20.

  For a tenth frame of XXX (three strikes), the total value is 30.

  #Requirements
  Write code to keep track of the score of a game of bowling. It should support two operations:

  * roll(pins : int) is called each time the player rolls a ball. The argument is the number of pins knocked down.
  * score() : int is called only at the very end of the game. It returns the total score for that game.
  
  02-May-2023
*/


export class Bowling {
  constructor() {
    this.currScore = 0;
    this.frame = 1;
    this.rollNumber = 1;
    this.pinsRemaining = 10;
    this.strike1 = 0;
    this.strike2 = 0;
    this.spare = 0;
    this.complete = false;
    this.currRoll = -1;
    this.lastFrameMark = false;
  }
  handleCarryOvers() {
    if (this.strike1 > 0) {
      this.currScore += this.currRoll;
      this.strike1--;
    }
    if (this.strike2 > 0) {
      this.currScore += this.currRoll;
      this.strike2--;
    }
    if (this.spare > 0) {
      this.currScore += this.currRoll;
      this.spare--;
    }
  }
  updateScore() {
    this.handleCarryOvers();
    if (this.frame !== 10) {
      this.currScore += this.currRoll;
    } else if (this.rollNumber === 1 || (this.rollNumber === 2 && !this.lastFrameMark)) {
      this.currScore += this.currRoll;
    }
  }
  handleStrike() {
    if (this.currRoll === 10 && !this.lastFrameMark) {
      if (this.strike1 > 0) this.strike2 = 2;
      else this.strike1 = 2;
      if (this.frame === 10) this.lastFrameMark = true;
    }
  }
  handleSpare() {
    if (this.currRoll === this.pinsRemaining && this.currRoll !== 10) {
      this.spare = 1;
    }
  }
  updateGameState() {
    this.handleStrike();
    this.handleSpare();
    if (this.frame !== 10) {
      if (this.rollNumber === 2 || this.currRoll === 10) {
        this.rollNumber = 1;
        this.frame++;
        this.pinsRemaining = 10;
      } else {
        this.pinsRemaining -= this.currRoll;
        this.rollNumber = 2;
      }
    } else if (this.rollNumber === 1) { // 10th frame
      if (this.currRoll === 10) {
        this.pinsRemaining = 10;
      } else {
        this.pinsRemaining -= this.currRoll;
      }
      this.rollNumber = 2;
    } else if (this.rollNumber === 2) { // 10th frame
      if (this.currRoll === this.pinsRemaining) {
        this.pinsRemaining = 10;
        this.rollNumber = 3;
      } else if (this.lastFrameMark) {
        this.pinsRemaining -= this.currRoll;
        this.rollNumber = 3;
      } else {
        this.complete = true;
      }
    } else { // frame 10, roll 3
      this.complete = true;
    }
  }
  roll(pins) {
    if (pins < 0) throw new Error('Negative roll is invalid');
    if (pins > this.pinsRemaining) throw new Error('Pin count exceeds pins on the lane');
    if (this.complete) throw new Error('Cannot roll after game is over');
    this.currRoll = pins;
    this.updateScore();
    this.updateGameState();
  }
  score() {
    if (!this.complete) throw new Error('Score cannot be taken until the end of the game');
    return this.currScore;
  }
}
