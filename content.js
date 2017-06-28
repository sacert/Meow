var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];
	
	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];
		
		if (node.nodeType === 3) {
			var text = node.nodeValue;
			var replacedText = text.replace("now", "meow");
			
			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
			
			var replacedText = text.replace("Now", "Meow");
			
			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
			
			var replacedText = text.replace("NOW", "MEOW");
			
			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
			
		}
	}
}