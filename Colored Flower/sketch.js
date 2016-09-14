
var r, g, b;

function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(127);
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  translate(200, 200);
  noStroke();
  for (var i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 50);
    rotate(PI/5);
  }
}



function mousePressed() {
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}