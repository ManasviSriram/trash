
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,ground1,wall1,wall2,wall3,bin_img;
function preload(){
bin_img = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperball=new Paper(150,200)
ground1=new Ground(400,660,800,30)
wall1=new dustbin(600,600,20,100)
wall2=new dustbin(750,600,20,100)
wall3=new dustbin(675,640,150,20)

wall3.addImage("tesh",bin_img)

Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	ellipseMode(RADIUS)
  background("white");
  paperball.display();
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  

  
  drawSprites();
 
}
function keyPressed(){

if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperball.body,paperball.body.position,{x:80,y:-50})


}


}



