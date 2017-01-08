function CreateForm(id, wrapperId, type){
	this.data = [];
	this.id = id;
	this.wrapperId = wrapperId;
	this.type = type;
}

CreateForm.prototype = {
	insertData: function(id){
		var inputData = document.getElementById(id).value.trim();
		if (data.indexOf(inputData) > -1){ return }
		switch (id){
			case "tagInput":
				data.push(inputData);
				if (data.length > 10){ data.shift() };
				break;
			case "hobbyInput":
				var splitData = inputData.split(/[\r,，、\s\t\\]+/g);
				data.concat(splitData);
				if (data.length > 10){
					while(data.length > 10){
						data.shift();
					}
				};
				break;
		}
	},
	render: function(wrapperId){
		var wrapper = document.getElementById(wrapperId), 
			i = 0, len = data.length;
		for(; i < len; i++){
			var div = document.createElement("div"),
				txt = document.creatTextNode(data[i]);
			div.appendChild(txt);
			wrapper.appendChild(div);
		}
	},
	init: function(type){
		switch (type){
			case "keyEvent":
				var inputArea = document.getElementById(id);
				inputArea.addEventListener("keyup", function(){
					if (event.keyCode === 13){
						this.insertData(id);
						this.render(wrapperId);
						document.getElementById(id).value = "";
					}
				}, false);
				break;
			case "buttonEvent":
				var btn = document.getElementById("confirm");
				btn.addEventListener("click", function(){
					this.insertData(id);
					this.render(wrapperId);
					document.getElementById(id).value = "";
				}, false);
				break;
		}
	}
}


var tag = new CreateForm("tagInput", "tags", "keyEvent");
var hobby = new CreateForm("hobbyInput", "hobbies", "buttonEvent");