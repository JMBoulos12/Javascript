



/**
  #Instructions:
  Manage robot factory settings.

  When a robot comes off the factory floor, it has no name.

  The first time you turn on a robot, a random name is generated in the format of two uppercase letters followed by three digits, such as RX837 or BC811.

  Every once in a while we need to reset a robot to its factory settings, which means that its name gets wiped. The next time you ask, that robot will respond with a new random name.

  The names must be random: they should not follow a predictable sequence. Using random names means a risk of collisions. Your solution must ensure that every existing robot has a unique name. 
  
  17-April-2023
*/


const LENGTH_OF_ALPHABET = 26;
const FIRST_ASCII = 'A'.charCodeAt(0);
/**
 * The strategy here is to generate every possible name once, then randomly shuffle them. If we were to
 * randomly generate a name each time, it becomes increasingly unlikely that we'll generate a unique
 * name. By creating an array of all possibilities that have been shuffled, we ensure we get an unused
 * name by popping from that list every time we need a new one.
 */
const generateAlphaCombos = (length, combo = '') => length
  ? [...Array(LENGTH_OF_ALPHABET).keys()]
    .flatMap(i => generateAlphaCombos(length - 1, combo + String.fromCharCode(i + FIRST_ASCII)))
  : combo;
const generateNumericalCombos = length => [...Array(10 ** length).keys()].map(num => `${num}`.padStart(length, '0'));
const generatePossibleNames = (alphaLength, numLength) => generateAlphaCombos(alphaLength)
  .flatMap(alphaCombo => generateNumericalCombos(numLength).map(numCombo => alphaCombo + numCombo));
// Randomly shuffle list of all possible names using Fisher-Yates
const shuffleNames = ([...names]) => names.reduce((shuffled, _, first) => {
  const second = Math.floor(Math.random() * first);
  [shuffled[first], shuffled[second]] = [shuffled[second], shuffled[first]];
  return shuffled;
}, names);
export class Robot {
  static ALPHABETICALS_LENGTH = 2;
  static NUMERICALS_LENGTH = 3;
  static POSSIBLE_NAMES = generatePossibleNames(Robot.ALPHABETICALS_LENGTH, Robot.NUMERICALS_LENGTH);
  static ELIGIBLE_NAMES = shuffleNames(Robot.POSSIBLE_NAMES);
  static releaseNames() {
    Robot.ELIGIBLE_NAMES = shuffleNames(Robot.POSSIBLE_NAMES);
  }
  #name
  constructor() {
    this.reset();
  }
  get name() {
    return this.#name;
  }
  reset() {
    this.#name = Robot.ELIGIBLE_NAMES.pop();
  }
}
