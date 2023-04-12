



/**
  #Introduction
  Errors
  Errors are useful to report when something is wrong or unexpected in a program or a piece of code.

  They are javascript objects.

  The main property of this object is message:

  const error = new Error('Oops, something went wrong');

  console.log(error.message);
  // => "Oops, something went wrong"
  
  Using the throw syntax, you can throw an Error.
  throw new Error('Oops');
  
  When an error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.

  try {
    throw new Error('Oops');
  } catch (error) {
    console.log(error.message);
    // => "Oops"
  }
  
  #Inheritance
  Inheritance is a way to create parent-child relationships between classes. 
  The child class (sometimes referred to as a subclass) has access to the behavior and data defined by the parent class (sometimes referred to as a superclass).

  class Pet {
    constructor(name) {
      this.name = name;
    }

    introduce() {
      console.log(`This is my pet, ${this.name}.`);
    }
  }

  class Dog extends Pet {}

  const dog = new Dog('Otis');
  dog.introduce();
  // => This is my pet, Otis.
  The extends keyword in the child class declaration establishes a relationship with the parent class through the prototype chain.

  Objects created by the child's constructor will have the parent class's prototype in their prototype chain, 
  providing access to any methods or data defined by the parent.

  const dog = new Dog('Otis');

  Dog.prototype.isPrototypeOf(dog); // => true
  Pet.prototype.isPrototypeOf(dog); // => true
  Pet.prototype.isPrototypeOf(Dog.prototype); // => true

  Pet.prototype.hasOwnProperty('introduce'); // => true
  Dog.prototype.hasOwnProperty('introduce'); // => false
  dog.hasOwnProperty('introduce'); // => false
  As with any class in JavaScript, subclasses can inherit from Error to create Custom errors by using the extends keyword. 
  The instanceof syntax will check if the error caught is an instance of a particular subclass of Error.

  class CustomError extends Error {}

  try {
    // ... Code that may throw an error
  } catch (error) {
    if (error instanceof CustomError) {
      console.log('The error thrown is an instance of the CustomError');
    }
  }
  
  #Instructions
  Elena is the new quality manager of a newspaper factory. As she has just arrived in the company, 
  she has decided to review some of the processes in the factory to see what could be improved. 
  She found out that technicians are doing a lot of quality checks by hand. 
  She sees there is a good opportunity for automation and asks you, a freelance developer, to develop a piece of software to monitor some of the machines.

  1. Monitor the humidity level of the room
  Your first mission is to write a piece of software to monitor the humidity level of the production room. 
  There is already a sensor connected to the software of the company that returns periodically the humidity percentage of the room.

  You need to implement a function in the software that will throw an error if the humidity percentage is too high. 
  The function should be called checkHumidityLevel and take the humidity percentage as a parameter.

  You should throw an error (the message is not important) if the percentage exceeds 70%.

  checkHumidityLevel(60);
  // => undefined
  checkHumidityLevel(100);
  // Throws an error
  
  2. Detect overheating
  Elena is very pleased with your first assignment and asks you to deal with the monitoring of the machines' temperature. 
  While chatting with a technician, Greg, you are told that if the temperature of a machine exceeds 500°C, the technicians start worrying about overheating.

  The machine is equipped with a sensor that measures its internal temperature. You should know that the sensor is very sensitive and often breaks. 
  In this case, the technicians will need to change it.

  Your job is to implement a function reportOverheating that takes the temperature as a parameter and throws an error if the sensor is broken 
  or if the machine starts overheating. Knowing that you will later need to react differently depending on the error, 
  you need a mechanism to differentiate the two kinds of errors. You could rely on the error messages, 
  but this would make your code fragile as it would break if the message gets updated. So to be able to do so properly, 
  you'll throw instances of different error classes.

  If the sensor is broken, the temperature will be null. In this case, you should throw an ArgumentError.
  When everything works, if the temperature exceeds 500°C, you should throw an OverheatingError. This error class will be instantiated with a temperature argument. Make sure that the OverheatingError you throw has a temperature property attached to it.
  reportOverheating(null);
  // Throws an ArgumentError
  reportOverheating(800);
  // Throws an OverheatingError
  
  3. Monitor the machine
  Now that your machine can detect errors, you will implement a function that reacts to those errors in different ways :

  * If the sensor is broken, you need to warn a technician
  * If the temperature is too high, you will either shut down the machine if the temperature exceeds 600°C or turn on a warning light if it is less than that.
  * If another error happens, you'll rethrow it.
  
  Implements a function monitorTheMachine that takes an argument actions.

  actions is an object that has 4 properties :

  * check is a function that, when called, checks the temperature of the machine. It may throw various errors
  * alertDeadSensor is a function that, when called, alerts a technician that the temperature's sensor is dead.
  * alertOverheating is a function that, when called, will turn on a warning light on the machine.
  * shutdown is a function that, when called, will turn off the machine.

  The monitorTheMachine function should call check(). If it passes, the function should not return anything. However, it may throw an error. When this happens, you should, depending on the error:

  * ArgumentError: when this happens, call the alertDeadSensor function.
  * OverheatingError: when this happens, if the temperature is less than 600 °C, call the alertOverheating function to turn on the warning light. If the temperature exceeds 600°C, the situation is critical, call the shutdown function.
  * anything else: when this happens, rethrow the error
  monitorTheMachine({
    check,
    alertDeadSensor,
    alertOverheating,
    shutdown,
  });
  
  12-April-2023
*/


export class ArgumentError extends Error {}
export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}
/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if (humidityPercentage > 70) {
    throw new Error(
      `Humidity level is too high. Expected 70% or lower, actual: ${humidityPercentage}%`
    );
  }
}
/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError(
      'The sensor seems broken. Expected temperature, actual null.'
    );
  }
  if (temperature < 500) {
    return;
  }
  
  throw new OverheatingError(temperature);
}
/**
 * Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 *   check: function,
 *   alertDeadSensor: function,
 *   alertOverheating: function,
 *   shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine({ check, alertDeadSensor, alertOverheating, shutdown }) {
  try {
    check()
  } catch (error) {
    if (error instanceof ArgumentError) {
      alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature < 600) {
        alertOverheating()
      } else {
        shutdown()
      }
    } else {
      throw error;
    }
  }
}
