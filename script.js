var x2=0;
var y2=0;
var offsetx2=-500;
var offsety2=-200;
var x=100;
var y=100;
var dx=1;
var dy=1;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function getMousePos(canvas, evt) {
    var rect = c.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}

 c.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(c, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        console.log(message);
        
        x2 = mousePos.x; 
        y2 = mousePos.y;
     
      }, false);

function handler(e) {
    e = e || window.event;

    var pageX = e.screenX;
    var pageY = e.screenY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX;
        pageY = e.clientY;
    }

    //x2 = pageX + offsetx2; 
    //y2 = pageY + offsety2;

}



document.addEventListener("mousemove", handler);

ctx.beginPath();
    ctx.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    ctx.arc(100,100,20,0,Math.PI*2,true); ctx.closePath();
    ctx.fill();






  



function draw()
{
    
  ctx.beginPath();
  ctx.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x,y,20,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  x+=dx;
  y+=dy;
    
  
}


function drawAll()
{
    context.clearRect(0,0, 300,300);
    draw2();
    draw();
}

function draw2()
{
  ctx.beginPath();
  ctx.fillStyle="#f44242";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x2,y2,20,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
//x2+=dx;
  //y2+=dy;
  
}

//1



  context= myCanvas.getContext('2d');
  setInterval(drawAll,10);




