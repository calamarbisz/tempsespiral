let video;

function setup() {
  createCanvas(600, 300);
  video = loadImage("../../assets/imatges/espirals/memòria_02.gif");
}

function draw() {
  image(video, video.width, video.height);
}

const maxXChange = 100;
const maxYChange = 5;
const yNoiseChange = 0.01;
const mouseYNoiseChange = 0.3;
const timeNoiseChange = 0.013;

let inverted = false;
{
}

function draw() {
  for (let i = 0; i < video.height / 5; i++) {
    //dist(pmouseX, pmouseY, mouseX, mouseY) * 0.04; i++) {
    drawStreak();
  }
}

function drawStreak() {
  let y = floor(random(height));
  let h = floor(random(20, 30)); //floor(random(1, 100));
  let xChange = floor(
    map(
      noise(
        y * yNoiseChange,
        (mouseY * mouseYNoiseChange + frameCount) * timeNoiseChange
      ),
      0.06,
      0.94,
      -maxXChange,
      maxXChange
    )
  ); //floor(random(-maxXChange, maxXChange));
  let yChange = floor(
    xChange * (maxYChange / maxXChange) * random() > 0.1 ? -1 : 1
  );

  if (
    random() <
    (dist(pmouseX, pmouseY, mouseX, mouseY) / width) * 0.3 + 0.0015
  )
    filter(POSTERIZE, floor(random(2, 6)));
  if (mouseIsPressed && abs(mouseY - y) < 60) {
    if (!inverted) filter(INVERT);
    inverted = true;
  } else {
    if (inverted) filter(INVERT);
    inverted = false;
  }

  image(
    video,
    xChange - maxXChange,
    -maxYChange + y + yChange,
    windowWidth,
    h,
    0,
    y,
    windowWidth,
    h
  );
}
