fetch("https://18551a0590.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
 var bodyElement=document.querySelector("body");
 var row=document.createElement("section")
 row.classList.add("row","justify-content-center");
 //newElement.src="image/dell.jpg";
 // newElement.setAttribute("class","image1 image2 image3")
 //newElement.classList.add("class1","class2","class3")
 //newElement.classList.remove("class3")
 //var bodyElement=document.querySelector("body");
 bodyElement.append(row)
 info.laptops.map(value=>{
 	var column=document.createElement("article")
 	column.classList.add("col-sm-10","col-md-6","col-lg-3")
 	row.append(column)
 	//card
 	var card=document.createElement("div");
 	card.classList.add("card","mt-4")

 	//card-body
 	var cardBody=document.createElement("div");
 	cardBody.classList.add("card-body")
 	 //image
 	 var imageElement=document.createElement("img");
 	 imageElement.src=value.image;
 	 imageElement.classList.add("img-responsive")
 	 imageElement.alt=value.name;
 	 //name
 	 var name=document.createElement("h2");
 	 name.textContent=value.name;
 	 name.classList.add("text-center","text-primary")
 	 //Price
 	 var price=document.createElement("p");
 	 price.classList.add("text-success")
 	 price.textContent="Price: ₹"+value.price+" /-";
 	 //OriginalPrice
 	 var original_price=document.createElement("p");
 	 original_price.classList.add("text-danger")
 	 original_price.innerHTML="OriginalPrice: <s>₹"+value.original_price+" /-</s>";
 	 //button
     var buttonParent=document.createElement("div");
     buttonParent.classList.add("d-grid","gap-2");

 	 var button=document.createElement("button");
 	 button.classList.add("btn","btn-warning");
 	 button.textContent=  "Add to Cart"
 	 buttonParent.append(button)

 	 cardBody.append(name)
 	 cardBody.append(imageElement)
 	 cardBody.append(original_price)
 	 cardBody.append(price)
 	 cardBody.append(button)
 	
   	card.append(cardBody);
 	column.append(card);
 })
}
