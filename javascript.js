const buttons = document.querySelectorAll('.btn');
const userScore = document.getElementById('userScore');
const cpuScore = document.getElementById('cpuScore');
const userChoice = document.getElementById('userChoice');
const cpuChoice = document.getElementById('cpuChoice');
const result= document.getElementById('result');
let userScoreInt =0;
let cpuScoreInt =0;


  
buttons.forEach((button) => {
    
    // and for each one we add a 'click' listener
    button.addEventListener('click', (e)=>{
      playRound(button.id,getComputerChoice());
    });
  });


function checkScore(){
    if(Number(userScoreInt) == 5){
        alert("You won!")
        reset();
        
    }
    else if(Number(cpuScoreInt) == 5){
        alert("You lost");
        reset();
    }
}
function reset(){
    userScoreInt =0;
    cpuScoreInt =0;
    userScore.textContent=userScoreInt;
    cpuScore.textContent=cpuScoreInt;

}
function playRound(playerSelection, computerSelection){
    
    userChoice.textContent=playerSelection;
    cpuChoice.textContent=computerSelection;
    switch(playerSelection){
        case 'rock':
            if(computerSelection == 'rock'){
                result.textContent="tied";
                
            }
            else if(computerSelection=='scissors'){
                result.textContent="won ";
                userScoreInt++;
                userScore.textContent=userScoreInt;
                checkScore()
            }
            else{
                result.textContent="lost"; 
                cpuScoreInt++;
                cpuScore.textContent=cpuScoreInt;
                checkScore()
                
            }
            break;
        case 'paper':
            if(computerSelection == 'paper'){
                result.textContent="tied";    
                
            }
            else if(computerSelection=='rock'){
                result.textContent="won";
                userScoreInt++;
                userScore.textContent=userScoreInt;
                checkScore()
                
                
            }
            else{
                result.textContent="lost";
                cpuScoreInt++;
                cpuScore.textContent=cpuScoreInt;
                checkScore()
                
            }
            break;
            
        case 'scissors':
            if(computerSelection == 'scissors'){
                result.textContent="tied";
            
            }
            else if(computerSelection=='paper'){
                result.textContent="won";
                userScoreInt++;
                userScore.textContent=userScoreInt;
                checkScore()
                
            }
            else{
                result.textContent="lost";
                cpuScoreInt++;
                cpuScore.textContent=cpuScoreInt;
                checkScore()
                
            }
            break;
    }
}
/*
function getPlayerSelection(){
    let playerSelection = prompt("Please enter rock paper or scissors:").toLowerCase();
    switch(playerSelection){
        case 'rock':
            return playerSelection;
        case 'paper':
            return playerSelection;
        case 'scissors':
            return playerSelection;
        default:
            console.log("error");
            return getPlayerSelection();
            
    }
    
}
*/
function getComputerChoice(){
    
    let computerSelection =null;

    switch(Math.floor(Math.random() *3)){
        case 0:
            computerSelection = "rock";
            return computerSelection;
        case 1:
            computerSelection = "paper";
            return computerSelection;
        case 2:
            computerSelection = "scissors";
            return computerSelection;
    }
}
function getRounds(){
    rounds = Number(prompt("How many rounds would you like to play"));
    
    if (Number.isInteger(rounds)==false){
       console.log("errors");
       return game();
    }
    else{
        return rounds;
    
    }
    
}
function game(){
    let rounds = getRounds();
    for(let i =1;i<=rounds;i++){
        console.log(i);
        playRound(getPlayerSelection(),getComputerChoice());
    }
}

