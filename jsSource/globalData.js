
let canvas = document.getElementById('game');
let context = canvas.getContext('2d');

canvas.width  = 800;
canvas.height = 400;

// Gravity speed variable
let gravity = 1;

// Random numbers
function randomNum(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Array with shapes
const shapesArr = [];

// Variable for shapes randomization
let rand = 0;

// Number shapes per second
let shapePerSec = 1;

// Draw rect, triangle, pentagon=====================
const drawPolygon = ( Xcenter, Ycenter, numOfSides,size, color) => {
	context.fillStyle = '#' + `${color}`;
	context.beginPath();
	context.moveTo (Xcenter + size * Math.cos(0), Ycenter +  size *  Math.sin(0));

	for (var i = 1; i <= numOfSides;i += 1) {
		context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numOfSides));
	}
	context.fill();
}
// Draw rect, triangle, pentagon=====================

// Draw Ellipse========================
const drawEllipse = (x, y, width, height, color) => {
	context.fillStyle = '#' + `${color}`;
	context.beginPath();
	context.ellipse(x, y, width, height, Math.PI / 4, 0, 2 * Math.PI);
	context.fill();
}
// Draw  Ellipse========================

// Draw Ellipse========================
const drawCircle = (x, y, width, color) => {
	context.fillStyle = '#' + `${color}`;
	context.beginPath();
	context.arc(x, y, width, 0, 2 * Math.PI)
	context.fill();
}
// Draw  Ellipse========================

