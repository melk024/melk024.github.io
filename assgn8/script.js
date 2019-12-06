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
		
	
	document.getElementsByClassName("content")[0].innerHTML = "<p>Commander: Robert Baratheon<br>Alliance: The Rebellion</p><p>While housed in the Eyrie, Robert was protected under Lord Jon Arryn's wardship. When the King called on Lord Arryn to send the heads of Robert and his fellow ward, Eddard Stark, to King's Landing, Arryn refused and called his men to arms.</p><p>Robert led a selection of men throughough the port city of Gulltown, eventually slaying the leader of the Royalists. Once Lord Marq Grafton fell, Robert left the Vale and ventured back east to collect his own bannermen from the Stormlands.</p><p>Outcome: Victorious</p>";
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
	
	var troops = document.getElementsByClassName("troops")[1];
	troops.style.opacity = "1.0";
	troops.style.top = "5%";
	
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

function summerhallB() {	
	var map = Snap('#summerMap');
	
	summerhallReset();
	
	var bSummer = map.selectAll(".baratheon"); //get array of all troops			
		bSummer.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[1].innerHTML = "Baratheon boiii";
}

function summerhallR() {	
	var map = Snap('#summerMap');
	
	summerhallReset();
	
	var rSummer = map.selectAll(".loyal"); //get array of all troops			
		rSummer.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[1].innerHTML = "mad king rights";
}

