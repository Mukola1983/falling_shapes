
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

