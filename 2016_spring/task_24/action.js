function MultiTree(){
	this.order = []; //存储遍历的顺序
	this.rBFSindex = 0;
	this.selected = null;
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
	var input = document.forms[0].elements[2].value.trim();
	var re = new RegExp("^" + input + "$", "i");
	timer = setInterval(function(){
		if (i < order.length){
			order[i].classList.add("selected");
			if (i > 0) order[i-1].classList.remove("selected");
			if (search && re.test(order[i].firstChild.nodeValue.trim())) clearInterval(timer);
			i++;
		} else {
			order[i-1].classList.remove("selected");
			clearInterval(timer);
		}
	}, 200);
	
}
//清除数据
MultiTree.prototype.reset = function(){
	var root = document.getElementsByClassName("one")[0];
	this.rBFS(root);
	for (var j = 0; j < this.order.length; j++){
		if (this.order[j].classList.contains("selected")) this.order[j].classList.remove("selected");
	}
	this.order = [];
	this.rBFSindex = 0;
	this.selected = null;
}

MultiTree.prototype.remove = function(){
	var parent = this.selected.parentNode;
	parent.removeChild(this.selected);
	this.selected = null;
}

MultiTree.prototype.add = function(){
	var input = document.forms[0].elements[5].value.trim();
	var fragment = document.createDocumentFragment();
	var div = document.createElement("div");
	div.appendChild(document.createTextNode(input));
	fragment.appendChild(div);
	this.selected.appendChild(fragment);
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
		boxes.animation(boxes.order, true);
	}, false);
	form.elements[4].addEventListener("click", function(){
		boxes.reset();
		boxes.rBFS(root);
		boxes.animation(boxes.order, true);
	}, false);
	
	root.addEventListener("click", function(){
		boxes.reset();
		var target = event.target;
		target.classList.add("selected");
		boxes.selected = target;
		console.log(boxes.selected);
	}, false);
	form.elements[6].addEventListener("click", function(){
		boxes.remove();
	}, false);
	form.elements[7].addEventListener("click", function(){
		boxes.add();
	}, false);
}

init();