//Appeler l'id de la page
let currentUrl = window.location.search;
let url = new URLSearchParams(currentUrl);
let productId = url.get("id");
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
        //Inclure le html manquant
        const title = document.querySelector("head title");
        title.textContent = data.name;
        itemImage.innerHTML +=
            `<img src="${data.imageUrl}" alt="${data.altTxt}">`;
        itemName.innerText += data.name;
        itemPrice.innerText += data.price / 10;
        itemDescription.innerText += data.description;
        const color = data.colors;
        //Sélecteur des couleurs
        for (let i = 0; i < color.length; i++) {
            itemColors.innerHTML +=
                `<option value="${data.colors[i]}">${data.colors[i]}</option>`
        };
        //Sélection du bouton ajouter au panier
        const btn_panier = document.getElementById("addToCart");
        btn_panier.addEventListener("click", (event) => {
            event.preventDefault();
            let choixColor = itemColors.value;
            let price = itemPrice.textContent;
            console.log(price);
            let nomProduit = itemName.textContent;
            let choixQte = itemQuantity.value;
            let image = data.imageUrl;
            let kanap = { 
                "id_produit":productId,
                "nomProduit": nomProduit,
                "price": price, 
                "color":choixColor, 
                "qte": choixQte,
                "imageUrl": image,
                "altTxt": data.altTxt};
            function verifForm() {
                if (itemColors.value == "" || itemQuantity.value == 0 || itemQuantity.value > 100) {
                    alert("Choississez une couleur et une quantité valide à votre Kanap");
                    console.log("KO verifForm");
                    return false
                } else {
                    console.log("Ok verifForm");
                    return true
                }
            };
            
            let panier = JSON.parse(localStorage.getItem("panier"));

            if (verifForm() == true) {
                if (panier==null) {
                    panier = [];
                    panier.push(kanap);
                    localStorage.setItem("panier", JSON.stringify(panier));
                     } else {
                         const panierLS = JSON.parse(localStorage.getItem("panier", kanap));
                        for (i = 0; i < panierLS.length; i++) {
                            console.log(panierLS[i].id_produit);
                            if (productId == panierLS[i].id_produit && choixColor == panierLS[i].color){
                                console.log(panierLS[i].qte);
                                panierLS[i].qte = Number(panierLS[i].qte) + Number(choixQte);
                                localStorage.setItem("panier", JSON.stringify(panierLS));
                            }else {
                                panier.push(kanap);
                                localStorage.setItem("panier", JSON.stringify(panier));
                            };
                            //condition si il y a le meme produit
                        }}
                        window.location.href = "./cart.html";
                 } else {
                    console.log("mauvaise saisie")
                }
            })
        })
