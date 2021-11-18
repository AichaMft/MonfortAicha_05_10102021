//Appeler l'id de la page
let currentUrl = window.location.search;
let url = new URLSearchParams(currentUrl);
let productId = url.get("id");
console.log(productId);
//Déclarer les variables
const itemImage = document.querySelector("article .item__img");
const itemName = document.getElementById("title");
const itemPrice = document.getElementById("price");
const itemDescription = document.getElementById("description");
const itemColors = document.getElementById("colors");
const itemQuantity = document.getElementById("quantity");
//Récuperer l'id depuis l'api
fetch(`http://localhost:3000/api/products/${productId}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        //Inclure le html manquant
        const title = document.querySelector("head title");
        title.textContent = data.name;
        itemImage.innerHTML +=
            `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        itemName.innerText += data.name;
        itemPrice.innerText += data.price / 10;
        itemDescription.innerText += data.description;
        const color = data.colors;
        console.log(color[1]);
        //Sélecteur des couleurs
        for (let i = 0; i < color.length; i++) {
            itemColors.innerHTML +=
                `<option value="${data.colors[i]}">${data.colors[i]}</option>`
        };
//Sélection du bouton ajouter au panier
const btn_panier = document.getElementById("addToCart");
/*Ecouter l'évenement*/
btn_panier.addEventListener("click", (event) => {
    event.preventDefault();
    //Mettre le choix de l'utilisateur dans une variable
    let srcUrl = data.imageUrl;
    let choixColor = itemColors.value;
    let nomProduit = itemName.textContent;
    let choixQte = itemQuantity.value;
//fonction confirmation d'ajout au panier 
    const confirm = () => {
        if (window.confirm("Cliquez sur annuler pour continuer vos achats et revenir à l'accueil")) {
            window.location.href = "./cart.html";
        } else {
            window.location.href = "./index.html";
        }
    };
//fonction de verification des champs
    const validite = () => {
        if (choixColor === "") {
            alert("Choississez une couleur à votre Kanap");
        } else if (choixQte == 0) {
            alert("Ajouter une quantité svp");
        } else {
            confirm()
        }
    };
//var ajout local storage
    const ajoutLS = () => {
        localStorageProducts.push(optionsProduit);
        localStorage.setItem("product", JSON.stringify(localStorageProducts));
    };
    //Récuperer les valeurs du formulaire
    let optionsProduit = {
        "nomProduit": nomProduit,
        "imageUrl": srcUrl,
        "prix":itemPrice.textContent,
        "id_produit": data._id,
        "choix_couleur": choixColor,
        "quantite": choixQte,
    };
    let localStorageProducts = JSON.parse(localStorage.getItem("product"));
    if(localStorageProducts){
    ajoutLS();
    validite();
    } else {
    localStorageProducts = [];
    ajoutLS();
    validite();
    }
})
});