function playRound(playerSelection, computerSelection){
    
    console.log("Rock, Paper, Scissors and Shoot...");
    console.log(`You: ${playerSelection} vs Computer: ${computerSelection}`);
    switch(playerSelection){
        case 'rock':
            if(computerSelection == 'rock'){
                console.log("tie")
                playRound(getPlayerSelection(),getComputerChoice())
            }
            else if(computerSelection=='scissors'){
                console.log("You win")
                
            }
            else{
                console.log("You lose")
                
            }
            break;
        case 'paper':
            if(computerSelection == 'paper'){
                console.log("tie")
                playRound(getPlayerSelection(),getComputerChoice())
                
            }
            else if(computerSelection=='rock'){
                console.log("You win")
                
            }
            else{
                console.log("You lose")

            }
            break;
            
        case 'scissors':
            if(computerSelection == 'scissors'){
                playRound(getPlayerSelection(),getComputerChoice())
                break;
            }
            else if(computerSelection=='paper'){
                console.log("You win")
                break;
            }
            else{
                console.log("You lose")
            }
            break;
    }
}

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

game();