var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) }; //todo ako bude sporo smanji na 30fps

 var canvas = document.createElement('canvas');
 var width = 600;
 var height = 400;
 canvas.width = 600;
 canvas.height = 400;
 var context = canvas.getContext('2d');

 window.onload = function() {
 	document.getElementById("divza").appendChild(canvas);
 	animate(step);
 };

 var step = function() {
 	update();
 	render();
 	animate(step);
 };

 var update= function() {
 	player1.update(81, 65);
 	player2.update(80, 76);
 	ball.update(player1.paddle, player2.paddle);
 }

 var render = function() {
 	context.fillStyle = "#000000";
 	context.fillRect(0, 0, width, height);
 	player1.render();
 	player2.render();
 	ball.render();
 }

 var player1 = new Player(10);
 var player2 = new Player(580);
 var ball = new Ball(300, 200);

var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});