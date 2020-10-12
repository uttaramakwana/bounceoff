var fixedRect, movingRect;
var box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.debug=true;
  movingRect = createSprite(200,600,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.debug=true;
  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
  box1 = createSprite(100,100,30,30);
  box1.shapeColor = "red";
  box2 = createSprite(500,100,30,30);
  box2.shapeColor = "white";
  box1.velocityX=3;
  box2.velocityX=-3;
}

function draw() {
  background(0); 

bounceOff(box1,box2);
bounceOff(fixedRect,movingRect);

  
 

  

  
 
  drawSprites();
} 
function bounceOff(object1,object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2 &&
    object2.x-object1.x < object2.width/2 + object1.width/2){

      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);

    }

  if(object1.y-object2.y < object2.height/2 + object1.height/2 &&
    object2.y-object1.y < object2.height/2 + object1.height/2){
  
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);                                                  
  }
}

