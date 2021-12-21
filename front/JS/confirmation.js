// Récupération de l'url de la page de la commande
let confirmationPage = window.location.search;
let url = new URLSearchParams(confirmationPage);
let getResponseId = url.get("id");
// Récupération de l'id de la commande présent dans l'url
// Appel de l'id et integration de l'url dans l'html
document.querySelector("#orderId").innerText = getResponseId;
// Vider le local storage
localStorage.clear();