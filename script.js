let ComputerScore = 0
let HumanScore = 0
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter you choice(Rock, Paper, Scissor): ");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice == 0) computerChoice = 'rock';
    else if (computerChoice == 1) computerChoice = 'paper';
    else computerChoice = 'scissors';

    if (humanChoice == computerChoice) {
        console.log(`Match tied you chose ${computerChoice} and computer chose ${humanChoice}`);
    }
    else if ((humanChoice == 'rock' && computerChoice == 'scissors') 
        || (humanChoice == 'paper' && computerChoice == 'rock') 
        || (humanChoice == 'scissors' && computerChoice == 'paper')) 
        {
            HumanScore++;
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        }
    else {
        ComputerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    let HumanSelection = 0;
    let ComputerSelection = 0;

    HumanScore = 0;
    ComputerScore = 0;

    for (i = 0; i < 5; i++) {
        HumanSelection = getHumanChoice();
        ComputerSelection = getComputerChoice();

        playRound(HumanSelection, ComputerSelection);
    }

    if (HumanScore > ComputerScore) console.log(`Congratulations You won by ${HumanScore - ComputerScore} points`);
    else console.log(`Sorry You lost by ${ComputerScore - HumanScore} points`)
}

playGame();