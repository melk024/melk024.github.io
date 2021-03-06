//remove code adapted from W3

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
	var products = JSON.parse(localStorage.getItem("productsList"));
	
	if(products === null){
		products = [];
	}
	
	products.push(item);
	localStorage.setItem("productsList", JSON.stringify(products));
	
	localStorage.setItem("cartNumber", products.length);
	document.getElementById("lblCartCount").innerHTML = localStorage.getItem("cartNumber");
	
	//take item
	//create cart item
	//appendChild to mini cart div	
	
	var cartItem = document.createElement("div");
	cartItem.className = "smallItem";
			
	var cartPic = document.createElement("div");
	cartPic.className = "itemPic";
	cartPic.innerHTML = item.pic;
		
	var cartDesc = document.createElement("div");
	cartDesc.className = "itemDesc";
	cartDesc.innerHTML = item.flavor + "<br><br> Glaze: " + item.glaze + "<br> Quantity: " + item.number;
	
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("Remove");
	span.setAttribute("type", "button");
	span.className = "remove";
	span.setAttribute("onclick", "removeItem(this.parentNode)");
	span.appendChild(txt);
			
	cartItem.appendChild(cartPic);
	cartItem.appendChild(cartDesc);
	cartItem.appendChild(span);
			
	document.getElementById("cart").appendChild(cartItem);
	location.reload();
}

function onLoad() {
	var count = localStorage.getItem("cartNumber");
	if(count === null){
		count = 0;
	}
	document.getElementById("lblCartCount").innerHTML = count;
	
	var products = JSON.parse(localStorage.getItem("productsList"));
	
	if(products === null || products.length == 0){		
		var cartLabel = document.createElement("div");
		cartLabel.className = "smallItem";
		cartLabel.innerHTML = "Your cart is empty. Please add an item before checking out.";
		document.getElementById("cart").appendChild(cartLabel);
		//keep check out button disabled, display "your cart is empty" message
	}
	
	else{
		//loop through each element in products
		//take name, glaze, number, and picture
		//create cart item
		//appendChild to mini cart div
		//copy above instruction to work on the cart page as well
		
		var i;
		for(i = 0; i<products.length; i++){
			var bunItem = products[i];
			var flavor = bunItem.flavor;
			var glaze = bunItem.glaze;
			var number = bunItem.number;
			var pic = bunItem.pic;
			
			var cartItem = document.createElement("div");
			cartItem.className = "smallItem";
			
			var cartPic = document.createElement("div");
			cartPic.className = "itemPic";
			cartPic.innerHTML = pic;
			
			var cartDesc = document.createElement("div");
			cartDesc.className = "itemDesc";
			cartDesc.innerHTML = flavor + "<br><br> Glaze: " + glaze + "<br> Quantity: " + number;
			
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("Remove");
			span.setAttribute("type", "button");
			span.className = "remove";
			span.setAttribute("onclick", "removeItem(this.parentNode)");
			span.appendChild(txt);
			
			cartItem.appendChild(cartPic);
			cartItem.appendChild(cartDesc);
			cartItem.appendChild(span);
			
			document.getElementById("cart").appendChild(cartItem);
			
		}	
	}
	
}

function cartLoad() {
	var count = localStorage.getItem("cartNumber");
	if(count === null){
		count = 0;
	}
	document.getElementById("lblCartCount").innerHTML = count;
	
	document.getElementsByTagName("h1")[0].innerHTML = "Your cart (" + count + ")";
	
	var products = JSON.parse(localStorage.getItem("productsList"));
	
	if(products === null || products.length == 0){		
		var cartLabel = document.createElement("div");
		cartLabel.className = "bigItem";
		cartLabel.innerHTML = "Your cart is currently empty. Please visit the shop to add items.";
		document.getElementById("cartItems").appendChild(cartLabel);
	}
	
	else{
		//loop through each element in products
		//take name, glaze, number, and picture
		//create cart item
		//appendChild to cart div
		
		var i;
		for(i = 0; i<products.length; i++){
			var bunItem = products[i];
			var flavor = bunItem.flavor;
			var glaze = bunItem.glaze;
			var number = bunItem.number;
			var pic = bunItem.pic;
			
			var cartItem = document.createElement("div");
			cartItem.className = "bigItem";
			
			var cartPic = document.createElement("div");
			cartPic.className = "bigPic";
			cartPic.innerHTML = pic;
			
			var cartDesc = document.createElement("div");
			cartDesc.className = "bigDesc";
			cartDesc.innerHTML = flavor + "<br> Glaze: " + glaze;
			
			var span = document.createElement("SPAN");
			var txt = document.createTextNode("Remove");
			span.setAttribute("type", "button");
			span.className = "bigRemove";
			span.setAttribute("onclick", "removeProd(this.parentNode)");
			span.appendChild(txt);
			
			var list = document.createElement("UL");
			list.className = "bigInfo";
			var price = document.createElement("LI");
			var pricenode = document.createTextNode("$3.00");
			price.appendChild(pricenode);
			var quantity = document.createElement("LI");
			var quantnode = document.createTextNode(number);
			quantity.appendChild(quantnode);
			var total = document.createElement("LI");
			var totalnode = document.createTextNode("$"+3 * number+".00");
			total.appendChild(totalnode);
			list.appendChild(price);
			list.appendChild(quantity);
			list.appendChild(total);
			
			cartDesc.appendChild(list);
			
			cartItem.appendChild(cartPic);
			cartItem.appendChild(cartDesc);			
			cartItem.appendChild(span);

			
			document.getElementById("cartItems").appendChild(cartItem);			
			
		}		
	}
	
}

function removeItem(item){
	var list = document.getElementsByClassName("smallItem");
	var i;
	var locate = 0;
	for(i = 0; i<list.length; i++){
		if(list[i] === item){
			locate = i;
		}
	}
	var products = JSON.parse(localStorage.getItem("productsList"));
	products.splice(locate, 1);
	localStorage.setItem("productsList", JSON.stringify(products));
	localStorage.setItem("cartNumber", products.length);
	location.reload();
}

function removeProd(item){
	var list = document.getElementsByClassName("bigItem");
	var i;
	var locate = 0;
	for(i = 0; i<list.length; i++){
		if(list[i] === item){
			locate = i;
		}
	}
	var products = JSON.parse(localStorage.getItem("productsList"));
	products.splice(locate, 1);
	localStorage.setItem("productsList", JSON.stringify(products));
	localStorage.setItem("cartNumber", products.length);
	location.reload();
}
	