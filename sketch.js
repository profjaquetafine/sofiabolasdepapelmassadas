const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world
var ball
var chao

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction  : 0,
		density : 1.2
	}


	ball=Bodies.circle(200,10,10,ball_options)
	World.add(world,ball)


	chao=new solo(width/2,670,width,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);
  

ellipse(ball.position.x, ball.position.y, 20)

chao.display()
  drawSprites();
 
}



