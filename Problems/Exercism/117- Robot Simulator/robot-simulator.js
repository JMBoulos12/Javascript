



/**
  #Instructions
  Write a robot simulator.

  A robot factory's test facility needs a program to verify robot movements.

  The robots have three possible movements:

  * turn right
  * turn left
  * advance
  
  Robots are placed on a hypothetical infinite grid, facing a particular direction (north, east, south, or west) at a set of {x,y} coordinates, 
  e.g., {3,8}, with coordinates increasing to the north and east.

  The robot then receives a number of instructions, at which point the testing facility verifies the robot's new position, 
  and in which direction it is pointing.

  * The letter-string "RAALAL" means:
    * Turn right
    * Advance twice
    * Turn left
    * Advance once
    * Turn left yet again
  * Say a robot starts at {7, 3} facing north. Then running this stream of instructions should leave it at {9, 4} facing west.
  
  04-May-2023
*/


const bearings = [];
bearings[0] = 'east';
bearings[90] = 'north';
bearings[180] = 'west';
bearings[270] = 'south';
const instructions = {
  A: 'advance',
  R: 'turnRight',
  L: 'turnLeft',
};
export class InvalidInputError extends Error {}
export class Robot {
  #coordinates;
  #bearing;
  constructor() {
    this.#coordinates = [0, 0];
    this.#bearing = 90;
  }
  get bearing() { return bearings[this.#bearing]; }
  get coordinates() { return this.#coordinates; }
  at(x, y) {
    this.#coordinates = [x, y];
    return this;
  }
  orient(bearing) {
    if (!bearings.includes(bearing)) throw new InvalidInputError(`invalid orientation ${bearing}`);
    this.#bearing = bearings.indexOf(bearing);
    return this;
  }
  place({ x, y, direction }) {
    return this.at(x, y).orient(direction);
  }
  turn(amount) {
    this.#bearing = (this.#bearing + amount + 360) % 360;
    return this;
  }
  turnLeft() { this.turn(+90); }
  turnRight() { this.turn(-90); }
  advance() {
    const rad = this.#bearing * 2 * Math.PI / 360;
    const [x, y] = this.#coordinates;
    const [dx, dy] = [Math.round(Math.cos(rad)), Math.round(Math.sin(rad))];
    return this.at(x + dx, y + dy);
  }
  static instructions(script) {
    return Array.from(script).map((i) => {
      if (!instructions[i]) throw new InvalidInputError(`no such instruction ${i}`);
      return instructions[i];
    });
  }
  evaluate(script) {
    Robot.instructions(script).forEach(i => this[i]());
  }
}
