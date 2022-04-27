function comPlay() {
    var choices = ['Rock', 'Paper', 'Scissor'];
    return choices[Math.floor(Math.random() * choices.length)];
}

let initUserChoice = prompt("Rock, Paper Or Scissors?").toLowerCase();
const userChoice = initUserChoice.charAt(0).toUpperCase() + initUserChoice.slice(1);
const compChoice = comPlay();