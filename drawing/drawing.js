//select the canvas element so we can draw on it
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//draw a rectangle on the canvas
ctx.fillStyle = "green";
//top left, top right, bottom right, bottom left
ctx.fillRect(0, 0, 00, 00)

//draw a line
ctx.moveTo(500, 300); //starting position (x, y)
ctx.lineTo(500, 500); //ending position (x, y)
ctx.strokeStyle = "green"
ctx.lineWidth =10
ctx.stroke() //draw the stroke
//line
ctx.moveTo(600, 400); //starting position (x, y)
ctx.lineTo(500, 300); //ending position (x, y)
ctx.strokeStyle = "green"
ctx.stroke() //draw the stroke

ctx.moveTo(400, 400); //starting position (x, y)
ctx.lineTo(500, 300); //ending position (x, y)
ctx.strokeStyle = "green"
ctx.stroke() //draw the stroke

ctx.moveTo(500, 500); //starting position (x, y)
ctx.lineTo(400, 600); //ending position (x, y)
ctx.strokeStyle = "green"
ctx.stroke() //draw the stroke

ctx.moveTo(500, 500); //starting position (x, y)
ctx.lineTo(600, 600); //ending position (x, y)
ctx.strokeStyle = "green"
ctx.stroke() //draw the stroke

//triangle
ctx.beginPath();
    ctx.moveTo(75,75); //x,y
    ctx.lineTo(10,75);
    ctx.lineTo(10,25);
    ctx.lineTo(100,25);
    ctx.fill();



//draw a circle
ctx.beginPath();
ctx.arc(500, 260, 40, 0, 2 * Math.PI); //(x, y, radius, start angle, end angle)
ctx.strokeStyle = "green"
ctx.stroke()

//draw another circle
ctx.beginPath();
ctx.arc(00, 00, 0, 0, 2 * Math.PI); //(x, y, radius, start angle, end angle)
ctx.strokeStyle = "green"
ctx.stroke()