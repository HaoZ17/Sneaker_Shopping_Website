"use strict"
// Initialize position variables
var x1=900; 
var y1=330; 

var x2=1000; 
var y2=160; 

var x3=950; 
var y3=480; 

var x4=820; 
var y4=660; 

var x5=1180; 
var y5=500;

var x6=1180; 
var y6=230;

var x7=1100; 
var y7=660;

var x8; 
var y8;

var r=50;


function setup() { 
    createCanvas(1500, 800); // setup canvas
    angleMode(DEGREES);
}

function draw() {
    background("lightpink"); // setup the color of background
    
    if (keyPressed){
        if (keyCode === UP_ARROW) {
          Base(150,150); // red
        }
        if(keyCode === DOWN_ARROW){
            Base1(140,150);
        }
    }


    if(mouseIsPressed&&dist(mouseX,mouseY,x1,y1)<r){ // compare mouse position with model
    x1=mouseX; // setup new postion for x
    y1=mouseY; // setup new postion for y
    } 
    if(mouseIsPressed&&dist(mouseX,mouseY,x2,y2)<r){ 
    x2=mouseX; 
    y2=mouseY; 
    } 
    if(mouseIsPressed&&dist(mouseX,mouseY,x3,y3)<r){ 
    x3=mouseX; 
    y3=mouseY; 
    } 
    if(mouseIsPressed&&dist(mouseX,mouseY,x4,y4)<r){ 
    x4=mouseX; 
    y4=mouseY; 
    } 
    if(mouseIsPressed&&dist(mouseX,mouseY,x5,y5)<r){ 
    x5=mouseX; 
    y5=mouseY; 
    } 
    if(mouseIsPressed&&dist(mouseX,mouseY,x6,y6)<r){ 
    x6=mouseX; 
    y6=mouseY; 
    } 
    if(mouseIsPressed&&dist(mouseX,mouseY,x7,y7)<r){ 
    x7=mouseX; 
    y7=mouseY; 
    } 
    
    S1(x1,y1);//draw model with location(x1,y1);
    S2(x2,y2);//draw model with location(x2,y2);
    S3(x3,y3);//draw model with location(x3,y3);
    S4(x4,y4);//draw model with location(x4,y4);
    S5(x5,y5);//draw model with location(x5,y5);
    R1(x6,y6);//draw model with location(x6,y6);
    R2(x7,y7);//draw model with location(x7,y7);
    hint1(x8,y8);
    

}

function Base(x, y) {
    fill('white'); //fill in color
    stroke('white');   //setup stroke collor
    strokeWeight(20);  // setup strokeweight
    rect(x, y, 480, 480);  // draw a rectangle rect(x,y,width,height)
}

function Base1(x, y) {
    // fill('white'); //fill in color
    // stroke('white');   //setup stroke collor
    // strokeWeight(10);  // setup strokeweight
    // triangle(x, y, x+100, y-50,x-100,y-50);  // draw a rectangle rect(x,y,width,height)
    fill('white');
    stroke('white');
    triangle(x-120+120, y-240+240, x+120+120, y+240, x-120+120, y+240+240);
    fill('white');
    stroke('white');
    triangle(x-240+360, y-120+240, x +240+360, y-120+240, x+360, y+120+240); 
    fill('white');
    stroke('white');
    triangle(x-60-60, y+360, x, y-120+360, x, y+120+360); 
    fill('white');
    stroke('white');
    triangle(x+60+480+60, y+60+60, x-180+480+60, y+60+60, x+60+60+480, y-180+60);
    fill('white');
    stroke('white');
    triangle(x+360, y-60-60, x-120+360, y, x+120+360, y);
    fill('white');
    stroke('white');
    quad(x,y,x+120,y+120,x+120+120,y,x+120,y-120);
    fill('white');
    stroke('white');
    quad(x+60+300,y+60+60,x-180+300,y+60+60,x-60+300,y,x+180+300,y);

}

function hint1(x, y) {
    // fill('white'); //fill in color
    // stroke('white');   //setup stroke collor
    // strokeWeight(10);  // setup strokeweight
    // triangle(x, y, x+100, y-50,x-100,y-50);  // draw a rectangle rect(x,y,width,height)
    fill('red');
    stroke('black');
    triangle(x-120+120, y-240+240, x+120+120, y+240, x-120+120, y+240+240);
    fill('green');
    stroke('black');
    triangle(x-240+360, y-120+240, x +240+360, y-120+240, x+360, y+120+240); 
    fill('pink');
    stroke('black');
    triangle(x-60-60, y+360, x, y-120+360, x, y+120+360); 
    fill('orange');
    stroke('black');
    triangle(x+60+480+60, y+60+60, x-180+480+60, y+60+60, x+60+60+480, y-180+60);
    fill('lightblue');
    stroke('black');
    triangle(x+360, y-60-60, x-120+360, y, x+120+360, y);
    fill('yellow');
    stroke('black');
    quad(x,y,x+120,y+120,x+120+120,y,x+120,y-120);
    fill('blue');
    stroke('black');
    quad(x+60+300,y+60+60,x-180+300,y+60+60,x-60+300,y,x+180+300,y);

}

function S2(x, y) {
    fill('green');  //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
    triangle(x-240, y-120, x +240, y-120, x, y+120); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
}

function S1(x, y) {
    fill('red');     //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
    triangle(x-120, y-240, x+120, y, x-120, y+240);// draw a triangle triangle(x1,y1,x2,y2,x3,y3)
}

function S3(x, y) {
    fill('pink');  //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
    triangle(x-60, y, x+60, y-120, x+60, y+120); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
}

function S4(x, y) {
    fill('orange');  //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
    triangle(x+60, y+60, x-180, y+60, x+60, y-180); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
}

function S5(x, y) {
    fill('lightblue'); //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
    triangle(x, y-60, x-120, y+60, x+120, y+60); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
}
function R1(x,y){
    fill('yellow'); //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
//    translate(x,y);
//    rotate(-45);
//    rect(0, 0, 169.5,169.5);  // draw a rectangle rect(x,y,width,height)
    quad(x-120,y,x,y+120,x+120,y,x,y-120);
}

function R2(x,y){
    fill('blue'); //fill in color
    stroke('black'); //setup stroke collor
    strokeWeight(4); // setup strokeweight
//    translate(x,y);
//    rotate(-45);
//    rect(0, 0, 169.5,169.5);  // draw a rectangle rect(x,y,width,height)
    quad(x+60,y+60,x-180,y+60,x-60,y-60,x+180,y-60);
}

function keyPressed() { //setup keyboard function

  if (keyCode === LEFT_ARROW) { //when user click the LEFT_ARROW, setup reset position for all of models
    x1=220; 
    y1=340; 
    x2=340; 
    y2=220; 
    x3=520; 
    y3=220; 
    x4=520; 
    y4=520; 
    x5=340; 
    y5=400;
    x6=460; 
    y6=340;
    x7=280; 
    y7=520;
    x8=750;
    y8=150;
  } 
    if (keyCode === RIGHT_ARROW) { //when user click the RIGHT_ARROW, setup restart position for all of models
    x1=900; 
    y1=330; 
    x2=1000; 
    y2=160; 
    x3=950; 
    y3=480; 
    x4=820; 
    y4=660; 
    x5=1180; 
    y5=500;
    x6=1180; 
    y6=230;
    x7=1100; 
    y7=660;
    x8=2000;
    y8=1000;
  } 
}



