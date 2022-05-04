function comPlay() {
    var choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userSelection, compSelection) {
    if (userSelection === compSelection) {
        document.getElementById('display').textContent = "It's A Draw!";
    } else if (userSelection === "Rock" && compSelection === "Paper" || userSelection === "Paper" && compSelection === "Scissor" || userSelection === "Paper" && compSelection === "Scissor") {
        document.getElementById('display').textContent = `You Lose! ${compSelection} beats ${userSelection}`;
        compWin++;
    } else if (userSelection === "Scissor" && compSelection === "Paper" || userSelection === "Paper" && compSelection === "Rock" || userSelection === "Rock" && compSelection === "Scissor") {
        document.getElementById('display').textContent = `You Won! ${userSelection} beats ${compSelection}`;
        userWin++;
    }
}

function displayScore() {
    document.getElementById('user').textContent = userWin;
    document.getElementById('comp').textContent = compWin;     
}

function resetGlobalVariables() {
    userWin = 0;
    compWin = 0;
}

function gameOver () {
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach((button) => {
        button.removeEventListener('click', playButton);
    });
}

function playButton(e) {
    const compChoice = comPlay();
    console.log(e.target.id);
    if (e.target.id === 'rock') {
        playRound('Rock', compChoice);
        displayScore();
    } else if (e.target.id === 'paper') {
        playRound('Paper', compChoice);
        displayScore();
    } else if (e.target.id === 'scissor') {
        playRound('Scissor', compChoice);
        displayScore();
    }
    if (userWin == 5) {
        document.getElementById('display').textContent = "YOU HAVE DEFEATED THE COMPUTER OVERLORDS!";
        gameOver();
        return;
    } else if (compWin == 5) {
        document.getElementById('display').textContent = "YOU LOST! THIS WORLD IS FINISHED";
        gameOver();
        return;
    }
}

function gameStart() {
    resetGlobalVariables();
    displayScore();
    document.getElementById('display').textContent = "Let's see what you got!";
    const buttons = document.querySelectorAll('.buttons');
    buttons.forEach((button) => {
        button.addEventListener('click', playButton);
});
}

let userWin;
let compWin;
gameStart();
const start = document.querySelector('#reset')
start.addEventListener('click', gameStart);

