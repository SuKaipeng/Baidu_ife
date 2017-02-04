var root = document.querySelector(".root");

function fold(){
	root.addEventListener("click", function(){
		var subMenu = event.target.childNodes;
		console.log(subMenu);
		for (var i = 0, len = subMenu.length; i < len; i++){
			if (subMenu[i].nodeName.toLowerCase() === "div") {
				if (subMenu[i].classList.contains("fold")){
					subMenu[i].classList.remove("fold");
				} else {
					subMenu[i].classList.add("fold");
				}
			}
		}
	}, false);
}

function addAndRemove(){
	var selected;
	root.addEventListener("click", function(){
		selected = event.target;
		if (!selected.classList.contains("selected")){
			selected.classList.add("selected");
		}

	}, false);
}

function init(){
	fold();
	addAndRemove();
}

init();

//对类数组的nodelist，无法使用数组的迭代方法filter()