// ===== 1. HTML pakken =====
const computer = document.querySelector("#computer");
const human = document.querySelector("#human");
const result = document.querySelector("#result");

const humanScoreOutput = document.querySelector("#humanScore");
const computerScoreOutput = document.querySelector("#computerScore");

// ALLE knoppen pakken
const buttons = document.querySelectorAll(".keuze");

// ===== 2. Variabelen =====
let humanScore = 0;
let computerScore = 0;

// ===== 3. Computer keuze (met switch) =====
function computerKiest() {

    let nummer = Math.floor(Math.random() * 3);
    let choice = "";

    switch (nummer) {
        case 0:
            choice = "steen";
            break;
        case 1:
            choice = "papier";
            break;
        case 2:
            choice = "schaar";
            break;
    }

    computer.innerHTML = choice;
    return choice;
}

// ===== 4. Winnaar bepalen =====
function checkWinner(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        result.innerHTML = "Gelijkspel";
        result.style.color = "black";
        return;
    }

    switch (humanChoice + computerChoice) {

        case "steenschaar":
        case "papiersteen":
        case "schaarpapier":
            result.innerHTML = "Jij wint!";
            result.style.color = "green";
            humanScore++;
            break;

        default:
            result.innerHTML = "Computer wint!";
            result.style.color = "red";
            computerScore++;
    }

    humanScoreOutput.innerHTML = humanScore;
    computerScoreOutput.innerHTML = computerScore;
}

// ===== 5. 1 event handler voor alles =====
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        let humanChoice = button.innerHTML;

        human.innerHTML = humanChoice;

        let computerChoice = computerKiest();

        checkWinner(humanChoice, computerChoice);

    });

});