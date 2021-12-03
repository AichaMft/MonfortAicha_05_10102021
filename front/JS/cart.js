//Affichage du local storage 
let localStorageProducts = JSON.parse(localStorage.getItem("product"));
const positionEmptyCart = document.querySelector("#cart__items");
//condition si le local storage est vide alors
if (localStorageProducts === null | localStorageProducts === 0) {
  let form = document.querySelector('.cart__order__form');
  form.innerHTML = '';
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
    totalPrice += Math.round(itemQte[i].valueAsNumber * localStorageProducts[i].prix);
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

// Variables pour le dom
let form = document.querySelector(".cart__order__form");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let address = document.getElementById("address");
let city = document.getElementById("city");
let email = document.getElementById("email");
// Variables messages d'erreur
let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
let addressErrorMsg = document.getElementById('addressErrorMsg');
let cityErrorMsg = document.getElementById('cityErrorMsg');
let emailErrorMsg = document.getElementById('emailErrorMsg');

//Création des expressions régulières
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let charRegExp = new RegExp("^[a-zA-Z]+$");
let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

// Ecoute de la modification du prénom
firstName.addEventListener('change', function () {
  validFirstName(this);
});
//validation du prénom
const validFirstName = () => {

  if (charRegExp.test(firstName.value) == false || firstName.value.length == 0 ) {
    firstNameErrorMsg.innerHTML = 'Champs incorrect';
    return false;
  } else {
    firstNameErrorMsg.innerHTML = '';
    return true;
  }
};

// Ecoute de la modification du nom
lastName.addEventListener('change', function () {
  validLastName(this);
});
//validation du nom
const validLastName = () => {

  if (charRegExp.test(lastName.value) == false || lastName.value.length == 0) {
    lastNameErrorMsg.innerHTML = 'Champ incorrect.';
    return false;
  } else {
    lastNameErrorMsg.innerHTML = '';
    return true;
  }
};

// Ecoute de la modification de l'adresse
address.addEventListener('change', function () {
  validAddress(this);
});
//validation de l'adresse
const validAddress = () => {

  if (addressRegExp.test(address.value) == false || address.value.length == 0) {
    addressErrorMsg.innerHTML = 'Champ incorrect.';
    return false;
  } else {
    addressErrorMsg.innerHTML = '';
    return true;
  }
};
// Ecoute de la modification de la ville
city.addEventListener('change', function () {
  validCity(this);
});
//validation de la ville
const validCity = () => {

  if (charRegExp.test(city.value) == false || city.value.length == 0) {
    cityErrorMsg.innerHTML = 'Champ incorrect.';
    return false;
  } else {
    cityErrorMsg.innerHTML = '';
    return true;
  }
};

// Ecoute de la modification du mail
email.addEventListener('change', function () {
  validEmail(this);
})
//validation de l'email
const validEmail = () => {

  if (emailRegExp.test(email.value) == false || email.value.length == 0) {
    emailErrorMsg.innerHTML = 'Champ incorrect';
    return false;
  } else {
    emailErrorMsg.innerHTML = '';
    return true;
  }
};
const command = document.querySelector("#order");
command.addEventListener('click', function (e) {
  e.preventDefault();
if (validFirstName() && validLastName() && validAddress() && validCity() && validEmail()) {
  const userOrder = {
    contact: {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    },
    products: idProducts,
  };
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }, body: JSON.stringify(userOrder),
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((data) => {
      //récuperer l'order id 
      let getOrderId = data.orderId;
      //rediriger vers page confirmation.html et ajouter le parametre orderid a l'url
      window.location = `./confirmation.html?id=` + getOrderId;
    })
    .catch((error) => {
      alert(error)
    });
} else {
  alert("Veuillez renseigner tous les champs en respectant la casse")
  location.reload();
}
})
