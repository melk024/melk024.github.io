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
		
	document.getElementsByClassName("content")[0].innerHTML="<p>Commander: Marq Grafton<br>Alliance: The Crown</p><p>Marq Grafton took charge over the Vale bannermen who turned their back on Lord Jon Arryn, returning to the loyalty of the King. They consolidated their forces at Gulltown, the ancestral seat of the Graftons. It is also the only port city in the Vale</p><p>However, the walls were breached by the Baratheon men, and Robert Baratheon slew Marq Grafton with his own hand. The Grafton lordship passed on to Lord Gerald, and they bent the knee to the rebellion.</p><p>Outcome: Defeated</p>";
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
	
	document.getElementsByClassName("content")[0].innerHTML = "<p>Year: 282 AC<br>Location: Gulltown<br>Outcome: Rebel Victory</p><p>Rebel Commanders:<br>Jon Arryn<br>Robert Baratheon</p><p>Royalist Commanders:<br>Marc Grafton</p><p>Impact: Unified the Vale, secured safe passage north and south respectively for Lord Eddard Stark and Lord Robert Baratheon.</p>";
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
		
	
	document.getElementsByClassName("content")[1].innerHTML = "<p>Commander: Robert Baratheon<br>Alliance: The Rebellion</p><p>Robert returned to Storm's End following his victory in Gulltown. However, upon his arrival, he heard rumor of Royalist storm lords who were consolidating their forces at Summerhall, planning to march on Storm's End. Robert passed control of the castle to his brother Stannis and raced East to meet them.</p><p>Somehow, Robert beat the three largest forces to Summerhall, and won three battles in a single day. He killed Lord Fell in combat, and forced Lord Cafferen and Lord Grandison to join his regiment.</p><p>Outcome: Victorious</p>";
}

function summerhallR() {	
	var map = Snap('#summerMap');
	
	summerhallReset();
	
	var rSummer = map.selectAll(".loyal"); //get array of all troops			
		rSummer.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[1].innerHTML = "<p>Commanders: Lords Cafferen, Fell, and Grandison<br>Alliance: The Crown</p><p>When Robert Baratheon called his bannermen to arms, some of the storm lords who remained loyal to the Crown resisted. Encouraged by the Hand of the King, they rejected his demands and decided to gather at Summerhall. From there, they were to march on Storm's End and confront the Baratheon forces there.</p><p>However, Robert caught wind of their planning, and intercepted the three lords and their armies before they could create a plan. Lord Fell was killed, and Lords Cafferen and Grandison were taking captive, along with Lord Fell's eldest son. Eventually, they would all fight and die for the rebellion.</p><p>Outcome: Defeated</p>";
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
		
	
	document.getElementsByClassName("content")[1].innerHTML = "<p>Year: 282 AC<br>Location: Summerhall<br>Outcome: Rebel Victory</p><p>Rebel Commanders:<br>Robert Baratheon<br>Rebel houses of the Stormlands</p><p>Royalist Commanders:<br>Lord Cafferen<br>Lord Fell<br>Lord Grandison</p><p>Impact: With the loyalist storm lords defeated, Robert consolidated his power in the Stormlands, allowing him to march west without the threat of enemy persual from behind.</p>";
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
		
	
	document.getElementsByClassName("content")[2].innerHTML = "<p>Commander: Robert Baratheon<br>Alliance: The Rebellion</p><p>After his victory at Summerhall, Robert advanced toward the West and the Reach. Ashford was sworn to Highgarden, and likely a royalist holding. Taking Ashford also would have secured the stormlands' western border.</p><p>As Robert advanced, he ran into Randyll Tarly, leading his forces alongside Mace Tyrell. The Baratheon forces were overwhelmed, and forced to retreat before the bulk of the Reach forces had joined the battlefield.</p><p>Outcome: Surrendered</p>";
}

