
// Second create an object to handle the display and the DOM logic

// Write a fonction to render the content on the gameboard of the webpage with X and O 

// Third , allow user to click on the square to add is mark 

//     make it unable to click if a mark is already there

// Clean up interface

// Space to input player name 

// button to start / restart the game

// Display element to show the result

const gameBoard = {
    board:[
    ["","",""],
    ["","",""],
    ["","",""]
    ]
} ;

let winner = false;

const user1 = gameControl("player1" , "X" );
const user2 = gameControl("player2" , "O");

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
        }
    }
};

function game(i){
    const caseNumber = {
        ligne :
        ["00", "01", "02",
        "10", "11", "12",
        "20", "21", "22"]
    };

    if ( i % 2 === 0 ){
        const userInput1 = prompt("Choose input (0 - 8 )")
        const [row, col] = caseNumber.ligne[userInput1].split("").map(Number);
        gameBoard.board[row][col] = "X";
        console.table(gameBoard.board);

        if(checkWinner("X")){
            user1.winner = true;
            user1.score++ ;
            user1.gameStates();
        }
    }else{
        const userInput2 = prompt("Choose input (0 - 8 )")
        const [row, col] = caseNumber.ligne[userInput2].split("").map(Number);
        gameBoard.board[row][col] = "O";
        console.table(gameBoard.board);

        if(checkWinner("O")){
            user2.winner = true;
            user2.score++;
            user2.gameStates();
            }
        }
    };

do{
    for (let i = 0; i < 9 ;i++){
        if (user1.winner === true || user2.winner === true){
            break
        } else if (i === 9){
            console.log("It's a tie");
        }else{
            game(i);    
        }
        
       
    }

} while (winner === false);
    


