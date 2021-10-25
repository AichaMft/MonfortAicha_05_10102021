//Appeler l'id de la page
let currentUrl = window.location.search;
let url = new URLSearchParams(currentUrl);
let productId = url.get("id");
console.log(productId);
//Déclarer les variables
let itemImage = document.querySelector("article .item__img");
console.log(itemImage);
const itemName = document.getElementById("title");
const itemPrice = document.getElementById("price");
const itemDescription = document.getElementById("description");
const itemColors = document.getElementById("colors");
const itemQuantity = document.getElementById("quantity");
const confirmItem = document.getElementById("addToCart");
confirmItem.setAttribute("type", "submit");
console.log(confirmItem);
//Récuperer l'id depuis l'api
fetch(`http://localhost:3000/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //Inclure le html manquant
        itemImage.innerHTML +=
            `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        itemName.innerText += data.name;
        itemPrice.innerText += data.price;
        itemDescription.innerText += data.description;
        const color = data.colors;
        console.log(color[1]);
        //Sélecteur des couleur dynamique
        for (let i = 0; i < color.length; i++) {
            itemColors.innerHTML +=
                `<option value="${data.colors}">${data.colors[i]}</option>`
        };
    });
//Créer l'évenement + vérifier la validité des champs
confirmItem.addEventListener("click", function (event) {
    function Event(event) {
        if (itemColors.value.length >= 1) {
            alert("Veuillez sélectionner la couleur svp")
        }
        if (itemQuantity.valueAsNumber == 0, itemQuantity.valueAsNumber < 100) {
            alert("Le champ est incorrect")
        }
        else {
            console.log("direction le panier")
        }
        Event();
    }
});
