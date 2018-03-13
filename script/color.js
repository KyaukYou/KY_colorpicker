var colorBtn = getDom('.color-btn');
var colorWrap = getDom('.color-container-wrap');
// console.log(colorBtn)
for(var i=0; i<colorBtn.length; i++) {
	colorBtn[i].addEventListener('click',function() {
		var dataIndex = this.getAttribute('data-index');
		if(dataIndex == 0) {
			console.log(getAttr(colorWrap[dataIndex],"data-bol"))
			if(getAttr(colorWrap[dataIndex],'data-bol') == 0) {
				changeAttr(colorWrap[dataIndex],'left',0);
				setAttr(colorWrap[dataIndex],'data-bol',1);
			}else {
				changeAttr(colorWrap[dataIndex],'left','-270px');
				setAttr(colorWrap[dataIndex],'data-bol',0)
			}
			
		}else if(dataIndex == 1) {
			if(colorWrap[dataIndex].getAttribute('data-bol') == 0) {
				changeAttr(colorWrap[dataIndex],'right',0);
				setAttr(colorWrap[dataIndex],'data-bol',1)
			}else {
				changeAttr(colorWrap[dataIndex],'right','-270px');
				setAttr(colorWrap[dataIndex],'data-bol',0);
			}
		}
	})
}

