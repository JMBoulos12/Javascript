



/**
  #Instructions
  Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.

  In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

  A chessboard can be represented by an 8 by 8 array.

  So if you're told the white queen is at (2, 3) and the black queen at (5, 6), then you'd know you've got a set-up like so:

  _ _ _ _ _ _ _ _
  _ _ _ _ _ _ _ _
  _ _ _ W _ _ _ _
  _ _ _ _ _ _ _ _
  _ _ _ _ _ _ _ _
  _ _ _ _ _ _ B _
  _ _ _ _ _ _ _ _
  _ _ _ _ _ _ _ _
  
  You'd also be able to answer whether the queens can attack each other. 
  In this case, that answer would be yes, they can, because both pieces share a diagonal.

  A queen must be placed on a valid position on the board. Two queens cannot share the same position.

  If a position has not been given, the queens are at their default starting positions. 
  That's the bottom row (1) for the white queen and the top row (8) for the black queen. Both queens start in the fourth column (d).

    a b c d e f g h
  8 _ _ _ B _ _ _ _ 8
  7 _ _ _ _ _ _ _ _ 7
  6 _ _ _ _ _ _ _ _ 6
  5 _ _ _ _ _ _ _ _ 5
  4 _ _ _ _ _ _ _ _ 4
  3 _ _ _ _ _ _ _ _ 3
  2 _ _ _ _ _ _ _ _ 2
  1 _ _ _ W _ _ _ _ 1
    a b c d e f g h
  
  05-May-2023
*/


export class QueenAttack {
  static BOARD_DIMENSION = 8;
  static isOnBoard(coordinates) {
    return coordinates.every(coordinate => coordinate >= 0 && coordinate < QueenAttack.BOARD_DIMENSION);
  }
  #board = Array.from({ length: QueenAttack.BOARD_DIMENSION }, () => Array(QueenAttack.BOARD_DIMENSION).fill('_'));
  #white;
  #black;
  constructor({ white = [7, 3], black = [0, 3] } = {}) {
    if (white.every((_, i) => white[i] === black[i])) throw new Error('Queens cannot share the same space');
    if (![white, black].every(QueenAttack.isOnBoard)) throw new Error('Queen must be placed on the board');
    this.#white = white;
    this.#black = black;
    this.#board[white[0]][white[1]] = 'W';
    this.#board[black[0]][black[1]] = 'B';
  }
  get white() {
    return [...this.#white];
  }
  get black() {
    return [...this.#black];
  }
  get canAttack() {
    return [
      this.#white[0] === this.#black[0],
      this.#white[1] === this.#black[1],
      Math.abs(this.#white[0] - this.#black[0]) === Math.abs(this.#white[1] - this.#black[1])
    ].some(assertion => assertion);
  }
  toString() {
    return this.#board.map(row => row.join(' ')).join('\n');
  }
}
