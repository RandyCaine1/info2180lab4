var boundry;

var end;

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
	ending();

};

var ending = function(){
	end = document.querySelector("end");

	end.onmouseover = function(){
		if(boundaries[0].className !== "boundary youlose"){
			alert("You Win");
		}
	}
}

//var border = function(){
	//$("boundary1").addClassName("youlose")
	//boundry = $$(".boundary");
//};