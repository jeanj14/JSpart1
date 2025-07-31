function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (!["rock", "paper", "scissors"].includes(player)) {
        return "Invalid input! Please choose Rock, Paper, or Scissors.";
    }

    if (player === computer) {
        return "It's a tie!";
    }

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return `You Win! ${capitalize(player)} beats ${capitalize(computer)}`;
    } 
    else {
        return `You Lose! ${capitalize(computer)} beats ${capitalize(player)}`;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function game() {
    let roundsPlayed = 0;

    while (roundsPlayed < 5) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(result);

        if (!result.startsWith("Invalid")) {
            roundsPlayed++;
        }
    }

    console.log("Game finished.");
}

game();