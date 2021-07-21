







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





class Shape{
	constructor(props){
		this.x = props.x || randomNum(40, canvas.width-50);
		this.y = props.y || -90;
		this.width = props.width || randomNum(10, 40);
		this.height = props.height || randomNum(10, 40);
		this.gravity = gravity;
		this.numOfsides = props.numOfsides || 3;
		this.color = Math.floor(Math.random()*16777215).toString(16);

		this.Polygon = props.Polygon || false;
		this.Ellipse = props.Ellipse || false;
		this.Circle = props.Circle || false;
		this.delete = props.delete || false;
		this.onScreen = false
	}

	drawPolygon(){
		drawPolygon( this.x, this.y, this.numOfsides, this.width,this.color)
	}

	drawEllipse(){
		drawEllipse(this.x, this.y, this.width, this.height, this.color)
	}

	drawCircle(){
		drawCircle(this.x, this.y, this.width, this.color)
	}


	move(){
		this.y += this.gravity;
		if(this.y >= canvas.height+50 ){
			this.delete = true;
		}
	}

}








function addShape(x, y, width, numOfsides){
	let shape
	if(rand === 0){
		return shape = new Shape({
			x: x || randomNum(40, canvas.width-50),
			y: y || -90,
			numOfsides: 3,
			Polygon: true,
		});
	}
	if(rand === 1){
		return shape = new Shape({
			x: x || randomNum(40, canvas.width-50),
			y: y || -90,
			Ellipse: true,
		});
	}
	if(rand === 2){
		return shape = new Shape({
			x: x || randomNum(40, canvas.width-50),
			y: y || -90,
			Circle: true,
		});
	}
	if(rand === 3){
		return shape = new Shape({
			x: x || randomNum(40, canvas.width-50),
			y: y || -90,
			numOfsides: 5,
			Polygon: true,
		});
	}
	if(rand === 4){
		return shape = new Shape({
			x: x || randomNum(40, canvas.width-50),
			y: y || -90,
			numOfsides: 6,
			Polygon: true,
		});
	}
	if(rand === 5){
		return shape = new Shape({
			x: x || randomNum(40, canvas.width-50),
			y: y || -90,
			numOfsides: 4,
			Polygon: true,
		});
	}

	return shape;
}

setInterval(() => {
	if( shapesArr.length < 50){
		for(let i= 0; i< shapePerSec; i++){
			shapesArr.push(addShape());
			rand = randomNum(0, 5);
		}
	}
}, 1000);

function drawShapes(){
	if(shapesArr.length > 0){
		for(let i=0;i<shapesArr.length; i++){
			drawDiferentShape(shapesArr[i]);
			shapesArr[i].move();
			if(shapesArr[i].delete){
				shapesArr.splice(i, 1);
			}
		}
	}
}

function drawDiferentShape(shape){
	if(shape.Polygon){
		shape.drawPolygon();
	}
	if(shape.Ellipse){
		shape.drawEllipse();
	}
	if(shape.Circle){
		shape.drawCircle();
	}
}




// Counting shapes on the screen==========================
let numberShapes = document.getElementById('numberShapes');

function countShape(shapesNum){
	numberShapes.innerHTML = `Number of curent shapes: ${shapesNum}`;
}

function countShapes(){
	if(shapesArr.length > 0){
		for(let i=0;i<shapesArr.length; i++){

			if(shapesArr[i].y > 0 && shapesArr[i].y < canvas.height ){
				shapesArr[i].onScreen = true;
			}
			if(shapesArr[i].y <= 0 || shapesArr[i].y >= canvas.height){
				shapesArr[i].onScreen = false;
			}
			const shapeOnScreen = shapesArr.reduce(function(num, item) {
					if(item.onScreen){
						return num += 1;
					}else{
						return num;
					}
			}, 0 );

			countShape(shapeOnScreen)
		}
	}
}
// Counting shapes on the screen==========================

// Gravity Increase and Decreace======================================
let gravityIncrement = document.getElementById('gravityIncrement');
let gravityDecrement = document.getElementById('gravityDecrement');

let gravityValue = document.getElementById('gravityValue');

gravityValue.innerHTML = `Gravity value: ${gravity}`;

function gravityIncrease(){
	gravity++;
	gravityValue.innerHTML = `Gravity value: ${gravity}`;
}

function gravityDecrease(){
	if(gravity > 1){
		gravity--;
		gravityValue.innerHTML = `Gravity value: ${gravity}`;
	}
}

gravityIncrement.onclick = function() {gravityIncrease()};
gravityDecrement.onclick = function() {gravityDecrease()};

// Gravity Increase and Decreace======================================


// Shapes appearing per second =======================================
let numShapesIncrease = document.getElementById('numShapesIncrease');
let numShapesDecreace = document.getElementById('numShapesDecreace');

let shapesPerSec = document.getElementById('shapesPerSec');
shapesPerSec.innerHTML = `number of shapes per sec: ${shapePerSec}`;

function shapesNumIncrease(){
	shapePerSec++;
	shapesPerSec.innerHTML = `number of shapes per sec: ${shapePerSec}`;
}

function shapesNumDecrease(){
	if(shapePerSec > 1){
		shapePerSec--;
		shapesPerSec.innerHTML = `number of shapes per sec: ${shapePerSec}`;
	}
}

numShapesIncrease.onclick = function() {shapesNumIncrease()};
numShapesDecreace.onclick = function() {shapesNumDecrease()};

// Shapes appearing per second =======================================

// Add shape onClick and delete ======================================
canvas.onclick = function(e) {
	const x = e.pageX - e.target.offsetLeft;
	const y = e.pageY - e.target.offsetTop;

	const pix = context.getImageData(x, y, 1, 1).data;
	const hex = RGBAtoHEX(`rgba(${pix[0]},${pix[1]},${pix[2]},${pix[3]},)`);
	if(hex !== '#000000'){
		delShapeOnClick(hex);
	}else{
		shapesArr.push(addShape(x, y));
		rand = randomNum(0, 3);
	}
}

	// Transform RGBA to HEX
function RGBAtoHEX(color){
	const rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(',');
	const hex = `#${((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)}`;

	return hex;
}

function delShapeOnClick(picColor){
	if(shapesArr.length > 0){
		for(let i=0;i<shapesArr.length; i++){
			if(`#${shapesArr[i].color}`=== picColor){
				shapesArr[i].delete = true;
			}
		}
	}
}
// Add shape onClick and delete ======================================

// Get surface ocupied by shapes
let ocupiedArea;

let squareOfShapes = document.getElementById('squareOfShapes');

let length = canvas.width * canvas.height;

function showPercentage(){
	var data = new Int32Array( context.getImageData(0,0,canvas.width,canvas.height).data.buffer );
	for(var i = length, j = 0; i; i--) 
		if( data[i] !== 0) j++;

	squareOfShapes.innerHTML = `Surface area ocupied by shapes: ${j} px`;
}




function showShapes(){
	render();
	requestAnimationFrame(showShapes);

}
showShapes();

function render() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	drawShapes();
	countShapes();
	showPercentage();
}

var requestAnimationFrame = (function(){
	return window.requestAnimationFrame  ||
		window.webkitRequstAnimationFrame ||
		window.mozRequstAnimationFrame ||
		window.oRequstAnimationFrame ||
		window.msRequstAnimationFrame ||
		function(callback){
			window.setTimeout(callback, 1000 / 20);
		};
})();







