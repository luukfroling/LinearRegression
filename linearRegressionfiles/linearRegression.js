var data = [];
function setup(){
  createCanvas(400,400);
  background(51);
  stroke(255);
}

function mousePressed(){
  data.push(new point(mouseX, mouseY));
  console.log("show");
}

var b = 0;
var m = 1;

function drawLine(){
  x2 = width;
  y1 = b
  y2 = m * x2 + b;
  line(0, y1, x2, y2);
}

function linearRegression(){

  var meanX = 0;
  var meanY = 0;

  for(var i = 0; i < data.length; i++){
    meanX += data[i].x;
    meanY += data[i].y;
  }
  meanX /= data.length;
  meanY /= data.length;

  var num = 0;
  var den = 0;
  for(var i = 0; i < data.length; i++){
    num += (data[i].x - meanX) * (data[i].y - meanY);
    den += Math.pow((data[i].x - meanX),2);
  }
  m = num / den;
  b = meanY - m * meanX;
}

function draw(){
  background(51);
  for(var i = 0; i < data.length; i++){
    data[i].show();
  }
  linearRegression();
  drawLine();
}
class point {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  show(){
    ellipse(this.x, this.y, 10, 10);
  }
}
