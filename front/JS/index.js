/*Récupération de tous les produits et affichage dans une liste*/
fetch(input = "http://localhost:3000/api/products")
.then(response => response.json())
.then((data) => {
    let htmlInput = "" ;
    for (let i = 0; i < data.length; i++) {
        let items = document.querySelector('#items');
        htmlInput += 
                `<a href="./product.html?id=${data[i]._id}"> 
                <article> 
                <img src="${data[i].imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1"> 
                <h3 class="productName">${data[i].name}</h3> 
                <p class="productDescription">${data[i].description}</p> 
                </article> 
                </a>`;
        items.innerHTML = htmlInput ;
}});