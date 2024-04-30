let userScore = 0;
let compScore  =0;
// finding each div
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // rock paper scissor generate randomly
    let options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game Draw!, play Again";
    msg.style.backgroundColor  = "#081b31";
}

const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!";
        msg.style.backgroundColor  = "green";
    }
    else{
     compScore++;
     compScorePara.innerText = compScore;
     msg.innerText  = "you lose";
     msg.style.backgroundColor  = "red";
      }
}
const playGame =(userChoice)=>{
   console.log("user choice ",userChoice);
   const compChoice = genCompChoice();
   console.log("computer choice ",compChoice);

   if(userChoice===compChoice){
       drawGame();
   }
   else{
    let userWin = true;
    if(userChoice == "rock"){
        userWin = compChoice === "paper" ? false:true;
    }
    else if (userChoice === "paper") {
        userWin = compChoice === "scissor" ? false : true;
    }
    else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
   }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");   //to know the id of div we use getAttribute
      playGame(userChoice);
    });
});

