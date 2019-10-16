function BarnOwl(name, age) {
	this.name = name;
	this.age = age;
	this.type = "BarnOwl";
	this.image = "BarnOwl.jpg";
}

function Lion(name, age) {
	this.name = name;
	this.age = age;
	this.type = "Lion";
	this.image = "Lion.jpg";
}

function SeaTurtle(name, age) {
	this.name = name;
	this.age = age;
	this.type = "SeaTurtle";
	this.image = "SeaTurtle.jpg";
}

var animals = [new BarnOwl(), new Lion(), new SeaTurtle()];
var names = ["Bill", "Mike", "Eddie", "Beverly", "Ben", "Richie", "Stan"];

function generateRandomIndex(maxIndex) {
	this.maxIndex = maxIndex;
	return Math.floor(Math.random() * maxIndex);
}

function generateRandomName(){
	var index = generateRandomIndex(names.length - 1);
	return names[index];
}

function generateRandomAge(){
	return generateRandomIndex(14) + 1;
}

function generateRandomAnimal(){
	var index = generateRandomIndex(animals.length - 1);
	var randomAnimal = animals[index];
	if(randomAnimal instanceof BarnOwl){
		return new BarnOwl(generateRandomName(), generateRandomAge());
	}
	if(randomAnimal instanceof Lion){
		return new Lion(generateRandomName(), generateRandomAge());
	}
	if(randomAnimal instanceof SeaTurtle){
		return new SeaTurtle(generateRandomName(), generateRandomAge());
	}
	else{
		console.log("Error: something is really broken");
	}
}

function onLoad(){
	var animal = generateRandomAnimal();
	document.getElementById("pic").src = animal.image;
	var label = document.getElementById("label");
	label.innerHTML = "I am " + animal.name + " and I am " + animal.age + " years old";
	document.getElementById("save").onclick = localStorage.setItem("myAnimal", JSON.stringify(animal));
}