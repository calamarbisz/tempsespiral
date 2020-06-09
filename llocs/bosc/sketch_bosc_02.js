var imageSprite;

function preload() {}
function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);

//   // IMATGE PERSONATGE A L'SPRITE
//   var img = loadImage("../../assets/imatges/persona/persona_01.png");
//   imageSprite = createSprite(windowWidth / 2, windowHeight / 2);
//   imageSprite.addImage(img);
 }

function draw() {
  clear();
  fill (0);
  ellipse(mouseX, mouseY, 90,170);
  filter(BLUR, 20);
  // ESCALA DE LA IMATGE (personatge)
  // imageSprite.scale = mouseY / 800;
  // imageSprite.scale = windowHeight / 1500;
  // //imageSprite.scale = 0.1;
  //
  // //CAMINAR RATOLÍ PERSONATGE
  // if (mouseX < imageSprite.position.x - 10) {
  //   //flip horizontally
  //   imageSprite.mirrorX(1);
  //   //negative x velocity: move left
  //   imageSprite.velocity.x = -1;
  // } else if (mouseX > imageSprite.position.x + 10) {
  //   imageSprite.mirrorX(-1);
  //   imageSprite.velocity.x = 1;
  // } else {
  //   //if close to the mouse, don't move
  //   imageSprite.velocity.x = 0;
  // }
  //
  // drawSprites();
}
