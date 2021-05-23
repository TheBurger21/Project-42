var h=hour;
var m=minute;
var s=second;
function setup() {
  createCanvas(800,400);

  
}

function setup() {
  createCanvas(720, 400);
  noStroke();
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);
  fill(255, c, 0);
  ellipse(width/2, height/2, d, d);
  drawSprites();
}


let h = hour();
text('Current hour:\n' + h, 5, 50);