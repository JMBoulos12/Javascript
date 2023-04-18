



/**
  #Instructions
  Calculate the date of meetups.

  Typically meetups happen on the same day of the week. In this exercise, you will take a description of a meetup date, and return the actual meetup date.

  Examples of general descriptions are:

  * The first Monday of January 2017
  * The third Tuesday of January 2017
  * The wednesteenth of January 2017
  * The last Thursday of January 2017
  
  The descriptors you are expected to parse are: 
  first, second, third, fourth, fifth, last, monteenth, tuesteenth, wednesteenth, thursteenth, friteenth, saturteenth, sunteenth

  Note that "monteenth", "tuesteenth", etc are all made up words. 
  There was a meetup whose members realized that there are exactly 7 numbered days in a month that end in '-teenth'. 
  Therefore, one is guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is named with '-teenth' in every month.

  Given examples of a meetup dates, each containing a month, day, year, and descriptor calculate the date of the actual meetup. For example, if given "The first Monday of January 2017", the correct meetup date is 2017/1/2.

  In JavaScript, the Date object month's index ranges from 0 to 11.

  const date = new Date('2020-06-13');
  date.getFullYear();
  // => 2020
  date.getMonth();
  // => 5 (instead of 6)
  date.getDate();
  // => 13
  
  18-April-2023
*/


const teens = [13, 14, 15, 16, 17, 18, 19];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weeks = ["first", "second", "third", "fourth"];
export const meetup = (year, month, description, day) =>  {
  const date = new Date(year, month, 0)
  switch (description) {
    case "teenth":
      for (let teen of teens) {
        date.setDate(teen);
        if (weekdays[date.getDay()] === day) {
          return date;
        }
      }
      break;
    case "last":
      for (let dayMonth =date.getDate(); dayMonth > 0; dayMonth--) {
        date.setDate(dayMonth);
        if (weekdays[date.getDay()] === day) {
          return date;
        }
      }
      break;
    default:
      for (let dayMonth = 1; dayMonth < 32; dayMonth++) {
        date.setDate(dayMonth);
        const week = 7 * weeks.indexOf(description);
        if (weekdays[date.getDay()] === day) {
          date.setDate(dayMonth + week);
          return date;
        }
      }
      break;
  }
}
