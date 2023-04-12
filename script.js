//Variables

const cells = document.querySelectorAll(".cell");
const wintextContainer = document.getElementById("wintext");
let turn = "O";
let xcount = document.getElementById("xcount").innerHTML;
let ocount = document.getElementById("ocount").innerHTML;

//Event Listener
cells.forEach((cell) => {
  cell.addEventListener("click", mainFunciton);
});

//All functions

//Main function for game

function mainFunciton(e) {
  if (e.target.innerHTML === "") {
    e.target.innerHTML = turn;
    changeTurn();
    checkWin();
  }
}

//changeing turn

function changeTurn() {
  if (turn === "X") return (turn = "O");
  if (turn === "O") return (turn = "X");
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
  if (turn === "X") {
    Whowin.innerHTML = "O";
    xcount = xcount + 1;
  } else if (turn === "O") {
    Whowin.innerHTML = "X";
    ocount = ocount + 1;
  }
}

//Restart function

function restart() {
  cells.forEach((cell) => {
    cell.innerHTML = "";
    wintextContainer.style.display = "none";
  });
}
