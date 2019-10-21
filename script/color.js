// 左右btn点击事件
function btnClick() {
	let colorBtn = getDom('.color-btn');
	let colorWrap = getDom('.color-container-wrap');
	for (var i = 0; i < colorBtn.length; i++) {
		domEvent(colorBtn[i], 'click', function (e) {
			e.stopPropagation();
			var dataIndex = this.getAttribute('data-index');
			if (dataIndex == 0) {
				let dataBol = getAttr(colorWrap[dataIndex], 'data-bol');
				if (dataBol == 0) {
					changeAttr(colorWrap[dataIndex], 'left', 0);
					setAttr(colorWrap[dataIndex], 'data-bol', 1);

					changeAttr(colorWrap[1], 'right', '-270px');
					setAttr(colorWrap[1], 'data-bol', 0);

				} else {
					changeAttr(colorWrap[dataIndex], 'left', '-270px');
					setAttr(colorWrap[dataIndex], 'data-bol', 0)
				}


			} else if (dataIndex == 1) {
				let dataBol = getAttr(colorWrap[dataIndex], 'data-bol');
				if (dataBol == 0) {
					changeAttr(colorWrap[dataIndex], 'right', 0);
					setAttr(colorWrap[dataIndex], 'data-bol', 1);

					changeAttr(colorWrap[0], 'left', '-270px');
					setAttr(colorWrap[0], 'data-bol', 0)
				} else {
					changeAttr(colorWrap[dataIndex], 'right', '-270px');
					setAttr(colorWrap[dataIndex], 'data-bol', 0);
				}
			}
		})
	}
}

// rgba控制
function pickerBarDragEvent() {
	let pickerBar = getDom('.picker-bar');
	let pickerBarDrag = getDom('.picker-bar-drag');

	for (var i = 0; i < pickerBarDrag.length; i++) {
		pickerBarDrag[i].index = i;

		// pc端
		domEvent(pickerBarDrag[i], 'mousedown', function (e) {
			var e = e || event;
			var pos = getPos(e);
			currentPickerIndex = this.index;
			dis[this.index].disX = pos.x - this.offsetLeft;
			dis[this.index].disY = pos.y - this.offsetTop;

			document.onmousemove = function (e) {
				var e = e || event;
				var pos = getPos(e);

				var myLeft = pos.x - dis[currentPickerIndex].disX;
				var myTop = pos.y - dis[currentPickerIndex].disY;

				if (myLeft <= 0) {
					myLeft = 0
				} else if (myLeft >= 210) {
					myLeft = 210
				}

				pickerBarDrag[currentPickerIndex].style.left = myLeft + 'px';
				if (getAttr(pickerBarDrag[currentPickerIndex], 'bar-index') == 3) {

					let per = (myLeft) / 210;
					// let arr4 = Math.round(parseFloat(per) * 100) / 100;
					arr4 = per.toFixed(2);
					rgbaArr[currentPickerIndex] = arr4;
				} else {
					let per = (myLeft) / 210;
					rgbaArr[currentPickerIndex] = parseInt(255 * per);
				}
				changeInputRgba();
				changeCircleText();
				changeBgColor();
			}

			document.onmouseup = function (e) {
				document.onmousedown = null;
				document.onmousemove = null;
			};
		});

		// 移动端
		domEvent(pickerBarDrag[i], 'touchstart', function (e) {
			var e = e.touches[0];
			var pos = getPos(e);
			currentPickerIndex = this.index;
			dis[this.index].disX = pos.x - this.offsetLeft;
			dis[this.index].disY = pos.y - this.offsetTop;

			document.ontouchmove= function (e) {
				var e = e.touches[0];
				var pos = getPos(e);

				var myLeft = pos.x - dis[currentPickerIndex].disX;
				var myTop = pos.y - dis[currentPickerIndex].disY;

				if (myLeft <= 0) {
					myLeft = 0
				} else if (myLeft >= 210) {
					myLeft = 210
				}

				pickerBarDrag[currentPickerIndex].style.left = myLeft + 'px';
				if (getAttr(pickerBarDrag[currentPickerIndex], 'bar-index') == 3) {

					let per = (myLeft) / 210;
					// let arr4 = Math.round(parseFloat(per) * 100) / 100;
					arr4 = per.toFixed(2);
					rgbaArr[currentPickerIndex] = arr4;
				} else {
					let per = (myLeft) / 210;
					rgbaArr[currentPickerIndex] = parseInt(255 * per);
				}
				changeInputRgba();
				changeCircleText();
				changeBgColor();
			}

			document.ontouchend = function (e) {
				document.ontouchstart = null;
				document.ontouchmove = null;
			};
		})

	}
}

