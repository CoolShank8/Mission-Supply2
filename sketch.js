var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var BottemEdge,RightEdge, LeftEdge

var BottemEdgeSprite, RightEdgeSprite, LeftEdgeSprite

var Sprites = []


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 40 ,40, {restitution:1, isStatic:true});
	World.add(world, packageBody);

	packageSprite=createSprite(width/2 , 200 , 40,40 );
	packageSprite.debug = true
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	
	groundSprite=createSprite(width/2, 650, width,10);
	groundSprite.shapeColor=color(255)


	BottemEdge = new Sprite(width/2,650,200,20)
	BottemEdge.color = "red"

	LeftEdge = new Sprite(290,610,20,100)
	LeftEdge.color = "red"

	
	RightEdge = new Sprite(500,610,20,100)
	RightEdge.color = "red"

	//Create a Ground

	Engine.run(engine)
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)
  
  	packageSprite.x= packageBody.position.x 
 	packageSprite.y= packageBody.position.y 

	keyPressed()

	for (var i = 0; i < Sprites.length; i++)
	{
		Sprites[i].Update()
	}


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}