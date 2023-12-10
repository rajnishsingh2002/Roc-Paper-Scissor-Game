let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const drawGame = () => {
  // console.log("game was draw.");
  msgPara.innerText = "Game Draw play again!";
};

const genCompChoice = () => {
  const option = ["rock", "paper", "scissors"];
  const idx = Math.floor(Math.random() * 3);

  return option[idx];
};
const playGame = (userChoice) => {
  // console.log("user choice", userChoice);
  //generate comp choice
  const compChoice = genCompChoice();
  // console.log("comp choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor, paper
      if (compChoice === "paper") {
        userWin = flase;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") {
      //scissor, rock
      if (compChoice === "rock") {
        userWin = true;
      } else {
        userWin = false;
      }
    } else if (userChoice === "scissors") {
      //paper, rock
      if (compChoice === "paper") {
        userWin = true;
      } else {
        userWin = false;
      }
    }
    showWinner(userWin);
  }
};

const msgPara = document.querySelector("#msg");

userScorePara = document.querySelector("#user-score");
compScorePara = document.querySelector("#comp-score");
const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("you win!!");
    msgPara.innerText = "You Win !";
    msgPara.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("you lose!!");
    msgPara.innerText = "You Lose!";
    msgPara.style.backgroundColor = "red";
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
