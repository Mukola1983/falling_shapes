


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






