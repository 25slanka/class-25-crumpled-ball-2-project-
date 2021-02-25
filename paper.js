class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:0.5
			
			}
		this.x=x;
		this.image=loadImage("images/paper.png");
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			//strokeWeight(3);
			//fill("red")
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}