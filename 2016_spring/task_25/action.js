var root = document.querySelector("ul");

function init(){
	root.addEventListener("click", function(){
		var target = event.target;
		var subMenu = target.firstElementChild;
		if (target.tagName.toLowerCase() === "li"){
			if (subMenu.style.display === "none"){
				subMenu.style.display = "block";
			} else {
				subMenu.style.display = "none";
			}
		}
		console.log(subMenu.style.display);
	}, false);
}

init();