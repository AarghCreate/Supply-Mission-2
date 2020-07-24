class bricks
{
    constructor(x,y,width,height,R,S)
    {
        var options=
        {
            restitution:R,
            isStatic:S
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        width=this.width;
        height=this.height;

        World.add(world,this.body);
    }

    display(w,h)
    {
        push();
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x , this.body.position.y , w , h);
        pop(); 
    }
}