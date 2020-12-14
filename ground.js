class ground {
	constructor(x, y, width, height) {
		var options = {
			isStatic: true
		}
		this.width = width
		this.height = height

		this.body = Bodies.rectangle(x, y, width, height, options);

		World.add(world, this.body);

	}
	display() {

		var groundPos = this.body.position;


		rectMode(CENTER)
		strokeWeight(4);
		fill("brown")
		rect(groundPos.x, groundPos.y, this.width, this.height);


	}

}