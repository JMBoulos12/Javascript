



/**
  #Instructions
  Manage a game player's High Score list.

  Your task is to build a high-score component of the classic Frogger game, one of the highest selling and addictive games of all time, and a classic of the arcade era. 
  Your task is to write methods that return the highest score from the list, the last added score and the three highest scores.

  23-April-2023
*/


// Helper function for clarity.
const descending = (a, b) => b - a;
export class HighScores {
  #scores;
  constructor(scores = []) {
    this.#scores = scores;
  }
  get scores() {
    return this.#scores;
  }
  get latest() {
    return this.scores[this.scores.length - 1];
  }
  get personalBest() {
    return Math.max(...this.scores);
  }
  get personalTopThree() {
    return [...this.scores].sort(descending).slice(0, 3);
  }
}
