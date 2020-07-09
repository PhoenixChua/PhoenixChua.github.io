//###Program Namespace###
var Game = 
{
	object: null,	
	w:1200,
	h: 800,
	time: 0,
	sprites: null
}

//###Main###
function Loop(newtime) {
	Update(newtime - Game.time);
	Draw();
	Game.time = newtime;
	window.requestAnimationFrame(Loop)
}

function Init() {
	Game.object = document.getElementById('GameWindow');
	Graphics_Init();
	ResizeGameWindow();
	window.addEventListener("resize", ResizeGameWindow);
	window.requestAnimationFrame(Loop);
}

function Update(dt) {
}

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
	context.drawImage(Game.sprites,300,700);
}

window.addEventListener("load",Init);