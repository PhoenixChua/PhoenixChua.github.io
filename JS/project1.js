// Automatically resizes the canvas to fit browser size.

function ResizeGameWindow() {
	var GameWindow = {
		object: document.getElementById('GameWindow'),	
		w:1280,
		h: 800		
	}
	
	// New width and height based on the dimensions of the browser.
	var w, h;
	if (GameWindow.h / GameWindow.w > window.innerHeight / window.innerWidth) 
	{
		h = window.innerHeight;
		w = h * GameWindow.w / GameWindow.h;
	} 
	else {
		w = window.innerWidth;
		h = w * GameWindow.h / GameWindow.w;
	}
	
	// Modify CSS based on the calculation.
	GameWindow.object.style.width = w + "px";
    GameWindow.object.style.height = h + "px";
	
	offsetX = (window.innerWidth - w) / 2;
    offsetY = (window.innerHeight - h) / 2;
	
	GameWindow.object.style.margin = offsetY + "px " + offsetX + "px";
	
	var context = GameWindow.object.getContext("2d");
	context.fillStyle = "black";
	context.fillRect(0, 0, GameWindow.object.width, GameWindow.object.height);	
}

window.addEventListener("resize", ResizeGameWindow);
window.addEventListener("load",ResizeGameWindow);