function playGulltown() {
	var title = document.getElementById("gullTitle");
	title.style.top = "10%";
	
	var bGull = document.getElementById("gullMap").contentDocument.getElementsByClassName("baratheon");
	for(i=0; i<bGull.length; i++){
		bGull[i].setAttribute("stroke", "black");
	}
}
	