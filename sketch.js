
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var rope1,rope2,rope3,rope4,rope5,b1,b2,b3,b4,b5,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground=new Ground();

  b1=new Bob(300,400,40);
  b2=new Bob(350,400,40);
  b3=new Bob(400,400,40);
  b4=new Bob(450,400,40);
  b5=new Bob(500,400,40);
rope1=new Rope(b3.body,ground.body,0,0);
rope2=new Rope(b2.body,ground.body,-30,0);
rope3=new Rope(b1.body,ground.body,-70,0);
rope4=new Rope(b4.body,ground.body,30,0);
rope5=new Rope(b5.body,ground.body,70,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  b1.display();
  
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  console.log(mouseX);
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(b5.body,b5.body.position,{x:85,y:-45});
  }
}


