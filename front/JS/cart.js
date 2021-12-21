//Affichage du local storage 
let panier = JSON.parse(localStorage.getItem("panier"));
const positionEmptyCart = document.querySelector("#cart__items");
//condition si le local storage est vide alors
if (panier === null | panier === 0) {
  const emptyCart = `<p>Votre panier est vide</p>`;
  positionEmptyCart.innerHTML = emptyCart;
} else {
  //alors la boucle affiche les infos des produits contenus dans le local storage
  for (let i = 0; i < panier.length; i++) {
    let allCart = panier[i];
    let idCart = allCart.id_produit;
    let quantity = Number(allCart.qte);
    let price = Number(allCart.price);
    let elementHtml =
      `<article class="cart__item" data-id="${idCart}">
            <div class="cart__item__img">
              <img src="${allCart.imageUrl}" alt="${allCart.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__titlePrice">
                <h2>${allCart.nomProduit}</h2>
                <p>${price} €</p>
              </div>
              <div class="cart__item__content__settings">
              <label for="color-select">Couleur : ${allCart.color}</label>
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
}};
//array contenant les ids des produits du panier
let idProducts = [];
for (let i = 0; i < panier.length; i++) {
  let allCarts = panier[i];
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
    totalPrice += (itemQte[i].valueAsNumber * panier[i].price);
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
      let quantityModif = panier[q].qte;
      let qteModifValue = qteModif[q].valueAsNumber;

      const resultFind = panier.find((el) => el.qteModifValue !== quantityModif);

      resultFind.qte = qteModifValue;
      quantityModif = resultFind.qte;

      localStorage.setItem("panier", JSON.stringify(panier));

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
      let idDelete = panier[j].id_produit;
      let colorDelete = panier[j].color;

      panier = panier.filter(el => el.id_produit !== idDelete || el.color !== colorDelete);

      localStorage.setItem("panier", JSON.stringify(panier));

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
//Ajout des caractères pris en charge
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
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
email.addEventListener('change', function () {
  validEmail(this);
});

//validation du prénom
const validFirstName = function () {
  let firstNameErrorMsg = firstName.nextElementSibling;

  if (charRegExp.test(firstName.value) && firstName.value != "") {
    firstNameErrorMsg.innerHTML = '';
    return true
  } else {
    firstNameErrorMsg.innerHTML = 'Ce champ doit contenir uniquement des lettres.';
    return false
  }
};

// Ecoute de la modification du nom
lastName.addEventListener('change', function () {
  validLastName(this);
});
//validation du nom
const validLastName = function () {
  let lastNameErrorMsg = lastName.nextElementSibling;

  if (charRegExp.test(lastName.value)&& lastName.value != "") {
    lastNameErrorMsg.innerHTML = '';
    return true
  } else {
    lastNameErrorMsg.innerHTML = 'Ce champ doit contenir uniquement des lettres.';
    return false
  }
};

// Ecoute de la modification de l'adresse
address.addEventListener('change', function () {
  validAddress(this);
});
//validation de l'adresse
const validAddress = function () {
  let addressErrorMsg = address.nextElementSibling;

  if (addressRegExp.test(address.value) && address.value != "") {
    addressErrorMsg.innerHTML = '';
    return true
  } else {
    addressErrorMsg.innerHTML = "L'adresse que vous avez renseigné n'est pas valide.";
    return false
  }
};
// Ecoute de la modification de la ville
city.addEventListener('change', function () {
  validCity(this);
});
//validation de la ville
const validCity = function () {
  let cityErrorMsg = city.nextElementSibling;

  if (charRegExp.test(city.value) && city.value != "") {
    cityErrorMsg.innerHTML = '';
    return true
  } else {
    cityErrorMsg.innerHTML = 'Ce champ doit contenir uniquement des lettres.';
    return false
  }
};

// Ecoute de la modification du mail
email.addEventListener('change', function () {
  validEmail(this);
})
//validation de l'email
const validEmail = function () {
  let emailErrorMsg = email.nextElementSibling;
  if (emailRegExp.test(email.value) && email.value != "") {
    emailErrorMsg.innerHTML = '';
    return true
  } else {
    emailErrorMsg.innerHTML = 'Veuillez renseigner une adresse mail valide.';
    return false
  }
};
const command = document.querySelector("#order");
command.addEventListener("click", (event) => {
  event.preventDefault();
  if (validFirstName()==true && validLastName()==true && validAddress()==true && validCity()==true && validEmail()==true) {
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
        window.location = `./confirmation.html?id=` + getOrderId;
      })
      .catch((error) => {
        alert(error)
      });
  } else {
    alert("Veuillez remplir les champs du formulaire");
  };})