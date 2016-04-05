function Paddle(x, y, width, height) {
 	this.x = x;
 	this.y = y;
 	this.width = width;
 	this.height = height;
 	this.x_speed = 0;
 	this.y_speed = 0;
 }

 Paddle.prototype.render = function() {
 	context.fillStyle = "#ffffff";
 	context.fillRect(this.x, this.y, this.width, this.height);
 };

 Paddle.prototype.move = function(x, y) {
 	this.x += x;
 	this.y += y;
 	this.x_speed = x;
 	this.y_speed = y;
 	// console.log(this.width, this.height);
 	if(this.y < 5) {
 		this.y= 5;
 		this.y_speed =0;
 	}
 	else if (this.y + this.height > 395) {
 		this.y= 395 - this.height;
 		this.y_speed =0;
 	}
 } 

 function Player (x) {
 	this.paddle = new Paddle(x, 175, 10, 50);
 }
 //  function Player2 () {
 // 	this.paddle = new Paddle(175, 10, 50, 10);
 // }

 Player.prototype.render = function() {
 	this.paddle.render();
 }

 Player.prototype.update = function(up, down) {
 	for(var key in keysDown) {
 		var value = Number(key);
 		if (value == up) {
 			this.paddle.move(0, -4);
 		}
 		else if (value == down) {
 			this.paddle.move(0, 4);
 		}
 		else this.paddle.move(0, 0);
 	}
 }