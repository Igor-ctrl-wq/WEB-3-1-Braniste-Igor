const optiuni = ["piatra", "hartia", "foarfeca"];
const emoji = { piatra: "🪨", hartia: "📄", foarfeca: "✂️" };

const gameScore = {
    player: 0,
    computer: 0,
    draws: 0,
    displayScore: function () {
        alert(`Scor — Tu: ${this.player} | Calculator: ${this.computer} | Egalități: ${this.draws}`);
    }
};

function alegeCalculator() {
    return optiuni[Math.floor(Math.random() * optiuni.length)];
}

function stabilesteCastigator(user, computer) {
    if (user === computer) return "draw";
    if (
        (user === "piatra" && computer === "foarfeca") ||
        (user === "foarfeca" && computer === "hartia") ||
        (user === "hartia" && computer === "piatra")
    ) {
        return "player";
    }
    return "computer";
}

function joacaRunda(userChoice) {
    const computerChoice = alegeCalculator();
    const castigator = stabilesteCastigator(userChoice, computerChoice);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("computerChoice").textContent = computerChoice;
    document.getElementById("userEmoji").textContent = emoji[userChoice];
    document.getElementById("computerEmoji").textContent = emoji[computerChoice];

    const resultEl = document.getElementById("result");
    resultEl.classList.remove("win", "lose", "draw");

    let mesaj;
    if (castigator === "draw") {
        gameScore.draws++;
        mesaj = "Egalitate!";
        resultEl.classList.add("draw");
    } else if (castigator === "player") {
        gameScore.player++;
        mesaj = "Ai câștigat!";
        resultEl.classList.add("win");
    } else {
        gameScore.computer++;
        mesaj = "Calculatorul a câștigat!";
        resultEl.classList.add("lose");
    }

    resultEl.textContent = mesaj;
    document.getElementById("playerScore").textContent = gameScore.player;
    document.getElementById("computerScore").textContent = gameScore.computer;
    document.getElementById("drawScore").textContent = gameScore.draws;

    gameScore.displayScore();
}

document.getElementById("piatra").addEventListener("click", () => joacaRunda("piatra"));
document.getElementById("hartia").addEventListener("click", () => joacaRunda("hartia"));
document.getElementById("foarfeca").addEventListener("click", () => joacaRunda("foarfeca"));