let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let availableChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = Math.floor(Math.random() * availableChoice.length);
    return availableChoice[randomChoice];
}


function getHumanChoice(){
    let humanChoice = prompt("Rock ? Paper or Scissors ?", "");
    return capitalizefirst(humanChoice)
}


function capitalizefirst(string){
    let lower = string.toLowerCase()
    return lower[0].toUpperCase() + lower.slice(1)  ;
}

function playGame(){
    function playRound(humanChoice,computerChoice, round){
            if (computerChoice === humanChoice){
            console.log("Round "+ round + " : it's a tie!");
            } else if (computerChoice ==="Scissors" && humanChoice === "Rock" ||
                        computerChoice ==="Rock" && humanChoice === "Paper" ||
                        computerChoice ==="Paper" && humanChoice === "Scissors"){
            console.log("Round "+ round + " : You Win !");
            humanScore++ ;
            } else {
            console.log("Round "+ round + " : You lose ! " + computerChoice + " beat " + humanChoice );
            computerScore++ ;
        }
        }
    let i;
    for (let i = 1; i <= 5; i++){
        let round = i;
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice , round);
    }
    if (computerScore > humanScore) {
    console.log("Computer wins the game");
    } else if (computerScore < humanScore) {
        console.log("You win the game");
    } else {
        console.log("It’s a tie!");
    }

}

playGame()