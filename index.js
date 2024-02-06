const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

let grid = 16;
let count = 0;
let score = 0;
let gemEaten = false;
let allowanceCounter = 0;
let snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4,
};
let gem = {
  x: 320,
  y: 320,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
