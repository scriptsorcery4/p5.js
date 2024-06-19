let angle = 0;
let radius = 1;
let angleSpeed = 0.05;
let radiusSpeed = 0.5;

function setup() {
  createCanvas(720, 1280); 
  background(0);  
  stroke(255);  
  noFill();
}

function draw() {
  translate(width / 2, height / 2);  
  let x = radius * cos(angle);
  let y = radius * sin(angle);

  line(0, 0, x, y);
  

  angle += angleSpeed;
  radius += radiusSpeed;
  

  if (radius > width) {
    background(0);
    radius = 1;
  }
}
