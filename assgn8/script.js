function playGulltown() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("gullTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[0];
	play.style.top = "90%";
	play.style.opacity = "0.0";

	var bGull = document.getElementById("gullMap").contentDocument.getElementsByClassName("baratheon");
	anime ({
		targets: bGull,
		translateX: +=45,
	});
	
	//fill info innerHTML with info about the battle
	//coming next lol
	
	//move up force buttons
	//coming...eventually

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