var fixedRect, movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "green";
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "green";
  object3 = createSprite(300,100,50,50);
  object3.shapeColor = "green";
  object4 = createSprite(400,100,50,50);
  object4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "blue";
      object1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }
  drawSprites();
}



