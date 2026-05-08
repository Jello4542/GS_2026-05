function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  
 ellipse(200, 200, 300, 330); //얼굴 모양

  //눈
  circle(140, 168, 90);
  circle(250, 168, 90);
  
  //입
  arc(200, 200, 25, 250, 0, 180);
  
  
}    