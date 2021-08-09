var fixedRect, movingRect;
ob1,ob2,ob3,ob4,ob5

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

ob1 = createSprite(100, 100, 50, 50);
ob1.shapeColor = "purple"

ob2 = createSprite(200, 100, 50, 50);
ob2.shapeColor = "purple"

ob3 = createSprite(300, 100, 50, 50);
ob3.shapeColor = "purple"

ob4 = createSprite(400, 100, 50, 50);
ob4.shapeColor = "purple"

ob5 = createSprite(500, 100, 50, 50);
ob5.shapeColor = "purple"

  ob4.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  

 

  BounceOff(ob4,movingRect);
  drawSprites();
}
