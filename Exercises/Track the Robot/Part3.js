




/*
  A robot moves around a 2D grid. At the start, it is at [0, 0], facing east. It is controlled by a sequence of instructions:

      . means take one step forwards in the current direction.
      < means turn 90 degrees anticlockwise.
      > means turn 90 degrees clockwise.
  Your job is to process the instructions and return the final position of the robot.

  Example :
  For example, if the robot is given the sequence of instructions ..<.<., then:
      Step 1: . It still faces east, and is at [1, 0].
      Step 2: . It still faces east, and is at [2, 0].
      Step 3: < It now faces north, and is still at [2, 0].
      Step 4: . It still faces north, and is at [2, 1].
      Step 5: < It now faces west, and is still at [2, 1].
      Step 6: . It still faces west, and is now at [1, 1].
  So, trackRobot("..<.<.") returns [1, 1].

  Notes :
  The instruction strings will only contain the three valid characters ., < or >.
  You will always be passed a string (but the string might be empty).

  25-January-2023
*/

function trackRobot(steps) {
  const move = [[1,0], [0,-1], [-1,0], [0,1]];
  let dir = 0, pos = [0,0];

  for (step of steps) 
    switch (step) {
      case '.': pos[0]+=move[dir][0]; 
                pos[1]+=move[dir][1];
                break;
      case '>': dir = (dir+1)%4; 
                break;
      case '<': dir = (dir+3)%4;
    }
  return pos;
}
