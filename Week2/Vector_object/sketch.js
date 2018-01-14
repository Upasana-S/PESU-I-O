

let position;
let velocity;


function setup() {
  createCanvas(640, 360);
  background(255);
  // format to access elements of a vector: vector.x and vector.y
  position = createVector(100, 100);
  velocity = createVector(2.5, 5);
}

function draw() {
  background(255);

  // Add the current speed to the position.
  position.add(velocity);

// write code to update velocity by adding acceleration. 

  // Display circle at x position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(__, __, 48, 48);
}
