let rotation = 0.01;
let rotationIncrement = 0.01;
const gong = new Tone.Synth().toMaster()
const speed = document.querySelector("#rotationSpeed")
console.log(speed);
// handler for speed (need for speed)
speed.oninput = () => {
  rotationIncrement = speed.value / 100;
};

function Mallet() {
  this.r = 20;
  this.x = 240
  this.y = 0;
};

const mallets = [];

function init() {
  canvas = document.getElementById("testCanvas");
  context = canvas.getContext("2d");
  context.clearRect(0, 0, context.width, context.height);
  context.fillStyle = "lightblue";

  // draw()
  gongLine();
  window.requestAnimationFrame(drawPolys);
};

function gongLine(){
  context.beginPath();
  context.moveTo(500, 0);
  context.lineTo(200, 0);
  context.lineWidth = 1;
  context.stroke();
}

function drawPolys() {
  // reset transforms before clearing, I don't get this, I stole it from MDN and it works
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  // translate - this moves the canvas around to the center
  context.translate(300, 300);
  // draw gongLine BEFORE rotation
  gongLine();
  context.rotate(rotation);

  // circle path, this will have to be re-worked for other shapes, obvs
  context.beginPath();
  context.arc(0, 0, 240, 0, Math.PI * 2, false);
  context.lineWidth = 1;
  context.stroke();

  let mallet1 = new Mallet();

  // draw the mallet
  context.beginPath();
  context.arc(mallet1.x, mallet1.y, mallet1.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  // increment rotation and pull new frame
  rotation -= rotationIncrement;
  window.requestAnimationFrame(drawPolys)
  console.log(rotation);
  // determine mallet strike
  strike = Math.abs((rotation * 100).toFixed(0));
  if(strike > 0 && strike % 628 === 0){
    gong.triggerAttackRelease('C4', '8n')
    console.log(strike)
  }
}
