//defineing the constants of matter.js
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events
const Bodies = Matter.Bodies;
// defineing the variables 
var particle;
var greenLine;
//defineing the arrays
var plinkos = [];
var divisions = [];
var divisionHeight=300;
//defineing the score and point 
var score =0;
points=0;
// defineing the gameState
var gameState="play";

// making the function setup
function setup() 
{
  //making the canvas
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,790,width,20);
  // looping the division
   for (var k = 0; k <=width; k = k + 80) 
   {
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    //lopping the plinkos
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
       
}
//making the function draw
function draw() 
{
  //making the background
  background("black");
  //giving the textSize
  textSize(20)
  //making the text score
  text("score:"+score,10,40);
  //making the text
  text(" 500 ", 20, 550);
  text(" 500 ", 100, 550);
  text(" 500 ", 180, 550);
  text(" 500 ", 260, 550);
  text(" 100 ", 340, 550);
  text(" 100 ", 420, 550);
  text(" 100 ", 500, 550);
  text(" 200 ", 580, 550);
  text(" 200 ", 660, 550);
  text(" 200 ", 740, 550);
  fill("white"); 
 
  //displaying the variables
  ground.display();
  //updateing the engine
  Engine.update(engine);
  // giving the condition of gameState End
  if(gameState=="end")
  {
    textSize(100);
    text("GAME OVER!",150,250);
  }
   // making the plinko display
   for (var i = 0; i < plinkos.length; i++) 
   {  
     plinkos[i].display();  
   }
    //making the particle null
    if(particle!=null)
    {
      particle.display();
      // giving the condition y position 
      if (particle.body.position.y>760)
      {
        //giving the condition x position
        if (particle.body.position.x < 300) 
        {
          //chageing the score by500
          score=score+500;      
          particle=null;
          //making the chances points 
          if ( points>= 5) gameState ="end";                          
        }
         else if ( particle.body.position.x > 301 ) 
         {
           //changeing the score by 500
           score = score + 100;
           particle=null;
           if ( points>= 5) gameState ="end";

         }
          else if ( particle.body.position.x > 601 )
          {
            //changeing the score by200
            score = score + 200;
            particle=null;
            if ( points>= 5)  gameState ="end";

          }      
  
  
 
  
  
  
        }

      }
   //making the division display   
   for (var i = 0; i < divisions.length; i++) 
  {  
    divisions[i].display();  
  }
  
}
//making the function mousePressed
  function mousePressed()
{
  //making the gameState
  if(gameState!=="end")
  {  
      //making the points+
      points++;
      //making the new particle
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
