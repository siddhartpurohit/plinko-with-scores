// making the ground class
class Ground
{
  // making the constructor of the body
  constructor(x,y,w,h) 
  {
    //giving the options to the body
    var options = 
    {
      isStatic: true
    }
      //making the body
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      //adding the body to the world
      World.add(world, this.body);
  }
  // displaying the body
  display()
  {
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x, pos.y, this.w,this.h);
  }
}