let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
   
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    let restart = "";

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        playerScore += 1;
        result = ('<strong>You Win!</strong><div style="font-size: .7em;"> ' + playerSelection + ' beats ' + computerSelection +'.</div>');

        if (playerScore >= 5) {
            restart = 'New Game?';
            disableButtons ();
        }
    }

    else if (playerSelection == computerSelection) {
        result = ('<strong>Draw!</strong><div style="font-size: .7em;">You both chose ' + playerSelection + '.</div>');
    }

    else {
        computerScore += 1;
        result = ('<strong>You Lose!</strong><div style="font-size: .7em;"> ' + computerSelection + ' beats ' + playerSelection +'.</div>');

        if (computerScore >= 5) {
            restart = 'New Game?';
            disableButtons ();
        }
    }
    
    document.getElementById('choices').innerHTML = "Computer chose: " + computerSelection;
    document.getElementById('result').innerHTML = result;
    document.getElementById('score').innerHTML = "Your Score: " + playerScore + "<br>Computer's Score: " + computerScore;
    document.getElementById('restart').innerHTML = restart;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})










