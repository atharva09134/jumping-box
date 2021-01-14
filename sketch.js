var canvas;
var music;
var box; 
var s1,s2,s3,s4;
var edges;



function preload(){
    music = loadSound("music.mp3");
} 


function setup(){
    canvas = createCanvas(800,600);

    box =  createSprite(750,70,40,40)
    box.shapeColor = "white"
    box.velocityY = 3;
    box.velocityX = -4;
    s2 =  createSprite(500,580,160,20)
    s2.shapeColor = "darkorange"
   
    s3 =  createSprite(300,580,160,20)
    s3.shapeColor = "yellow"

    s4 =  createSprite(100,580,160,20)
    s4.shapeColor = "blue"

    s1 =  createSprite(700,580,160,20)
    s1.shapeColor = "green"

}

function draw() {
    background("black");
 edges = createEdgeSprites();
box.bounceOff(edges);
       
   
      
     
//music.play();




  if(  box.bounceOff(s1)){
    
    box.shapeColor = "green"
    box.velocityY = -5;
    box.velocityX = -5;
  }

  if(  box.bounceOff(s2)){
    
    box.shapeColor = "darkorange"
    box.velocityY = -5;
box.velocityX = -5;
  }

  if( box.bounceOff(s3)){
    
    box.shapeColor = "yellow"
    box.velocityY = -5;
box.velocityX = -5;

  }

  if( box.bounceOff(s4)){
    
    box.shapeColor = "blue"
    box.velocityY = -5;
box.velocityX = -5;
  }
    
     




    drawSprites();
}
