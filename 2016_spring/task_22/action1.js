function BinaryTree(){
	this.tree = [];
}

BinaryTree.prototype.preOrder = function(node){
	this.tree.push(node);
	if (node.firstElementChild) this.preOrder(node.firstElementChild);
	if (node.lastElementChild) this.preOrder(node.lastElementChild);
}

BinaryTree.prototype.inOrder = function(node){
	if (node.firstElementChild) this.inOrder(node.firstElementChild);
	this.tree.push(node);
	if (node.lastElementChild) this.inOrder(node.lastElementChild);
}

BinaryTree.prototype.postOrder = function(node){
	if (node.firstElementChild) this.postOrder(node.firstElementChild);
	if (node.lastElementChild) this.postOrder(node.lastElementChild);
	this.tree.push(node);
}

BinaryTree.prototype.animation = function(){
	var array = this.tree;
	var i = 0;
	array[i].style.backgroundColor = "red";
	setTimeout(function(){
		if (i === (array.length - 1)){
			array[i].style.backgroundColor = "white";
			this.visiting = false;
		} else {
			i++;
			array[i-1].style.backgroundColor = "white";
			array[i].style.backgroundColor = "red";
			setTimeout(arguments.callee, 200);
		}
	}, 200);
}

function init(){
	var root = document.getElementsByClassName("box1")[0];
	
	document.forms[0].elements[0].addEventListener("click", function(){
		var box = new BinaryTree();
		box.preOrder(root);
		box.animation(box.tree);
	}, false);
	document.forms[0].elements[1].addEventListener("click", function(){
		var box = new BinaryTree();
		box.inOrder(root);
		box.animation(box.tree);
	}, false);
	document.forms[0].elements[2].addEventListener("click", function(){
		var box = new BinaryTree();
		box.postOrder(root);
		box.animation(box.tree);
	}, false);
}

init();