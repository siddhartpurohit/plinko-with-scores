//making the class particle
class Particle 
{
  // making the constructor of the body  
  constructor(x, y,r) 
  {
    //giving the options to the body  
    var options =
    {
        restitution:0.4
    }
        //making the body
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        //adding the body to the world
        World.add(world, this.body);
    }
    //displaying the body
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}