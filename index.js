const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const collisionSound = document.getElementById("collisionSound");
const eatingSound = document.getElementById("eatingSound");
const pauseSound = document.getElementById("pauseSound");

let gameRunning = false;
let gamePaused = false;

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
let animationFrame;
let startButton = document.querySelector(".start-button");
let gameOverScreen = document.querySelector(".game-over");
let scoreDisplay = document.querySelector(".score-display");

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

startButton.addEventListener("click", function () {
  startGame();
});

gameOverScreen
  .querySelector(".start-button")
  .addEventListener("click", function () {
    startGame();
  });

function startGame() {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  gamePaused = false;
  score = 0;
  snake.x = 160;
  snake.y = 160;
  snake.cells = [];
  snake.maxCells = 4;
  snake.dx = grid;
  snake.dy = 0;
  gem.x = getRandomInt(0, 25) * grid;
  gem.y = getRandomInt(0, 25) * grid;
  startButton.style.display = "none";
  gameOverScreen.style.display = "none";
  scoreDisplay.textContent = score;
  if (animationFrame) {
    cancelAnimationFrame(animationFrame);
  }
  animationFrame = requestAnimationFrame(loop);
}

function loop() {
  if (!gameRunning || gamePaused) {
    return;
  }

  context.fillStyle = "#fff";
  context.fillRect(gem.x, gem.y, grid - 1, grid - 1);
  context.shadowColor = "rgba(0,0,0,0.5)";
  context.shadowBlur = 5;
  context.shadowOffsetX = 2;
  context.shadowOffsetY = 2;
}
