btnClick();
pickerBarDragEvent();
changeCircleText();
typeChange();     
initRecColor();

window.onresize = function() {
	throttle1.filter(arguments);
}

var throttle1 = new Throttle(400,function(args) {
	ps.update();
})

for(var i=0; i<getDom('.color-li').length; i++) {
	getDom('.color-li')[i].addEventListener('click',function() {
		var chooseColor = getAttr(this,'data-color');
		chooseColorArr = chooseColor.split(',');
		rgbaArr[0] = chooseColorArr[0];
		rgbaArr[1] = chooseColorArr[1];
		rgbaArr[2] = chooseColorArr[2];
		rgbaArr[3] = chooseColorArr[3];
		// console.log(rgbaArr);
		changeBgColor();
		changeCircleText();
		barChange();
	})
}
