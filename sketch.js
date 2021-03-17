const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  helicopter, package_1,packageIMG;
var packageBody,ground,engine,world;
var log1,log2,log3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world

	package_1 = new Package(400,200,70,70);
	helicopter = new Helicopter(400,200);

	log1 = new Log(320,622,300,PI/7);
	log2 = new Log(500,622,300,PI/7);
	log3 = new Log(410,622,150,PI/2);
	
	
	 

	Engine.run(engine);
  
}


function draw() {
  background(0);
	Engine.update(engine);
  
	package_1.display();
	helicopter.display();
	log1.display();
	log2.display();
	log3.display();

	

  drawSprites();
  
  
 
}
