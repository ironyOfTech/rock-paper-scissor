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
let count=0
// create a function playGame

function playGame()
{
   
        // Create a variable human_choice for user input and ask the user to input the value by storing it in that variable.
        const buttons = document.querySelectorAll("button");
        
         buttons.forEach(button => {
          button.addEventListener("click", () => {
            if (count===5) return;
            const human_choice = button.textContent.toLowerCase();
            // console.log(human_choice);
             let humanSelection=HumanChoice(human_choice);
        // create a variable computer choice and store the random numbers from 0-3 in it.
             let comp_choice=Math.floor(Math.random()*3);
        // create a variable to store the value returned by function ComputerChoice.
             let computerSelection=ComputerChoice(comp_choice)
        // call the playRound function to display the final output of the game.
             playRound(humanSelection,computerSelection);
             count++;

             if(count===5)
             {
        
                checkFinalWinner();
                
             }
          });
          });
        // let human_choice= button.value;
        
        // create a variable to store the value returned by function HumanChoice.
       
       
    }
    function checkFinalWinner(){

        const resultDiv = document.createElement("div")
        resultDiv.classList.add("result-box")
        const para= document.createElement("p")
        para.id="para-1"
        const container = document.querySelector(".container")
        const imageComp = document.createElement("img");
        imageComp.classList.add("img-1");
        const imageGirl= document.createElement("img");
        imageGirl.classList.add("img-2");
        container.appendChild(resultDiv)
        resultDiv.appendChild(para)
        
         if(humanScore>computerScore)
         { 
             // user wins the game
             container.style.height="600px"
             para.textContent = `You won the game and your score is ${humanScore}`;
             imageGirl.src="./images/girl.jpg"
             resultDiv.appendChild(imageGirl)
            
         }
         else if(humanScore==computerScore)
         {
             // user and winner both have equal score
             para.textContent= `Its a tie.Your score is ${humanScore} and computer's score is ${computerScore}`;
         }
         else{
             //computer wins the game
            container.style.height="600px"
            para.textContent = `Computer won the game with score ${computerScore}`;
            imageComp.src="./images/computer.jpg"
            resultDiv.appendChild(imageComp)

         }
    
        }
// Call the final functio playgame to declare the winner after completing all five rounds of the game.
playGame();
