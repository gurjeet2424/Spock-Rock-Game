import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";


const playerScore = document.getElementById('player-score');
const playerChoice = document.getElementById('player-choice');
const computerScore = document.getElementById('computer-score');
const computerChoice = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissor = document.getElementById('playerScissor');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissor = document.getElementById('computerScissor');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const choices = {
    rock:{name:'Rock', defeats:['scissor','lizard']},
    paper:{name:'Paper', defeats:['rock','spock']},
    scissor:{name:'Scissor', defeats:['paper','lizard']},
    lizard:{name:'Lizard', defeats:['paper','spock']},
    spock:{name:'Spock', defeats:['scissor','rock']},
};


const allGameIcons = document.querySelectorAll('.fa-solid');

let computerchoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;


function resetSelected(){
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
        stopConfetti();
        removeConfetti();
    });
}

function resetAll(){
    computerScoreNumber = 0;
    playerScoreNumber = 0;
    playerScore.textContent = playerScoreNumber;
    computerScore.textContent = computerScoreNumber;
    playerChoice.textContent = '';
    computerChoice.textContent = '';
    resultText.textContent = '';
    resetSelected();
}
window.resetAll = resetAll;


function computerRandomChoice(){
    const computerChoiceNumber = Math.random();
    if(computerChoiceNumber < 0.2){
        computerchoice = 'rock';
        }
        else if(computerChoiceNumber <= 0.4){
            computerchoice = 'paper'
        }
        else if(computerChoiceNumber <=0.6){
            computerchoice = 'scissor';
        }
        else if(computerChoiceNumber <= 0.8){
            computerchoice = 'lizard';
        }
        else{
            computerchoice = 'spock'
        }
}

function displayComputerChoice(){
    switch(computerchoice){
        case 'rock':
            computerRock.classList.add('selected');
            computerChoice.textContent = '-- Rock';
            break;
        case 'paper':
            computerPaper.classList.add('selected');
            computerChoice.textContent = '-- Paper';
            break;
        case 'scissor':
            computerScissor.classList.add('selected');
            computerChoice.textContent = '-- Scissor';
             break;
        case 'lizard':
            computerLizard.classList.add('selected');
            computerChoice.textContent = '-- Lizard';
             break;
        case 'spock':
            computerSpock.classList.add('selected');
            computerChoice.textContent = '-- Spock';
             break;
        default:
            break;    
        }
}

function updateScore(choice){
    console.log(choice, computerchoice);
    if(choice === computerchoice){
        resultText.textContent = "It's a tie!"
    } else{
        const choiceofplayer = choices[choice];
        console.log(choiceofplayer.defeats.indexOf(computerchoice));
        if(choiceofplayer.defeats.indexOf(computerchoice) > -1){
            startConfetti();
            resultText.textContent = "You Won!";
            playerScoreNumber++;
            playerScore.textContent = playerScoreNumber;
        }else{
            resultText.textContent = "You Lost";
            computerScoreNumber++;
            computerScore.textContent = computerScoreNumber;
        }
    }
}

function checkResult(choice){
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(choice);
}

function select(choice){
    checkResult(choice);
    switch(choice){
        case 'rock':
            playerRock.classList.add('selected');
            playerChoice.textContent = '-- Rock';
            break;
        case 'paper':
            playerPaper.classList.add('selected');
            playerChoice.textContent = '-- Paper';
            break;
        case 'scissor':
            playerScissor.classList.add('selected');
            playerChoice.textContent = '-- Scissor';
             break;
        case 'lizard':
            playerLizard.classList.add('selected');
            playerChoice.textContent = '-- Lizard';
             break;
        case 'spock':
            playerSpock.classList.add('selected');
            playerChoice.textContent = '-- Spock';
             break;
        default:
            break;    


    }
}
window.select = select;

resetAll();