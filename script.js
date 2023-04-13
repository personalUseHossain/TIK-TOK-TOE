//Variables

const cells = document.querySelectorAll(".cell");
const wintextContainer = document.getElementById("wintext");
const musicIcon = document.querySelector(".fa-music");
let turn = "O";

//Audios

const running = document.getElementById("running");
const gameover = document.getElementById("gameover");
const turn_sound = document.getElementById("turn");

//Event Listener
cells.forEach((cell) => {
  cell.addEventListener("click", mainFunciton);
});
musicIcon.addEventListener("click", music);

//All functions

//Music on-off function

function music(e) {
  if (e.target.classList.contains("cross")) {
    e.target.classList.remove("cross");
    running.play();
  } else {
    e.target.classList.add("cross");
    running.pause();
  }
}

//Main function for game

function mainFunciton(e) {
  if (e.target.innerHTML === "") {
    e.target.innerHTML = turn;
    changeTurn();
    checkWin();
  }
  turn_sound.play();
}

//changeing turn

function changeTurn() {
  turn === "X" ? (turn = "O") : (turn = "X");
}

//Cheking for win

function checkWin() {
  const cells = document.querySelectorAll(".cell");
  let winArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winArray.forEach((e) => {
    if (
      cells[e[0]].innerText === cells[e[1]].innerText &&
      cells[e[1]].innerText === cells[e[2]].innerText &&
      cells[e[0]].innerText !== ""
    ) {
      callwintext();
    }
  });
}

//Wintext funtion

function callwintext() {
  wintextContainer.style.display = "flex";
  let Whowin = document.getElementById("wintxt");
  turn === "X" ? (Whowin.innerHTML = "O") : (Whowin.innerHTML = "X");
  gameover.play();
  running.pause();
}

//Restart function

function restart() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    wintextContainer.style.display = "none";
  });
  // running.play();
  // musicIcon.classList.remove("cross");
}
