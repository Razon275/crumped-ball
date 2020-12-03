
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1=new Paper(200,300,50,50);
	ground = new Ground(500,height,1800,20);
	dustbin1=new Dustbin(1000,740,10,100);
	dustbin2=new Dustbin(945,785,100,10);
	dustbin3=new Dustbin(900,740,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:3,y:-5});
	}
}


