var root = document.querySelector("ul");
var selected;

function deepthFirstTraverse(){
	var order = [],
	    current;
	order.push(root);
	current = root.firstElementChild;
	while (current){
		deepthFirstTraverse(current);
		current = current.nextElementSibling;
	}
	return order;
}

function init(){
	//折叠展开
	root.addEventListener("click", function(){
		var target = event.target;
		var subMenu = target.parentNode.lastElementChild;
		if (target.tagName.toLowerCase() === "span"){
			
			target.style.background = "red";
			if (target.parentNode.childElementCount > 1){
				if (subMenu.style.display === "none"){
					subMenu.style.display = "block";
				} else {
					subMenu.style.display = "none";
				}
			}
		}
		console.log(subMenu.style.display);
	}, false);

}

init();