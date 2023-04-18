



/**
  #Instructions
  Implement a clock that handles times without dates.

  You should be able to add and subtract minutes to it.

  Two clocks that represent the same time should be equal to each other.

  Using the built-in Date class and its methods is not allowed.
  
  18-April-2023
*/


const HOUR_MINUTES = 60;
const DAY_MINUTES = 24 * 60;
const absModulus = (divident, divisor) => (divisor + (divident % divisor)) % divisor;
export class Clock {
  constructor(hours, minutes = 0) {
    this._minutes = absModulus(hours * HOUR_MINUTES + minutes, DAY_MINUTES);
  }
  get minutes() {
    return this._minutes % HOUR_MINUTES;
  }
  get hours() {
    return Math.floor(this._minutes / HOUR_MINUTES);
  }
  toString() {
    return [this.hours, this.minutes].map(time => `${time}`.padStart(2, '0')).join(':');
  }
  plus(minutes) {
    return new Clock(0, this._minutes + minutes);
  }
  minus(minutes) {
    return this.plus(-minutes);
  }
  equals(newClock) {
    return this._minutes === newClock._minutes;
  }
}
