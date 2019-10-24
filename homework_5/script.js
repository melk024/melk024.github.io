var items = 0;

function cartAdd(){
	items++;
	localStorage.setItem("cartitems", items);
	document.getElementById("lblCartCount").innerHTML = localStorage.getItem("cartitems");
}

function onLoad(){
	items = localStorage.getItem("cartitems");
	document.getElementById("lblCartCount").innerHTML = items;
}