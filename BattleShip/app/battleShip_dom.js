import {
    Ship,
    GameBoard,
    Player
} from "./battleship.js";

import {
    renderBoard,
    winPopUp,
    randomShipsPosition
} from "./battleShip_html.js"

const nameInput = document.querySelector(".player-name");
let player1 = null;
let player2 = null;
let gameStarted = 0;
let turns = 0;


document.addEventListener("DOMContentLoaded", () => {
    renderBoard([[0, 0], [9, 9]], "player")
    renderBoard([[0, 0], [9, 9]], "computer")
});

function computerTurns() {
    const attackResult = player2.attack(player1.board);
    const cellPos = attackResult.position;
    const result = attackResult.result;

    const cell = document.getElementById(player1.name + "_" + cellPos[0] + "_" + cellPos[1])

    if (result === true) {
        cell.classList.add("hit");
    } else if (result === false) {
        cell.classList.add("miss");
    }
    console.log("computer attacked " + player1.name);
    turns++;
}

function gameOverCheck() {
    if (player1.board.allSinked === true) {
        winPopUp(player2.name)
        gameStarted = 0;
    } else if (player2.board.allSinked === true) {
        winPopUp(player1.name)
        gameStarted = 0;
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn_play")) {
        gameStarted++
        const playerboardDiv = document.querySelector("#player-board")
        const computerboardDiv = document.querySelector("#computer-board")
        playerboardDiv.innerHTML = ""
        computerboardDiv.innerHTML = ""

        const playerName = nameInput.value;
        player1 = new Player(playerName, true);
        player2 = new Player("computer", false);
        renderBoard(player1.board.size, player1.name)
        renderBoard(player2.board.size, player2.name)

        // Random computer ships positions
        const shipsPosition = randomShipsPosition(player1.board.size )
        shipsPosition.forEach(element => {
            player2.board.placeShip(element[0], element[1])
        });

        // Random player ships positions
        const playerShipsPosition = randomShipsPosition(player2.board.size )
        playerShipsPosition.forEach(element => {
            player1.board.placeShip(element[0], element[1])
        });
        console.log(shipsPosition)
        console.log(playerShipsPosition)
        turns = 0;
    };

    if (e.target.classList.contains("cell") && gameStarted === 1) {
        const cell = e.target
        const position = cell.id
        const posSplit = position.split("_")
        const pos = [parseInt(posSplit[1]), parseInt(posSplit[2])];

        if (turns % 2 === 0 && posSplit[0] === "computer") {
            console.log("Attacking position:", pos);
            console.log("Player2 (computer) ship positions:", player2.board.ships[0].occupiedCells);

            const attackResult = player1.attack(player2.board, pos);
            const result = attackResult.result;

            if (result === null) {
                console.log("Already attacked this position!");
                return;
            }

            console.log(player1.name + " attacked computer");
            console.log(result)

            if (result === true) {
                cell.classList.add("hit");
            } else {
                cell.classList.add("miss");
            }

            turns++;
        }
    }
    if (turns % 2 !== 0 && gameStarted === 1) {

        computerTurns()
    }
    if (!player1) {
        console.log("Not started yet")
    } else {
        gameOverCheck()
    }

    if (e.target.classList.contains("backdrop") || e.target.classList.contains("winPopUp")) {
        location.reload();
    }
});

