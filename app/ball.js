function Ball(x, y) {
 	this.x = x;
 	this.y = y;
 	this.x_speed = -3;
 	this.y_speed = 0;
 	this.radius = 5;
 }

 Ball.prototype.render = function() {
 	context.beginPath();
 	context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
 	context.fillStyle = "#ffffff";
 	context.fill();
 }

 Ball.prototype.update = function(paddle1, paddle2) {
 	this.x += this.x_speed;
 	this.y += this.y_speed;
 	var top_x = this.x - 5;
 	var top_y = this.y - 5;
 	var bottom_x = this.x + 5;
 	var bottom_y = this.y + 5;
 	if(this.x < 0 ) { // pogodak za p2
 		this.x_speed = 3;
 		this.y_speed = 0;
 		this.x = 300;
 		this.y = 200;
 		document.getElementById("score2").textContent = parseInt(document.getElementById("score2").innerHTML) + 1;
 	}
 	else if (this.x > 600) { // pogodak za p1
 		this.x_speed = 3;
 		this.y_speed = 0;
 		this.x = 300;
 		this.y = 200;
 		document.getElementById("score1").textContent = parseInt(document.getElementById("score1").innerHTML) + 1;
 	}

 	if (this.y - 5 < 0) {    //zid gore/dole
    this.y = 5;
    this.y_speed = -this.y_speed;
  	} 
  	else if(this.y + 5 > 400) { 
    this.y = 395;
    this.y_speed = -this.y_speed;
  	}

  	if(top_x > 300) {
	    if(top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x && top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y) {
	      this.x_speed = -3;
	      this.y_speed += (paddle2.y_speed / 2);
	      this.x += this.x_speed;
	    }
  	} 
  	else {
	    if(top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x && top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) {
	      this.x_speed = 3;
	      this.y_speed += (paddle1.y_speed / 2);
	      this.x += this.x_speed;
	    }
  	}
 };