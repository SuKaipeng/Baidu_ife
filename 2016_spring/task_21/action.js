var tag = {
		data: [],
	
	},
	
    hobby = {
    	data: [],
    	
    },
    
    common = {
    	render: function(data){
    		var txt = "", i;
    		for (i = 0; i < data.length; i++){
    			txt += '<div data-order="' + i + '">' + data[i] + '</div>'
    		}
    		switch (data){
    			case tag.data:
    				var tagsDiv = document.getElementById("tags");
    				tagsDiv.innerHTML = txt;
    				break;
    			case hobby.data:
    				var hobbiesDiv = document.getElementById("hobbies");
    				hobbiesDiv.innerHTML = txt;
    				break;
    		}
    	},
    	repetition: function(data){
    		switch (data){
    			case tag.data:
    				var input = document.forms[0].elements[0].value.trim();
    				break;
    			case hobby.data:
    				var input = document.forms[1].elements[0].value.trim();
    				break;
    		}
    		if (data.indexOf(input) > -1){
    			return true;
    		} else {
    			return false;
    		}
    	},
    	deleteFunction: function(){
    		
    	}
    };
    
function init(){
	document.forms[0].elements[0].addEventListener("keyup", function(){
		if (event.keyCode === 32 || 188 || 13){
			alert("nothing");
		}
	}, false);
}

init();