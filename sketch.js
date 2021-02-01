
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var world, boy;
var launchingForce = 50;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj = new stone(235,420,30); 

	mangoMom = new mango(325,200,30);
  mangoDad = new mango(270,125,30);
	mangoSister = new mango(175,75,30);
	mangoBrother = new mango(350,130,30);
	mangoOBrother = new mango(300,70,30);
	mangoGrandma = new mango(145,230,30);
	mangoGrandpa = new mango(250,230,40);
	mangoOGrandma = new mango(140,150,40);
	mangoOGrandpa = new mango(300,175,40);
	mangoAunt = new mango(200,200,40);
	mangoUncle = new mango(400,200,40);
	mangoCousin = new mango(250,75,40);

	treeObj=new tree(250,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:1040,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("SHAME ON YOU FOR FAILING. TRY AGAIN. PRESS SPACE",500 ,50);
  image(boy,1000,340,200,300);


  treeObj.display();
  stoneObj.display();
	mangoMom.display();
  mangoDad.display(); 
	mangoSister.display();
	mangoBrother.display();
	mangoOBrother.display();
	mangoGrandma.display();
	mangoGrandpa.display();
	mangoOGrandma.display();
	mangoOGrandpa.display();
	mangoAunt.display();
	mangoUncle.display();
  mangoCousin.display();

  

  groundObject.display();
  launcherObject.display();
  
  detectollision(stoneObj,mangoMom);                                       
  detectollision(stoneObj,mangoDad);                                   
  detectollision(stoneObj,mangoSister);                                     
  detectollision(stoneObj,mangoBrother);                                         
  detectollision(stoneObj,mangoOBrother);                                    
  detectollision(stoneObj,mangoGrandma);                                        
  detectollision(stoneObj,mangoGrandpa);
  detectollision(stoneObj,mangoOGrandma);                                                  
  detectollision(stoneObj,mangoOGrandpa);                                                  
  detectollision(stoneObj,mangoAunt);                                            
  detectollision(stoneObj,mangoUncle);                                            
  detectollision(stoneObj,mangoCousin);                                                         
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
;
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }