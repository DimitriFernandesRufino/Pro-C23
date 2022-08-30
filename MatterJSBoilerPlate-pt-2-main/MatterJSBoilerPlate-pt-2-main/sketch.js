const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

	var plane_options={
        IsStatic: true
	}

    var paticle_options = {
        restitution:0.4,
		friction:0.02
	}


  particle = Bodies.circle(220,10,10,paticle_options);
  World.add(world,particle1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(green);
  
  drawSprites();

  Engine.update(engine);

  fill()
  rectMode()
  ellipseMode()

  rotator = Bodies.rectangle(250,200,150,20, rotator_options);
  world.add(world,rotator1);

 
}



