const { all } = require("micromatch");

function generateId() {
    return crypto.randomUUID();
}

class Ship {
    constructor(length, position) {
        this.id = generateId();
        this.length = length;
        this.position = position;
        this.occupiedCells = this.calculateOccupiedCells(position);
        this.hitCell = [];
        this.sunked = false;
    }
    hit(selectedCell) {
        const hit = this.occupiedCells.find((element) => element[0] === selectedCell[0] && element[1] === selectedCell[1])
        if (hit) this.hitCell.push(selectedCell)
        if (this.length === this.hitCell.length) this.isSunk()
    }
    isSunk() {
        return this.sunked = true
    }
    calculateOccupiedCells(position) {
        // length 1
        if (position.length === 1) {
            return [position[0]]
            // horizontal
        } else if (position[0][0] === position[1][0] && position[0][1] < position[1][1] | position[0][1] > position[1][1]) {
            const startionPos = position[0]; //[0,0]
            const endingPos = position[1];//[0,4]
            let allPos = [startionPos];

            //  [0] < [4]
            let digitHorizontal = startionPos[1]
            while (digitHorizontal < endingPos[1]) {
                digitHorizontal++;
                allPos.push([startionPos[0], digitHorizontal])
            }
            while (digitHorizontal > endingPos[1]) {
                digitHorizontal--;
                allPos.push([startionPos[0], digitHorizontal])
            }

            return allPos

            // vertical
        } else if (position[0][1] === position[1][1] && position[0][0] < position[1][0] | position[0][0] > position[1][0]) {
            const startionPos = position[0]; //[0,0]
            const endingPos = position[1];//[4,0]
            let allPos = [startionPos];

            //  [0] < [4]
            let digitHorizontal = startionPos[0]
            while (digitHorizontal < endingPos[0]) {
                digitHorizontal++;
                allPos.push([digitHorizontal, startionPos[1]])
            }//  [4] > [0]
            while (digitHorizontal > endingPos[0]) {
                digitHorizontal--;
                allPos.push([digitHorizontal, startionPos[1]])
            }

            return allPos
        }
    }
}


class GameBoard {
    constructor(minSize, maxSize) {
        this.size = [[minSize, minSize], [maxSize, maxSize]]
        this.missedShot = [];
        this.allSinked = false;
        this.ships = []
    }
    placeShip(length, position) {
        const newShip = new Ship(length, position)
        this.ships.push(newShip)
        return newShip
    }
    receiveAttack(position) {
        for (let ship of this.ships) {
            const hit = ship.occupiedCells.find(cell => cell[0] === position[0] && cell[1] === position[1]);
            if (hit) {
                ship.hit(position);
                if (this.ships.every(ship => ship.sunked)) {
                    this.allSinked = true;
                }
                return;
            }
        }
        this.missedShot.push(position);
    }
}

class Player {
    constructor(GameBoard , userName , playerType = real){
        this.name = userName || computer;
        this.playerType = playerType || computer;
        this.board = GameBoard;
    }
}

module.exports = {
    Ship,
    GameBoard,
}

const myBoard = new GameBoard(0, 9);
myBoard.placeShip(3, [[0, 0], [0, 2]]);
myBoard.placeShip(5, [[2, 0], [2, 4]]);
myBoard.receiveAttack([0, 0]);
myBoard.receiveAttack([0, 1]);
myBoard.receiveAttack([0, 2]);
if (myBoard.allSinked === true) {
    console.log("Game over!");
}
console.log("Total ships:", myBoard.ships.length);