let rotationTable = Array.from(new Array(2512), (x, i) => (i * 0.25) + 0.25);
let rotation = 0.01;
let i = 0;
let rotationIncrement = 1;

//make a stupid pseudo-gong
const gong = new Tone.Synth().toMaster()
const speed = document.querySelector("#rotationSpeed")


// handler for speed (need for speed)
speed.oninput = () => {
  rotationIncrement = parseInt(speed.value);
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

  // drawPolys();
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
  // draw gongLine BEFORE rotation but AFTER setTransform
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
  rotation = -((rotationTable[i] * 0.01).toFixed(3));
  if (i < rotationTable.length - (rotationIncrement +1)){
    i += rotationIncrement;
  }
  else {
    i = 0;
    // trigger mallet strike
    gong.triggerAttackRelease('C4', '8n')
    console.log("gong gong big old bong")
  }


  window.requestAnimationFrame(drawPolys)

}
