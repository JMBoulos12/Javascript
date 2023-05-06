



/**
  #Instructions
  Pick the best hand(s) from a list of poker hands. 
   
  06-May-2023
*/


//let ranks = {'high': 0, 'pair': 1, 'two-pair': 2, 'three-kind': 3, 'straight': 4, 'color': 5, 'full-house': 6, 'quad': 7, 'straight-color': 8};
export const bestHands = (hands) => {
  let ranked = [];
  let handz = [...hands];
  for (let i=0; i<handz.length; i++) {
    handz[i] = handz[i].split(' ');
    let includesA = false;
    for (let y=0; y <handz[i].length; y++) {
      handz[i][y] = handz[i][y].split('');
      if (handz[i][y].length === 3)
        handz[i][y] = [10, handz[i][y][2]];
      else if (handz[i][y][0] === 'A') {
        handz[i][y][0] = 14;
        includesA = true;
      } else if (handz[i][y][0] === 'J')
        handz[i][y][0] = 11;
      else if (handz[i][y][0] === 'Q')
        handz[i][y][0] = 12;
      else if (handz[i][y][0] === 'K')
        handz[i][y][0] = 13;
      else
        handz[i][y][0] = +handz[i][y][0];
    }
    ranked.push([0, handz[i], [], i]);
    if (includesA) {
      let mirror = JSON.parse(JSON.stringify(handz[i]));
      for (let y=0; y <mirror.length; y++) {
        if (mirror[y][0] === 14)
          mirror[y][0] = 1;
      }
      ranked.push([0, mirror, [], i]);
    }
  }
  for (let i = 0; i < ranked.length; i++) {
    let numbers = {};
    let colors = {};
    for (let card of ranked[i][1]) {
      if (numbers[card[0]] !== undefined) {
        numbers[card[0]] += 1;
      } else {
        numbers[card[0]] = 1;
      }
      if (colors[card[1]] !== undefined)
        colors[card[1]] += 1;
      else
        colors[card[1]] = 1;
    }
    let hasPair = false;
    let hasTriple = false;
    for (let n in numbers) {
      if (numbers[n] == 2) {
        if (hasPair) {
          ranked[i][0] = 2;
          ranked[i][2].push(+n);
        } else if (hasTriple) {
          ranked[i][0] = 6;
          ranked[i][2].push(+n);
        } else {
          ranked[i][0] = 1;
          ranked[i][2].push(+n);
          hasPair = true;
        }
      } else if (numbers[n] == 3) {
        if (hasPair) {
          ranked[i][0] = 6;
          let double = ranked[i][2].pop();
          ranked[i][2].push(+n);
          ranked[i][2].push(+double);
        } else {
          ranked[i][0] = 3;
          hasTriple = true;
          ranked[i][2].push(+n);
        }
      } else if (numbers[n] == 4) {
        ranked[i][0] = 7;
        ranked[i][2].push(+n);
      }
    }
    ranked[i][1] = ranked[i][1].sort((a,b) => a[0]-b[0]);
    let straight = 1;
    for (let k = 1; k < ranked[i][1].length; k++) {
      if (ranked[i][1][k][0] === ranked[i][1][k-1][0]+1)
        straight += 1;
    }
    for (let color in colors) {
      if (colors[color] === 5)
        ranked[i][0] = 5;
    }
    console.log(colors);
    if (straight === 5) {
      if (ranked[i][0] === 5)
        ranked[i][0] = 8;
      else if (ranked[i][0] < 5)
        ranked[i][0] = 4;
    }
  }
  ranked = ranked.map((r) => {
    if (r[0] === 2)
      r[2] = r[2].sort((a,b) => b-a);
    let newR = [r[0], [], r[2], r[3]];
    for (let card of r[1]) {
      let exists = false;
      for (let y = 0; y < r[2].length; y++) {
        if (r[2][y] === card[0]) {
          exists = true;
          break;
        }
      }
      if (exists) {
        continue;
      }
      newR[1].push(card);
    }
    newR[1] = newR[1].sort((a,b) => b[0]-a[0]);
    return newR;
  }).sort((a, b) => b[0]-a[0]);
  console.log(ranked);
  let winners = [];
  winners.push(ranked[0]);
  let counter = 0;
  let y = 0;
  for (let i = 1; i < ranked.length; i++) {
    if (winners[0][0] === ranked[i][0]) {
      switch (winners[0][0]) {
        case 0:
          counter = 0;
          for (y = 0; y < winners[0][1].length; y++) {
            if (winners[0][1][y][0] < ranked[i][1][y][0]) {
              winners[0] = ranked[i];
              break;
            } else if (winners[0][1][y][0] === ranked[i][1][y][0]) {
              counter += 1;
            }
          }
          if (counter === 5)
            winners.push(ranked[i]);
          break;
        case 1:
          if (winners[0][2][0] < ranked[i][2][0])
            winners[0] = ranked[i];
          else if (winners[0][2][0] === ranked[i][2][0]) {
            counter = 0;
            for (y = 0; y < winners[0][1].length; y++) {
              if (winners[0][1][y][0] < ranked[i][1][y][0]) {
                winners[0] = ranked[i];
                break;
              } else if (winners[0][1][y][0] === ranked[i][1][y][0]) {
                counter += 1;
              }
            }
            if (counter === 3)
              winners.push(ranked[i]);
          }
          break;
        case 2:
          if (winners[0][2][0] < ranked[i][2][0])
            winners[0] = ranked[i];
          else if (winners[0][2][0] === ranked[i][2][0])
            if (winners[0][2][1] < ranked[i][2][1])
              winners[0] = ranked[i];
            else if (winners[0][2][1] === ranked[i][2][1])
              if (winners[0][1][0] < ranked[i][1][0])
                winners[0] = ranked[i];
              else if (winners[0][1][0] === ranked[i][1][0])
                winners.push(ranked[i]);
          break;
        case 3:
          if (winners[0][2][0] < ranked[i][2][0])
            winners[0] = ranked[i];
          else if (winners[0][2][0] === ranked[i][2][0]) {
            counter = 0;
            for (y = 0; y < winners[0][1].length; y++) {
              if (winners[0][1][0][0] < ranked[i][1][0][0])
                winners[0] = ranked[i];
              else if (winners[0][1][0][0] === ranked[i][1][0][0])
                counter += 1;
            }
            if (counter === 2)
              winners.push(ranked[i]);
          }
          break;
        case 4:
          if (winners[0][1][0][0] < ranked[i][1][0][0])
            winners[0] = ranked[i];
          else if (winners[0][1][0][0] === ranked[i][1][0][0])
            winners.push(ranked[i]);
          break;
        case 5:
          counter = 0;
          for (y = 0; y < winners[0][1].length; y++) {
            if (winners[0][1][y][0] < ranked[i][1][y][0]) {
              winners[0] = ranked[i];
              break;
            } else if (winners[0][1][y][0] === ranked[i][1][y][0]) {
              counter += 1;
            }
          }
          if (counter === 5)
            winners.push(ranked[i]);
          break;
        case 6:
          if (winners[0][2][0] < ranked[i][2][0])
            winners[0] = ranked[i];
          else if (winners[0][2][0] === ranked[i][2][0])
            if (winners[0][2][1] < ranked[i][2][1])
              winners[0] = ranked[i];
            else if (winners[0][2][1] === ranked[i][2][1])
              winners.push(ranked[i]);
          break;
        case 7:
          if (winners[0][2][0] < ranked[i][2][0])
            winners[0] = ranked[i];
          else if (winners[0][1][0][0] < ranked[i][1][0][0])
            winners[0] = ranked[i];
          break;
        case 8:
          if (winners[0][1][0][0] < ranked[i][1][0][0])
            winners[0] = ranked[i];
          break;
      }
    }
  }
  let result = [];
  for (let i = 0; i < winners.length; i++) {
    result.push(hands[winners[i][3]]);
  }
  return result;
};
