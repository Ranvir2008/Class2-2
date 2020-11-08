const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,ground,world;
var Ball;
function setup() {  

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(400,380,800,10,{isStatic:true});
  Ball = Bodies.circle(400,20,50,{restitution:1});
  World.add(world,ground);
  World.add(world,Ball);

}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x,Ball.position.y,50,50);
}