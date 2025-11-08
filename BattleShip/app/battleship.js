function generateId() {
    return crypto.randomUUID();
}

export class Ship {
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
        } else if (position[0][0] === position[1][0] && position[0][1] < position[1][1] || position[0][1] > position[1][1]) {
            const startingPos = position[0]; //[0,0]
            const endingPos = position[1];//[0,4]
            let allPos = [startingPos];

            //  [0] < [4]
            let digitHorizontal = startingPos[1]
            while (digitHorizontal < endingPos[1]) {
                digitHorizontal++;
                allPos.push([startingPos[0], digitHorizontal])
            }
            while (digitHorizontal > endingPos[1]) {
                digitHorizontal--;
                allPos.push([startingPos[0], digitHorizontal])
            }

            return allPos

            // vertical
        } else if (position[0][1] === position[1][1] && position[0][0] < position[1][0] || position[0][0] > position[1][0]) {
            const startingPos = position[0]; //[0,0]
            const endingPos = position[1];//[4,0]
            let allPos = [startingPos];

            //  [0] < [4]
            let digitHorizontal = startingPos[0]
            while (digitHorizontal < endingPos[0]) {
                digitHorizontal++;
                allPos.push([digitHorizontal, startingPos[1]])
            }//  [4] > [0]
            while (digitHorizontal > endingPos[0]) {
                digitHorizontal--;
                allPos.push([digitHorizontal, startingPos[1]])
            }
            return allPos
        }
    }
}


export class GameBoard {
    constructor(minSize, maxSize) {
        this.size = [[minSize, minSize], [maxSize, maxSize]]
        this.missedShot = [];
        this.allSinked = false;
        this.ships = [];
    }
    placeShip(length, position) {
        // Check if ship fits on board
        // Check if position overlaps with existing ships
        const newShip = new Ship(length, position)
        this.ships.push(newShip)
        return newShip
    }
    receiveAttack(position) {

        const alreadyHit = this.ships.some(ship =>
            ship.hitCell.some(cell => cell[0] === position[0] && cell[1] === position[1])
        );
        const alreadyMissed = this.missedShot.some(cell =>
            cell[0] === position[0] && cell[1] === position[1]
        );

        if (alreadyHit || alreadyMissed) return null;

        for (let ship of this.ships) {
            const hit = ship.occupiedCells.find(cell => cell[0] === position[0] && cell[1] === position[1]);
            if (hit) {
                ship.hit(position);
                if (this.ships.every(ship => ship.sunked)) {
                    this.allSinked = true;
                }
                return true;
            }
        }
        this.missedShot.push(position);
        return false;
    }
}

export class Player {
    constructor(userName, isReal = false) {
        this.name = userName || "computer";
        this.isReal = isReal;
        this.board = new GameBoard(0, 9);
        this.availableCell = [];
    }
    attack(oppenantBoard, position = null) {
        const positions = oppenantBoard.size
        const startingPos = positions[0]
        const endingPos = positions[1]
        const allCell = this.availableCell
        let currentRow = startingPos[0];
        let currentCol = startingPos[1];

        if (allCell.length <= 0) { // generate if allCell is empty
            // Get all possible Cell
            while (currentRow <= endingPos[0]) {
                while (currentCol <= endingPos[1]) {
                    allCell.push([currentRow, currentCol])
                    currentCol++;
                }
                currentRow++;
                currentCol = startingPos[1];
            }
        }

        if (!this.isReal) { // if its a computer 
            const randomIndex = Math.floor(Math.random() * allCell.length);
            const randomCell = allCell[randomIndex];
            if (randomIndex > -1) { // Select random cell , and remove from allCell array
                allCell.splice(randomIndex, 1);
            }
            const result = oppenantBoard.receiveAttack(randomCell);
            return { position: randomCell, result: result };
        } else {
            const result = oppenantBoard.receiveAttack(position);
            return { position: position, result: result };
        }
    }
}

