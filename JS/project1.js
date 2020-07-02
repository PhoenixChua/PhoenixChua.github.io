window.onload = ResizeGameWindow;
window.onresize = ResizeGameWindow;

function ResizeGameWindow() {
	var GameWindow = document.getElementById('GameWindow');

	GameWindow.setAttribute('width', window.innerWidth);
	GameWindow.setAttribute('height', window.innerHeight);
	
	var context = GameWindow.getContext("2d");
	context.fillStyle = "blue";
	context.fillRect(0, 0, GameWindow.width, GameWindow.height);
}