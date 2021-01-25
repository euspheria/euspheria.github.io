var scaleFactor;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	scaleFactor = getScaleFactor();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	scaleFactor = getScaleFactor();
}

function draw() {
	//console.log(frameRate());
	background(0);
	setStage(scaleFactor);
	fill(100);
	ellipse(0, 0, 1, 1);
	fill(255);
	ellipse(0,0.5,0.25,0.25);
	ellipse(getMouseX(scaleFactor), getMouseY(scaleFactor), 0.2, 0.2);
	closeStage(scaleFactor);
}
