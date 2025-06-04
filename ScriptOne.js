export class ScriptOne {

	function enterItems() {

		function createItem(itemPic, description, itemPrice) {

		var container = document.createElement("div");
		container.classList.add("itemHolder");
		
		var pic = document.createElement("img");
		pic.src = itemPic;
		pic.classList.add("itemPicture");
		
		var nameBox = document.createElement("div");
		nameBox.classList.add("textHolder");
		
		var desc = document.createElement("h1");
		desc.classList.add("itemText");
		desc.textContent = description;
		var price = document.createElement("h2");
		price.classList.add("itemText");
		price.textContent = itemPrice;

		nameBox.appendChild(desc);
		nameBox.appendChild(price);
		
		container.appendChild(pic);
		container.appendChild(nameBox);
		document.getElementById("child").appendChild(container);

		

		}

		
		var input = document.getElementById("searchField");
		var inputValue = input.value;

		console.log(inputValue);
		
		var count;

		if(inputValue == "Nike") {
			count = 1;
		}
		else if(inputValue == "Nike Air Max TL2.5") {
			count = 2;
		}
		else if(inputValue == "Nike KD18") {
			count = 3;
		}
		else if(inputValue == "Air Max 95") {
			count = 4;
		}
		else if(inputValue == "Cortez") {
			count = 5;
		}
		else if(inputValue == "Vomero") {
			count = 6;
		}
		
		
		function addChild() {
			var child = document.createElement("div");
			child.classList.add("newDiv");
			document.getElementById("child").appendChild(child);
		}	
		
		switch(count) {
			case 1: 
				createItem("nike shoes/AIRMAXTL2.5.jpg", "Sneaker Nike Air Max TL 2.5", "P2 500.00"); 
				createItem("nike shoes/KD18.jpg", "Sneaker Nike KD18 2020", "P2 200.00");
				createItem("nike shoes/NIKEAIRMAX95SP.jpg", "Sneaker Nike AIR MAX 95SP Original", "P1 500.00"); 
				createItem("nike shoes/NIKECORTEZ.jpg", "Sneaker Nike Cortez Authentic", "P2 599.00");
				createItem("nike shoes/NIKEVOMERO18SE.jpg", "Sneaker Vomero 18SE", "P2 800.00");
			
			break;
			
			case 2:
				createItem("nike shoes/AIRMAXTL2.5.jpg", "Sneaker Nike Air Max TL 2.5", "P2 500.00");
			break;

			case 3:
				createItem("nike shoes/KD18.jpg", "Sneaker Nike KD18 2020", "P2 200.00")
			break;

			case 4:
				createItem("nike shoes/NIKEAIRMAX95SP.jpg", "Sneaker Nike AIR MAX 95SP Original", "P1 500.00");
			break;

			case 5:
				createItem("nike shoes/NIKECORTEZ.jpg", "Sneaker Nike Cortez Authentic", "P2 599.00");
			break;
			
			case 6:
				createItem("nike shoes/NIKEVOMERO18SE.jpg", "Sneaker Vomero 18SE", "P2 800.00");
			break;	
		}
		
		
		
		

		
	}

	function getItem() {
		
		
		
	}

	function printStuff(desc,price) {
		console.log(desc);
		console.log(price);	
	}
	console.log(printStuff("Nike Jacket",1200.00));


	function clearSearch() {
		
		var child = document.getElementById("child");
		var searchCart = document.getElementById("cartParent");
		searchCart.removeChild(child);
	
	}


}