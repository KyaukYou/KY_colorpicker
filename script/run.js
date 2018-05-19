btnClick();
pickerBarDragEvent();
changeCircleText();
typeChange();     
initRecColor();
initRecColor1();
changeInputRgba();

window.onresize = function() {
	throttle1.filter(arguments);
}

var throttle1 = new Throttle(400,function(args) {
	ps.update();
})

for(var i=0; i<getDom('.color-li').length; i++) {
	getDom('.color-li')[i].addEventListener('click',function(e) {
		e.stopPropagation();
		var chooseColor = getAttr(this,'data-color');
		chooseColorArr = chooseColor.split(',');
		rgbaArr[0] = chooseColorArr[0];
		rgbaArr[1] = chooseColorArr[1];
		rgbaArr[2] = chooseColorArr[2];
		rgbaArr[3] = chooseColorArr[3];
		changeBgColor();
		changeCircleText();
		barChange();
	})
};

domEvent(document, 'click',function(e) {
	e.stopPropagation();
	let colorWrap = getDom('.color-container-wrap');
	for(var i=0; i<colorWrap.length; i++) {	
		var dataIndex = colorWrap[i].children[0].getAttribute('data-index');
		if (dataIndex == 0) {
			let dataBol = getAttr(colorWrap[i], 'data-bol');
			changeAttr(colorWrap[i], 'left', '-270px');
			setAttr(colorWrap[i], 'data-bol', 0)

		} else if (dataIndex == 1) {
			let dataBol = getAttr(colorWrap[i], 'data-bol');
			changeAttr(colorWrap[i], 'right', '-270px');
			setAttr(colorWrap[i], 'data-bol', 0);
		}
	}
});