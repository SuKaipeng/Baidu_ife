var playground = document.getElementById("playground"),
	obj = {
		data: [],
		painter: function(){
			var text = "", i;
			for(i = 0; i < obj.data.length; i++){
				text += '<span data-order=' + i + '>' + obj.data[i] + '</span>'; //h5，自定义属性，用于获取相应的索引。
			};
			playground.innerHTML = text;
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

function init(){
	document.forms[0].elements[1].addEventListener("click", function(){
		var inputData = document.forms[0].elements[0].value; //当在全局作用域设置该变量是，inputData获取的始终是网页刚加载完的时候的值，即“”。
		if (/\d+/.test(inputData)){
			leftIn(inputData);
		} else {
			alert("请输入正整数！");
		}
	}, false);
	
	document.forms[0].elements[2].addEventListener("click", function(){
		var inputData = document.forms[0].elements[0].value;
		if (/\d+/.test(inputData)){
			rightIn(inputData);
		} else {
			alert("请输入正整数！");
		}
	}, false);
	
	document.forms[0].elements[3].addEventListener("click", function(){
		leftOut();
	}, false);
	
	document.forms[0].elements[4].addEventListener("click", function(){
		rightOut();
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