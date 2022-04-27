function comPlay() {
    var choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userSelection, compSelection) {
    if (userSelection === compSelection) {
        return("It's A Draw!");
    } else if (userSelection === "Rock" && compSelection === "Paper" || userSelection === "Paper" && compSelection === "Scissor" || userSelection === "Paper" && compSelection === "Scissor") {
        return(`You Lose! ${compSelection} beats ${userSelection}`);
    } else if (userSelection === "Scissor" && compSelection === "Paper" || userSelection === "Paper" && compSelection === "Rock" || userSelection === "Rock" && compSelection === "Scissor") {
        return(`You Won! ${userSelection} beats ${compSelection}`);
    }
}

function playGame(n) {
    let userWin = 0;
    let compWin = 0;
    for (i = 0; i < n; i++) {
        let initUserChoice = prompt("Rock, Paper Or Scissor?").toLowerCase();
        const userChoice = initUserChoice.charAt(0).toUpperCase() + initUserChoice.slice(1);
        const compChoice = comPlay();
        let winner = playRound(userChoice, compChoice);
        console.log(winner);
        if (winner.slice(4, 8) === 'Lose') {
            compWin = compWin + 1;
        } else if (winner.slice(4, 7) === 'Won') {
            userWin = userWin + 1;
        }
    }
    if (userWin > compWin) {
        console.log("YOU ARE THE WINNER");
    } else if (userWin < compWin) {
        console.log("YOU LOSE TO THE TECH OVERLORDS");
    } else {
        console.log("NOBODY WINS SADGE");
    }
} 

playGame(5);