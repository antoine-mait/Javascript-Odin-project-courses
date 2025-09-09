let humanScore = 0;
let computerScore = 0;
const resultsDiv = document.querySelector("#results");

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', btnAction);

});

function btnAction(event) {
    const humanChoiceBtn = event.target.innerText;
    const computerChoiceBtn = computerChoice();
    if (computerChoiceBtn === humanChoiceBtn){
        resultsDiv.textContent = "Results : " + "Computer : " + computerScore + " Human : " + humanScore + " <br> "+" It's a tie for this round " ;

         } else if (didHumanWin(humanChoiceBtn, computerChoiceBtn)){
    humanScore++ ;
    resultsDiv.textContent = "Results : " + "Computer : " + computerScore + " Human : " + humanScore ;

    } else {
    computerScore++ ;
    resultsDiv.textContent = "Results : " + "Computer : " + computerScore + " Human : " + humanScore ;

    }
    if (computerScore === 5){
        resultsDiv.textContent = "Computer won" ;
    } else if (humanScore === 5) {
        resultsDiv.textContent = "You won";
    };
    if (computerScore === 5 || humanScore === 5) {
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
    };
  };


function computerChoice(){
    let availableChoice = ["Rock", "Paper", "Scissors"];
        let randomChoice = Math.floor(Math.random() * availableChoice.length);
        return availableChoice[randomChoice];
}

function didHumanWin(human, computer) {
  return (
    (human === "Rock" && computer === "Scissors") ||
    (human === "Paper" && computer === "Rock") ||
    (human === "Scissors" && computer === "Paper")
  );
};