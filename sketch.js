// variable declaration.
let dino;
let obstacles = [];
let currentScore;
let obstacleVelicty = 6;
let paused = false;

//start
function setup() {
  createCanvas(600, 400);
  dino = new Dino();
  frameRate(50);
}

// repeats
function draw() {
  currentScore = frameCount;
  background(150);
  dino.update();
  dino.show();
  fill(0);
  textSize(15);
  text(`CurrentScore: ${currentScore}`, 400, 20);

  if (dino.hasDied(obstacles)) {
    fill(0);
    textSize(20);
    text("Game Over", 250, 200);
    noLoop();
  }

  for (let i = obstacles.length - 1; i >= 0; i--) {
    obstacles[i].show();
  }
  if (frameCount % 60 == 0) {
    obstacles.push(new Obstacle());
    if (obstacleVelicty < 25) {
      obstacleVelicty *= 1.05;
    }
  }
}

// key press
function keyPressed() {
  if (key == " ") dino.jump();
  if (keyCode === DOWN_ARROW) dino.duck();
  if (key == "p") {
    if (paused) loop();
    else noLoop();
    paused = !paused;
  }
}
