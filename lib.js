/**
 * Gets current scale factor
 * Automatically generates from windowWidth and windowHeight
 */

function getScaleFactor()
{
	var scaleFactor = 0;
	if(windowWidth < windowHeight)
		scaleFactor = windowWidth;
	else
		scaleFactor = windowHeight;
	return scaleFactor / 2.0;
}

/**
	* Moves us to 
	*/
function setStage(scaleFactor)
{
	push();
	// Make (0,0) the center
	translate(windowWidth/2, windowHeight/2);
	// Make up be up
	scale(1,-1);
	// Make us live in (-1,1), roughly speaking
	scale(scaleFactor);
}

function closeStage(scaleFactor)
{
	pop();
}

function getMouseX(scaleFactor)
{
	return (mouseX - windowWidth/2) / scaleFactor;
}

function getMouseY(scaleFactor)
{
	return -(mouseY - windowHeight/2) / scaleFactor;
}