function ashfordT() {	
	var map = Snap('#ashMap');
	
	ashfordReset();
	
	var tAsh = map.selectAll(".tarly"); //get array of all troops			
		tAsh.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	
	document.getElementsByClassName("content")[2].innerHTML = "<p>Commanders: Randyll Tarly, Mace Tyrell<br>Alliance: The Crown</p><p>Randyll Tarly was commanding a van of the Tyrell army, and ran into Robert on his way to Ashford. He was swiftly able to overrun the Baratheon forces, and forced Robert and his men North.</p><p>After the battle, Mace Tyrell took credit for the defeat, and moved his entire army into the stormlands, where they would set up a year-long seige against Storm's End and the young Stannis Baratheon.</p><p>Outcome: Victorious</p>";
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
		
	
	document.getElementsByClassName("content")[2].innerHTML = "<p>Year: 282 AC<br>Location: Ashford<br>Outcome: Royalist Victory</p><p>Rebel Commanders:<br>Robert Baratheon</p><p>Royalist Commanders:<br>Mace Tyrell<br>Randyll Tarly</p><p>Impact: Robert retreated when faced with the much larger Tyrell force. This allowed Mace Tyrell to invade the Stormlands and lay seige to Storm's End.</p>";
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
		
	
	document.getElementsByClassName("content")[3].innerHTML = "<p>Commander: Robert Baratheon<br>Alliance: The Rebellion</p><p>After force-marching his troops through the Riverlands, Robert sought sanctuary at the Stoney Sept. His wounds were taken care of, but overnight the Sept was moved on by Jon Connington, the new Hand of the King and close friend to Prince Rhaegar. Robert hid from his forces until the Stark and Tully men arrived.</p><p>He then fled from his hiding place in a brothel, slew six men, and gathered the rest of his men to push even further North. He nearly killed Jon Connington, but abandoned the fight to save his own life.</p><p>Outcome: Victorious</p>";
}

function bellsT() {
	var map=Snap('#bellsMap');
	
	bellsReset();
	
	var tBells = map.selectAll(".tully"); //get array of all troops			
		tBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
	
	document.getElementsByClassName("content")[3].innerHTML="<p>Commander: Hoster Tully<br>Alliance: The Rebellion</p><p>Although Hoster Tully was initially neutral in the fight, the combined diplomacy of Eddard Stark and Jon Arryn convinced him to pick up his banners for the Rebellion. Together, he and Eddard marched on the Stoney Sept to free Robert from the town.</p><p>The Rebel forces stormed the walls and fought fiercely against Connington's men, with the battle taking place in alleys and on rooftops. Hoster continued to accompany the Rebellion further north, supporting Robert through the remainder of the war.</p><p>Outcome: Victorious</p> ";
}

function bellsS() {
	var map=Snap('#bellsMap');
	
	bellsReset();
	
	var sBells = map.selectAll(".stark"); //get array of all troops			
		sBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[3].innerHTML="<p>Commander: Eddard Stark<br>Alliance: The Rebellion</p><p>Eddard had been heading south to meet with Robert when the Stoney Sept was swarmed. He stopped at Riverrun and convinced Lord Hoster Tully to send his men along with him to the Sept, where they led the charge on the Royalist forces.</p><p>The Rebel forces stormed the walls and fought fiercely against Connington's men, with the battle taking place in alleys and on rooftops. Robert credited Eddard with the eventual victory.</p><p>Outcome: Victorious</p>";
}

function bellsC() {
	var map=Snap('#bellsMap');
	
	bellsReset();
	
	var cBells = map.selectAll(".connington"); //get array of all troops			
		cBells.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[3].innerHTML="<p>Commander: Jon Connington<br>Alliance: The Crown</p><p>After Robert escaped at Ashford, the King appointed Jon Connington as his new hand and sent him to the Stoney Sept. Jon and his men swept the entire town from top to bottom throughout the night, but the townsfolk spirited Robert from home to home.</p><p>When the Rebel forces arrived, Jon led his men into a raging fight throughout the narrow city streets. He was nearly killed by Robert on the steps of the Sept, and was eventually forced to retreat. He was exiled by the King for his failure.</p><p>Outcome: Defeated (Exiled)</p>";
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
	
	document.getElementsByClassName("content")[3].innerHTML="<p>Year: 283 AC<br>Location: The Stoney Sept<br>Outcome: Rebel Victory</p><p>Rebel Commanders:<br>Robert Baratheon<br>Eddard Stark<br>Hoster Tully</p><p>Royalist Commanders:<br>Jon Connington</p><p>Impact: Robert was able to escape the sack of the Sept, fleeing toward the Trident river. The combined Stark and Tully forces crushed the Connington forces, and Jon Connington was forced into exile for the shame. This is commonly regarded as the turning point in the war.</p>";
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
			1500);
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
		
	
	document.getElementsByClassName("content")[4].innerHTML = "<p>Commander: Robert Baratheon<br>Alliance: The Rebellion</p><p>Now joined by Eddard, Hoster, and Jon Arryn, Robert continued North to try and move on King's Landing. As he travelled to the Kingsroad, he was met by the Royalist forces led by Prince Rhaegar. The battle raged on, but was decided when the two men met for single combat.</p><p>With the battle raging around them, Robert and Rhaegar fought hand-to-hand for nearly a half hour. Robert was wounded by the Prince, but he eventually killed him with a blow to the chest from his warhammer. At this point, the Royalists fled.</p><p>Outcome: Victorious</p>";
}

