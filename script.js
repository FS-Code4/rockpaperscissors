function getComputerChoice(rps) {
    let random = Math.random();
    if (random >=.33 && random <= .66){
        return "rock"
    }
    else if (random >=.66 && random <= .99){
            return "paper"
    }
    else return "scissors"
}

function getHumanChoice(humanChoice) {
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    if (choice === "rock") {
        return "rock"
    }
    if (choice === "paper") {
        return "paper"
    }
    if (choice === "scissors") {
        return "scissors"
    }
}

let humanScore = 0;
let computerScore = 0;

//Fn playRound takes the cpu and human choices as arguments, plays a round, increments the round winners score and logs a winner announcement

function playGame() {

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    }
    else if ( 
    (humanChoice === "rock" && computerChoice ==="scissors") ||
    (humanChoice === "paper" && computerChoice ==="rock") ||
    (humanChoice === "scissors" && computerChoice ==="paper")
    ) 
    {
        console.log("You win! " +humanChoice +" beats " +computerChoice)
        humanScore++
    }
    else {
        console.log("You lose! " +computerChoice +" beats " +humanChoice)
        computerScore++
    }
    console.log(humanScore +" to " +computerScore)
}
    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
}
}

playGame();

if (humanScore > computerScore) {
    console.log("Winner winner, chicken dinner!")
}
else if (humanScore < computerScore) {
    console.log("You lose")
}
else {
    console.log("Tie!")
}
