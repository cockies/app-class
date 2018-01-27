var x2=0
var y2=0
var x=100;
var y=100;
var dx=1;
var dy=1;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
    ctx.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    ctx.arc(100,100,20,0,Math.PI*2,true); ctx.closePath();
    ctx.fill();






  
  setInterval(draw,10);


function draw()
{
    context.clearRect(0,0, 300,300);
  ctx.beginPath();
  ctx.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x,y,20,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  x+=dx;
  y+=dy;
    
  
}
function draw2()
{
  ctx.beginPath();
  ctx.fillStyle="#f44242";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x2,y2,20,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  x2+=dx;
  y2+=dy;
  
}

//1



  context= myCanvas.getContext('2d');
  setInterval(draw,10);
setInterval(draw2,10);



