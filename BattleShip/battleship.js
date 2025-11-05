const stringify = require("fast-json-stable-stringify");

class Ship {
    constructor(length , position ) {
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
        console.log('this.hitCell:', this.hitCell);
        console.log('this.hitCell.length:', this.hitCell.length);
    }
    isSunk() {
        return this.sunked = true
    }
    calculateOccupiedCells(position){
        // length 1
        if (position.length === 1){
            return [position[0]]
            // horizontal
        } else if (position[0][0] === position[1][0] && position[0][1] < position[1][1] | position[0][1] > position[1][1]){
            const startionPos = position[0]; //[0,0]
            const endingPos = position[1];//[0,4]
            let allPos = [startionPos];

            //  [0] < [4]
            let digitHorizontal = startionPos[1]
            while(digitHorizontal < endingPos[1]){
                digitHorizontal++;
                allPos.push([startionPos[0],digitHorizontal])
            }
            while(digitHorizontal > endingPos[1]){
                digitHorizontal--;
                allPos.push([startionPos[0],digitHorizontal])
            }

            return allPos

        // vertical
        } else if (position[0][1] === position[1][1] && position[0][0] < position[1][0] | position[0][0] > position[1][0]){
            const startionPos = position[0]; //[0,0]
            const endingPos = position[1];//[4,0]
            let allPos = [startionPos];

            //  [0] < [4]
            let digitHorizontal = startionPos[0]
            while(digitHorizontal < endingPos[0]){
                digitHorizontal++;
                allPos.push([digitHorizontal,startionPos[1]])
            }//  [4] > [0]
            while(digitHorizontal > endingPos[0]){
                digitHorizontal--;
                allPos.push([digitHorizontal,startionPos[1]])
            }

            return allPos
        }
    }
}


class GameBoard{

}

module.exports = {
    Ship
}