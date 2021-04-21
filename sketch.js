var starImg, bgImg;
var fairy , fairyImg , fairySound;
var star, starBody;
var wall

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairySound = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
    
	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	

	engine = Engine.create();
	world = engine.world;
	
	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	
	Engine.run(engine);

	
}


function draw() {
  
	background(bgImg);
    fairySound.play();
    Engine.update(engine)

    if(keyDown("RIGHT_ARROW"))
	{fairy.x = fairy.x+8;}
    
	if(keyDown("LEFT_ARROW"))
     {fairy.x = fairy.x-8;}

     star.x = starBody.position.x
     star.y = starBody.position.y

	 
	 if( starBody.position.y>430 ) {
		Body.setStatic(starBody,true)}
	 
	 
	 
	 
	 
	 
	 if( keyCode == DOWN_ARROW ) {
		Body.setStatic(starBody, false);} 

drawSprites();
}
	



	

  


