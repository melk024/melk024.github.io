function playGulltown() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("gullTitle");
	title.style.top = "10%";
	
	//fill info innerHTML with info about the battle
	//coming next lol
	
	//move the individual dots to represent the movements of the troops (using anime?)
	//oh boy
	
	//access test
}
	
function gulltownStag() {
	var bGull = document.getElementById("gullMap").contentDocument.getElementsByClassName("baratheon");
	for(i=0; i<bGull.length; i++){
		bGull[i].setAttribute("stroke", "black");
		bGull[i].setAttribute("stroke-width", "3");
	}
	
	//replace info innerHTML with info about the baratheon forces
	//coming next lol
}