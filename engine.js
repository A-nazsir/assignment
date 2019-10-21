let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s']
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(playerChoice, computerChoice) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    var conjuction = ""
    switch (playerChoice) {
        case 'r':
            conjuction = 'destroy'
            break;
        case 'p':
            conjuction = 'cover'
            break;
        case 's':
            conjuction = 'cut'
            break
    }
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} ${conjuction} ${convertToWord(computerChoice)}${smallCompWord} , You win! 😄`;
}

function lose(playerChoice, computerChoice) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    var conjuction = ""
    switch (playerChoice) {
        case 'r':
            conjuction = 'cover by'
            break;
        case 'p':
            conjuction = 'cut by'
            break;
        case 's':
            conjuction = 'destroy by'
            break
    }
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} ${conjuction} ${convertToWord(computerChoice)}${smallCompWord} , You lose.. 😡`;

}
function draw(playerChoice, computerChoice) {
    const smallPlayerWord = "player".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(playerChoice)}${smallPlayerWord} equals ${convertToWord(computerChoice)}${smallCompWord} , It's a draw 😶`;

}
function game(playerChoice) {
    const computerChoice = getComputerChoice();
    // console.log("player choice =>" + playerChoice)
    // console.log("computer choice =>" + computerChoice) 
    switch (playerChoice + computerChoice) {
        case "rs":
        case "pr": 
        case "sp":
            win(playerChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(playerChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(playerChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })

    scissors_div.addEventListener('click', function(){
        game("s")
    })
}


main();