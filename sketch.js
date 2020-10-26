let bar1, bar2, bar3, bar4, bar5, bar6, bar7;
let wallpaper;

let decadence;
let dust;
let futureclub;
let nightcall;
let turbokiller;

let info = "Click to turn on the radio";
let textSong = "OFF";
let title = " ";

let analyzer1;
let counter = 0;
let volume1 = 0;

let yline2 = 50;
let xline2 = -200;




function preload(){
  turbokiller = loadSound("./assets/Music/Carpenter Brut - Turbo Killer.mp3");
  nightcall = loadSound("./assets/Music/Kavinsky - Nightcall Drive Original Movie Soundtrack Official Audio.mp3");
  futureclub = loadSound("./assets/Music/Perturbator - Future Club Dangerous Days Premiere - 2014.mp3");
  dust = loadSound("./assets/Music/Hotline Miami 2 Wrong Number Soundtrack - Dust.mp3");
  decadence =  loadSound("./assets/Music/Hotline Miami 2 Wrong Number Soundtrack - Decade Dance.mp3");

  wallpaper = loadImage("./assets/Images/wallpaper.jpg");
}




function setup() {
  createCanvas(windowWidth,windowHeight);

  image(wallpaper, -150, 0);

  analyzer1 = new p5.Amplitude();
  analyzer1.setInput(turbokiller);

  angleMode(DEGREES);
  ellipseMode(CENTER);
  textAlign(CENTER);

}




function draw() {
  push();
  rectMode(CENTER);
  stroke("Purple");

  //Gray rectangle of the window
  strokeWeight(15);
  rect3 = new Rect (windowWidth/2, windowHeight/2, 650, 500, "DimGray");
  rect3.runrect();
  pop();

  //ellipse with numbers
  push();
  fill('black');
  translate(windowWidth/2, windowHeight/2);
  ellipse(-200, 100, 150);
  pop();
  //music switcher
  push();
  fill("gray");
  translate(windowWidth/2, windowHeight/2);
  ellipse(-200, 100, 100);
  line(-200, 100, xline2, yline2);
  pop();

  //rectangles and decorations of the window
  push();
  rectMode(CENTER);
  noStroke();
  translate(windowWidth/2, windowHeight/2);
  rect1 = new Rect (13, -55, 320, 175, "black");
  rect2 = new Rect (15, 95, 250, 45, "black");
  rect4 = new Rect (0, -220, 650, 60, "Purple");
  rect5 = new Rect (210, -225, 30, 30, "white");
  rect6 = new Rect (210, -225, 20, 20, "Purple");

  rect1.runrect();
  rect2.runrect();
  rect4.runrect();
  rect5.runrect();
  rect6.runrect();
  pop();

  //Texts
  push();
  textFont('VT323');
  translate(15, 0);
  text1 = new Texts (info, windowWidth/2, windowHeight/2, 20, "white", 0, 200);
  text2 = new Texts (textSong, windowWidth/2, windowHeight/2, 20, "Magenta", 0, -100);
  text3 = new Texts (title, windowWidth/2, windowHeight/2, 40, "white", 0, -250);
  numberSong0 = new Texts ("0", windowWidth/2, windowHeight/2, 15, "Magenta", -215, 195);
  numberSong1 = new Texts ("1", windowWidth/2, windowHeight/2, 15, "Magenta", 45, 20);
  numberSong2 = new Texts ("2", windowWidth/2, windowHeight/2, 15, "Magenta", 3, 70);
  numberSong3 = new Texts ("3", windowWidth/2, windowHeight/2, 15, "Magenta", -47, 28);
  numberSong4 = new Texts ("4", windowWidth/2, windowHeight/2, 15, "Magenta", -50, -26);
  numberSong5 = new Texts ("5", windowWidth/2, windowHeight/2, 15, "Magenta", 0, -70);

  text1.runtext();
  text2.runtext();
  text3.runtext();
  numberSong0.runtext();
  numberSong1.runtext();
  numberSong2.runtext();
  numberSong3.runtext();
  numberSong4.runtext();
  numberSong5.runtext();
  pop();

  //texts part 2
  push();
  textFont('VT323');
  text4 = new Texts ("SYNTHWAVE RADIO", windowWidth/2, windowHeight/2, 50, "white", -160, -210);
  text5 = new Texts ("X", windowWidth/2, windowHeight/2, 50, "white", 460, 0);
  text6 = new Texts ("—", windowWidth/2, windowHeight/2, 50, "white", -40, 0);

  text4.runtext();
  text5.runtext();
  text6.runtext();
  pop();

  //colored bars, the heights change thanks to the song volume
  push();
  translate(windowWidth/2, windowHeight/2);
  bar1 = new Bars (-120, 0, 25, volume1, "Indigo");
  bar2 = new Bars (-80, 0, 25, volume1, "DarkViolet");
  bar3 = new Bars (-40, 0, 25, volume1, "DarkOrchid");
  bar4 = new Bars (0, 0, 25, volume1, "SlateBlue");
  bar5 = new Bars (40, 0, 25, volume1, "MediumSlateBlue");
  bar6 = new Bars (80, 0, 25, volume1, "CornflowerBlue");
  bar7 = new Bars (120, 0, 25, volume1, "LightSkyBlue");

  bar1.runbar();
  bar2.runbar();
  bar3.runbar();
  bar4.runbar();
  bar5.runbar();
  bar6.runbar();
  bar7.runbar();
  pop();
}


