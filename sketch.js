const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3;
var wreckingBall, mouseBall;
var string;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground()
  box1 = new Box(400,350,50,50);
  box2 = new Box(450,350,50,50);
  box3 = new Box(500,350,50,50);
  box4 = new Box(400,300,50,50);
  box5 = new Box(450,300,50,50);
  box6 = new Box(500,300,50,50);
  box7 = new Box(400,250,50,50);
  box8 = new Box(450,250,50,50);
  box9 = new Box(500,250,50,50);
  box10 = new Box(400,200,50,50);
  box11 = new Box(450,200,50,50);
  box12 = new Box(500,200,50,50);
  
  box13 = new Box(400,150,50,50);
  box14 = new Box(450,150,50,50);
  box15 = new Box(500,150,50,50);

 
  wreckingBall = new Ball(200,200,100);
  mouseBall = new Ball(200,100,1);
  
  string = new String(wreckingBall.body,mouseBall.body);
  
}

function draw() {
  background("#888888");
  ground.display();  
  
  //displaying ze bloxs
  
  //1st layer
  push();
  fill("#ff0000");
  box1.display();
  pop();
  push();
  fill("#00ff00");
  box2.display();
  pop();
  push();
  fill("#0000ff");
  box3.display();
  pop();
//2nd layer
  push();
  fill("#ff0000");
  box6.display();
  pop();
  push();
  fill("#00ff00");
  box4.display();
  pop();
  push();
  fill("#0000ff");
  box5.display();
  pop();
//3rd layer
  push();
  fill("#ff0000");
  box8.display();
  pop();
  push();
  fill("#00ff00");
  box9.display();
  pop();
  push();
  fill("#0000ff");
  box7.display();
  pop();
//4th layer
  push();
  fill("#ff0000");
  box10.display();
  pop();
  push();
  fill("#00ff00");
  box11.display();
  pop();
  push();
  fill("#0000ff");
  box12.display();
  pop();
//5th layer
push();
fill("#ff0000");
box15.display();
pop();
push();
fill("#00ff00");
box13.display();
pop();
push();
fill("#0000ff");
box14.display();
pop();

mouseBall.display();
wreckingBall.display();
string.display();

Matter.Body.setPosition(mouseBall,{x:mouseX,y:mouseY});

//followMouse();
}

// function followMouse(){
//   Matter.Body.setPosition(mouseBall,{x:mouseX,y:mouseY});
// }