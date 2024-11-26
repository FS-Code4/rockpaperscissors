let buttons = document.querySelectorAll("button");
let totalScore = document.querySelector(".totalScore");
let playerChose= document.querySelector(".playerChose");
let computeChose = document.querySelector(".computerChose");
let result = document.querySelector(".result");
let restart = document.querySelector("#restart")


let computerChoice = getComputerChoice()



let playerScore = 0;
let computerScore = 0;
//Code for cpu choice
function getComputerChoice(random) {
    random = Math.random();
    if (random >=.33 && random <= .66){
        return "rock"
    }
    else if (random >=.66 && random <= .99){
            return "paper"
    }
    else return "scissors"
}

//Code for the player choice
//Iterate through each button and return the text
//Then make a compare function that will compare
//the argument of getHumanChoice and getCPUChoice
//Compare fn nested in humanChoice fn



function playGame() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            
            computerChoice = getComputerChoice();

            let humanChoice = button.textContent.toLowerCase();
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
                    playerScore++
                    
                }
                else {
                    console.log("You lose! " +computerChoice +" beats " +humanChoice)
                    computerScore++
                }
                playerChose.textContent = "You chose: " +humanChoice
                computeChose.textContent = "Computer chose: " +computerChoice
                totalScore.textContent = "Score : " +playerScore +" to " +computerScore 

                //If statment for the winner of the match
                if (playerScore === 5) {
                    result.textContent = "You win!"
                }
                else if (computerScore === 5) {
                    result.textContent = "You lose!"
                }        
        }); 
    });
}

restart.addEventListener("click", function() {
    location.reload();
})

playGame();
