var playground = document.getElementById("playground"),
	obj = {
		data: [],
		painter: function(){ //应该合并 painter() 和 searchPainter()。
			var text = "", i;
			for(i = 0; i < obj.data.length; i++){
				text += '<span data-order=' + i + '>' + obj.data[i] + '</span>';
			};
			playground.innerHTML = text;
		},
		searchPainter: function(){
			var txt = document.forms[0].elements[5].value.trim(),
				pattern = new RegExp(txt, "g"), i, content = "";
			for (i = 0; i < obj.data.length; i++){
				var temp = obj.data[i].replace(pattern, '<span class="highlight">'
				           + txt + '</span>');
				content += '<span data-order=' + i + '>' + temp + '</span>';
			}
			playground.innerHTML = content;
		}
	};

function leftIn(array){
	obj.data = array.concat(obj.data); //concat 合并数组，返回一个新的数组。
	obj.painter();
}

function rightIn(array){
	obj.data = obj.data.concat(array);
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
		var inputData = document.forms[0].elements[0].value.trim();
		if (/[\w\u4e00-\u9fa5]+/g.test(inputData)){
		    var array = inputData.split(/[\r,，、\s\t\\]+/g);
		    leftIn(array);
		} else {
			alert("请输入中文，英文或数字！");
		}
	}, false);
	
	document.forms[0].elements[2].addEventListener("click", function(){
		var inputData = document.forms[0].elements[0].value.trim();
		if (/[\w\u4e00-\u9fa5]+/g.test(inputData)){
		    var array = inputData.split(/[\r,，、\s\t\\]+/g);
		    rightIn(array);
		} else {
			alert("请输入中文，英文或数字！");
		}
	}, false);
	
	document.forms[0].elements[3].addEventListener("click", function(){
		if (obj.data.length > 0){
			leftOut();
		}
	}, false);
	
	document.forms[0].elements[4].addEventListener("click", function(){
		if (obj.data.length > 0){
			rightOut();
		}
	}, false);
	
	playground.addEventListener("click", function(){
		if (event.target.nodeName.toLowerCase() === "span"){
			var order = event.target.dataset.order;
			obj.data.splice(order, 1);
			obj.painter();
		}
	}, false);
	
	document.forms[0].elements[6].addEventListener("click", function(){
		obj.searchPainter();
	}, false);
}

init();