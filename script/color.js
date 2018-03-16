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

					if(myLeft <= 0) {
						myLeft = 0
					}else if(myLeft >= 210) {
						myLeft = 210
					}

					pickerBarDrag[currentPickerIndex].style.left = myLeft + 'px';
					if(getAttr(pickerBarDrag[currentPickerIndex],'bar-index') == 3) {

						let per = (myLeft) / 210;
						// let arr4 = Math.round(parseFloat(per) * 100) / 100;
						arr4 = per.toFixed(2);
						rgbaArr[currentPickerIndex] = arr4;
					}else {
						let per = (myLeft) / 210;
						rgbaArr[currentPickerIndex] = parseInt(255 * per);
					}

					// getDom('#text1').value = rgbaArr[0]+','+rgbaArr[1]+','+rgbaArr[2]+','+rgbaArr[3];
					changeCircleText();
					changeBgColor();
				}

				document.onmouseup = function(e) {
					document.onmousedown = null;
					document.onmousemove = null;
				};
			})
	}
}

function barChange() {
	let bar = getDom('.picker-bar-drag');
	for(let i=0; i<bar.length; i++) {
		bar[i].style.left = rgbaArr[i] / 255 * 210 + 'px';
		if(i == 3) {
			bar[i].style.left = rgbaArr[i] * 100 / 100 * 210 + 'px';
		}
	}
}

// 圆弧改变
function changeCircleText() {
	var pickerText = getDom('.picker-circle-text');
	var pickerSmRgba = getDom('.picker-sm-rgba');
	var pickerSmCircle = getDom('.picker-sm-circle');
	for(var i=0; i<pickerText.length; i++) {
		pickerText[i].innerHTML = rgbaArr[i];
	}
	var xiaoshu = rgbaArr[3] * 100;
	rgba1.data('radialIndicator').animate(rgbaArr[0]);
	rgba2.data('radialIndicator').animate(rgbaArr[1]);
	rgba3.data('radialIndicator').animate(rgbaArr[2]);
	rgba4.data('radialIndicator').animate(xiaoshu);
}

// 实时更改背景颜色
function changeBgColor() {
	getDom('.color-wrap')[0].style.backgroundColor = 'rgba('+ rgbaArr[0] +','+ rgbaArr[1] +','+ rgbaArr[2] +','+ rgbaArr[3] +')';
	let colorMin1 = 255-rgbaArr[0];
	let colorMin2 = 255-rgbaArr[1];
	let colorMin3 = 255-rgbaArr[2];
	let colorMin4 = 1-rgbaArr[3];
	// getDom('.picker-circle')[0].style.backgroundColor = 'rgba('+ colorMin1 +','+ colorMin2 +','+ colorMin3 +','+ 1 +')';
	// getDom('.color-choose-btn')[0].style.backgroundColor = 'rgba('+ colorMin1 +','+ colorMin2 +','+ colorMin3 +','+ colorMin4 +')';

}

// 更改复制的是十六进制还是RGBA
function typeChange() {
	domEvent(getDom('.color-choose-btn')[0],'click',function() {
		let colorChooseText = getDom('.colorChooseBtn')[0];
		let myType = getAttr(colorChooseText,'data-type');
		if(myType == 'one') {
			colorChooseText.innerHTML = '十六进制'
			setAttr(colorChooseText,'data-type','two');
		}else {
			colorChooseText.innerHTML = 'RGBA';
			setAttr(colorChooseText,'data-type','one');
		}
	})
};


var throttle = new Throttle(500,function(args) {
	let colorChooseText = getDom('.colorChooseBtn')[0];
	let myType = getAttr(colorChooseText,'data-type');
	let copyDiv = getDom('.copy-div')[0];
	let timer = null;
	clearTimeout(timer);
	if(myType == 'one') {
		copyDiv.style.transform = 'translate(0,0)';
		timer = setTimeout(function() {
			copyDiv.style.transform = 'translate(0,-40px)';
		},3000);
	}else {
			
	}
})

//点击复制
function copyColor() {
	let myType = getAttr(this,'data-type');
	let copyDiv = getDom('.copy-div')[0];
	if(myType == 'one') {
		throttle.filter(arguments);
	}else {
		throttle.filter(arguments);		
	}
}

domEvent(getDom('.colorChooseBtn')[0],'click',function() {
	
	getDom('#text1').innerHTML = rgbaArr[0]+','+rgbaArr[1]+','+rgbaArr[2]+','+rgbaArr[3];
	// console.log(getDom('#text1').value);
	throttle.filter(arguments);
})


//节流函数

function Throttle(interval,callback) {
    var time;
    this.filter = function (args) {
        if(time && new Date() - time<interval){
            time = new Date();
            return;
        }
        time = new Date();
        args?callback(args):callback();
    };
}




// 加载完成生成推荐颜色div
function initRecColor() {
	let colorUl = getDom('.color-show-ul')[0];
	colorUl.innerHTML = '';
	for(var i=0; i<recColor.length; i++) {
		var a = recColor[i].six;
		var b = recColor[i].rgba[0];
		var c = recColor[i].rgba[1];
		var d = recColor[i].rgba[2];
		var e = recColor[i].text;
		var f = recColor[i].word;
		var g = recColor[i].tColor;

		let myLi = document.createElement('li');
		myLi.innerHTML = '<div class="color-show-left"><div class="color-show-c"><span>'+ a +'</span></div><div class="color-show-c">R：<span>'+ b +'</span></div><div class="color-show-c">G：<span>'+ c +'</span></div><div class="color-show-c">B：<span>'+ d +'</span></div></div><div class="color-show-right"><span class="color-show-b">'+ e +'</span><span class="color-show-b">'+ f +'</span></div> ';
		myLi.style.backgroundColor = 'rgba('+b+','+c+','+d+','+1+')';
		var nowColor = b+','+c+','+d+','+1
		myLi.setAttribute('data-color',nowColor);
		myLi.className = 'color-li';
		myLi.style.color = g;
		colorUl.appendChild(myLi);
	}	
}