function barChange() {
	let bar = getDom('.picker-bar-drag');
	for (let i = 0; i < bar.length; i++) {
		bar[i].style.left = rgbaArr[i] / 255 * 210 + 'px';
		if (i == 3) {
			bar[i].style.left = rgbaArr[i] * 100 / 100 * 210  + 'px';
		}
	}
}

// 圆弧改变
function changeCircleText() {
	var pickerText = getDom('.picker-circle-text');
	var pickerSmRgba = getDom('.picker-sm-rgba');
	var pickerSmCircle = getDom('.picker-sm-circle');
	for (var i = 0; i < pickerText.length; i++) {
		pickerText[i].innerHTML = rgbaArr[i];
	}
	var xiaoshu = rgbaArr[3] * 100;
	rgba1.data('radialIndicator').animate(rgbaArr[0]);
	rgba2.data('radialIndicator').animate(rgbaArr[1]);
	rgba3.data('radialIndicator').animate(rgbaArr[2]);
	rgba4.data('radialIndicator').animate(xiaoshu);
}

// 改变右侧rgba值
function changeInputRgba() {
	getDom('#picker-r').value = rgbaArr[0];
	getDom('#picker-g').value = rgbaArr[1];
	getDom('#picker-b').value = rgbaArr[2];
	getDom('#picker-a').value = rgbaArr[3];
}

// 实时更改背景颜色
function changeBgColor() {
	getDom('.color-wrap')[0].style.backgroundColor = 'rgba(' + rgbaArr[0] + ',' + rgbaArr[1] + ',' + rgbaArr[2] + ',' + rgbaArr[3] + ')';
	let colorMin1 = 255 - rgbaArr[0];
	let colorMin2 = 255 - rgbaArr[1];
	let colorMin3 = 255 - rgbaArr[2];
	let colorMin4 = 1 - rgbaArr[3];
}

// 更改复制的是十六进制还是RGBA
function typeChange() {
	domEvent(getDom('.color-choose-btn')[0], 'click', function () {
		let colorChooseText = getDom('.colorChooseBtn')[0];
		let myType = getAttr(colorChooseText, 'data-type');
		if (myType == 'one') {
			colorChooseText.innerHTML = '十六进制'
			setAttr(colorChooseText, 'data-type', 'two');
		} else {
			colorChooseText.innerHTML = 'RGBA';
			setAttr(colorChooseText, 'data-type', 'one');
		}
	})
};

// 节流函数
var throttle = new Throttle(500, function (args) {
	let colorChooseText = getDom('.colorChooseBtn')[0];
	let myType = getAttr(colorChooseText, 'data-type');
	let copyDiv = getDom('.copy-div')[0];
	let timer = null;
	clearTimeout(timer);
	if (myType == 'one') {
		copyDiv.style.transform = 'translate(0,0)';
		timer = setTimeout(function () {
			copyDiv.style.transform = 'translate(0,-40px)';
		}, 3000);
	} else {
		copyDiv.style.transform = 'translate(0,0)';
		timer = setTimeout(function () {
			copyDiv.style.transform = 'translate(0,-40px)';
		}, 3000);
	}
})

//点击复制
function copyColor() {
	let myType = getAttr(getDom('.colorChooseBtn')[0], 'data-type');
	let copyDiv = getDom('.copy-div')[0];
	if (myType == 'one') {
		getDom('#text1').innerHTML = 'rgba(' + rgbaArr[0] + ',' + rgbaArr[1] + ',' + rgbaArr[2] + ',' + rgbaArr[3] + ')';
		throttle.filter(arguments);
	} else {
		let str = 'rgb('+rgbaArr[0]+','+rgbaArr[1]+','+rgbaArr[2]+')';
		var color16 = str.colorHex();
		getDom('#text1').innerHTML = color16;
		throttle.filter(arguments);
	}
}

domEvent(getDom('.colorChooseBtn')[0], 'click', function () {
	copyColor(this)
})


//节流函数
function Throttle(interval, callback) {
	var time;
	this.filter = function (args) {
		if (time && new Date() - time < interval) {
			time = new Date();
			return;
		}
		time = new Date();
		args ? callback(args) : callback();
	};
}




