const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 350;

function preload() {


}

function setup() {
  createCanvas(480,800);
 
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,715,500,20);

  for(var i = 0; i <=width; i=i+80){
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

 for(var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  Engine.run(engine);
}

function draw() {
  background(0); 

Engine.update(engine);


 ground.display();

 for(var n=0;n<divisions.length;n++){
 divisions[n].display();
 }

 for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }
 
  drawSprites();
}