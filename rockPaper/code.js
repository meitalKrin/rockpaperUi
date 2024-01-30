//dot

const dotp1 = document.getElementById("point1P");
const dotp2 = document.getElementById("point2P");
const dotp3 = document.getElementById("point3P");
const dotC1 = document.getElementById("point1C");
const dotC2 = document.getElementById("point2C");
const dotC3 = document.getElementById("point3C");
//btn
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("sciss");

//src
const rockImg = document.getElementById("pcRock");
const paperImg = document.getElementById("paperPC");
const scissorsImg = document.getElementById("scissorsPC");
const pPaperImg = document.getElementById("paperPlayer");
const pscissorsImg = document.getElementById("scissorsPlayer");
const pRockImg = document.getElementById("rockPlayer");

//LOAD SCREEN DOMS
const winscreen = document.getElementById("winscreen");
let waiting = document.getElementById("waiting");
let waitingForPc = document.getElementById("waitingForPc");
const SCREEN = document.getElementById("screen1");
const tie = document.getElementById("tie");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
//score

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";

//SCORE LOGIC

//game logic

//rock

function playerChoicerock() {
  let playerChoice = "rock";
  let playerlog = 0;
  let score = "";

  const pcChoice = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * pcChoice.length);
  computerChoice = randomIndex;

  if (randomIndex == 0) {
    score = "tie";
  } else if (randomIndex == 1) {
    score = "win";
  } else {
    score = "lose";
  }

  console.log(pcChoice);
  console.log(playerlog);
  console.log(randomIndex);
  console.log(score);
  waiting.style.display = "none";
  waitingForPc.style.display = "block";

  {
    function results() {
      if (score == "win") {
        SCREEN.style.display = "none";
        win.style.display = "block";
        rockImg.style.display = "none";
        paperImg.style.display = "none";
        scissorsImg.style.display = "block";
        pPaperImg.style.display = "none";
        pscissorsImg.style.display = "none";
        pRockImg.style.display = "block";
        playerScore += 1;
      } else if (score == "tie") {
        SCREEN.style.display = "none";
        tie.style.display = "block";
        rockImg.style.display = "block";
        paperImg.style.display = "none";
        scissorsImg.style.display = "none";
        pPaperImg.style.display = "none";
        pscissorsImg.style.display = "none";
        pRockImg.style.display = "block";
      } else {
        lose.style.display = "block";

        SCREEN.style.display = "none";
        rockImg.style.display = "none";
        paperImg.style.display = "block";
        scissorsImg.style.display = "none";
        pPaperImg.style.display = "none";
        pscissorsImg.style.display = "none";
        pRockImg.style.display = "block";
        computerScore += 1;
      }
    }
    setTimeout(results, 2000);

    function clearResults() {
      SCREEN.style.display = "flex";
      rockImg.style.display = "none";
      paperImg.style.display = "none";
      scissorsImg.style.display = "none";
      pPaperImg.style.display = "none";
      pscissorsImg.style.display = "none";
      pRockImg.style.display = "none";
      waitingForPc.style.display = "none";
      waiting.style.display = "flex";
      win.style.display = "none";
      lose.style.display = "none";
      tie.style.display = "none";
    }
    setTimeout(clearResults, 3000);
  }

  function DisabledBTN() {
    document.getElementById("rock").disabled = true;
  }

  DisabledBTN();

  function enabledBTN() {
    document.getElementById("rock").disabled = false;
  }
  setTimeout(enabledBTN, 3000);
}
//paper

function playerChoicepaper() {
  let playerChoice = "paper";
  let playerlog = 2;
  let score = "";

  const pcChoice = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * pcChoice.length);
  computerChoice = randomIndex;

  if (randomIndex == 2) {
    score = "tie";
  } else if (randomIndex == 0) {
    score = "win";
  } else {
    score = "lose";
  }

  console.log(pcChoice);
  console.log(playerlog);
  console.log(randomIndex);
  console.log(score);
  waiting.style.display = "none";
  waitingForPc.style.display = "block";

  function results() {
    if (score == "win") {
      SCREEN.style.display = "none";
      win.style.display = "block";
      rockImg.style.display = "block";
      paperImg.style.display = "none";
      scissorsImg.style.display = "none";
      pPaperImg.style.display = "block";
      pscissorsImg.style.display = "none";
      pRockImg.style.display = "none";
      playerScore += 1;
    } else if (score == "tie") {
      SCREEN.style.display = "none";
      tie.style.display = "block";
      rockImg.style.display = "none";
      paperImg.style.display = "block";
      scissorsImg.style.display = "none";
      pPaperImg.style.display = "block";
      pscissorsImg.style.display = "none";
      pRockImg.style.display = "none";
    } else {
      SCREEN.style.display = "none";
      lose.style.display = "block";
      rockImg.style.display = "none";
      paperImg.style.display = "none";
      scissorsImg.style.display = "block";
      pPaperImg.style.display = "block";
      pscissorsImg.style.display = "none";
      pRockImg.style.display = "none";
      computerScore += 1;
    }
  }
  setTimeout(results, 2000);

  function clearResults() {
    SCREEN.style.display = "flex";
    rockImg.style.display = "none";
    paperImg.style.display = "none";
    scissorsImg.style.display = "none";
    pPaperImg.style.display = "none";
    pscissorsImg.style.display = "none";
    pRockImg.style.display = "none";
    waitingForPc.style.display = "none";
    waiting.style.display = "flex";
    win.style.display = "none";
    lose.style.display = "none";
    tie.style.display = "none";
  }
  setTimeout(clearResults, 3000);

  function DisabledBTN() {
    document.getElementById("paper").disabled = true;
  }

  DisabledBTN();

  function enabledBTN() {
    document.getElementById("paper").disabled = false;
  }
  setTimeout(enabledBTN, 3000);

  function winIndicator() {
    if (playerScore == 3) {
      winscreen.style.display = "block";
    }
  }
}
//scissors

