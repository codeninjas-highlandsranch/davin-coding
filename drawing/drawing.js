//select the canvas element so we can draw on it
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//draw a rectangle on the canvas
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 300, 200)

//draw a line
ctx.moveTo(0, 0); //starting position (x, y)
ctx.lineTo(200, 300); //ending position (x, y)
ctx.strokeStyle = "red"
ctx.stroke() //draw the stroke

//draw a circle
ctx.beginPath();
ctx.arc(100, 500, 40, 0, 2 * Math.PI); //(x, y, radius, start angle, end angle)
ctx.strokeStyle = "green"
ctx.stroke()

//draw another circle
ctx.beginPath();
ctx.arc(400, 100, 40, 0, 2 * Math.PI); //(x, y, radius, start angle, end angle)
ctx.strokeStyle = "red"
ctx.stroke()