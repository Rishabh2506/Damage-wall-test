var bullet;
var wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1500,200, thickness ,height/2);

  speed = random(55,90);
  weight = random(400,1500);

  
  
}

function draw() {
  background("black");

  bullet.velocityX= speed;

  if(wall.x - bullet.x < wall .width/2 + bullet.width/2){
    bullet.velocityX = 0;
    var damage;
    damage = (1/2*weight*speed*speed)/(thickness*thickness*thickness);
    console.log(damage);

    if(damage > 10 ){
      wall.shapeColor = color("red")
    } else if (damage < 10){
      wall.shapeColor = color("green")
    }
  }

  drawSprites();
}