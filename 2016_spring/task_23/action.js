function MultiTree(){
	this.order = []; //存储遍历的顺序
	this.rBFSindex = 0;
}
//深度优先遍历（递归）
MultiTree.prototype.rDFS = function(node){
	this.order.push(node);
	var w = node.firstElementChild;
	while (w){
		this.rDFS(w);
		w = w.nextElementSibling;
	}
}
//广度优先遍历（递归）（19行的做法）
MultiTree.prototype.rBFS = function(node){
	if (node){
		this.order.push(node);
		this.rBFS(node.nextElementSibling);
		node = this.order[this.rBFSindex++]; //18行的函数递归到底，再执行19行，使node返回为this.order中第一个元素
		this.rBFS(node.firstElementChild);
	}
}

MultiTree.prototype.animation = function(order, search){
	var i = 0;
	//清除所有元素的样式
	for (var j = 0; j < order.length; j++){
		order[j].style.backgroundColor = "white";
	}
	order[i].style.backgroundColor = "red";
	setTimeout(function(){
		if (i === (order.length - 1)){
			if (!search) order[i].style.backgroundColor = "white";
		} else {
			i++;
			order[i-1].style.backgroundColor = "white";
			order[i].style.backgroundColor = "red";
			setTimeout(arguments.callee, 300);
		}
	}, 300);
}
//记录搜索路径
MultiTree.prototype.searching = function(){
	var input = document.forms[0].elements[2].value;
	var re = new RegExp("^" + input + "$", "i");
	var order = [];
	for (var i = 0; i < this.order.length; i++){
		if (re.test(this.order[i].firstChild.nodeValue.trim())) return order = this.order.slice(0, i+1);
	}
	console.log(order);
	return order;
}
//清除数据
MultiTree.prototype.reset = function(){
	this.order = [];
	this.rBFSindex = 0;
}

function init(){
	var boxes = new MultiTree();
	var root = document.getElementsByClassName("one")[0];
	var form = document.forms[0];
	form.elements[0].addEventListener("click", function(){
		boxes.reset();
		boxes.rDFS(root);
		boxes.animation(boxes.order, false);
	}, false);
	form.elements[1].addEventListener("click", function(){
		boxes.reset();
		boxes.rBFS(root);
		boxes.animation(boxes.order, false);
	}, false);
	form.elements[3].addEventListener("click", function(){
		boxes.reset();
		boxes.rDFS(root);
		var searchOrder = boxes.searching();
		boxes.animation(searchOrder, true);
	});
	form.elements[4].addEventListener("click", function(){
		boxes.reset();
		boxes.rBFS(root);
		var searchOrder = boxes.searching();
		boxes.animation(searchOrder, true);
	});
}

init();