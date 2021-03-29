var car;
var wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(800,1500);
//creating car
car=createSprite(200, 200, 50, 50);
car.velocityX=speed;
//creating wall
wall=createSprite(1500,200,60,height/2)

}

function draw() {
  background("black");
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/25509
    if(deformation>180){
      car.shapeColor="red"
    }
    if(deformation<180&&deformation>80){
      car.shapeColor="yellow"
    }
    if(deformation<80){
      car.shapeColor="green"
    }
}
  drawSprites();
}