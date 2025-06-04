function displayItem() {

	var itemPic = document.createElement("img");
	var itemLabel = document.createElement("h1");
	var itemName = document.createElement("h2");
	var itemPrice = document.createElement("h2");
	var favourite = document.createElement("img");

	itemPic.src = "";
	itemPic.objectFit = "cover";
	itemPic.style.width = 245;
	itemPic.style.height = 200;
	
	favourite.src = "heart.png";
	favourite.objectFit = "cover";
	favourite.style.height = 15;
	favourite.style.width = 15;
	favourite.style.float = right;
	
	var itemPicContainer = document.createElement("div");
	itemPicContainer.style.height = 200;
	itemPicContainer.style.width = 245 ;
	itemPicContainer.appendChild(itemPic);
	itemPicContainer.appendChild(favourite);
	
	var labelContainer = document.createElement("div");
	labelContainer.style.height = 40;
	labelContainer.style.width = 240;
	labelContainer.appendChild(itemLabel);

	itemName.textContent = "";
	itemPrice.textContent = "";
	
	
	
	
	
	
	var container = document.createElement("div");
	container.style.width = 245;
	container.style.height = 380;
	container.appendChild(itemPicContainer);
	container.appendChild(itemName);
	container.appendChild(itemPrice);

	
}