// 加载完成生成推荐颜色div 左侧
function initRecColor() {
	let colorUl = getDom('.color-show-ul')[0];
	colorUl.innerHTML = '';
	for (var i = 0; i < recColor.length; i++) {
		var a = recColor[i].six;
		var b = recColor[i].rgba[0];
		var c = recColor[i].rgba[1];
		var d = recColor[i].rgba[2];
		var e = recColor[i].text;
		var f = recColor[i].word;
		var g = recColor[i].tColor;

		let myLi = document.createElement('li');
		myLi.innerHTML = '<div class="color-show-left"><div class="color-show-c"><span>' + a + '</span></div><div class="color-show-c">R：<span>' + b + '</span></div><div class="color-show-c">G：<span>' + c + '</span></div><div class="color-show-c">B：<span>' + d + '</span></div></div><div class="color-show-right"><span class="color-show-b">' + e + '</span><span class="color-show-b">' + f + '</span></div> ';
		myLi.style.backgroundColor = 'rgba(' + b + ',' + c + ',' + d + ',' + 1 + ')';
		var nowColor = b + ',' + c + ',' + d + ',' + 1
		myLi.setAttribute('data-color', nowColor);
		myLi.className = 'color-li';
		myLi.style.color = g;
		colorUl.appendChild(myLi);
	}
}

// 加载完成生成推荐颜色div 右侧
function initRecColor1() {
	let colorUl = getDom('.color-show-ul')[1];
	colorUl.innerHTML = '';
	for (var i = 0; i < recColor1.length; i++) {
		var a = recColor1[i].six;
		var b = recColor1[i].rgba[0];
		var c = recColor1[i].rgba[1];
		var d = recColor1[i].rgba[2];
		var e = recColor1[i].text;
		var f = recColor1[i].word;
		var g = recColor1[i].tColor;

		let myLi = document.createElement('li');
		myLi.innerHTML = '<div class="color-show-left"><div class="color-show-c"><span>' + a + '</span></div><div class="color-show-c">R：<span>' + b + '</span></div><div class="color-show-c">G：<span>' + c + '</span></div><div class="color-show-c">B：<span>' + d + '</span></div></div><div class="color-show-right"><span class="color-show-b">' + e + '</span><span class="color-show-b">' + f + '</span></div> ';
		myLi.style.backgroundColor = 'rgba(' + b + ',' + c + ',' + d + ',' + 1 + ')';
		var nowColor = b + ',' + c + ',' + d + ',' + 1
		myLi.setAttribute('data-color', nowColor);
		myLi.className = 'color-li';
		myLi.style.color = g;
		colorUl.appendChild(myLi);
	}
}

var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;  

/*RGB格式转为16进制颜色*/ 
String.prototype.colorHex = function(){
    var that = this;
    if(/^(rgb|RGB)/.test(that)){
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");
        var strHex = "#";
        for(var i=0; i<aColor.length; i++){
            var hex = Number(aColor[i]).toString(16);
            if (hex.length == 1) {
               hex = "0" + hex;
            }
            if(hex === "0"){
                hex += hex;  
            }
            strHex += hex;
        }
        if(strHex.length !== 7){
            strHex = that;   
        }
        return strHex;
    }else if(reg.test(that)){
        var aNum = that.replace(/#/,"").split("");
        if(aNum.length === 6){
            return that;  
        }else if(aNum.length === 3){
            var numHex = "#";
            for(var i=0; i<aNum.length; i+=1){
                numHex += (aNum[i]+aNum[i]);
            }
            return numHex;
        }
    }else{
        return that;  
    }
};

/*16进制颜色转为RGB格式*/  
String.prototype.colorRgb = function(){  
    var sColor = this.toLowerCase();  
    if(sColor && reg.test(sColor)){  
        if(sColor.length === 4){  
            var sColorNew = "#";  
            for(var i=1; i<4; i+=1){  
                sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));     
            }  
            sColor = sColorNew;  
        }  
        //处理六位的颜色值  
        var sColorChange = [];  
        for(var i=1; i<7; i+=2){  
            sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));    
        }  
        return "RGB(" + sColorChange.join(",") + ")";  
    }else{  
        return sColor;    
    }  
}; 
	
function inputFn(val) {

	var a = val.slice(4);
	var c = a.split(',');
	c[2] = parseInt(c[2]).toString();
	c.push('1');
	rgbaArr = c;

	var r1 = Math.round(210 / 255 * c[0]);
	var g1 = Math.round(210 / 255 * c[1]);
	var a1 = Math.round(210 / 255 * c[2]);

	var rgb1Arr = [];
	rgb1Arr[0] = r1;	
	rgb1Arr[1] = g1;
	rgb1Arr[2] = a1;

	for(var i=0; i<document.getElementsByClassName('picker-bar-drag').length; i++) {
		document.getElementsByClassName('picker-bar-drag')[i].style.left = rgb1Arr[i] + 'px';
	}
	changeBgColor();
	changeCircleText();
}

