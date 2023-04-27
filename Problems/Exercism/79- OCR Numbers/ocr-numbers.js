



/**
  #Instructions
  Given a 3 x 4 grid of pipes, underscores, and spaces, determine which number is represented, or whether it is garbled.

  To begin with, convert a simple binary font to a string containing 0 or 1.

  The binary font uses pipes and underscores, four rows high and three columns wide.
       _   #
      | |  # zero.
      |_|  #
           # the fourth row is always blank
           
  Is converted to "0"
           #
        |  # one.
        |  #
           # (blank fourth row)
           
  Is converted to "1"

  If the input is the correct size, but not recognizable, your program should return '?'

  If the input is the incorrect size, your program should return an error.

  Update your program to recognize multi-character binary strings, replacing garbled numbers with ?

  Update your program to recognize all numbers 0 through 9, both individually and as part of a larger string.
   _
   _|
  |_

  Is converted to "2"
        _  _     _  _  _  _  _  _  #
      | _| _||_||_ |_   ||_||_|| | # decimal numbers.
      ||_  _|  | _||_|  ||_| _||_| #
                                   # fourth line is always blank
  Is converted to "1234567890"

  Update your program to handle multiple numbers, one per line. When converting several lines, join the lines with commas.

      _  _
    | _| _|
    ||_  _|

      _  _
  |_||_ |_
    | _||_|

   _  _  _
    ||_||_|
    ||_| _|

  Is converted to "123,456,789"
  
  27-April-2023
*/


const ocrFont = {
  " _ | ||_|": "0",
  "     |  |": "1",
  " _  _||_ ": "2",
  " _  _| _|": "3",
  "   |_|  |": "4",
  " _ |_  _|": "5",
  " _ |_ |_|": "6",
  " _   |  |": "7",
  " _ |_||_|": "8",
  " _ |_| _|": "9",
};
function extractNums([line1, line2, line3]) {
  if (
    (line1.length + line2.length + line3.length) / 3 !== line1.length ||
    line1.length % 3 !== 0
  ) {
    throw new Error("Invalid character size detected");
  }
  const nums = [];
  for (let i = 0; i < line1.length; i += 3) {
    const num = `${line1.slice(i, i + 3)}${line2.slice(i, i + 3)}${line3.slice(
      i,
      i + 3
    )}`;
    nums.push(num in ocrFont ? ocrFont[num] : "?");
  }
  return nums;
}
export function convert(ocr) {
  return ocr
    .split("\n")
    .flatMap((_, i, rows) => {
      if (i % 4 === 0) {
        const lines = rows.slice(i, i + 3);
        const nums = extractNums(lines);
        return [nums.join("")];
      } else {
        return [];
      }
    })
    .join(",");
}
