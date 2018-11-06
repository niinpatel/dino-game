class Obstacle {
  constructor() {
    this.width = 15;
    this.height = random([30, 50, 60]);
    this.pos = createVector(width, height - this.height);
    this.velocity = obstacleVelicty;
  }

  show() {
    rect(this.pos.x, this.pos.y, this.width, this.height);
    this.pos.x -= this.velocity;
  }
}