class Bars {
  constructor(xpos, ypos, xwidth, yheight, col){
    this.x = xpos;
    this.y = ypos;
    this.w = xwidth;
    this.h = yheight;
    this.color = col;
  }
  display(){
    fill(this.color);
    rect(this.x,this.y,this.w,this.h);
  }
  amplyfied(){
      volume1 = analyzer1.getLevel();
      volume1 = map(volume1, 0, 1, -10, -150); //10 minimum, 150 max
  }
  runbar(){
    this.display();
    this.amplyfied();
  }
}


class Texts {
  constructor(str, xpos, ypos, size, col, xalign, yalign){
    this.str = str;
    this.x = xpos;
    this.y = ypos;
    this.h = size;
    this.color = col;
    this.xa = xalign;
    this.ya = yalign;
  }
  runtext(){
    translate(this.xa, this.ya);
    textSize(this.h);
    fill(this.color);
    text(this.str, this.x, this.y);
  }
}

class Rect {
  constructor(xpos, ypos, width, height, col){
    this.x = xpos;
    this.y = ypos;
    this.w = width;
    this.h = height;
    this.color = col;
  }
  runrect(){
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  
  image(wallpaper, -150, 0);
}



//every time i click the mouse, the msuic change and also the visualization of the switcher
function mouseClicked(){
  if (counter == 0) {
    turbokiller.play();
    counter ++;
    info = ' ';
    textSong = 'Carpenter Brut - Turbo killer';
    yline2 = 65;
    xline2 = -155;
  }
  else if (counter == 1){
    turbokiller.stop();
    nightcall.play();
    analyzer1.setInput(nightcall);
    counter ++;
    textSong = 'Kavinsky - Nightcall';
    yline2 = 140;
    xline2 = -145;
  }
  else if (counter == 2) {
    nightcall.stop();
    futureclub.play();
    analyzer1.setInput(futureclub);
    counter ++;
    textSong = 'Perturbator - Future club';
    yline2 = 150;
    xline2 = -200;
  }
  else if (counter == 3) {
    futureclub.stop();
    dust.play();
    analyzer1.setInput(dust);
    counter ++;
    textSong = 'M.O.O.N. - Dust';
    yline2 = 135;
    xline2 = -245;
  }
  else if (counter == 4) {
    dust.stop();
    decadence.play();
    analyzer1.setInput(decadence);
    counter ++;
    textSong = 'Jasper Byrne - Decade Dance';
    yline2 = 65;
    xline2 = -250;
  }
  else {
    decadence.stop();
    analyzer1.setInput(turbokiller);
    counter = 0;
    textSong = 'OFF';
    yline2 = 50;
    xline2 = -200;
  }
}