function playerChoicescissors() {
  let playerChoice = "scissors";
  let playerlog = 1;
  let score = "";

  const pcChoice = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * pcChoice.length);

  if (randomIndex == 1) {
    score = "tie";
  } else if (randomIndex == "2") {
    score = "win";
  } else if (randomIndex == "0") {
    score = "lose";
  }

  console.log(pcChoice);
  console.log(playerlog);
  console.log(randomIndex);
  console.log(score);

  waiting.style.display = "none";
  waitingForPc.style.display = "block";

  function results() {
    if (score == "win") {
      SCREEN.style.display = "none";
      win.style.display = "block";
      rockImg.style.display = "none";
      paperImg.style.display = "block";
      scissorsImg.style.display = "none";
      pPaperImg.style.display = "none";
      pscissorsImg.style.display = "block";
      pRockImg.style.display = "none";
      playerScore += 1;
    } else if (score == "tie") {
      tie.style.display = "block";
      SCREEN.style.display = "none";
      rockImg.style.display = "none";
      paperImg.style.display = "none";
      scissorsImg.style.display = "block";
      pPaperImg.style.display = "none";
      pscissorsImg.style.display = "block";
      pRockImg.style.display = "none";
    } else {
      lose.style.display = "block";
      SCREEN.style.display = "none";
      rockImg.style.display = "block";
      paperImg.style.display = "none";
      scissorsImg.style.display = "none";
      pPaperImg.style.display = "none";
      pscissorsImg.style.display = "block";
      pRockImg.style.display = "none";
      computerScore += 1;
    }
  }

  setTimeout(results, 2000);

  function clearResults() {
    SCREEN.style.display = "flex";
    rockImg.style.display = "none";
    paperImg.style.display = "none";
    scissorsImg.style.display = "none";
    pPaperImg.style.display = "none";
    pscissorsImg.style.display = "none";
    pRockImg.style.display = "none";
    waitingForPc.style.display = "none";
    waiting.style.display = "flex";
    win.style.display = "none";
    lose.style.display = "none";
    tie.style.display = "none";
  }
  setTimeout(clearResults, 3000);

  function DisabledBTN() {
    document.getElementById("sciss").disabled = true;
  }

  DisabledBTN();

  function enabledBTN() {
    document.getElementById("sciss").disabled = false;
  }
  setTimeout(enabledBTN, 3000);
}

//
function DOTscore() {
  if (playerScore == 1) {
    dotp1.style.backgroundColor = "#4343ff";
  } else if (playerScore == 2) {
    dotp2.style.backgroundColor = "#4343ff";
  } else if (playerScore == 3) {
    dotp3.style.backgroundColor = "#4343ff";
  }
}
setInterval(DOTscore, 1000);

function DOTscorePC() {
  if (computerScore == 1) {
    dotC1.style.backgroundColor = "#4343ff";
  } else if (computerScore == 2) {
    dotC2.style.backgroundColor = "#4343ff";
  } else if (computerScore == 3) {
    dotC3.style.backgroundColor = "#4343ff";
  }
}
setInterval(DOTscorePC, 1000);

function eventwin() {
  if (playerScore == 3) {
    winscreen.style.display = "block";
    document.getElementById("winnertext").innerHTML = "You Won!!!";
  } else if (computerScore == 3) {
    winscreen.style.display = "block";

    document.getElementById("winnertext").innerHTML = "You lost";
  }
}

setInterval(eventwin, 1000);

function restGame() {
  location.reload();
  winscreen.style.display = "none";
}
