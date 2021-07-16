var roadImg
var runnerImg

function preload(){
  //pre-load images
  roadImg = loadImage("path.png")
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  road = createSprite(200,200)
  road.addImage(roadImg)
  road.velocityY = 5

  runner = createSprite(200,200)
  runner.addAnimation("runnerImg",runnerImg)
  runner.scale = 0.075

  leftBorder = createSprite(50,200,1,400)
  leftBorder.visible = false

  rightBorder = createSprite(350,200,1,400)
  rightBorder.visible = false

  topBorder = createSprite(200,0,400,5)
  topBorder.visible = false

  bottomBorder = createSprite(200,400,400,5)
  bottomBorder.visible = false
}

function draw() {
  background(0);

  runner.collide(leftBorder)
  runner.collide(rightBorder)
  runner.collide(topBorder)
  runner.collide(bottomBorder)

  if (keyDown("left")) {
    runner.x = runner.x - 3
  }
  if (keyDown("right")) {
    runner.x = runner.x + 3
  }
  if (keyDown("up")) {
    runner.y = runner.y - 3
  }
  if (keyDown("down")) {
    runner.y = runner.y + 3
  }

  if (road.y > 500) {
    road.y = 0
  }

  drawSprites()
}
