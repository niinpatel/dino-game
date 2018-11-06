class Dino {
  constructor() {
    this.height = 50;
    this.width = 10;
    this.pos = createVector(60, height - this.height);
    this.lift = 25;
    this.gravity = 0.6;
    this.velocity = 0;
  }

  show() {
    fill(0);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.pos.y += this.velocity;
    if (this.pos.y > height - this.height) {
      this.pos.y = height - this.height;
    }
  }

  jump() {
    if (this.pos.y >= height - this.height - 50) this.velocity -= this.lift;
  }

  duck() {
    // TODO
  }

  hasDied(obstacles) {
    for (let obstacle of obstacles) {
      if (
        this.pos.y + this.height >= obstacle.pos.y &&
        this.pos.x + this.width >= obstacle.pos.x &&
        this.pos.x <= obstacle.pos.x + obstacle.width
      ) {
        return true;
      }
    }
    return false;
  }
}
