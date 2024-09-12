main();
function main(){
var inputObtained;
var computerChoice;

const options = document.querySelector(".options");
takingInputFromUser();



function takingInputFromUser(){
    const optionRock = document.querySelector("#rock");
    const optionPaper = document.querySelector("#paper");
    const optionScissors = document.querySelector("#scissors");

    optionRock.addEventListener('click', function() {
        console.log("rock clicked.");
        inputObtained = 'rock';
        optionPaper.style.visibility = 'hidden';
        optionScissors.style.visibility = 'hidden';
        compChoiceGeneration();
        resultBoardAlg();
    
    
    })
    optionPaper.addEventListener('click', function(){
        console.log("paper clicked.");
        inputObtained = 'paper';
        optionRock.style.visibility = 'hidden';
        optionScissors.style.visibility = 'hidden';
        compChoiceGeneration();
        resultBoardAlg();
    })

    optionScissors.addEventListener('click', function(){
        console.log("scissors clicked.");
        inputObtained = 'scissors';
        optionRock.style.visibility = 'hidden';
        optionPaper.style.visibility = 'hidden';
        compChoiceGeneration();
        resultBoardAlg();
    })
        
}

    function compChoiceGeneration(){
        console.log("second function runs!");

const compRock = document.querySelector(".initialForm#rock");
const compPaper = document.querySelector(".initialForm#paper");
const compScissors = document.querySelector(".initialForm#scissors");


let randomNumber = Math.floor((Math.random())*3);
console.log(randomNumber);

if(randomNumber == 0){
    computerChoice = "rock";
    console.log(computerChoice);
    compRock.classList.remove("initialForm");
    
}
else if(randomNumber == 1){
    computerChoice = "paper";
    console.log(computerChoice);
    compPaper.classList.remove("initialForm");
    
}
else{
    computerChoice = "scissors";
    console.log(computerChoice);
    compScissors.classList.remove("initialForm");
    
}
return computerChoice;
};

function resultBoardAlg(){
    const resultBoard = document.querySelector(".resultBoard");
    let userScore = 0;
    let computerScore = 0;
    


let resultA = " Computer won!";
let resultB = " You won!";
let resultC = "The match is draw!";

if(inputObtained == computerChoice){
    resultBoard.textContent = resultC;
    
}
else if(inputObtained == "rock" && computerChoice == "paper"){
    resultBoard.textContent = resultA;
    computerScore += 1;
    console.log(computerScore);
    }
else if(inputObtained =="rock" && computerChoice == "scissors"){
    resultBoard.textContent = resultB;
    userScore +=1;
    }
else if(inputObtained == "paper" && computerChoice == "rock"){
    resultBoard.textContent = resultB;
    userScore +=1;
}

else if(inputObtained == "paper" && computerChoice =="scissors"){
    resultBoard.textContent = resultA; 
    computerScore += 1;
}

else if(inputObtained =="scissors" && computerChoice == "rock"){
    resultBoard.textContent = resultA;
    computerScore += 1;
}
else if(inputObtained == "scissors" && computerChoice == "paper"){
    resultBoard.textContent = resultB;
    userScore +=1;
}

else{
    exit;
}

const userScoreHolder = document.querySelector(".your_score");
userScoreHolder.textContent = userScore;


const computerScoreHolder = document.querySelector(".comp_score");
computerScoreHolder.textContent = computerScore;

const resultBoardColored = document.querySelector(".resultBoard");
if(userScore > computerScore){
    resultBoardColored.style.color = "blue";  
}
else if(userScore < computerScore){
    resultBoardColored.style.color  = "red";
}
else{
    resultBoardColored.style.color = "black";
}

};
}

const reloadButton = document.querySelector('.restart');


reloadButton.addEventListener('click', function() {
  location.reload(); 
});



