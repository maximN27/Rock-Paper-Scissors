let ComputerScore = 0
let HumanScore = 0
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice == 0) computerChoice = 'rock';
    else if (computerChoice == 1) computerChoice = 'paper';
    else computerChoice = 'scissors';

    if (humanChoice == computerChoice) {
        updateResult(`Match tied you chose ${computerChoice} and computer chose ${humanChoice}`);
        updateScore(HumanScore, ComputerScore);
    }
    //wining conditions
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
        (humanChoice == 'paper' && computerChoice == 'rock') || 
        (humanChoice == 'scissors' && computerChoice == 'paper')) 
        {
            HumanScore++;
            updateResult(`You won! ${humanChoice} beats ${computerChoice}`);
            updateScore(HumanScore, ComputerScore);
        }
    else {
        ComputerScore++;
        updateResult(`You lose! ${computerChoice} beats ${humanChoice}`);
        updateScore(HumanScore, ComputerScore);
    }
}

// Control DOMS
let controls = document.querySelector("#controls");
controls.addEventListener("click", (event) => {
    let target = event.target;
    if (HumanScore < 5 && ComputerScore < 5) {
        switch(target.id) {
            case "rock":
                playRound("rock", getComputerChoice());
                break;
            case "paper":
                playRound("paper", getComputerChoice());
                break;
            case "scissors":
                playRound("scissors", getComputerChoice());
                break;
        }
    }
    else {
        if (HumanScore == 5) updateResult("You Won!");
        else updateResult("Computer Won!");
    }
});


// Result DOMS
function updateResult(string) {
    let resultDiv = document.getElementById("result");
    let result = document.createElement("h1");
    if (resultDiv.firstElementChild) {
        resultDiv.removeChild(resultDiv.firstElementChild);
    }
    result.textContent = string;
    resultDiv.appendChild(result);
}

// Score DOMS
function updateScore(HumanScore, ComputerScore) {
    let control = document.querySelector("#score");
    let h1 = document.createElement("h1");
    h1.textContent = `Your Score: ${HumanScore} Computer: ${ComputerScore}`;
    if (control.firstElementChild) {
        control.removeChild(control.firstElementChild);
    }
    control.appendChild(h1);
}