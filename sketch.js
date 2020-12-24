const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score = 0;
var backgroundImg;
var bg = "light.jpg";

function preload(){
  getBackgroundImage();
polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,200,10);

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
  
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);

block13 = new Block(360,195,30,40);
block14 = new Block(390, 195,30,40);
block15 = new Block(420,195,30,40);

block16 = new Block(390,155,30,40);

block17 = new Block(640,175,30,40);
block18 = new Block(670,175,30,40);
block19 = new Block(700,175,30,40);
block20 = new Block(730,175,30,40);
block21 = new Block(760,175,30,40);

block22 = new Block(670,135,30,40);
block23 = new Block(700,135,30,40);
block24 = new Block(730,135,30,40);

block25 = new Block(700,95,30,40);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot = new Slingshot(this.polygon,{x:100,y:200});

 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
}

function draw() {
  if(backgroundImg)
    background(backgroundImg);
  //Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("SCORE : "+score,750,40);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("pink")
  block25.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
}

function mouseDragged ()
{
 Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
} 

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.polygon);
  }
}

async function getBackgroundImage(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
var hour = datetime.slice(11, 13);
if (hour >= 06 && hour <= 18) {
bg = "light.jpg"; }
else {
bg = "dark.jpg"; }
backgroundImg = loadImage(bg);
console.log(backgroundImg);
}