// create a variable humanScore=0.
let humanScore=0;
// create a variable computerScore=0.
let computerScore=0

//Create a function ComputerChoice.
function ComputerChoice(comp_choice){
    
    if(comp_choice===0)
    {
        return "rock";
    }
    else if(comp_choice===1)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

// create a function HumanChoice
function HumanChoice(human_choice){
    return human_choice;
}


// create a function playRound which takes humanchoice and compchoice as two parameters.
function playRound(humanchoice,compchoice)
{
    if((humanchoice=="rock" && compchoice=="paper")||(humanchoice=="paper" && compchoice=="scissors")||(humanchoice=="scissors" && compchoice=="rock"))
    {
        console.log(`You Lose!.${compchoice} beats ${humanchoice}`);
        computerScore++;
    }
    else if(humanchoice==compchoice)
    {
        console.log(`It's a tie.${humanchoice} and ${compchoice} are same`);
    }
    else{
        console.log(`You win!.${humanchoice} beats ${compchoice}`);
        humanScore++;
    }
    
    
}

// create a variable that controls the loop
let count=1
// create a function playGame

function playGame()
{
    while(count<=5)
    { 
        
        // Create a variable human_choice for user input and ask the user to input the value by storing it in that variable.
        let human_choice=prompt("Enter Your Choice: ")
        human_choice=human_choice.toLowerCase();
        // create a variable to store the value returned by function HumanChoice.
        let humanSelection=HumanChoice(human_choice);
        // create a variable computer choice and store the random numbers from 0-3 in it.
        let comp_choice=Math.floor(Math.random()*3);
        // create a variable to store the value returned by function ComputerChoice.
        let computerSelection=ComputerChoice(comp_choice)
        // call the playRound function to display the final output of the game.
        playRound(humanSelection,computerSelection);
        count++;
    }
    if(humanScore>computerScore)
    { 
        // user wins the game
        alert("You won the Game!")
    }
    else if(humanScore==computerScore)
    {
        // user and winner both have equal score
        alert("It's a tie!")
    }
    else{
        //computer wins the game
        alert("Computer wins the game!");
    }
    
}
// Call the final functio playgame to declare the winner after completing all five rounds of the game.
playGame();
