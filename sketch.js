//Declare variable for background & backgroundImage
var BG;
var BGImage;
var cb,cbImage,cb2Image;


function preload()
{
  //Load allImages
BGImage=loadImage('assets/BG.png');
cbImage=loadImage('assets/shooter_2.png');
cb2Image=loadImage('assets/shooter_3.png');
}

function setup() 
{
  //Create a Canvas which takes windowWidth & windowHeight
  createCanvas(windowWidth,windowHeight);
  //create sprite for the background than add the background image scale it if needed
BG = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
BG.addImage(BGImage);
BG.scale = 5;

  //create the player sprite,Add Image scale if needed
cb=createSprite(displayWidth-1150,displayHeight-300,50,50);
cb.addImage(cbImage);
cb.scale=0.3;

}

function draw() 
{
  background(0); 

  //moving the player up and down 
  
if(keyDown("UP_ARROW"))
{
cb.y=cb.y-30;
}

if(keyDown("DOWN_ARROW"))
{
cb.y=cb.y+30;
}
  //release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space"))
{
cb.addImage(cb2Image);
}

  //player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space"))
{
cb.addImage(cbImage);
}

  //write code from P5.play.js to  display all object 
drawSprites();

}
