let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector ("#comp-score");

const drawGame = () => {
    console.log("Game was draw");
    msg.innerHTML = "Game was draw. Play again!";
    msg.style.backgroundColor = "blue";
}

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random()*3);
    return options[randInd];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerHTML = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerHTML = `You lose ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice =", compChoice);

    if(userChoice === compChoice){
        drawGame(); //Draw game

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            // scissors, rock
            userWin = compChoice === "rock" ? true : false;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        
        playGame(userChoice);
    })
})