function playGulltown() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("gullTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[0];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var content = document.getElementsByClassName("content")[0];
	content.style.opacity = "1.0";
	content.style.top = "0%";
	
	var troops = document.getElementsByClassName("troops")[0];
	troops.style.opacity = "1.0";
	troops.style.top = "5%";
	
	//animate troop icons on the map
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
	
}
	
function gulltownB() {	
	var map = Snap('#gullMap');
	
	gulltownReset();
	
	var bGull = map.selectAll(".baratheon"); //get array of all troops			
		bGull.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[0].innerHTML = "<p>Commander: Robert Baratheon<br>Alliance: The Rebellion</p><p>While housed in the Eyrie, Robert was protected under Lord John Arryn's wardship. When the King called on Lord Arryn to send the heads of Robert and his fellow ward, Eddard Stark, to King's Landing, Arryn refused and called his men to arms.</p><p>Robert led a selection of men throughough the port city of Gulltown, eventually slaying the leader of the Royalists. Once Lord Marq Grafton fell, Robert left the Vale and ventured back east to collect his own bannermen from the Stormlands.</p><p>Outcome: Victorious</p>";
}

function gulltownA() {
	var map=Snap('#gullMap');
	
	gulltownReset();
	
	var aGull = map.selectAll(".arryn"); //get array of all troops			
		aGull.attr({
			stroke: "#000",
			strokeWidth: 3
		})
	
	document.getElementsByClassName("content")[0].innerHTML="<p>Commander: Jon Arryn<br>Alliance: The Rebellion</p><p>Jon Arryn was driven to protect his two wards, Robert Baratheon and Eddard Stark. Gulltown marked the only port in the Vale, and thus was an important seat for the Rebellion to hold. While Ned fled back north to gather the Stark banners, Arryn protected the seat of the Vale while Robert led the assault on Gulltown.</p><p>Once the city fell, the Vale was united under the Arryn banner and became an important hub for the rebellion throughout the war. The Defender of the Vale consolidated rebel control, and allowed for the true start of the war.</p>";
}

function gulltownS() {
	var map=Snap('#gullMap');
	
	gulltownReset();
	
	var sGull = map.selectAll(".stark"); //get array of all troops			
		sGull.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[0].innerHTML="<p>Commander: Eddard Stark<br>Alliance: The Rebellion</p><p>Eddard Stark was in the Vale with Robert when the Mad King demanded their heads. While Robert struck at Gulltown before continuing on to the Stormlands, Ned took his forces and returned South. With his father and brother dead, he was now the Lord of Winterfell.</p><p>Since the port of Gulltown was blocked, Ned made his way North by crossing the Mountains of the Moons to the Fingers, and was carried across the Bite by a friendly fisherman. He was then able to call his banners to the cause.</p>";
}

function gulltownG() {
	var map=Snap('#gullMap');
	
	gulltownReset();
	
	var gGull = map.selectAll(".grafton"); //get array of all troops			
		gGull.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[0].innerHTML="<p>Commander: Marq Grafton<br>Alliance: The Targaryans</p><p>Marq Grafton took charge over the Vale bannermen who turned their back on Lord Jon Arryn, returning to the loyalty of the King. They consolidated their forces at Gulltown, the ancestral seat of the Graftons. It is also the only port city in the Vale</p><p>However, the walls were breached by the Baratheon men, and Robert Baratheon slew Marq Grafton with his own hand. The Grafton lordship passed on to Lord Gerald, and they bent the knee to the rebellion.</p><p>Outcome: Defeated</p>";
}

function gulltownReset() {	
var map = Snap('#gullMap');
	
	var bGull = map.selectAll(".baratheon"); //get array of all troops			
		bGull.attr({
			strokeWidth: 0
		})
	
	var aGull = map.selectAll(".arryn"); //get array of all troops			
		aGull.attr({
			strokeWidth: 0
		})
	
	var sGull = map.selectAll(".stark"); //get array of all troops			
		sGull.attr({
			strokeWidth: 0
		})
	
	var gGull = map.selectAll(".grafton"); //get array of all troops			
		gGull.attr({
			strokeWidth: 0
		})
	
	document.getElementsByClassName("content")[0].innerHTML = "<p>Year: 282 AD<br>Location: Gulltown<br>Outcome: Rebel Victory</p><p>Rebel Commanders:<br>Jon Arryn<br>Robert Baratheon</p><p>Royalist Commanders:<br>Marc Grafton</p><p>Impact: Unified the Vale, secured safe passage north and south respectively for Lord Eddard Stark and Lord Robert Baratheon.</p>";
}

function playSummerhall() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("summerTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[1];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var content = document.getElementsByClassName("content")[1];
	content.style.opacity = "1.0";
	content.style.top = "0%";
	
	//animate troop icons on the map
	var map = Snap('#summerMap');
	
	var bSummer = map.selectAll(".baratheon"); //get array of all troops
	for(i=0; i<bSummer.length; i++){
		var currentX = bSummer[i].attr("cx"); //get current x value
		var newX = parseInt(currentX)-160; //subtract 160
		
		var currentY = bSummer[i].attr("cy"); //get current y value
		var newY = parseInt(currentY)-50; //subtract 50
		
		bSummer[i].animate(
			{cx: newX,
			cy: newY},
			1500); //use Snap to animate
	}
	
	var lSummer = map.selectAll(".loyal");
	for(i=0; i<lSummer.length; i++){
		var currentX = lSummer[i].attr("cx");
		var newX = parseInt(currentX)+30;
		
		var currentY = lSummer[i].attr("cy");
		var newY = parseInt(currentY)+30;
		
		lSummer[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}

}

function playAshford() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("ashTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[2];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var content = document.getElementsByClassName("content")[2];
	content.style.opacity = "1.0";
	content.style.top = "0%";
	
	//animate troop icons on the map
	var map = Snap('#ashMap');
	
	var bAsh = map.selectAll(".baratheon"); //get array of all troops
	for(i=0; i<bAsh.length; i++){
		var currentX = bAsh[i].attr("cx"); //get current x value
		var newX = parseInt(currentX)-200; //subtract 160
		
		var currentY = bAsh[i].attr("cy"); //get current y value
		var newY = parseInt(currentY)+20; //subtract 50
		
		bAsh[i].animate(
			{cx: newX,
			cy: newY},
			1500); //use Snap to animate
	}
	
	var tAsh = map.selectAll(".tarly");
	for(i=0; i<tAsh.length; i++){
		var currentX = tAsh[i].attr("cx");
		var newX = parseInt(currentX)+270;
		
		var currentY = tAsh[i].attr("cy");
		var newY = parseInt(currentY)-30;
		
		tAsh[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}

}