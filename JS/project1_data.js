Game.data.init = function() 
{
	//### Player ###
	Game.data.archetypes.Player = new GameObject(0,0,"Player");
	Game.data.archetypes.Player.addComponent(new Component_Sprite("PlayerSprite"));
	Game.data.archetypes.Player.addComponent(new Component_Unit(10));
}

Game.data.createObject = function(archetype)
{
	var object = _.cloneDeep(Game.data.archetypes[archetype]);
	Game.levels.objects.push(object);
	return object;
}