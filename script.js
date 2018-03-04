var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var GameOver = false;
var dy = -2;
var dAIy = 2;
var paddleHeight = 50;
var paddleWidth = 15;
var paddleY = (canvas.height-paddleHeight)/2;
var topPressed = false;
var botPressed = false;
var AIY = (canvas.height-paddleHeight)/2;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 40) {
        botPressed = true;
    }
    else if(e.keyCode == 38) {
        topPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 40) {
        botPressed = false;
    }
    else if(e.keyCode == 38) {
        topPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(0, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.closePath();
}



function drawAIPaddle() {
    ctx.beginPath();
    ctx.rect(canvas.width - paddleWidth, AIY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
    ctx.closePath();
}

function drawAI() {
    //AIY = y - 20;
    
    
    
    if(AIY <= y-20){
       AIY += dAIy;
       }
    else {
       AIY -= dAIy;
       }
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if(!GameOver){
    drawBall();
    drawAI();
        
       } else {
           x = canvas.width/2;
           y = canvas.height-30;
           //GameOver = false;
       }
     drawPaddle();
      drawAIPaddle();
    
    
    /*
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }*/
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        
       // console.log("no")
    }
     
   
    if(paddleY + paddleHeight > y && paddleY < y && x < paddleWidth) {
        
        dx = -dx;
    }
    else{
        //bad
    }
   
    
   
    
  
    
    
    
    if(topPressed && paddleY > 0) {
           paddleY -= 6;
      
        
        
    }
      if( botPressed && paddleY < canvas.height - paddleHeight) {
       paddleY += 6;
         
        
         
    }
    
   
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);