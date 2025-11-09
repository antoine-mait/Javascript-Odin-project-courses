export function renderBoard(size, name) {
    const playerboardDiv = document.querySelector("#player-board")
    const computerboardDiv = document.querySelector("#computer-board")


    const minRowCol = size[0][0]; // 0
    const maxRowCol = size[1][0]; // 9

    for (let rowI = maxRowCol; rowI >= minRowCol; rowI--) {
        for (let colI = minRowCol; colI <= maxRowCol; colI++) {
            const cells = document.createElement("div")
            cells.classList.add("cell");
            cells.id = name + "_" + rowI + "_" + colI
            if (name != "computer") {
                playerboardDiv.append(cells);
            } else {
                computerboardDiv.append(cells);
            }
        }
    }
};

export function winPopUp(playerName) {
    const gameContainer = document.querySelector(".game-container")

    const backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");

    const popUp = document.createElement("div");
    popUp.classList.add("winPopUp")
    popUp.textContent = playerName + " has won"

    console.log(playerName + " have won")
    gameContainer.append(backdrop);
    gameContainer.append(popUp);
}

export function randomShipsPosition(boardSize) {
    const maxShipSize = 5;
    const nbOfShips = 5;
    let playerShip = [];

    for (let i = 0; i < nbOfShips; i++) { // create 5 ship loop
        const shipSize = randomIntFromInterval(1,maxShipSize);
        const dir = randomIntFromInterval(0, 1);
        const max = (boardSize[1][1]) - shipSize;

        if (dir === 0) {
            const xPos = randomIntFromInterval(0, max);
            const yPos = randomIntFromInterval(0, boardSize[1][1]);
            let shipData = []

            if (shipSize === 1){
                shipData = [shipSize , [[xPos,yPos]]];
            } else {
                shipData = [shipSize , [[xPos,yPos],[(xPos+(shipSize-1)),yPos]]];
            }
            playerShip.push(shipData)

        } else if (dir === 1) {
            const xPos = randomIntFromInterval(0, boardSize[1][1]);
            const yPos = randomIntFromInterval(0, max);
            let shipData = []
            if (shipSize === 1){
                shipData = [shipSize , [[xPos,yPos]]];
            } else {
                shipData = [shipSize , [[xPos,yPos],[xPos,(yPos+(shipSize-1))]]];
            }
            playerShip.push(shipData)

        } else {
            console.log("no direction selected *BUG ?")
        }
    }
    return playerShip
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}