function tridentT() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var tTrident = map.selectAll(".tully"); //get array of all troops			
		tTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
	
	document.getElementsByClassName("content")[4].innerHTML="<p>Commander: Hoster Tully<br>Alliance: The Rebellion</p><p>The Riverlands were still harshly divided between the Rebellion and the Royalists, but Hoster led a small collection of men into the fighting. Jason Mallister, a lord of the Riverlands, killed three of Rhaegar's bannermen.</p><p>He also called Walder Frey to arms; however, the man was late to arrive, and showed up after the battle had been fought. Hoster mocked him and began to call Walder's loyalty into question.</p><p>Outcome: Victorious</p>";
}

function tridentS() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var sTrident = map.selectAll(".stark"); //get array of all troops			
		sTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="<p>Commander: Eddard Stark<br>Alliance: The Rebellion</p><p>Eddard led the largest part of the Rebel army, with the majority of the houses in the North picking up their banners to fight for Robert. His men were also vastly more battle-hardened than the forces of the Crown, which helped turn the tide of the fighting.</p><p>After Robert slew the Prince, Eddard was the first man to his side. He convinced Robert to stay at the Trident to recover, and Robert insisted that Eddard continue south without him and pursue the Royalist army back to the capital.</p><p>Outcome: Victorious</p>";
}

function tridentA() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var aTrident = map.selectAll(".arryn"); //get array of all troops			
		aTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="<p>Commander: Jon Arryn<br>Alliance: The Rebellion</p><p>Jon Arryn would rejoin the Rebel forces after the Battle of the Bells, and continue back north with them. He led forces from assorted houses in the Vale, although some, like the Graftons, remained loyal to the Crown.</p><p>One of the men under his command, Lyn Corbray, cut down the Dornish forces and slew Lewyn Martell. After the fighting, Jon remained at the Trident with a wounded Robert.</p><p>Outcome: Victorious</p>";
}

function tridentR() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var rTrident = map.selectAll(".targaryen"); //get array of all troops			
		rTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="<p>Commander: Rhaegar Targaryen<br>Alliance: The Crown</p><p>The Crown Prince returned from Dorne with a force of 10,000 Dornishmen after the fighting at the Stoney Sept, and was sent east by his father. While on the Kingsroad, he encountered the Rebel forces as he tried to cross the river at the Trident.</p><p>In his first fight of the war, Rhaegar cut through the first lines of the Rebel army and challenged Robert to single combat. Although he was able to wound him, Rhaegar was eventually killed by Robert, which scattered the remaining Targaryen forces.</p><p>Outcome: Defeated (Killed)</p>";
}

function tridentM() {
	var map=Snap('#tridentMap');
	
	tridentReset();
	
	var mTrident = map.selectAll(".martell"); //get array of all troops			
		mTrident.attr({
			stroke: "#000",
			strokeWidth: 3
		})
		
	document.getElementsByClassName("content")[4].innerHTML="<p>Commander: Lewyn Martell<br>Alliance: The Crown</p><p>Dorne was forced to enter the fight by the King, who reminded the Martells that Prince Rhaegar's wife, Elia Martell, was kept in the capital. 10,000 Dornishmen accompanied Rhaegar north, and fought with him at the Trident.</p><p>Lewyn was initially wounded in the attack, and then was killed by Jason Mallister. The majority of the Dornish host returned south after the defeat.</p><p>Outcome: Defeated</p>";
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
	
	document.getElementsByClassName("content")[4].innerHTML="<p>Year: 283 AC<br>Location: The Trident river<br>Outcome: Decisive Rebel Victory</p><p>Rebel Commanders:<br>Robert Baratheon<br>Jon Arryn<br>Eddard Stark<br>Hoster Tully</p><p>Royalist Commanders:<br>Rhaegar Targaryen<br>Lewyn Martell</p><p>Impact: Prince Rhaegar was killed by Robert in single combat, scattering the rest of the Royalist forces. Robert, however, was wounded, and gave control of the Rebel vanguard to Eddard Stark, who pursued the Royalist forces back to King's Landing.</p>";
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
	
	document.getElementsByClassName("content")[5].innerHTML="<p>Year: 283 AC<br>Location: King's Landing<br>Outcome: Rebel Victory and establishment of the Baratheon dynasty</p><p>Rebel Commanders:<br>Tywin Lannister<br>Eddard Stark</p><p>Royalist Commanders:<br>Aerys Targaryen</p><p>Impact: The capital fell when the Lannisters betrayed the crown, and Jaime Lannister killed the king. He surrendered the throne to Eddard Stark, who in turn installed Robert Baratheon as king. The majority of fighting was over, although a few battles continued in the south.</p>";
}