/

// A class for an obstacle, just a simple rectangle that is drawn
// and can check if a Rocket touches it

// Also using this class for target position

function Obstacle(x, y, w, h) {
  this.position = createVector(x, y);
  this.w = w;
  this.h = h;

  this.display = function() {
    stroke(0);
    fill(175);
    strokeWeight(2);
    rectMode(CORNER);
    rect(this.position.x, this.position.y, this.w, this.h);
  }

  this.contains = function(spot) {
    if (spot.x > this.position.x && spot.x < this.position.x + w && spot.y > this.position.y && spot.y < this.position.y + h) {
      return true;
    } else {
      return false;
    }
  }

}
