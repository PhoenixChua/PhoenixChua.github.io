function Graphics_Init() 
{	
	Game.sprites = new Image();
	Game.sprites.src = "Resources/test.png"; 
}

// Automatically resizes the canvas to fit browser size.
function ResizeGameWindow() {	
	// New width and height based on the dimensions of the browser.
	Game.object.width = Game.w;
	Game.object.height = Game.h;
	var w, h;
	if (Game.h / Game.w > window.innerHeight / window.innerWidth) 
	{
		h = window.innerHeight;
		w = h * Game.w / Game.h;
	} 
	else {
		w = window.innerWidth;
		h = w * Game.h / Game.w;
	}
	
	// Modify CSS based on the calculation.
	Game.object.style.width = w + "px";
    Game.object.style.height = h + "px";
	
	offsetX = (window.innerWidth - w) / 2;
    offsetY = (window.innerHeight - h) / 2;
	
	Game.object.style.margin = offsetY + "px " + offsetX + "px";
}