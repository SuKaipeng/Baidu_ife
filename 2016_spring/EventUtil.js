var EventUtil = {
	//1.没有考虑 IE 中的作用域问题。 2.DOM0 级对每个事件只支持一个事件处理程序。	
	addHandler: function(element, type, handler){
		if (element.addEventListener){
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent){
			element.attachEvent("on" + type, handler);
		} else {
			element.["on" + type] = handler;
		}
	},
	
	removeHandler: function(element, type, handler){
		if (element.removeEventListener){
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent){
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}
  
};
