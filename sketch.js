var bg,sleep, brush, gym, eat, bath, move;
var astronaut;
var edges;

function preload(){
  bg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
 move = loadAnimation("move1.png","move.png");
}

function setup() {
  createCanvas(600, 500);
astronaut=createSprite(300,250,1,1)
   edges=createEdgeSprites();
  
}

function draw() {
 astronaut.bounceOff(edges)
  background(bg);
 
    if(keyDown("S")){
    astronaut.addAnimation("sleeping",sleep);
    astronaut.changeAnimation("sleeping");
   astronaut.scale=0.1
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  
  if(keyDown("B")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
     astronaut.scale=0.1
     astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("G")){
     
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
     astronaut.scale=0.1
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("E")){  
     
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
     astronaut.scale=0.1
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
     astronaut.scale=0.1
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
   if(keyDown("M")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
     astronaut.scale=0.1
    astronaut.y=350;
    astronaut.velocityX=2;
    astronaut.velocityY=4;
     
  }
  drawSprites();
  
   stroke("black");
    fill("black");
    textSize(25);
    text("Sleep=S", 13,250);
  
  drawSprites();
   stroke("black");
    fill("black");
    textSize(25);
    text("Brush=B", 13,280);
  
  drawSprites();
   stroke("black");
    fill("black");
    textSize(25);
    text("Gym=G", 13,310);
  
  drawSprites();
   stroke("black");
    fill("black");
    textSize(25);
    text("Eat=E", 13,340);
  
  drawSprites();
   stroke("black");
    fill("black");
    textSize(25);
    text("Bath=Right Arrow", 13,370);
  
  drawSprites();
   stroke("black");
    fill("black");
    textSize(25);
    text("Move=M", 13,400);
}
