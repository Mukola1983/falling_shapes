

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

