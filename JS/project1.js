//###Program Namespace###
var Game = 
{
	object: null,	
	w:1200,
	h: 800,
	time: 0,
	sprites: null
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
	
	var context = Game.object.getContext("2d");
}

//###Graphics###
function Graphics_Init() 
{	
	Game.sprites = new Image();
	Game.sprites.src = "Resources/test.png"; 
}

//###Audio###

//###Main###
function Draw() {
	var context = Game.object.getContext("2d");
	context.clearRect(0, 0, Game.object.width, Game.object.height);
	context.fillStyle = "black";
	context.fillRect(0, 0, Game.object.width, Game.object.height);	
	context.font = "30px Arial";
	context.fillStyle = "red";
	context.fillText(Game.time, 10, 50);	

	context.drawImage(Game.sprites,200,0);
	context.drawImage(Game.sprites,200,100);
	context.drawImage(Game.sprites,200,200);
	context.drawImage(Game.sprites,200,300);
	context.drawImage(Game.sprites,200,400);
	context.drawImage(Game.sprites,200,500);
	context.drawImage(Game.sprites,200,600);
	context.drawImage(Game.sprites,200,700);
}

function Loop(newtime) {
	Update(newtime - Game.time);
	Draw();
	Game.time = newtime;
	window.requestAnimationFrame(Loop)
}

function Update(dt) {
}


function Init() {
	Game.object = document.getElementById('GameWindow');
	Graphics_Init();
	ResizeGameWindow();
	window.addEventListener("resize", ResizeGameWindow);
	window.requestAnimationFrame(Loop);
}

window.addEventListener("load",Init);