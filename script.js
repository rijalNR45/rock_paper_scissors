function rockPaperScissors(){
let userChoice = prompt("Enter your choice between rock, paper and scissors:");
let randomNumber = Math.floor((Math.random())*3);
console.log(randomNumber);
let computerChoice;
if(randomNumber == 0){
    computerChoice = "rock";
}
else if(randomNumber == 1){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
let computerCh = "Computer's choice is: " + computerChoice + ".";

let a = " Computer won!"
let b = " You won!"

if(userChoice == computerChoice){
    alert(computerCh +  " The match is draw.");
}
else if(userChoice == "rock" && computerChoice == "paper"){
    alert(computerCh + a);
}
else if(userChoice =="rock" && computerChoice == "scissors"){
    alert(computerCh + b);
}
else if(userChoice == "paper" && computerChoice == "rock"){
    alert(computerCh + b);
}

else if(userChoice == "paper" && computerChoice =="scissors"){
    alert(computerCh + a);
}
else if(userChoice =="scissors" && computerChoice == "rock"){
    alert(computerCh + a);
}
else if(userChoice == "scissors" && computerChoice == "paper"){
    alert(computerCh + b);
}
else{
    alert("result cannot be obtained");
}
}

    rockPaperScissors();
    do{
    if(confirm("Play again?")){
        rockPaperScissors();
    }
    else{
        alert("Thanks for playing!");
        exit;
    }
} while(1);

    
   



