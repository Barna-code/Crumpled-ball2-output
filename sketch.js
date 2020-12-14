
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbinObj, paperObject, groundObject
var world;


function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;


	dustbinObj = new dustbin(1200, 650);
	paperObject = new paper(200, 450, 40);
	groundObject = new ground(800, 670, 1600, 20);


	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background(255);

	dustbinObj.display();
	paperObject.display();
	groundObject.display();

	fill("black")
	textSize(30)
	text("Press Up Arrow key to make the ball go inside the box", 200, 50)


}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 95, y: -85 });

	}
}





