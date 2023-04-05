



/*
  # Instructions:
  Your design company has primarily been working with CSS transformations to build web pages. 
  After some discussion, a decision is made to start using JavaScript to perform some calculations dynamically. 
  Some of your teammates are less experienced with JavaScript, so you decide to use a function closure to create reusable transformation for {x, y} coordinate pairs.

  1. Translate the coordinates
  Implement the translate2d function that returns a function making use of a closure to perform a repeatable 2d translation of a coordinate pair.

  const moveCoordinatesRight2Px = translate2d(2, 0);
  const result = moveCoordinatesRight2Px(4, 8);
  // result => [6, 8]
  
  2. Scale the coordinates
  Implement the scale2d function that returns a function making use of a closure to perform a repeatable 2d scale of a coordinate pair.

  For this exercise, assume only positive scaling values.

  const doubleScale = scale2d(2, 2);
  const result = doubleScale(6, -3);
  // result => [12, -6]
  
  3. Compose transformation functions
  Combine two transformation functions to perform a repeatable transformation. This is often called function composition, where the result of the first function 'f(x)' is used as the input to the second function 'g(x)'.

  const moveCoordinatesRight2Px = translate2d(2, 0);
  const doubleCoordinates = scale2d(2, 2);
  const composedTransformations = composeTransformation(
    moveCoordinatesRight2Px,
    doubleCoordinates
  );
  const result = composedTransformations(0, 1);
  // result => [4, 2]
  4. Save the results of functions
  Implement the memoizeTransform function. It takes a function to memoize, then returns a new function that remembers the inputs to the supplied function so that the last return value can be "remembered" and only calculated once if it is called again with the same arguments.

  Memoizing is sometimes used in dynamic programming. It allows for expensive operations to be done only once since their results are remembered. 
  Note that in this exercise only the last result is remembered, unlike some solutions in dynamic programming that memoize all results.

  const tripleScale = scale2d(3, 3);
  const memoizedScale = memoizeTransform(tripleScale);

  memoizedScale(4, 3); // => [12, 9], this is computed since it hasn't been computed before for the arguments
  memoizedScale(4, 3); // => [12, 9], this is remembered, since it was computed already
  
  05-April-2023
*/


/**
 * Create a function which returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return (a, b) => [dx + a, dy + b];
}
/**
 * Create a function which returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return (a, b) => [sx * a, sy * b];
}
/**
 * Create a composition function which returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return (a, b) => g(...f(a, b));
}
/**
 * Return a function which memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes and x, y argument, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  const lastArgs = [];
  let lastResult;
  return (a, b) => {
    if(lastArgs.length && lastArgs[0] === a && lastArgs[1] === b) {
      return lastResult;
    }
    lastResult = f(a, b);
    lastArgs[0] = a;
    lastArgs[1] = b;
    return lastResult;
  }
}