function summerhallReset() {	
	var map = Snap('#summerMap');
		
	var bSummer = map.selectAll(".baratheon"); //get array of all troops			
		bSummer.attr({
			strokeWidth: 0
		})
		
	var rSummer = map.selectAll(".loyal"); //get array of all troops			
		rSummer.attr({
			strokeWidth: 0
		})
		
	
	document.getElementsByClassName("content")[1].innerHTML = "<p>Year: 282 AD<br>Location: Summerhall<br>Outcome: Rebel Victory</p><p>Rebel Commanders:<br>Robert Baratheon<br>Rebel houses of the Stormlands</p><p>Royalist Commanders:<br>Lord Cafferen<br>Lord Fell<br>Lord Grandison</p><p>Impact: With the loyalist storm lords defeated, Robert consolidated his power in the Stormlands, allowing him to march west without the threat of enemy persual from behind.</p>";
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
	
	var troops = document.getElementsByClassName("troops")[2];
	troops.style.opacity = "1.0";
	troops.style.top = "5%";
	
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

function ashfordB() {	
	var map = Snap('#ashMap');
	
	ashfordReset();
	
	var bAsh = map.selectAll(".baratheon"); //get array of all troops			
		bAsh.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[2].innerHTML = "Baratheon boiii";
}

function ashfordT() {	
	var map = Snap('#ashMap');
	
	ashfordReset();
	
	var tAsh = map.selectAll(".tarly"); //get array of all troops			
		tAsh.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[2].innerHTML = "mad king rights";
}

function ashfordReset() {	
	var map = Snap('#ashMap');
		
	var bAsh = map.selectAll(".baratheon"); //get array of all troops			
		bAsh.attr({
			strokeWidth: 0
		})
		
	var tAsh = map.selectAll(".tarly"); //get array of all troops			
		tAsh.attr({
			strokeWidth: 0
		})
		
	
	document.getElementsByClassName("content")[2].innerHTML = "<p>Year: 282 AD<br>Location: Ashford<br>Outcome: Royalist Victory</p><p>Rebel Commanders:<br>Robert Baratheon</p><p>Royalist Commanders:<br>Mace Tyrell<br>Randyll Tarly</p><p>Impact: Robert retreated when faced with the much larger Tyrell force. This allowed Mace Tyrell to invade the Stormlands and lay seige to Storm's End.</p>";
}

function playBells() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("bellsTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[3];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var content = document.getElementsByClassName("content")[3];
	content.style.opacity = "1.0";
	content.style.top = "0%";
	
	var troops = document.getElementsByClassName("troops")[3];
	troops.style.opacity = "1.0";
	troops.style.top = "5%";
	
	//animate troop icons on the map
	var map = Snap('#bellsMap');
	
	var bBells = map.selectAll(".baratheon"); //get array of all troops
	for(i=0; i<bBells.length; i++){
		var currentX = bBells[i].attr("cx"); //get current x value
		var newX = parseInt(currentX)+75; //subtract 160
		
		var currentY = bBells[i].attr("cy"); //get current y value
		var newY = parseInt(currentY)-100; //subtract 50
		
		bBells[i].animate(
			{cx: newX,
			cy: newY},
			2000); //use Snap to animate
	}
	
	var sBells = map.selectAll(".stark");
	for(i=0; i<sBells.length; i++){
		var currentX = sBells[i].attr("cx");
		var newX = parseInt(currentX)+20;
		
		var currentY = sBells[i].attr("cy");
		var newY = parseInt(currentY)+230;
		
		sBells[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var tBells = map.selectAll(".tully");
	for(i=0; i<tBells.length; i++){
		var currentX = tBells[i].attr("cx");
		var newX = parseInt(currentX)+20;
		
		var currentY = tBells[i].attr("cy");
		var newY = parseInt(currentY)+230;
		
		tBells[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var cBells = map.selectAll(".connington");
	for(i=0; i<cBells.length; i++){
		var currentX = cBells[i].attr("cx");
		var newX = parseInt(currentX)-200;
		
		var currentY = cBells[i].attr("cy");
		var newY = parseInt(currentY)-100;
		
		cBells[i].animate(
			{cx: newX,
			cy: newY},
			1000);
	}

}

function bellsB() {	
	var map = Snap('#bellsMap');
	
	bellsReset();
	
	var bBells = map.selectAll(".baratheon"); //get array of all troops			
		bBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[3].innerHTML = "baratheon boi";
}

function bellsT() {
	var map=Snap('#bellsMap');
	
	bellsReset();
	
	var tBells = map.selectAll(".tully"); //get array of all troops			
		tBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
	
	document.getElementsByClassName("content")[3].innerHTML="fish shit";
}

function bellsS() {
	var map=Snap('#bellsMap');
	
	bellsReset();
	
	var sBells = map.selectAll(".stark"); //get array of all troops			
		sBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[3].innerHTML="wolfy";
}

function bellsC() {
	var map=Snap('#bellsMap');
	
	bellsReset();
	
	var cBells = map.selectAll(".connington"); //get array of all troops			
		cBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[3].innerHTML="silver prince rights";
}

function bellsReset() {	
var map = Snap('#bellsMap');
	
	var bBells = map.selectAll(".baratheon"); //get array of all troops			
		bBells.attr({
			strokeWidth: 0
		})
	
	var tBells = map.selectAll(".tully"); //get array of all troops			
		tBells.attr({
			strokeWidth: 0
		})
	
	var sBells = map.selectAll(".stark"); //get array of all troops			
		sBells.attr({
			strokeWidth: 0
		})
	
	var cBells = map.selectAll(".connington"); //get array of all troops			
		cBells.attr({
			strokeWidth: 0
		})
	
	document.getElementsByClassName("content")[3].innerHTML="reset";
}

function playTrident() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("tridentTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[4];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var content = document.getElementsByClassName("content")[4];
	content.style.opacity = "1.0";
	content.style.top = "0%";
	
	var troops = document.getElementsByClassName("troops")[4];
	troops.style.opacity = "1.0";
	troops.style.top = "5%";
	
	//animate troop icons on the map
	var map = Snap('#tridentMap');
	
	var bTrident = map.selectAll(".baratheon"); //get array of all troops
	for(i=0; i<bTrident.length; i++){
		var currentX = bTrident[i].attr("cx"); //get current x value
		var newX = parseInt(currentX)+120; //subtract 160
		
		var currentY = bTrident[i].attr("cy"); //get current y value
		var newY = parseInt(currentY)-120; //subtract 50
		
		bTrident[i].animate(
			{cx: newX,
			cy: newY},
			1500); //use Snap to animate
	}
	
	var sTrident = map.selectAll(".stark");
	for(i=0; i<sTrident.length; i++){
		var currentX = sTrident[i].attr("cx");
		var newX = parseInt(currentX)+120;
		
		var currentY = sTrident[i].attr("cy");
		var newY = parseInt(currentY)-120;
		
		sTrident[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var tTrident = map.selectAll(".tully");
	for(i=0; i<tTrident.length; i++){
		var currentX = tTrident[i].attr("cx");
		var newX = parseInt(currentX)+120;
		
		var currentY = tTrident[i].attr("cy");
		var newY = parseInt(currentY)-120;
		
		tTrident[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var aTrident = map.selectAll(".arryn");
	for(i=0; i<aTrident.length; i++){
		var currentX = aTrident[i].attr("cx");
		var newX = parseInt(currentX)+120;
		
		var currentY = aTrident[i].attr("cy");
		var newY = parseInt(currentY)-120;
		
		aTrident[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var rTrident = map.selectAll(".targaryen");
	for(i=0; i<rTrident.length; i++){
		var currentX = rTrident[i].attr("cx");
		var newX = parseInt(currentX)-20;
		
		var currentY = rTrident[i].attr("cy");
		var newY = parseInt(currentY)+60;
		
		rTrident[i].animate(
			{cx: newX,
			cy: newY},
			1500);
	}
	
	var mTrident = map.selectAll(".martell");
	for(i=0; i<mTrident.length; i++){
		var currentX = mTrident[i].attr("cx");
		var newX = parseInt(currentX)-20;
		
		var currentY = mTrident[i].attr("cy");
		var newY = parseInt(currentY)+60;
		
		mTrident[i].animate(
			{cx: newX,
			cy: newY},
			1000);
	}

}

function tridentB() {	
	var map = Snap('#tridentMap');
	
	tridentReset();
	
	var bTrident = map.selectAll(".baratheon"); //get array of all troops			
		bTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[4].innerHTML = "baratheon boi";
}

function tridentT() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var tTrident = map.selectAll(".tully"); //get array of all troops			
		tTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
	
	document.getElementsByClassName("content")[4].innerHTML="fish shit";
}

function tridentS() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var sTrident = map.selectAll(".stark"); //get array of all troops			
		sTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="wolfy";
}

function tridentA() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var aTrident = map.selectAll(".arryn"); //get array of all troops			
		aTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="caw";
}

function tridentR() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var rTrident = map.selectAll(".targaryen"); //get array of all troops			
		rTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="silver prince wrongs";
}

function tridentM() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var mTrident = map.selectAll(".martell"); //get array of all troops			
		mTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="unbent";
}

function tridentReset() {	
var map = Snap('#tridentMap');
	
	var bTrident = map.selectAll(".baratheon"); //get array of all troops			
		bTrident.attr({
			strokeWidth: 0
		})
	
	var tTrident = map.selectAll(".tully"); //get array of all troops			
		tTrident.attr({
			strokeWidth: 0
		})
	
	var sTrident = map.selectAll(".stark"); //get array of all troops			
		sTrident.attr({
			strokeWidth: 0
		})
	
	var aTrident = map.selectAll(".arryn"); //get array of all troops			
		aTrident.attr({
			strokeWidth: 0
		})
		
	var rTrident = map.selectAll(".targaryen"); //get array of all troops			
		rTrident.attr({
			strokeWidth: 0
		})
		
	var mTrident = map.selectAll(".martell"); //get array of all troops			
		mTrident.attr({
			strokeWidth: 0
		})
	
	document.getElementsByClassName("content")[4].innerHTML="reset";
}

function playSack() {
	//move title up to reveal information about the battle	
	var title = document.getElementById("sackTitle");
	title.style.top = "10%"; 
	
	var play = document.getElementsByClassName("play")[5];
	play.style.top = "90%";
	play.style.opacity = "0.0";
	
	var content = document.getElementsByClassName("content")[5];
	content.style.opacity = "1.0";
	content.style.top = "0%";
	
	var troops = document.getElementsByClassName("troops")[5];
	troops.style.opacity = "1.0";
	troops.style.top = "5%";
	
	//animate troop icons on the map
	var map = Snap('#sackMap');
	
	var sSack = map.selectAll(".stark"); //get array of all troops
	for(i=0; i<sSack.length; i++){
		var currentX = sSack[i].attr("cx"); //get current x value
		var newX = parseInt(currentX)+20; //subtract 160
		
		var currentY = sSack[i].attr("cy"); //get current y value
		var newY = parseInt(currentY)+230; //subtract 50
		
		sSack[i].animate(
			{cx: newX,
			cy: newY},
			1500); //use Snap to animate
	}
	
	var lSack = map.selectAll(".lannister");
	for(i=0; i<lSack.length; i++){
		var currentX = lSack[i].attr("cx");
		var newX = parseInt(currentX)+15;
		
		var currentY = lSack[i].attr("cy");
		var newY = parseInt(currentY)+30;
		
		lSack[i].animate(
			{cx: newX,
			cy: newY},
			1000);
	}
	
	var tSack = map.selectAll(".targaryen");
	for(i=0; i<lSack.length; i++){
		var currentX = tSack[i].attr("cx");
		var newX = parseInt(currentX)+15;
		
		var currentY = tSack[i].attr("cy");
		var newY = parseInt(currentY)-30;
		
		tSack[i].animate(
			{cx: newX,
			cy: newY},
			1000);
	}

}

function sackS() {
	var map=Snap('#sackMap');
	
	sackReset();
	
	var sSack = map.selectAll(".stark"); //get array of all troops			
		sSack.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[5].innerHTML="wolfy";
}

function sackL() {
	var map=Snap('#sackMap');
	
	sackReset();
	
	var lSack = map.selectAll(".lannister"); //get array of all troops			
		lSack.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[5].innerHTML="rawr";
}

function sackT() {
	var map=Snap('#sackMap');
	
	sackReset();
	
	var tSack = map.selectAll(".targaryen"); //get array of all troops			
		tSack.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[5].innerHTML="mad king wrongs";
}

function sackReset() {	
var map = Snap('#sackMap');
	
	var sSack = map.selectAll(".stark"); //get array of all troops			
		sSack.attr({
			strokeWidth: 0
		})
	
	var lSack = map.selectAll(".lannister"); //get array of all troops			
		lSack.attr({
			strokeWidth: 0
		})
		
	var tSack = map.selectAll(".targaryen"); //get array of all troops			
		tSack.attr({
			strokeWidth: 0
		})
	
	document.getElementsByClassName("content")[5].innerHTML="reset";
}