//if some products already exist, maintain the list between pages
//else, create a new empty products list

var products = [];

/*function cartAdd(){
	items++;
	localStorage.setItem("cartitems", items);
	document.getElementById("lblCartCount").innerHTML = localStorage.getItem("cartitems");
}

function onLoad(){
	items = localStorage.getItem("cartitems");
	document.getElementById("lblCartCount").innerHTML = items;
}*/

function Bun(flavor, glaze, number, pic){
	this.flavor = flavor;
	this.glaze = glaze;
	this.number = number;
	this.pic = pic;
}

function makeItem(){
	var flav = document.getElementsByTagName("h1")[0].innerHTML;
	
	var glaze;	
	var glazeRadio = document.getElementsByName("glazeRadio");
	  for(i=0; i<glazeRadio.length; i++){
	   if(glazeRadio[i].checked){
		 glaze = glazeRadio[i].value;
	   }
	  }
	   
	var quantity;	
	var quantityRadio = document.getElementsByName("quantityRadio");
	  for(i=0; i<quantityRadio.length; i++){
	   if(quantityRadio[i].checked){
		 quantity = quantityRadio[i].value;
	   }
	  }
	  
	var picture = document.getElementById("thumbnail").innerHTML;

	var item = new Bun(flav, glaze, quantity, picture);
	return item;
}

function cartAdd(item){	
	products.push(item);
	console.log(products);
}