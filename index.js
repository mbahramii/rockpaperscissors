"use strict";

const firstPage = document.querySelector(".first_page");
const secondPage = document.querySelector(".second_page");
const newGameBtn = document.getElementById("newgame");
const againBtn = document.querySelector(".again");

let showComputerMove = document.getElementById("show_computer_move");
let textComputerMove = document.getElementById("computer_move");
let showMyMove = document.getElementById("show_my_move");
let textMyMove = document.getElementById("my_move");
let myscore= document.getElementById("myscore");
let computerscore= document.getElementById("computerscore");

let hand = document.getElementById("hand");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");

let resultpage = document.querySelector(".resultpage");
let loseresult = document.getElementById("loseresult");
let winresult = document.getElementById("winresult");

let myscorepoint=0
let computerscorepoint=0

// start game
newgame.addEventListener("click", function () {
  firstPage.classList.add("hidden");
  secondPage.classList.remove("hidden");
});

// computer round
const computermove = () => {
  let numbercomputer = Math.floor(Math.random() * 3) + 1;
  let imgsrc = "";
  let imgalt = "";
  if (numbercomputer == 1) {
    imgsrc = "./images/rock.png";
    imgalt = "rock";
    textComputerMove.textContent = "rock";
  } else if (numbercomputer == 2) {
    imgsrc = "./images/scissors.png";
    imgalt = "scissors";
    textComputerMove.textContent = "scissors";
  } else if (numbercomputer == 3) {
    imgsrc = "./images/hand-paper.png";
    imgalt = "paper";
    textComputerMove.textContent = "paper";
  }
  showComputerMove.innerHTML = `<img src=${imgsrc} alt=${imgalt} />`;

  return numbercomputer;
};

let mynumber = 0;

// rock move
rock.addEventListener("click", function () {
   let numbercomputer=computermove();
   showMyMove.innerHTML = `<img src=${"./images/rock.png"} alt=${"rock"}/>`;
   textMyMove.textContent = "rock";
   mynumber = 1;
   resultt(mynumber,numbercomputer);
});

// rock scissors
scissors.addEventListener("click", function () {
  let numbercomputer=computermove();
  showMyMove.innerHTML = `<img src=${"./images/scissors.png"} alt=${"scissors"}/>`;
  textMyMove.textContent = "scissors";
  mynumber = 2;
  resultt(mynumber,numbercomputer);
});

// hand move
hand.addEventListener("click", function () {
let numbercomputer=computermove();
  showMyMove.innerHTML = `<img src=${"./images/hand-paper.png"} alt=${"hand-paper"}/>`;
  textMyMove.textContent = "paper";
  mynumber = 3;
  resultt(mynumber,numbercomputer);
});


// result section 
const resultt = (mynumber, numbercomputer) => {
  if (mynumber == 2 && numbercomputer == 3) {
    myscorepoint++
    myscore.textContent=myscorepoint
  } else if (mynumber === 1 && numbercomputer === 2) {
    myscorepoint++
    myscore.textContent=myscorepoint
  } else if (mynumber === 3 && numbercomputer === 1) {
    myscorepoint++
    myscore.textContent=myscorepoint
  } else if (mynumber === 1 && numbercomputer === 3) {
    computerscorepoint++
    computerscore.textContent=computerscorepoint
  } else if (mynumber === 2 && numbercomputer === 1) {
    computerscorepoint++
    computerscore.textContent=computerscorepoint
  }else if (mynumber === 3 && numbercomputer === 2) {
    computerscorepoint++
    computerscore.textContent=computerscorepoint
  }
  
  if(computerscorepoint==3){
    loseresult.classList.remove("hidden") 
    resultpage.classList.remove("hidden") 
    againBtn.classList.remove("hidden") 
    loseresult.style.color="#750d0dff"
    resultpage.style.backgroundColor="#fa3939ff"
  }else if(myscorepoint==3){
    winresult.classList.remove("hidden") 
    resultpage.classList.remove("hidden") 
    againBtn.classList.remove("hidden") 
    winresult.style.color= "#186013"
    resultpage.style.backgroundColor="#79e824ff"
  }
};

// try again button 
againBtn.addEventListener("click",function(){
myscorepoint=0
computerscorepoint=0
  computerscore.textContent=0
  myscore.textContent=0
  showMyMove.textContent=""
  showComputerMove.textContent=""
  textMyMove.textContent=""
  textComputerMove.textContent=""
  winresult.classList.add("hidden") 
  loseresult.classList.add("hidden") 
  resultpage.classList.add("hidden") 
  againBtn.classList.add("hidden")
})

