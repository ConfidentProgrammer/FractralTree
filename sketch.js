var x = 0;
var y = 0;
var len = 0;
var col = 255;
function setup() {
  createCanvas(550, 550);
  x = width / 2;
  y = height;
  // len = 100;


}

function draw() {

  background(0);
  translate(x, y);
  update(150);
}


function update(len) {
   stroke(255);

  line(0, 0, 0, -len);
  translate(0, -len);
  // rotate(PI / 5);
  if (len > 2) {
    push();
    rotate(PI / 5);
    update(len * .66);
    pop();
    push();
    rotate(-(PI / 5));
      stroke(255);

    update(len * .66);
    pop();
  }

  //line(0, 0, 0, -len * .66);
}