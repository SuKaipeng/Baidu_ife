var box1 = Array.prototype.slice.call(document.getElementsByClassName("box1"), 0); //将 nodelist 转化成 array
var box2 = Array.prototype.slice.call(document.getElementsByClassName("box2"), 0);
var box3 = Array.prototype.slice.call(document.getElementsByClassName("box3"), 0);
var box4 = Array.prototype.slice.call(document.getElementsByClassName("box4"), 0);
var allBoxes = box1.concat(box2).concat(box3).concat(box4);
/*
function highlight(box){
	box.style = "background-color:red;"
}
*/
function inOrderTraverse(x, visit){
		console.log(x);
		visit(allBoxes[x]);
		if (allBoxes[2 * x + 1]) inOrderTraverse(2 * x + 1, visit);
		if (allBoxes[2 * x + 2]) inOrderTraverse(2 * x + 2, visit);
}

function init(){
	var btn = document.getElementById("inOrder");
	btn.addEventListener("click", function(){
		a();
	}, false);
}

init();