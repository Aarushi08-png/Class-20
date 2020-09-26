var MB, FB;



function setup() {
  createCanvas(1200,800);
  FB = createSprite(400, 200, 50, 50);
  MB = createSprite(200, 500, 100, 50)
  MB.shapeColor = "red";
  FB.shapeColor = "red";

}

function draw() {
  background(255,255,255);  
  drawSprites();

MB.x = mouseX;
MB.y = mouseY;

if(MB.x - FB.x < MB.width/2 + FB.width/2
   && FB.x - MB.x < MB.width/2 + FB.width/2
  && MB.y - FB.y < MB.height/2 + FB.height/2 
  && FB.y - MB.y < MB.height/2 + FB.height/2  ) {
  MB.shapeColor = "orange";
  FB.shapeColor = "orange";
}
else{
  MB.shapeColor = "blue";
  FB.shapeColor = "blue";

}
}

