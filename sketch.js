var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var pack1,pack2,pack3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	 world = engine.world;

	 var  part1_options={
		isStatic:true
		}
	
		
	 var part1=createSprite(400,650,200,20);
		 part1.shapeColor= ("red");
		 var  part2_options={
			isStatic:true
			}
	
			
	 var part2 =createSprite(307,610,20,100,part2_options);
	 part2.shapeColor= ("red");
	
	 var  part3_options={
		isStatic:true
	 
		}
		
	 var part3=createSprite(493,610,20,100,part3_options);
	 part3.shapeColor= ("red");
		 var  packageSprite_options={
			restitution: 1.0
		}
 
 
 
	packageSprite=createSprite(width/2, 80, 10,10,packageSprite_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);



	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	packageBody.setScale=part1.scale+1;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
  }

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	 Matter.Body.setStatic(packageBody,false) 
	 
  }
}