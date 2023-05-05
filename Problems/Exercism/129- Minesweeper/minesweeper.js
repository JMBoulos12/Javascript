



/**
  #Instructions
  Add the mine counts to a completed Minesweeper board.

  Minesweeper is a popular game where the user has to find the mines using numeric hints that indicate how many mines are directly adjacent (horizontally, 
  vertically, diagonally) to a square.

  In this exercise you have to create some code that counts the number of mines adjacent to a given empty square and replaces that square with the count.

  The board is a rectangle composed of blank space (' ') characters. A mine is represented by an asterisk ('*') character.

  If a given space has no adjacent mines at all, leave that square blank.

  #Examples
  For example you may receive a 5 x 4 board like this (empty spaces are represented here with the '·' character for display on screen):
  ·*·*·
  ··*··
  ··*··
  ·····
  
  And your code will transform it into this:
  1*3*1
  13*31
  ·2*2·
  ·111·
  
  05-May-2023
*/


const countMines = (j) => (line) =>
  [...line.substring(j - 1, j + 2)]
    .reduce((acc, c) => c === '*' ? acc + 1 : acc, 0);
const countMinesMulti = (lines, i, j) =>
  lines
    .slice((i === 0) ? 0 : i - 1, i + 2)
    .map(countMines(j))
    .reduce((acc, x) => acc + x, 0);
export const annotate = (lines) =>
  lines.map(
    (line, i) => [...line]
      .map((c, j) => (c === ' ')
        ? countMinesMulti(lines, i, j) || ' '
        : c)
      .join('')
  );
