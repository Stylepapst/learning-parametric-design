const sketchWith = 600;
const sketchHight = 400;

let boxWith = 200;
let boxHight = 150;

let backgroundColour;

function preload(){
  // preload assets
}

function setup() {

  createCanvas(sketchWith, sketchHight);
  backgroundColour = 0;
  
}

function draw() {
  background(backgroundColour);

  fill('blue');
  strokeWeight(0);
  rect((sketchWith - boxWith) / 2,
   (sketchHight - boxHight) / 2,
    boxWith, boxHight);

  const smallWith = boxWith * 0.8;
  const smallHight = boxHight * 0.5;

  fill('lightBlue');

  rect((sketchWith - smallWith) / 2,
    (sketchHight - smallHight) / 2,
     smallWith, smallHight);
    
  
}