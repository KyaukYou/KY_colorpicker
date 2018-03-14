// 左右btn点击事件
function btnClick() {
	let colorBtn = getDom('.color-btn');
	let colorWrap = getDom('.color-container-wrap');
	for(var i=0; i<colorBtn.length; i++) {
		domEvent(colorBtn[i],'click',function() {
			var dataIndex = this.getAttribute('data-index');
			if(dataIndex == 0) {
				let dataBol = getAttr(colorWrap[dataIndex],'data-bol');
				if(dataBol == 0) {
					changeAttr(colorWrap[dataIndex],'left',0);
					setAttr(colorWrap[dataIndex],'data-bol',1);
				}else {
					changeAttr(colorWrap[dataIndex],'left','-270px');
					setAttr(colorWrap[dataIndex],'data-bol',0)
				}
				
			}else if(dataIndex == 1) {
				let dataBol = getAttr(colorWrap[dataIndex],'data-bol');
				if(dataBol == 0) {
					changeAttr(colorWrap[dataIndex],'right',0);
					setAttr(colorWrap[dataIndex],'data-bol',1)
				}else {
					changeAttr(colorWrap[dataIndex],'right','-270px');
					setAttr(colorWrap[dataIndex],'data-bol',0);
				}
			}
		})
	}
}

// rgba控制
function pickerBarDragEvent() {
	let pickerBar =  getDom('.picker-bar');
	let pickerBarDrag = getDom('.picker-bar-drag');

	for(var i=0; i<pickerBarDrag.length; i++) {
		pickerBarDrag[i].index = i;
			domEvent(pickerBarDrag[i],'mousedown',function(e) {
				var e = e || event;
				var pos = getPos(e);
				currentPickerIndex = this.index;
				dis[this.index].disX = pos.x - this.offsetLeft;
				dis[this.index].disY = pos.y - this.offsetTop;

				document.onmousemove = function(e) {
					var e = e || event;
					var pos = getPos(e);

					var myLeft = pos.x - dis[currentPickerIndex].disX;
					var myTop = pos.y - dis[currentPickerIndex].disY;

					if(myLeft <= -4) {
						myLeft = -4
					}else if(myLeft >= 206) {
						myLeft = 206
					}

					pickerBarDrag[currentPickerIndex].style.left = myLeft + 'px';
					if(getAttr(pickerBarDrag[currentPickerIndex],'bar-index') == 3) {

						let per = (myLeft+4) / 210;
						// let arr4 = Math.round(parseFloat(per) * 100) / 100;
						arr4 = per.toFixed(2);
						rgbaArr[currentPickerIndex] = arr4;
					}else {
						let per = (myLeft+4) / 210;
						rgbaArr[currentPickerIndex] = parseInt(255 * per);
					}

					changeCircleText();
					// $('#R').circliful();
				}

				document.onmouseup = function(e) {
					document.onmousedown = null;
					document.onmousemove = null;
					// $('#R').circliful();
					// $('#G').circliful();
					// $('#B').circliful();
					// $('#A').circliful(); 
				};
			})
	}
}

function changeCircleText() {
	var pickerText = getDom('.picker-circle-text');
	var pickerSmRgba = getDom('.picker-sm-rgba');
	var pickerSmCircle = getDom('.picker-sm-circle');
	for(var i=0; i<pickerText.length; i++) {
		pickerText[i].innerHTML = rgbaArr[i];
		// setAttr(pickerSmRgba[i],'data-percent',rgbaArr[i]);
		// setAttr(pickerSmRgba[i],'data-part',rgbaArr[i]);
	}
	var xiaoshu = rgbaArr[3] * 100;
	rgba1.data('radialIndicator').animate(rgbaArr[0]);
	rgba2.data('radialIndicator').animate(rgbaArr[1]);
	rgba3.data('radialIndicator').animate(rgbaArr[2]);
	rgba4.data('radialIndicator').animate(xiaoshu);
	console.log(xiaoshu)
}