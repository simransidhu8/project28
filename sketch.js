
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImage, boy;
var ground, tree;
var mango1, mango2, mango3, mango4;

function preload(){
	boyImage = loadImage("boy.png");
}

function setup(){
	createCanvas(1000, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 650, 1000, 100);
	tree = new Tree(1000, 650);
	mango1 = new Mango(600, 300);
	mango2 = new Mango(700, 300);
	mango3 = new Mango(800, 300);
	mango4 = new Mango(900, 300);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
}



