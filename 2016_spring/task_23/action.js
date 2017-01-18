function MultiTree(){
	this.order = []; //存储遍历的顺序
}
//深度优先遍历（递归）
MultiTree.prototype.rDFS = function(node){
	this.order.push(node);
	var w = node.firstElementChild;
	while (w){
		this.rDFS(w);
		w = w.nextElementSibling;
	}
	console.log(this.order);
}
//广度优先遍历（递归）（19行的做法）
MultiTree.prototype.rBFS = function(node){
	if (node){
		this.order.push(node);
		this.rBFS(node.nextElementSibling);
		node = this.order[i++]; //18行的函数递归到底，再执行19行，使node返回为this.order中第一个元素
		this.rBFS(node.firstElementChild);
	}
	console.log(this.order);
}

MultiTree.prototype.animation = function(){
	var order = this.order;
	var i = 0;
	order[i].style.backgroundColor = "red";
	setTimeout(function(){
		if (i === (order.length - 1)){
			order[i].style.backgroundColor = "white";
		} else {
			i++;
			order[i-1].style.backgroundColor = "white";
			order[i].style.backgroundColor = "red";
			setTimeout(arguments.callee, 300);
		}
	}, 300);
}

MultiTree.prototype.searching = function(){
	var input = document.forms[0].elements[2].value;
	var re = new RegExp(input, "i");
	for (var i = 0; i < this.order)
	if (re.test())
}

var tree = new MultiTree();
var one = document.getElementsByClassName("one")[0];
var i = 0;
tree.rBFS(one);
tree.animation();