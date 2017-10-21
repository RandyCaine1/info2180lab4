var boundry;

var end;

window.onload = function(){
	//$("boundary1").onmouseover = border;
	//Exercise 1
	var maze = document.getElementById("maze");
	var boundaries = document.querySelectorAll(".boundary");

 +	var status = document.querySelector("#status");
	var changeBounds = function(){

		for(var i = 0; i < boundaries.length;i++){
			if(boundaries[i].className = "boundary"){
				boundaries[i].className += "youlose";
			}
			status.innerHTML = "You Lose!";
			}
		};
	}

	for(var i=0; i < boundaries.length;i++){
		boundaries[i].onmouseover = function(){
			changeBounds();
		};
	}
	maze.onmouseleave = function(){
 +			for (var i = 0; i< otherBoundaries.length-1; i++) {
 +				otherBoundaries[i].classList.add("youlose");
 +			}
 +		};
 
	ending();

	var start = document.querySelector("#start");

	var restart = function(){
		for( var i = 0; i < boundaries.length; i++){
			boundaries[i].className = "boundary";
		}
	};

	start.onclick = function(){
		restart();
	};


};

var ending = function(){
	end = document.querySelector("end");

	end.onmouseover = function(){
		if(boundaries[0].className !== "boundary youlose"){
			status.innerHTML = "You Win!";
		}
	}

}

//var border = function(){
	//$("boundary1").addClassName("youlose")
	//boundry = $$(".boundary");
//};