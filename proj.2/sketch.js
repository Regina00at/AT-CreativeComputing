var colorbar = [[226,56,55], [247,130,55], [255,185,0], [94,189,62], [0,156,223], [151,57,152], [255,255,255], [0,0,0]];
var redbar;
var greenbar;
var bluebar;

function setup() {
  createCanvas(1920,  1080);
  backgroundimage();
  stroke(0);
  strokeWeight(25);
  frameRate(10000);
  customcolorbutton();
  redbar=0;
  greenbar=0;
  bluebar=0;
  
}

function draw(){
  if(mouseIsPressed){
    if((mouseX<=60+1188)&&(mouseX>60)&&(mouseY<=120+840)&&(mouseY>120)){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  }
}
  

function mousePressed(){
  
  //BRUSHSIZE CHECK
  if(dist(mouseX, mouseY, 1350, 480)<12.5){
     strokeWeight(25);
}else if(dist(mouseX, mouseY, 1430, 480)<25){
     strokeWeight(50);
}else if(dist(mouseX, mouseY, 1540, 480)<37.5){
     strokeWeight(75);
}else if(dist(mouseX, mouseY, 1660, 480)<50){
     strokeWeight(100);
}else if(dist(mouseX, mouseY, 1800, 480)<62.5){
     strokeWeight(125);
}

  //COLORSELECT
  var tmp=0;
  while(tmp<8){
    if(dist(mouseX, mouseY, 1350+tmp*70, 640)<25){
      stroke(colorbar[tmp]);
      break;}
    tmp++;
  }
  
  //CUSTOMCOLOR
  if(dist(mouseX, mouseY, 1380,820)<62.5){
    stroke(redbar,greenbar,bluebar);
  }
  
  //ERASEANDRESET
  if(dist(mouseX, mouseY, 1320, 940)<25){
    stroke(255);
  }else if(dist(mouseX, mouseY, 1520, 940)<25){
        background(255);
        backgroundimage();
  }
}

function customcolorbutton(){
  
  greenbutton = createButton('GREEN');
  greenbutton.position(1603,810);
  greenbutton.mousePressed(change_g_bar);
  redbutton = createButton("RED");
  redbutton.position(1510,810);
  redbutton.mousePressed(changerbar);
  bluebutton = createButton('BLUE');
  bluebutton.position(1705,810);
  bluebutton.mousePressed(change_b_bar);
  resetbutton = createButton("color"+"\n"+"reset");
  resetbutton.position(1800,800);
  resetbutton.mousePressed(changeresetbar);
  
}

function changeresetbar(){
  redbar=0;
  greenbar=0;
  bluebar=0;
   fill(redbar,greenbar,bluebar);
  noStroke();
  ellipse(1380,820,125,125);
}

function changerbar(){
  redbar+=10;
  fill(redbar,greenbar,bluebar);
  noStroke();
  ellipse(1380,820,125,125);
}

function change_g_bar(){
  greenbar+=10;
  fill(redbar,greenbar,bluebar);
  noStroke();
  ellipse(1380,820,125,125);
}

function change_b_bar(){
  bluebar+=10;
  fill(redbar,greenbar,bluebar);
  noStroke();
  ellipse(1380,820,125,125);
}



function change_r_bar(){
}
  
function showcolor(){
  fill(redbar,greenbar,bluebar);
  noStroke();
  ellipse(1380,820,125,125);
}

function backgroundimage(){
  background(255);
  noFill();
  stroke(255,204,102);
  strokeWeight(30);
  rect(60,120,1188,840);
  
  noStroke();
  fill(0);
  textSize(90);
  text("A4 Sized", 1300, 210);
  text("Design tool", 1300, 280);
  textSize(40);
  text("Draw anything you want.", 1300, 340);
  
  brushbar();
  colorselectbar();
  customcolorbar();
  savebar();
}

function brushbar(){
  text("BRUSH SIZE : CLICK", 1300, 400);
  
  fill(0);
  ellipse(1350, 480, 25, 25);
  ellipse(1430, 480, 50, 50);
  ellipse(1540, 480, 75, 75);
  ellipse(1660, 480, 100, 100);
  ellipse(1800, 480, 125, 125);  
}

function colorselectbar(){
  text("COLOR SELECT : CLICK", 1300, 590);
  var cnt=0;
  while(cnt<8){
    fill(colorbar[cnt]);
    if(cnt==6){
      stroke(0);
      strokeWeight(3);
      ellipse(1350 + cnt*70, 640, 50, 50);
      noStroke();
    }      
    ellipse(1350 + cnt*70, 640, 50, 50);
    cnt++;
  }
}
    
function customcolorbar(){
  text("CUSTOMCOLOR : UP & RESET", 1300, 730);
  //ellipse(1380, 820, 125,125);
  fill(255,0,0);
  ellipse(1530, 820, 75,75);
  fill(0,255,0);
  ellipse(1630, 820, 75, 75);
  fill(0,0,255);
  ellipse(1730, 820, 75, 75);
  
}

function savebar(){
  fill(255,204,102);
  ellipse(1320, 940, 50,50);
  text("ERASE", 1360, 956);
  ellipse(1520, 940, 50, 50);
  text("RESET", 1560, 956);
}
