function BinaryTree(){
	this.tree = [];
	this.visiting = false;
}

BinaryTree.prototype.preOrder = function(node){
	this.tree.push(node);
	if (node.firstElementChild) preOrder(node.firstElementChild);
	if (node.lastElementChild) preOrder(node.lastElementChild);
}

BinaryTree.prototype.inOrder = function(node){
	if (node.firstElementChild) inOrder(node.firstElementChild);
	this.tree.push(node);
	if (node.lastElementChild) inOrder(node.lastElementChild);
}

BinaryTree.prototype.postOrder = function(node){
	if (node.firstElementChild) postOrder(node.firstElementChild);
	if (node.lastElementChild) postOrder(node.lastElementChild);
	this.tree.push(node);
}

BinaryTree.prototype.animation = function(){
	root.style.backgroundColor = "red";
	setTimeout(function(){
		
	});
}

(function init(){
	var root = document.getElementsByClassName("box1")[0];
	
})();