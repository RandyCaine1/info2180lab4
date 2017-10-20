var boundry;

var hit;

window.onload = function(){
	//$("boundary1").onmouseover = border;
	//Exercise 1
	var boundaries = document.querySelectorAll("");

	var changeBounds = function(){
		for(var i = 0; i < boundaries.length;i++){
			boundaries[i].className += "youlose";
		}
	}

	for(var i=0; i < boundaries.length;i++){
		boundaries[i].onmouseover = function(){
			changeBounds();
		};
	}
};

//var border = function(){
	//$("boundary1").addClassName("youlose")
	//boundry = $$(".boundary");
//};