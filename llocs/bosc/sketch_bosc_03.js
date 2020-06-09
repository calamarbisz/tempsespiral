var img;

var balls = [];

var radiusLow = 5; //10
var radiusHigh = 3; //20
var rangeLow = .5;
var rangeHigh = 1;


function preload(){
	img = loadImage("../../assets/imatges/llocs/bosc_16.jpg");
}

function setup() {

	createCanvas(windowWidth, windowHeight);
	background(0);

}

function mouseReleased() {
  if (value == 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function draw(){


	for (var i = 0; i < balls.length; i++){
			balls[i].draw();
			balls[i].update();
			balls[i].changeColour();
	}

	for (var i = 0; i < balls.length; i++){
			if (balls[i].radius < 0){
					balls.splice(i, 1);
			}
	}

	if (mouseReleased){

			for (var i = 0; i < 5; i++){
					balls.push(new Ball(mouseX, mouseY, color(img.get(mouseX+random(2), mouseY+random(2)))));
			}

	}

}


class Ball{

			//start where the user clicks
			//move up from where the user has clicked
					//become smaller as it moves up
			//be drawn to the screem

			constructor(mX, mY, c){
					this.location = createVector(mX, mY);
					this.radius = random(10, 20);
					this.r = red(c);
					this.g = green(c);
					this.b = blue(c);

					this.xOff = 0.0;
					this.yOff = 0.0;

					this.radiusLow;
					this.radiusHigh;

					this.rangeLow;
					this.rangeHigh
			}

			update(){
					this.radius -= random(0.15, 0.25);

					this.xOff = this.xOff + random(-.5, .5);
					this.nX = noise(this.location.x) * this.xOff;

					this.yOff = this.yOff + random(-.5, .5);
					this.nY = noise(this.location.y) * this.yOff;

					this.location.x += this.nX;
					this.location.y += this.nY;

			}

			changeColour(){

					this.c = color(img.get(this.location.x, this.location.y));

					this.r = red(this.c);
					this.g = green(this.c);
					this.b = blue(this.c);
			}

			draw(){
					noStroke();
					fill(this.r, this.g, this.b);
					image(img,this.location.x, this.location.y, 400,400);
			}
	}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
