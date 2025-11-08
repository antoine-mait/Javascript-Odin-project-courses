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
            if (name != "computer"){
                playerboardDiv.append(cells);
            } else {
                computerboardDiv.append(cells);
            }
        }
    }
};

export function winPopUp(playerName){
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