var num = 5,
  rotation = 0,
  balls = [];

function Ball() {
  this.r = 20;
  this.x = Math.random() * 200;
  this.y = Math.random() * 150;
}

function init() {
  canvas = document.getElementById("testCanvas");
  context = canvas.getContext("2d");

  context.clearRect(0, 0, context.width, context.height);
  context.fillStyle = "lightblue";

  for (i = 0; i < num; i++) {
    balls[i] = new Ball();
  }
  draw()
  // requestAnimationFrame(draw);
};

function draw() {
  // reset transforms before clearing
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(context);
  // tramslate and rotate an absolute rotation value
  context.translate(300, 300);
  context.rotate(rotation);

  // draw arcs
  // for (i = 0; i < num; i++) {
  //   var Ball = balls[i];
  //   context.beginPath();
  //   context.arc(Ball.x, Ball.y, Ball.r, 0, 2 * Math.PI, false);
  //   context.stroke();
  //   context.fill();
  // }
  let ball = new Ball();
  ball.x = 170
  ball.y = 170
  context.beginPath();
  context.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
  context.stroke();
  context.fill();

  context.beginPath();
  context.arc(0, 0, 240, 0, Math.PI * 2, false);
  console.log(context);
  context.lineWidth = 8;
  context.stroke();


  // update rotation value and request new frame
  rotation -= 0.01;
  // requestAnimationFrame(draw)
}
