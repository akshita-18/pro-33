const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies

var engine,world; 
var particles = [];
var plinkos=[];
var rows=[];
var ground;
var rows;


var rowsHeight = 130;
var gameState = "PLAY";
var count = 0;
var score = 0;

function setup() {

  
  createCanvas(550,500);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j , 55))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,85))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,125))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,155))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,185))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,225))
  }
  for(var j = 40; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,270))
  }
  for(var j = 15; j<= width-10; j = j+50){
    plinkos.push(new Plinko(j ,315))
  }
  for(var k = 0; k <=width; k = k+80){
    rows.push(new Rows(k, height-rowsHeight/2, 10, rowsHeight));
  }
}

function draw() {
  background(0);
  textSize(35)
  text("Score : "+score,20,40);

  textSize(35)
  text(" 450 ", 5, 460);
  text(" 450 ", 85, 460);
  text(" 450 ", 155, 460);
  text(" 450 ", 240, 460);
  text(" 100 ", 325, 460);
  text(" 100 ", 405, 460);
  text(" 100 ", 490, 460);
  text(" 215 ", 560, 460);
  text(" 220 ", 630, 460);
  text(" 220 ", 710, 460);

  ground.display();
    if ( gameState =="END") {
        background("black");
        fill("red");
        textSize(100);
        text("Game Over", 200, 400);
       
      } 

      for(var k = 0; k < plinkos.length; k++) {
        plinkos[k].display();
     }
 
     if(particle!=null)
     {
        particle.display();
         
         if (particle.body.position.y>700)
         {
               if (particle.body.position.x < 300) 
               {
                   score=score+500;      
                   particle=null;
                   if ( count>= 5) gameState ="END";                          
               }
 
 
               else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
               {
                     score = score + 100;
                     particle=null;
                     if ( count>= 5) gameState ="END";
 
               }
               else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
               {
                     score = score + 200;
                     particle=null;
                     if ( count>= 5)  gameState ="END";
 
               }      
               
         }
     }
  if(frameCount % 30 === 0){
    particle = new Particle(random(130, 400), 0, 7, random(0, 360));
    particles.push(particle);
  }

  
  Engine.update(engine, 25);
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }

 
  for(var k = 0; k<rows.length;k++){
    rows[k].display();
 }


  for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }


//rows.display();
 ground.display();

  drawSprites();
}

for (var i = 0; i < divisions.length; i++) {
     
  divisions[i].display();
}



function mousePressed() {
  if(gameState !== "END") {
      count++;
  particle = new Particle(mouseX, 50, 10, 10);
  }
}

