
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyimage, treeimage,boy,stone,tree,slingShot,ground;

function preload()
{
  boyimage=loadImage("boy.png");
  treeimage=loadImage("tree.png");
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//boy=Bodies.rectanle(200,200,20,20);
  //World.add(world,boy);
  tree=createSprite(1200,300,450,200);
  tree.addImage(treeimage);
  tree.scale=0.5;
  
	ground = new Ground(800,850,1600,400);

   stone=new Stone(250,500,50);
   slingShot = new Slingshot(stone.body,{x:250,y:500});
   mango1= new Mango(1300,130,70,70);
   mango2= new Mango(1050,230,70,70);
   mango3= new Mango(1250,220,80,70);
   mango4= new Mango(1100,100,80,70);
   mango5= new Mango(1170,150,70,70);
   mango6= new Mango(1450,130,70,70);
   mango7= new Mango(1350,230,70,70);
   mango8= new Mango(1250,120,80,70);
   mango9= new Mango(1400,100,80,70);
   mango10= new Mango(1350,150,70,70);
   

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  boy=createSprite(300,550);
  boy.addImage(boyimage);
  boy.scale=0.1;
 
  drawSprites();
 
  key1();
 
  slingShot.display();
  ground.display();
  stone.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   detectollison(stone,mango1);
   detectollison(stone,mango2);
   detectollison(stone,mango3);
   detectollison(stone,mango4);
   detectollison(stone,mango5);
   detectollison(stone,mango6);
   detectollison(stone,mango7);
   detectollison(stone,mango8);
   detectollison(stone,mango9);
   detectollison(stone,mango10);
  
 
}
function detectollison(lstone,lmango){
 mangoBodyPosition=lmango.body.position
 stoneBodyPosition=lstone.body.position

 var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.height+lstone.height&&distance<=lmango.width+lstone.width){
   Matter.Body.setStatic(lmango.body,false);
 } 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly()
}

function key1(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:250,y:500})
  // slingshot = new Slingshot(stone.body,{x:250,y:500})
   slingShot.attach(stone.body);
  }
}


