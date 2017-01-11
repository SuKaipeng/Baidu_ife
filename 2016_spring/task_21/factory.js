function rogueOne(inputId, wrapperId){
	var obj = new Object();
	obj.data = [];
	//定义一个data，rogueOne()函数内都能访问。
	var data = obj.data;
	obj.insert = function(){
		var inputData = document.getElementById(inputId).value.trim();
		switch (inputId){
			case "tagInput":
				//当输入数据为空字符串或与数组中的元素冲突时，直接跳出insert()函数。
				if (inputData === "" || data.indexOf(inputData) > -1){return};
				data.push(inputData);
				break;
			case "hobbyInput":
				var splitArray = inputData.split(/[\r,，、\s\t\\\/]+/g);
				data = data.concat(splitArray); //将splitArray与data合并，再重新赋值给data。
				//直接在data上进行filter迭代，再重新赋值给data。
				data = data.filter(function(item, index, array){
					return array.indexOf(item) === index;
				});
				if (data.length > 10){
					while (data.length > 10){data.shift();}
				};
				break;
		};
		document.getElementById(inputId).value = "";
	};
	obj.render = function(){
		var i, txt = "", wrapper = document.getElementById(wrapperId);
		for (i = 0; i < data.length; i++){
			txt += "<div>" + data[i] + "</div>";
		};
		wrapper.innerHTML = txt;
	};
	obj.init = function(){
	switch (inputId){
		case "tagInput":
		var inputArea = document.getElementById("tagInput");
		inputArea.addEventListener("keydown", function(){
			if (event.keyCode === 32 || event.keyCode === 188 || event.keyCode === 13){
				event.preventDefault(); //按下回车键默认自动刷下页面
				tag.insert();
				tag.render();
				console.log(data);
			}
		}, false);
		break;
		case "hobbyInput":
		var btn = document.getElementById("confirm");
		btn.addEventListener("click", function(){
			hobby.insert();
			hobby.render();
			console.log(data);
		}, false);
		break;
		}
	};
	return obj;
};

var tag = rogueOne("tagInput", "tags"),
    hobby = rogueOne("hobbyInput", "hobbies");
    
tag.init();
hobby.init();