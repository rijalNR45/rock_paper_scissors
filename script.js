const optionRock = document.querySelector("#rock");
const optionPaper = document.querySelector("#paper");
const optionScissors = document.querySelector("#scissors");
const options = document.querySelector(".options");


optionRock.addEventListener('click', () =>{
    console.log("rock clicked.");
    
    options.innerHTML = "<img src='rock.jpeg' class = 'afterEffect'>";
    console.log(options.innerHTML);
    
    
    })
optionPaper.addEventListener('click', () =>{
    console.log("paper clicked.");
    options.innerHTML = "<img src='paper.jpeg' class = 'afterEffect'>";
    })
    optionScissors.addEventListener('click', () =>{
        console.log("scissors clicked.");
        options.innerHTML = "<img src='scissors.png' class = 'afterEffect'>";
    })
            




// // const buttonToRunMain = document.querySelector("#startButton");
// // buttonToRunMain.addEventListener = ("click",rockPaperScissors());
// const userClicked = document.querySelector(".optionsContainer");
//     console.log(userClicked);
// userClicked.addEventListener("click", rockPaperScissors());
    
// function rockPaperScissors(){

    
//     compChoiceGeneration;
//     function compChoiceGeneration(){

// let randomNumber = Math.floor((Math.random())*3);
// console.log(randomNumber);
//     const compImg = document.querySelector(".animate");
// let computerChoice;
// if(randomNumber == 0){
//     computerChoice = "rock";
//     console.log(computerChoice);
//     compImg.innerHTML = '<img src="rock.jpeg" class = "choice" alt="rock">';
// }
// else if(randomNumber == 1){
//     computerChoice = "paper";
//     compImg.innerHTML = '<img src="paper.jpeg" class = "choice" alt="paper">';
// }
// else{
//     computerChoice = "scissors";
//     compImg.innerHTML = '<img src="scissors.png" class = "choice" alt="scissors">';
// }
// }

// };
// let computerCh = "Computer's choice is: " + computerChoice + ".";

// let a = " Computer won!"
// let b = " You won!"

// if(userChoice == computerChoice){
//     alert(computerCh +  " The match is draw.");
// }
// else if(userChoice == "rock" && computerChoice == "paper"){
//     alert(computerCh + a);
// }
// else if(userChoice =="rock" && computerChoice == "scissors"){
//     alert(computerCh + b);
// }
// else if(userChoice == "paper" && computerChoice == "rock"){
//     alert(computerCh + b);
// }

// else if(userChoice == "paper" && computerChoice =="scissors"){
//     alert(computerCh + a);
// }
// else if(userChoice =="scissors" && computerChoice == "rock"){
//     alert(computerCh + a);
// }
// else if(userChoice == "scissors" && computerChoice == "paper"){
//     alert(computerCh + b);
// }
// else{
//     alert("result cannot be obtained");
// }


