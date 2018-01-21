var person = {
   firstName:"John",
    lastName:"Face",
    
};
var loginDetails = {
    username:"1234",
    password:"1234",
}
function myFunction() { 
    console.log(person.firstName)
    console.log(person.lastName)
    console.log(loginDetails.username)
    console.log(loginDetails.password)
    
}
myFunction();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
    ctx.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    ctx.arc(100,100,20,0,Math.PI*2,true); ctx.closePath();
    ctx.fill();
