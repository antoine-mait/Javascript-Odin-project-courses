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
}