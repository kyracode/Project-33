var Engine, World, Bodies;
var engine, world, bodies;
var backgroundImg;
var snow;
//var snowImg

function setup() {
  createCanvas(800,400);
  //engine = Engine.create();
    //world = engine.world;
  snow = createSprite(400, 200, 50, 50);
  snow = loadImage ("snow4.webp");
  //snow = addImage (snowImg);
  backgroundImg = loadImage ("snow3.jpg");
  
  

    snow = new Snow(600,height,1200,20);
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  snow.display();
  //engine.updateengine;
}