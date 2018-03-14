// 获得元素
function getDom(ele) {
	var sym = ele.substring(0,1);
	if(sym === '.') {
		return document.getElementsByClassName(ele.substring(1))
	}else if(sym === '#') {
		return document.getElementById(ele.substring(1))
	}else {
		return document.getElementsByClassName(ele)
	}
}


// dom事件
function domEvent(ele,event,fn) {
	ele.addEventListener(event,fn)
}

// 更改dom stlye样式
function changeAttr(ele,attr,val) {
	ele.style[attr] = val;
}

// 获得dom属性
function getAttr(ele,attr) {
	return ele.getAttribute(attr);
}

// 更改dom属性
function setAttr(ele,attr,val) {
	ele.setAttribute(attr,val);
}

// 获得鼠标位置
function getPos(e) {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
	return {x: e.clientX + scrollLeft, y: e.clientY + scrollTop}
}