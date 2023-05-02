



/**
  #Instructions
  Compute the result for a game of Hex / Polygon.

  The abstract boardgame known as Hex / Polygon / CON-TAC-TIX is quite simple in rules, though complex in practice. 
  Two players place stones on a parallelogram with hexagonal fields. The player to connect his/her stones to the opposite side first wins. 
  The four sides of the parallelogram are divided between the two players 
  (i.e. one player gets assigned a side and the side directly opposite it and the other player gets assigned the two other sides).

  Your goal is to build a program that given a simple representation of a board computes the winner (or lack thereof). Note that all games need not be "fair". 
  (For example, players may have mismatched piece counts or the game's board might have a different width and height.)

  The boards look like this:

  . O . X .
   . X X O .
    O O O X .
     . X O X O
      X O O O X
      
  "Player O" plays from top to bottom, "Player X" plays from left to right. 
  In the above example O has made a connection from left to right but nobody has won since O didn't connect top and bottom.
  
  02-May-2023
*/


class Position {
    constructor(x, y, c = " ") {
        this.x = x;
        this.y = y;
        this.c = c;
    }
    equals(p) {
        return p.x === this.x && p.y === this.y;
    }
}
function flatten(ll) {
    const result = [];
    ll.forEach(l => l.forEach(t => result.push(t)));
    return result;
}
const parseBoard = board =>
    board.map(r =>
        r
            .split("")
            .filter(c => c !== " ")
            .join("")
    );
const getPositions = rows =>
    flatten(
        rows.map((row, y) => row.split("").map((c, x) => new Position(x, y, c)))
    );
const createDistanceMap = (positions, source) => {
    const result = new Map(positions.map(p => [p, Number.MAX_SAFE_INTEGER]));
    result.set(source, 0);
    return result;
};
const positionWithSmallestDistance = (positions, distances) => {
    let result = positions[0];
    let resultDistance = distances.get(result) || Number.MAX_SAFE_INTEGER;
    positions.forEach(p => {
        const d = distances.get(p);
        if (d !== undefined && d < resultDistance) {
            result = p;
            resultDistance = d;
        }
    });
    return result;
};
const getPossibleNeighbours = position => {
    const { x, y } = position;
    return [
        new Position(x, y - 1),
        new Position(x + 1, y - 1),
        new Position(x - 1, y),
        new Position(x + 1, y),
        new Position(x - 1, y + 1),
        new Position(x, y + 1)
    ];
};
const neighbours = (positions, position) => {
    const possibleNeighbours = getPossibleNeighbours(position);
    return positions.filter(p => possibleNeighbours.some(n => n.equals(p)));
};
const dijkstra = (positions, source) => {
    let nodeQueue = [...positions];
    const distances = createDistanceMap(positions, source);
    while (nodeQueue.length !== 0) {
        const position = positionWithSmallestDistance(nodeQueue, distances);
        if (position) {
            nodeQueue = nodeQueue.filter(p => !p.equals(position));
            neighbours(positions, position).forEach(neighbour => {
                const neighbourDistance =
                    distances.get(neighbour) || Number.MAX_SAFE_INTEGER;
                const positionDistance = distances.get(position) || 0;
                distances.set(
                    neighbour,
                    Math.min(neighbourDistance, positionDistance + 1)
                );
            });
        }
    }
    return positions.filter(
        p => (distances.get(p) || 0) < Number.MAX_SAFE_INTEGER
    );
};
const pathExists = (positions, source, targets) => {
    const reachablePositions = dijkstra(positions, source);
    return targets.some(t => reachablePositions.some(p => p.equals(t)));
};
const pathExistsBetweenPositionLists = (positions, positionsA, positionsB) =>
    positionsA.some(a => pathExists(positions, a, positionsB));
const winsNorthToSouth = (positions, height) => {
    const northPositions = positions.filter(p => p.y === 0);
    const southPositions = positions.filter(p => p.y === height - 1);
    return pathExistsBetweenPositionLists(
        positions,
        northPositions,
        southPositions
    );
};
const winsWestToEast = (positions, width) => {
    const westPositions = positions.filter(p => p.x === 0);
    const eastPositions = positions.filter(p => p.x === width - 1);
    return pathExistsBetweenPositionLists(
        positions,
        westPositions,
        eastPositions
    );
};
export class Board {
    constructor(board) {
        const rows = parseBoard(board);
        const positions = getPositions(rows);
        this.height = rows.length;
        this.width = rows[0].length;
        this.xPositions = positions.filter(p => p.c === "X");
        this.oPositions = positions.filter(p => p.c === "O");
    }
    winner() {
        const { width, height, xPositions, oPositions } = this;
        if (width === 1 && height === 1) {
            if (xPositions.length !== 0) {
                return "X";
            } else if (oPositions.length !== 0) {
                return "O";
            } else {
                return "";
            }
        } else if (winsWestToEast(xPositions, width)) {
            return "X";
        } else if (winsNorthToSouth(oPositions, height)) {
            return "O";
        } else {
            return "";
        }
    }
}
