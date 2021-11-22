//Affichage du local storage 
let localStorageProducts = JSON.parse(localStorage.getItem("product"));
const positionEmptyCart = document.querySelector("#cart__items");
//condition si le local storage est vide alors
if (localStorageProducts === null | localStorageProducts === 0) {
  const emptyCart = `<p>Votre panier est vide</p>`;
  positionEmptyCart.innerHTML = emptyCart;
} else {
  //alors la boucle affiche les infos des produits contenus dans le local storage
  for (let i = 0; i < localStorageProducts.length; i++) {
    let allCart = localStorageProducts[i];
    let idCart = allCart.id_produit;
    let quantity = allCart.quantite;
    let elementHtml =
      `<article class="cart__item" data-id="${idCart}">
            <div class="cart__item__img">
              <img src="${allCart.imageUrl}" alt="${allCart.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${allCart.nomProduit}</h2>
                <p>${allCart.prix} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté :</p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article>`;
    positionEmptyCart.innerHTML += elementHtml;
  }
};
//array contenant les ids des produits du panier
let idProducts = [];
for (let i = 0; i < localStorageProducts.length; i++) {
  let allCarts = localStorageProducts[i];
  idProducts.push(allCarts.id_produit);
};
// Récupération du total des quantités
function recupTotal() {
  let itemQte = document.getElementsByClassName('itemQuantity');
  let allQte = itemQte.length,
    totalQte = 0;

  for (let i = 0; i < allQte; ++i) {
    totalQte += itemQte[i].valueAsNumber;
  }

  let productTotalQuantity = document.getElementById('totalQuantity');
  productTotalQuantity.innerHTML = totalQte;


  // Récupération du prix total
  totalPrice = 0;

  for (let i = 0; i < allQte; i++) {
    totalPrice += (itemQte[i].valueAsNumber * localStorageProducts[i].prix);
  }

  let productTotalPrice = document.getElementById('totalPrice');
  productTotalPrice.innerHTML = totalPrice;
};
recupTotal();

// Modification d'une quantité de produit
function modifQte() {
  let qteModif = document.querySelectorAll(".itemQuantity");

  for (let q = 0; q < qteModif.length; q++) {
    qteModif[q].addEventListener("change", (event) => {
      event.preventDefault();

      //Selection de l'element à modifier en fonction de son id et sa couleur
      let quantityModif = localStorageProducts[q].quantite;
      let qteModifValue = qteModif[q].valueAsNumber;

      const resultFind = localStorageProducts.find((el) => el.qteModifValue !== quantityModif);

      resultFind.quantite = qteModifValue;
      quantityModif = resultFind.quantite;

      localStorage.setItem("product", JSON.stringify(localStorageProducts));

      // refresh rapide
      location.reload();
    })
  }
};
modifQte();
// Suppression d'un produit
function deleteProduct() {
  let btn_supprimer = document.querySelectorAll(".deleteItem");

  for (let j = 0; j < btn_supprimer.length; j += 1) {
    btn_supprimer[j].addEventListener("click", (event) => {
      event.preventDefault();

      //Selection de l'element à supprimer en fonction de son id ET sa couleur
      let idDelete = localStorageProducts[j].id_produit;
      let colorDelete = localStorageProducts[j].choix_couleur;

      localStorageProducts = localStorageProducts.filter(el => el.id_produit !== idDelete || el.choix_couleur !== colorDelete);

      localStorage.setItem("product", JSON.stringify(localStorageProducts));

      //Alerte produit supprimé et refresh
      alert("Ce produit a bien été supprimé du panier");
      location.reload();
    })
  }
};
deleteProduct();

//check des caractères avec regex
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
//Ajout des caractères pris en charge
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

// Ecoute de la modification du prénom
firstName.addEventListener('change', function () {
  validFirstName(this);
});

// Ecoute de la modification du nom
lastName.addEventListener('change', function () {
  validLastName(this);
});

// Ecoute de la modification de l'adresse
address.addEventListener('change', function () {
  validAddress(this);
});

// Ecoute de la modification de la ville
city.addEventListener('change', function () {
  validCity(this);
});

// Ecoute de la modification de l'email
email.addEventListener('onchange', function () {
  validEmail(this);
});

//validation du prénom
const validFirstName = async function (inputFirstName) {
  let firstNameErrorMsg = inputFirstName.nextElementSibling;

  if (charRegExp.test(inputFirstName.value)) {
    firstNameErrorMsg.innerHTML = '';
  } else {
    firstNameErrorMsg.innerHTML = 'Ce champ doit contenir uniquement des lettres.';
  }
};

//validation du nom
const validLastName = function (inputLastName) {
  let lastNameErrorMsg = inputLastName.nextElementSibling;

  if (charRegExp.test(inputLastName.value)) {
    lastNameErrorMsg.innerHTML = '';
  } else {
    lastNameErrorMsg.innerHTML = 'Ce champ doit contenir uniquement des lettres.';
  }
};

//validation de l'adresse
const validAddress = function (inputAddress) {
  let addressErrorMsg = inputAddress.nextElementSibling;

  if (addressRegExp.test(inputAddress.value)) {
    addressErrorMsg.innerHTML = '';
  } else {
    addressErrorMsg.innerHTML = "L'adresse que vous avez renseigné n'est pas valide.";
  }
};

//validation de la ville
const validCity = function (inputCity) {
  let cityErrorMsg = inputCity.nextElementSibling;

  if (charRegExp.test(inputCity.value)) {
    cityErrorMsg.innerHTML = '';
  } else {
    cityErrorMsg.innerHTML = 'Ce champ doit contenir uniquement des lettres.';
  }
};

//validation de l'email
const validEmail = function (inputEmail) {
  let emailErrorMsg = inputEmail.nextElementSibling;

  if (emailRegExp.test(inputEmail.value)) {
    emailErrorMsg.innerHTML = '';
  } else {
    emailErrorMsg.innerHTML = 'Veuillez renseigner une adresse mail valide.';
  }
};
const command = document.querySelector("#order");
command.addEventListener("click", (event) => {
  event.preventDefault();
  if (validFirstName && validLastName && validAddress && validCity && validEmail) {
    // Mettre les valeurs du formulaire et les produits du panier dans un objet à envoyer vers le serveur
    const order = {
      contact: {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        city: city.value,
        email: email.value,
      },
      products: idProducts,
    };
    console.log(order);
    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(order),
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => {
        //récuperer l'order id 
        let getOrderId = data.orderId;
        // Message popup de redirection
        window.confirm("Vous allez être redirigé vers la page confirmation");
        //rediriger vers page confirmation.html et ajouter le parametre orderid a l'url
        window.location = `./confirmation.html?id=` + getOrderId;
      });
  } else {
    alert("Veuillez remplir les champs du formulaire");
  };
})




