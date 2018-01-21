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
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();