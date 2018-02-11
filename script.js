var x3=0;
var y3=0;
var x2=0;
var y2=0;
var offsetx2=-500;
var offsety2=-200;
var x=100;
var y=100;
var dx=1;
var dy=1;
var dx2=1;
var dy2=1;
var c = document.getElementById("myCanvas");
var something = Math.PI*2;
var ctx = c.getContext("2d");
var colooor = "red";

function getMousePos(canvas, evt) {
     
    var rect = c.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
}


function CollisionCheck(){
    
    var cx = (x2 + something) - (x3 + something);
    
    var cy = (y2 + something) - (y3 + something);
              
    var distance = Math.sqrt(cx * cx + cy * cy);
    
    if (distance < something + something) {
        // collision detected!
        colooor =  "green";
         dx2*=-1;
         dy2*=-1;
    } else {
        // no collision
        colooor = "red"; 
    }
}


function draw3()
{
    x3+=dx2;
    y3+=dy2;
 
    
    if (x3 > c.width || x3 < 0 ){  
         dx2*=-1;
         
    
    //console.log(dx)
        //console.log("out of bounds (horizontal)")
    }
    
    if (y3 > c.height || y3 < 0){
        dy2*=-1;
       //  console.log(dy)
       // console.log("out of bbounds (vertical)")
    }
    
 
  ctx.beginPath();
  ctx.fillStyle="#71f442";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x3,y3,10,0,something,true);
  ctx.closePath();
  ctx.fill();

 // x+=dx;
  //y+=dy;
    
  
}

 c.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(c, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        //console.log(message);
        
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
    ctx.arc(100,100,20,0,something,true); ctx.closePath();
    ctx.fill();






  



function draw()
{
    
  ctx.beginPath();
  ctx.fillStyle="#0000ff";
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x,y,20,0,something,true);
  ctx.closePath();
  ctx.fill();
  x+=dx;
  y+=dy;
    
  
}


function drawAll()
{
    context.clearRect(0,0, 300,300);
    drawplayer();
    draw();
    draw3();
     CollisionCheck();
}

function drawplayer()
{
  ctx.beginPath();
  ctx.fillStyle= colooor;
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  ctx.arc(x2,y2,10,0,something,true);
  ctx.closePath();
  ctx.fill();
//x2+=dx;
  //y2+=dy;
  
}


//1



  context= myCanvas.getContext('2d');
  setInterval(drawAll,10);




