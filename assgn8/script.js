function playGulltown() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("gullTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[0];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var map = Snap('#gullMap');
	
	var bGull = map.selectAll(".baratheon"); //get array of all troops
	for(i=0; i<bGull.length; i++){
		var currentX = bGull[i].attr("cx"); //get current x value
		var newX = parseInt(currentX)+20; //add 20
		
		var currentY = bGull[i].attr("cy"); //get current y value
		var newY = parseInt(currentY)+10; //add 20
		
		bGull[i].animate(
			{cx: newX,
			cy: newY},
			1500); //use Snap to animate
	}
	
	var sGull = map.selectAll(".stark");
	for(i=0; i<sGull.length; i++){
		var currentX = sGull[i].attr("cx");
		var newX = parseInt(currentX)-40;
		
		var currentY = sGull[i].attr("cy");
		var newY = parseInt(currentY)-40;
		
		sGull[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var aGull = map.selectAll(".arryn");
	for(i=0; i<aGull.length; i++){
		var currentX = aGull[i].attr("cx");
		var newX = parseInt(currentX)+40;
		
		var currentY = aGull[i].attr("cy");
		var newY = parseInt(currentY)+40;
		
		aGull[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var gGull = map.selectAll(".grafton");
	for(i=0; i<gGull.length; i++){
		var currentX = gGull[i].attr("cx");
		var newX = parseInt(currentX)-10;
		
		var currentY = gGull[i].attr("cy");
		var newY = parseInt(currentY)-10;
		
		gGull[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}

	
	
	//fill info innerHTML with info about the battle
	//coming next lol
	
	//move up force buttons
	//coming...eventually

}
	
function gulltownStag() {
	var bGull = document.getElementById("gullMap").getElementsByClassName("baratheon");
	for(i=0; i<bGull.length; i++){
		bGull[i].setAttribute("stroke", "black");
		bGull[i].setAttribute("stroke-width", "3");
	}
	
	//replace info innerHTML with info about the baratheon forces
	//coming next lol
}