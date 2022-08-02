let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
   
function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result = ""

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
 
        playerScore += 1
        result = ('<strong>You Win!</strong> ' + playerSelection + ' beats ' + computerSelection +'.')
    }

    else if (playerSelection == computerSelection) {
        result = ('<strong>Draw!</strong> You both chose ' + playerSelection + '.')
    }

    else {
        computerScore += 1
        result = ('<strong>You Lose!</strong> ' + computerSelection + ' beats ' + playerSelection +'.')
    }

    document.getElementById('choices').innerHTML = "You chose: " + playerSelection +
    "<br>Computer chose: " + computerSelection

    document.getElementById('result').innerHTML = result
    document.getElementById('score').innerHTML = "Computer's Score: " + computerScore +
    "<br>Your Score: " + playerScore

    
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})










