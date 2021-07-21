

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







