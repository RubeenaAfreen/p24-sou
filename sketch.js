const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(20, 280, 20);
    box = new Box(400, 560);
    ground = new Ground(400, 568, width, 10);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  paper.display();
  box.display();
  ground.display();
  
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {x: 13, y: -13});

  }
}