function inputFn1(val) {
	var c = rgbaArr;
	var r1 = Math.round(210 / 255 * c[0]);
	var g1 = Math.round(210 / 255 * c[1]);
	var b1 = Math.round(210 / 255 * c[2]);
	var a1 = Math.round(210 / 255 * (c[3] * 255));
	// console.log(210 / 255, c[3])

	var rgb1Arr = [];
	rgb1Arr[0] = r1;	
	rgb1Arr[1] = g1;
	rgb1Arr[2] = b1;
	rgb1Arr[3] = a1;
	// console.log(a1)

	for(var i=0; i<document.getElementsByClassName('picker-bar-drag').length; i++) {
		document.getElementsByClassName('picker-bar-drag')[i].style.left = rgb1Arr[i] + 'px';
	}
	changeBgColor();
	changeCircleText();
}
	
function CheckIsColor(colorValue) {  
    var type = /^(#[0-9a-fA-F]{6}){1}$/g;  
    // var re = new RegExp(type);  
    if (colorValue.match(type) == null) {  
        var type1 =/^[rR][gG][Bb][Aa]?[\(]([\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}[\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),?[\s]*(0\.\d{1,2}|1|0)?[\)]{1}$/g;  
        // re = new RegExp(type);  
        if (colorValue.match(type1) == null) {  
			return false;  
        } else {  
			inputFn(colorValue)
        }  
    } else {  
		var rgb = colorValue.colorRgb();
		inputFn(rgb)
    }  
}  

document.getElementById('getInputColor').addEventListener('click',function() {
	var inputColor = document.getElementById('inputColor').value;
	CheckIsColor(inputColor);	
	getDom('#picker-r').value = rgbaArr[0];
	getDom('#picker-g').value = rgbaArr[1];
	getDom('#picker-b').value = rgbaArr[2];
	getDom('#picker-a').value = rgbaArr[3];
});



domEvent(getDom('#picker-r'),'input',function() {
	// console.log(this.value);
	var thisNum = this.value;
	var reg = /^[0-9]+.?[0-9]*$/;
	if (reg.test(thisNum)) {
	  if(thisNum <= 0) {
		  thisNum = 0;
	  }else if(thisNum >= 255) {
		  thisNum = 255;
	  }else {
		  thisNum = Math.round(thisNum);
	  }
	  rgbaArr[0] = thisNum;
	  changeCircleText();
	  changeBgColor();
	  inputFn1(rgbaArr);
	}
});			

domEvent(getDom('#picker-g'),'input',function() {
	// console.log(this.value);
	var thisNum = this.value;
	var reg = /^[0-9]+.?[0-9]*$/;
	if (reg.test(thisNum)) {
	  if(thisNum <= 0) {
		  thisNum = 0;
	  }else if(thisNum >= 255) {
		  thisNum = 255;
	  }else {
		  thisNum = Math.round(thisNum);
	  }
	  rgbaArr[1] = thisNum;
	  changeCircleText();
	  changeBgColor();
	  inputFn1(rgbaArr);
	}
});		

domEvent(getDom('#picker-b'),'input',function() {
	// console.log(this.value);
	var thisNum = this.value;
	var reg = /^[0-9]+.?[0-9]*$/;
	if (reg.test(thisNum)) {
	  if(thisNum <= 0) {
		  thisNum = 0;
	  }else if(thisNum >= 255) {
		  thisNum = 255;
	  }else {
		  thisNum = Math.round(thisNum);
	  }
	  rgbaArr[2] = thisNum;
	  changeCircleText();
	  changeBgColor();
	  inputFn1(rgbaArr);
	}
});		

domEvent(getDom('#picker-a'),'input',function() {
	// console.log(this.value);
	var thisNum = this.value;
	var reg = /^\d+(?:\.\d{1,2})?$/;
	if (reg.test(thisNum)) {
		// console.log('ok')
	  if(thisNum <= 0) {
		  thisNum = 0;
	  }else if(thisNum >= 1) {
		  thisNum = 1;
	  }else {
		//   console.log(thisNum)
		//   thisNum = thisNum.toFixed(2);
	  }
	  rgbaArr[3] = thisNum;
	  changeCircleText();
	  changeBgColor();
	  inputFn1(rgbaArr);
	}
});		

// getDom('#picker-r').addEventListener('input',function(){
// 	console.log(11)
// })