// Récupération de l'url de la page de la commande
const confirmationPage = window.location.href;
const orderConfirm = new URL(confirmationPage);
// Récupération de l'id de la commande présent dans l'url
const getResponseId = orderConfirm.searchParams.get("id");
// Appel de l'id et integration de l'url dans l'html
document.querySelector("#orderId").innerText = getResponseId;
// Vider le local storage
localStorage.removeItem("product");
localStorage.removeItem("contact");