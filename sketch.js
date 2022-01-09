
var trex ,trex_running, edges;

function preload(){
  
  trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(50,160,20, 50);
  trex.addAnimation("running",trex_running);
  edges = createEdgeSprites();

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;
}

function draw(){
  //set background color to white
  background("white")
  
  console.log(trex.y);

  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;

  //stop trex from falling down
  trex.collide(edges[3]);

  drawSprites();
}
