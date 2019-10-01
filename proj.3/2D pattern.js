let img, img1, img2;
function preload(){
  img=loadImage('earth.png');
  img1=loadImage('planet1.png');
  img2=loadImage('planet3.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  noStroke();
}

function draw() {
  
  var x,y,r;
  var delta = random(70,300);
  var starprob = map(mouseX, 0, windowWidth, 0.5,0);
  var backcolor = map(mouseX, 0, windowWidth, -30, 70)
  
  background(39+backcolor, 34+backcolor, 51+backcolor);
  image(img1, windowWidth*0.2, windowHeight*0.5, 100, 100);
  image(img, windowWidth*0.45, windowHeight*0.5, 100, 100);
  image(img2, windowWidth*0.7, windowHeight*0.5, 100, 100);
  randomSeed(0);
  for(y=0;y<windowHeight;y+=40){
    for(x=0;x<windowWidth;x+=40){
      noStroke();
      fill(250,190,40);
      ellipse(x,y,3,3);}}
  
  for(y=0; y<windowHeight; y+=random(100,150)) {
    for (x=0; x<windowWidth; x+=random(100,150)) {
      r = random(0,1);
      if(r<starprob){
        drawstar(x,y);
      }else{
      }
    }
  }
 
}

function drawstar(x,y){
  push();
  fill(random(235,255), random(180,200), random(30,50));  
  translate(x, y);
  rotate(frameCount / -100.0);
  star(random(-50,50),random(-30,40), random(15,20), random(3,7), random(3,7));
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  r2 = random(0,1)*PI;
  for (let a = r2; a < r2+TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
