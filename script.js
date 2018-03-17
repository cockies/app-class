var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 1;
var GameOver = false;
var dy = -2;
var dAIy = 1.5;
var paddleHeight = 50;
var paddleWidth = 15;
var paddleY = (canvas.height-paddleHeight)/2;
var topPressed = false;
var botPressed = false;
var AIY = (canvas.height-paddleHeight)/2;
var playerScore = 0;
var AIScore = 0;
var playerHits = 0;
var AIHits = 0;
var WallHits = 0;

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
    ctx.fillStyle = "lime";
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
    ctx.fillStyle = "yellow";
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
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if(playerScore > 5 || AIScore > 5){
        GameOver = true;
    }
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0000ff";
    ctx.fill();
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
    if(y + dAIy > canvas.height-ballRadius || y + dAIy < ballRadius) {
        dy = -dy;
        
        console.log("no")
    }
    */
     
   
    if(AIY + paddleHeight > y && AIY < y && x > canvas.width - paddleWidth) {
        //console.log("no")
        dx = -dx;
        AIHits+= 1;
        //update ai hits
    } else if (x > canvas.width - paddleWidth) {
               console.log("playerpoint");
        x = canvas.width/2;
        y = canvas.height-30;
        playerScore += 1;
    } 
    
    
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        WallHits += 1;
       // console.log("no")
    }
     
   
    if(paddleY + paddleHeight > y && paddleY < y && x < paddleWidth) {
        playerHits += 1;
        dx = -dx;
        //update hits
    }
    else if (x < paddleWidth){
         console.log("AIpoint")
        x = canvas.width/2;
        y = canvas.height-30;
         AIScore += 1;
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