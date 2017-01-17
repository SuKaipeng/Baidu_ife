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
//广度优先遍历（递归）（未明白19行的做法）
MultiTree.prototype.rBFS = function(node){
	if (node){
		this.order.push(node);
		this.rBFS(node.nextElementSibling);
		node = this.order[i++]; //加了这一行以后递归函数的执行顺序才不会出错。为什么？
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

var tree = new MultiTree();
var one = document.getElementsByClassName("one")[0];
var i = 0;
tree.rBFS(one);
tree.animation();