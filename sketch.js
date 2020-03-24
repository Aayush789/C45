var ghost,player;
var living_room_image;
function preload(){
  living_room_image = loadImage('living room.jpg');
}


function setup() {
  createCanvas(1000,800);
  //ghost = createSprite();
 //createSprite(400, 200, 50, 50);
}

function draw() {
  background(living_room_image);  
  drawSprites();
}