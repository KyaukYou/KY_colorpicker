function getDom(ele) {
	// console.log(ele.substring(0,1));
	var sym = ele.substring(0,1);
	if(sym === '.') {
		return document.getElementsByClassName(ele.substring(1))
	}else if(sym === '#') {
		return document.getElementById(ele.substring(1))
	}else {
		return document.getElementsByClassName(ele)
	}
}

function changeAttr(ele,attr,val) {
	ele.style[attr] = val;
}

function getAttr(ele,attr) {
	return ele.getAttribute(attr);
}


function setAttr(ele,attr,val) {
	ele.setAttribute(attr,val);
}