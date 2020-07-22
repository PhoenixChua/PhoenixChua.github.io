//###Program Namespace###
var Game = 
{
	object: null,	
	w:1200,
	h: 800,
	time: 0,
	graphics: 
	{
		sprites: []
	},
	levels: 
	{
		id: null,
		objects: [],
		player: null
	},	
	data:
	{
		archetypes: []
	},
	audio: null,
}

//###Component-based game object class###
class GameObject 
{
	constructor(x, y) 
	{
		this.x = x;
		this.y = y;
		this.components = [];
	}
	
	addComponent(component) 
	{
		this.components.push(component);
	}
	
	debugComponents()
	{
		for (var i = 0; i < this.components.length; i++) 
		{
			alert(this.components[i].constructor.name);
		}
	}
	
	getComponent(component)
	{
		for (var i = 0; i < this.components.length; i++) 
		{
			if(this.components[i].constructor.name == component)
				return this.components[i];
		}
		return null;
	}
}

//###Main###
function Loop(newtime) 
{
	Update(newtime - Game.time);
	Draw();
	Game.time = newtime;
	window.requestAnimationFrame(Loop)
}

function Init() 
{
	Game.object = document.getElementById('GameWindow');	
	Game.graphics.init();
	Game.levels.init();
	Game.levels.objects.push(new GameObject(0,0));
	Game.levels.player = Game.levels.objects[0];
	Game.levels.player.addComponent(new Component_Sprite("It works"));
	var TestComponent = Game.levels.player.getComponent("Component_Sprite");
	alert(TestComponent.sprite);
	ResizeGameWindow();
	window.addEventListener("resize", ResizeGameWindow);
	window.requestAnimationFrame(Loop);
}

function Update(dt) 
{
}

function Draw() 
{
	var context = Game.object.getContext("2d");
	context.clearRect(0, 0, Game.object.width, Game.object.height);
	context.fillStyle = "black";
	context.fillRect(0, 0, Game.object.width, Game.object.height);	
	context.font = "30px Arial";
	context.fillStyle = "red";
	context.fillText(Game.time, 10, 50);	

	context.drawImage(Game.graphics.sprites[0],200,0);
	context.drawImage(Game.graphics.sprites[0],200,100);
	context.drawImage(Game.graphics.sprites[0],200,200);
	context.drawImage(Game.graphics.sprites[0],200,300);
	context.drawImage(Game.graphics.sprites[1],200,400);
	context.drawImage(Game.graphics.sprites[1],200,500);
	context.drawImage(Game.graphics.sprites[0],200,600);
	context.drawImage(Game.graphics.sprites[0],200,700);
	context.drawImage(Game.graphics.sprites[0],300,0);
	context.drawImage(Game.graphics.sprites[0],300,100);
	context.drawImage(Game.graphics.sprites[0],300,200);
	context.drawImage(Game.graphics.sprites[0],300,300);
	context.drawImage(Game.graphics.sprites[1],300,400);	
	context.drawImage(Game.graphics.sprites[1],300,500);		
	context.drawImage(Game.graphics.sprites[1],300,600);	
	context.drawImage(Game.graphics.sprites[1],300,700);
	context.drawImage(Game.graphics.sprites[0],500,0);
	context.drawImage(Game.graphics.sprites[0],500,100);
	context.drawImage(Game.graphics.sprites[1],500,200);
	context.drawImage(Game.graphics.sprites[0],500,300);
	context.drawImage(Game.graphics.sprites[1],500,400);	
	context.drawImage(Game.graphics.sprites[1],500,500);		
	context.drawImage(Game.graphics.sprites[1],500,600);	
	context.drawImage(Game.graphics.sprites[1],500,700);	
}


// Automatically resizes the canvas to fit browser size.
function ResizeGameWindow() 
{	
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

// Start everything off!
window.addEventListener("load", Init);