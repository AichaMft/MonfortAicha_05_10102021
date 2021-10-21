//Appeler l'id de la page
var location = "C:/Users/Msi/OneDrive/Documents/Kanap/P5-kanap/front/html/product.html?id=";
var str = location.href ;
var url = new URL(str);
var productId = url.searchParams.get("id");
console.log(productId);
//Récuperer l'id depuis l'api'
fetch(`http://localhost:3000/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        allItems(data);
        function allItems(data) {
        const itemImage = document.getElementsByClassName("item__img");
        itemImage.innerHTML += 
        `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        const itemName = document.getElementById("title");
        itemName.innerHTML += 
        ` <h1 id="title">${data.name}</h1>`;
        const itemPrice = document.getElementById("price");
        itemPrice.innerHTML += 
        `<span id="price">${data.price}</span>€</p>`;
        const itemDescription = document.getElementById("description");
        itemDescription.innerHTML += 
        `<p id="description">${data.description}</p>`;
    }
});
