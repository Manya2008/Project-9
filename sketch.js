var box;

var r=0;
var g=0;
var b=0;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}

function draw() 
{
   background(r,g,b);

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    r= 255;
    g= 0;
    b= 0;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    r= 0;
    g= 255;
    b= 0;    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    r= 0;
    g= 0;
    b= 255;
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    r= 50;
    g= 50;
    b= 50;
  }

  drawSprites();
}