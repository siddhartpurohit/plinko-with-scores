//making the class plinko
class Plinko
{
  //making the constructor of body  
  constructor(x, y)
 {
    //giving the options to the body  
    var options = 
    {
      restitution: 1,
      friction: 0,
      isStatic:true
    }
      //making the body
      this.r = 10;
      this.body = Bodies.circle(x, y, this.r, options);
      //adding the body in the world
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
    imageMode(CENTER);
    noStroke();
    fill("white");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
 }
}
  