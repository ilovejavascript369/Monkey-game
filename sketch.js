var bananaImage, obstacleImage, obstacleGroup, backgrd, score;
var back, ground, player, foodGroup;
function preload(){
  backgrd = loadImage("jungle.jpg")
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
  back = createSprite(0,0)
  back.addImage("background",backgrd)
  back.velocityX = -3;
  if(back.x === 200){
    back.x = 0;
  }
  ground = createSprite(0,20)
  ground.visible = false;
  player.addAnimation("player",player_running)
  loadAnimation()
}

function draw() {
  background(220);
  if(foodGroup.isTouching(player)){
    score = score+2;
    foodGroup.destroy();
  }
  drawSprites();
  text(score,500,50)
  
}