var boundry;

var hit;

window.onload = function(){
	$("boundary1").onmouseover = border;
}

var border = function(){
	$("boundary1").addClassName("youlose")
	boundry = $$(".boundary");
}