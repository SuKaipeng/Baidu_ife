var playground = document.getElementById("playground"),
	obj = {
		data: [],
		painter: function(){
			var inputData = document.forms[0].elements[0].value,
				txt = "", i;
			for(i = 0; i < obj.data.length; i++){
				txt += '<span title="' + obj.data[i] +'" data-order="' + i 
				       + '" style="height:' + obj.data[i] * 2 + 'px; left:' 
					   + i * 10 + 'px;"></span>'
			};
			playground.innerHTML = txt;
		}
	};
	
function leftIn(inputData){
	obj.data.unshift(inputData);
	obj.painter();
}

function rightIn(inputData){
	obj.data.push(inputData);
	obj.painter();
}

function leftOut(){
	var item = obj.data.shift();
	alert("即将删除：" + item);
	obj.painter();
}

function rightOut(){
	var item = obj.data.pop();
	alert("即将删除：" + item);
	obj.painter();
}

function randomArray(){
	var i, randomNumber, array = [];
	for (i = 0; i < 60; i++){
		randomNumber = Math.round(Math.random() * 90 + 10);
		array.push(randomNumber);
	}
	obj.data = array
	obj.painter();
}

function bubbleSort(){
	var i, temp, len = obj.data.length;
	setTimeout(function(){
		for (i = 0; i < len - 1; i++){
			if (obj.data[i] > obj.data[i + 1]){
				temp = obj.data[i];
				obj.data[i] = obj.data[i + 1];
				obj.data[i + 1] = temp;
				obj.painter();
			}
		}
		len--;
		if (len > 0){
			setTimeout(arguments.callee, 150);
		}
	}, 150);
}

function init(){
	document.forms[0].elements[1].addEventListener("click", function(){
		var inputData = document.forms[0].elements[0].value; //当在全局作用域设置该变量是，inputData获取的始终是网页刚加载完的时候的值，即“”。
		if (/^[1-9][0-9]$|100/.test(inputData)){
			if (obj.data.length < 60){
				leftIn(inputData);
			} else {
				alert("队列元素数量超过60个！");
			}
		} else {
			alert("请输入10至100之间的正数字！");
		}
	}, false);
	
	document.forms[0].elements[2].addEventListener("click", function(){
		var inputData = document.forms[0].elements[0].value;
		if (/^[1-9][0-9]$|100/.test(inputData)){
			if (obj.data.length < 60){
				rightIn(inputData);
			} else {
				alert("队列元素数量超过60个！");
			}
		} else {
			alert("请输入10至100之间的正数字！");
		}
	}, false);
	
	document.forms[0].elements[3].addEventListener("click", function(){
		leftOut();
	}, false);
	
	document.forms[0].elements[4].addEventListener("click", function(){
		rightOut();
	}, false);
	
	document.forms[0].elements[5].addEventListener("click", function(){
		randomArray();
	},false);
	
	document.forms[0].elements[6].addEventListener("click", function(){
		bubbleSort();
	}, false);
	
	playground.addEventListener("click", function(){
		if (event.target.nodeName.toLowerCase() === "span"){
			var order = event.target.dataset.order;
			obj.data.splice(order, 1);
			obj.painter();
		}
	}, false);
}

init();