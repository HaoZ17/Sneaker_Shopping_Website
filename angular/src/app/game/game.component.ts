import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import {Router} from "@angular/router";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  constructor(
    private router:Router
  ) { }

  ngOnInit() {

    setTimeout(() => {
      var s = document.getElementById("defaultCanvas0");
      s.remove();
      alert("checkout Successfully");
      this.router.navigate(['/orderHistory']);
      }, 10000);

    const sketch = (s) => {

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

      var r=80;
      var pos=0;

      var pos=0;

      var confirm;
      var level_num =0;
      var isHint = false;
      var num ;

      s.preload = () => {
        // preload code
      }

      s.setup = () => {
        s.createCanvas(1400, 800);
      };

      s.draw = () => {
        s.background("#393939"); // setup the color of background
    
      if (keyPressed){
          if (s.keyCode === s.UP_ARROW) {
            Base(150,150); // red
          }
          if(s.keyCode === s.DOWN_ARROW){
              Base1(140,150);
          }
          if(s.keyCode === s.LEFT_ARROW){
              hint1(150,150);
          }
        }


      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x1,y1)<r)&&pos==0){ // compare mouse position with model
      x1=s.mouseX; // setup new postion for x
      y1=s.mouseY; // setup new postion for y
      pos=1;
      } 
      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x2,y2)<r)&&pos==0){ 
      x2=s.mouseX; 
      y2=s.mouseY; 
      pos=1;
      } 
      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x3,y3)<r)&&pos==0){ 
      x3=s.mouseX; 
      y3=s.mouseY; 
      pos=1;
      } 
      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x4,y4)<r)&&pos==0){ 
      x4=s.mouseX; 
      y4=s.mouseY; 
      pos=1;
      } 
      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x5,y5)<r)&&pos==0){ 
      x5=s.mouseX; 
      y5=s.mouseY; 
      pos=1;
      } 
      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x6,y6)<r)&&pos==0){ 
      x6=s.mouseX; 
      y6=s.mouseY; 
      pos=1;
      } 
      if(s.mouseIsPressed&&(s.dist(s.mouseX,s.mouseY,x7,y7)<r)&&pos==0){ 
      x7=s.mouseX; 
      y7=s.mouseY; 
      pos=1;
      } 
      
      S1(x1,y1);//draw model with location(x1,y1);
      S2(x2,y2);//draw model with location(x2,y2);
      S3(x3,y3);//draw model with location(x3,y3);
      S4(x4,y4);//draw model with location(x4,y4);
      S5(x5,y5);//draw model with location(x5,y5);
      R1(x6,y6);//draw model with location(x6,y6);
      R2(x7,y7);//draw model with location(x7,y7);
      hint1(x8,y8);
      mouseReleased();
      };

      alert("Your order is processing, please enjoy this game~ Good Luck");

      function Base(x, y) {
          s.fill('white'); //fill in color
          s.stroke('white');   //setup stroke collor
          s.strokeWeight(20);  // setup strokeweight
          s.rect(x, y, 480, 480);  // draw a rectangle rect(x,y,width,height)
      }

      function mouseReleased(){
        pos=0;
    }
      
      function Base1(x, y) {
          s.fill('white');
          s.stroke('white');
          s.triangle(x-120+120, y-240+240, x+120+120, y+240, x-120+120, y+240+240);
          s.fill('white');
          s.stroke('white');
          s.triangle(x-240+360, y-120+240, x +240+360, y-120+240, x+360, y+120+240); 
          s.fill('white');
          s.stroke('white');
          s.triangle(x-60-60, y+360, x, y-120+360, x, y+120+360); 
          s.fill('white');
          s.stroke('white');
          s.triangle(x+60+480+60, y+60+60, x-180+480+60, y+60+60, x+60+60+480, y-180+60);
          s.fill('white');
          s.stroke('white');
          s.triangle(x+360, y-60-60, x-120+360, y, x+120+360, y);
          s.fill('white');
          s.stroke('white');
          s.quad(x,y,x+120,y+120,x+120+120,y,x+120,y-120);
          s.fill('white');
          s.stroke('white');
          s.quad(x+60+300,y+60+60,x-180+300,y+60+60,x-60+300,y,x+180+300,y);
      
      }
      
      function hint1(x, y) {
          // fill('white'); //fill in color
          // stroke('white');   //setup stroke collor
          // strokeWeight(10);  // setup strokeweight
          // triangle(x, y, x+100, y-50,x-100,y-50);  // draw a rectangle rect(x,y,width,height)
          s.fill('red');
          s.stroke('black');
          s.triangle(x-120+120, y-240+240, x+120+120, y+240, x-120+120, y+240+240);
          s.fill('green');
          s.stroke('black');
          s.triangle(x-240+360, y-120+240, x +240+360, y-120+240, x+360, y+120+240); 
          s.fill('pink');
          s.stroke('black');
          s.triangle(x-60-60, y+360, x, y-120+360, x, y+120+360); 
          s.fill('orange');
          s.stroke('black');
          s.triangle(x+60+480+60, y+60+60, x-180+480+60, y+60+60, x+60+60+480, y-180+60);
          s.fill('lightblue');
          s.stroke('black');
          s.triangle(x+360, y-60-60, x-120+360, y, x+120+360, y);
          s.fill('yellow');
          s.stroke('black');
          s.quad(x,y,x+120,y+120,x+120+120,y,x+120,y-120);
          s.fill('blue');
          s.stroke('black');
          s.quad(x+60+300,y+60+60,x-180+300,y+60+60,x-60+300,y,x+180+300,y);
      
      }
      
      function S2(x, y) {
          s.fill('green');  //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
          s.triangle(x-240, y-120, x +240, y-120, x, y+120); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
      }
      
      function S1(x, y) {
          s.fill('red');     //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
          s.triangle(x-120, y-240, x+120, y, x-120, y+240);// draw a triangle triangle(x1,y1,x2,y2,x3,y3)
      }
      
      function S3(x, y) {
          s.fill('pink');  //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
          s.triangle(x-60, y, x+60, y-120, x+60, y+120); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
      }
      
      function S4(x, y) {
          s.fill('orange');  //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
          s.triangle(x+60, y+60, x-180, y+60, x+60, y-180); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
      }
      
      function S5(x, y) {
          s.fill('lightblue'); //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
          s.triangle(x, y-60, x-120, y+60, x+120, y+60); // draw a triangle triangle(x1,y1,x2,y2,x3,y3)
      }
      function R1(x,y){
          s.fill('yellow'); //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
      //    translate(x,y);
      //    rotate(-45);
      //    rect(0, 0, 169.5,169.5);  // draw a rectangle rect(x,y,width,height)
          s.quad(x-120,y,x,y+120,x+120,y,x,y-120);
      }
      
      function R2(x,y){
          s.fill('blue'); //fill in color
          s.stroke('black'); //setup stroke collor
          s.strokeWeight(4); // setup strokeweight
      //    translate(x,y);
      //    rotate(-45);
      //    rect(0, 0, 169.5,169.5);  // draw a rectangle rect(x,y,width,height)
          s.quad(x+60,y+60,x-180,y+60,x-60,y-60,x+180,y-60);
      }
      
      function keyPressed() { //setup keyboard function
      
          if (s.keyCode === s.RIGHT_ARROW) { //when user click the RIGHT_ARROW, setup restart position for all of models
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
      
    }


    let canvas = new p5(sketch);
    
  }

  toHome(){
    var s = document.getElementById("defaultCanvas0");
    console.log("~~`~~~~~~~~~~~~~~~~~");
    console.log(s);
    s.remove();
    this.router.navigate(['/home']);
  }

}
