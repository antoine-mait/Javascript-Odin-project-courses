const gameBoard = {
    board:[
    ["","",""],
    ["","",""],
    ["","",""]
    ]
} ;

let user1, user2;
const inputPlayer1Name = document.querySelector(".player1");
const inputPlayer2Name = document.querySelector(".player2");
let scoreUpdate = document.querySelector(".score");


function getNames() {
  const player1Name = inputPlayer1Name.value || "Player 1 ";
  const player2Name = inputPlayer2Name.value || "Player 2 ";
  return { player1Name, player2Name };
}

document.querySelector(".start").onclick = () => {
  const names = getNames();

  user1 = gameControl(names.player1Name , "X" );
  user2 = gameControl(names.player2Name , "O");

  playGame();
};

document.querySelector(".reset").onclick = () => {
  gameBoard.board = [
    ["","",""],
    ["","",""],
    ["","",""]
  ];

  document.querySelectorAll(".tile").forEach(tile => {
    tile.textContent = "";
    tile.classList.remove("active", "clickable");
  });
  
  user1.winner = false;
  user2.winner = false;

  playGame();
};

const winningLines = [
  [[0,0],[0,1],[0,2]],
  [[1,0],[1,1],[1,2]],
  [[2,0],[2,1],[2,2]],
  [[0,0],[1,0],[2,0]],
  [[0,1],[1,1],[2,1]],
  [[0,2],[1,2],[2,2]],
  [[0,0],[1,1],[2,2]],
  [[0,2],[1,1],[2,0]]
];

const caseNumber = { 
    ligne : 
[   "00", "01", "02",
    "10", "11", "12",
    "20", "21", "22"
] };

function checkWinner(mark) {
  return winningLines.some(line => line.every(([r,c]) => gameBoard.board[r][c] === mark));
}

function gameControl(playerName, mark){
    return{
        playerName,
        score: 0,
        mark,
        winner: false,
        gameStates(){
            console.log(`${this.playerName} has ${this.score} points.
mark is ${this.mark}
winner: ${this.winner}`);
        const popover = document.querySelector("#popover");
        popover.innerHTML = `${this.playerName} has won.`
        popover.showPopover()

        if (user1.winner === true){
          scoreUpdate.innerHTML = "Score: "+ this.score +" - 0";
        } else{
          scoreUpdate.innerHTML = "Score: 0 - " + this.score;
        };
        }
    };
};

async function playGame() {
  for (let i = 0; i < 9; i++) {
    if (user1.winner || user2.winner) break;

    if (i % 2 === 0) {
      const move = await playerMove("X"); // waits until click
      placeMark(move, "X");
      if (checkWinner("X")) {
        user1.winner = true;
        user1.score++;
        user1.gameStates();
        break;
      }
    } else {
      const move = await playerMove("O");
      placeMark(move, "O");
      if (checkWinner("O")) {
        user2.winner = true;
        user2.score++;
        user2.gameStates();
        break;
      }
    }
  }
}

function placeMark(tileId, mark) {
  const [row, col] = caseNumber.ligne[tileId];
  gameBoard.board[row][col] = mark;
}
    
let resolveMove;

document.querySelectorAll(".tile").forEach(tile => {
    tile.addEventListener("click", () => {
        if (!resolveMove) return;

        const tileId = tile.dataset.id;
        const mark = resolveMove.mark;
        tile.textContent = mark;
        tile.classList.add("active");
        tile.classList.add("clickable");

        resolveMove.resolve(tileId);
        resolveMove = null;
    });
});

function playerMove(mark) {
    return new Promise(resolve => {
        resolveMove = { resolve, mark };
    });
}



