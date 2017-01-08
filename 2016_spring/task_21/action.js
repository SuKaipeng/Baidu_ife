var tag = {
	data: []
};

function insert(){
	var inputData = document.getElementById("tagInput").value.trim();
	if (tag.data.indexOf(inputData) > -1 || inputData === ""){return}
	tag.data.push(inputData);
	document.getElementById("tagInput").value = "";
	if (tag.data.length > 10){ tag.data.shift() }
}

function render(){
	var i, txt = "", wrapper = document.getElementById("tags");
	for (i = 0; i < tag.data.length; i++){
		txt += "<div>" + tag.data[i] + "</div>"
	}
	wrapper.innerHTML = txt;
}

function init(){
	var inputArea = document.getElementById("tagInput");
	inputArea.addEventListener("keydown", function(){
		if (event.keyCode === 32 || event.keyCode === 188 || event.keyCode === 13){
			event.preventDefault(); //按下回车键默认自动刷下页面
			insert();
			render();
			console.log(tag.data);
		}
	}, false);
	
	var btn = document.getElementById("confirm");
	btn.addEventListener("click", function(){
		insert1();
		render1();
		console.log(hobby.data);
	}, false);
}

var hobby = {
	data: []
}

function insert1(){
	var inputData = document.getElementById("hobbyInput").value.trim(),
	    splitArray = inputData.split(/[\r,，、\s\t\\\/]+/g),
	    trimArray = splitArray.map(function(item, index, array){
			return item.trim();
		}),
	    concatArray = hobby.data.concat(trimArray),
		filterArray = concatArray.filter(function(item, index, array){
			return array.indexOf(item) === index;
		});
	if (filterArray.length > 10){
		while (filterArray.length > 10){filterArray.shift();}
	}
	hobby.data = filterArray;
	document.getElementById("hobbyInput").value = "";
}

function render1(){
	var i, txt = "", wrapper = document.getElementById("hobbies");
	for (i = 0; i < hobby.data.length; i++){
		txt += "<div>" + hobby.data[i] + "</div>"
	}
	wrapper.innerHTML = txt;
}

init();