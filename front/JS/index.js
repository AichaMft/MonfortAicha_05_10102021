/*Récupération de tous les produits et affichage dans une liste*/
class Products {
    constructor(imageUrl, productName, productDescription) {
        this.imageUrl = imageUrl,
        this.productName = productName,
        this.productDescription = productDescription
    }
}
const product1 = new Products("../kanap01.jpeg", "Kanap Sinopé", "Excepteur sint occaecat cupidatat non proident...");
const product2 = new Products("../kanap02.jpeg", "Kanap Cyllène", "Morbi nec erat aliquam, sagittis urna non, laoreet justo...");
const product3 = new Products("../kanap03.jpeg", "Kanap Calycé", "Pellentesque fermentum arcu venenatis ex sagittis accumsan...");
const product4 = new Products("../kanap04.jpeg", "Kanap Autonoé", "Donec mattis nisl tortor, nec blandit sapien fermentum at...");
const product5 = new Products("../kanap05.jpeg", "Kanap Eurydomé", "Ut laoreet vulputate neque in commodo...");
const product6 = new Products("../kanap06.jpeg", "Kanap Hélicé", "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi...");
const product7 = new Products("../kanap07.jpeg", "Kanap Thyoné", "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu...");
const product8 = new Products("../kanap08.jpeg", "Kanap Orthosie", "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus...");
let products = [];
products.push(product1, product2, product3, product4, product5, product6, product7, product8);


const productSection = document.getElementById('items');
const link = document.createElement('a');
productSection.appendChild(link);
const article = document.createElement('article');
link.appendChild(article);
const image = document.createElement('img');
article.appendChild(image);
















/*
let allProducts = [
    {
        imageUrl: "kanap01.jpeg",
        name: "Kanap Sinopé",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        imageUrl: "kanap02.jpeg",
        name: "Kanap Cyllène",
        description: "Morbi nec erat aliquam, sagittis urna non, laoreet justo. Etiam sit amet interdum diam, at accumsan lectus.",
    },
    {
        imageUrl: "kanap03.jpeg",
        name: "Kanap Calycé",
        description: "Pellentesque fermentum arcu venenatis ex sagittis accumsan. Vivamus lacinia fermentum tortor.Mauris imperdiet tellus ante.",
    },
    {
        imageUrl: "kanap04.jpeg",
        name: "Kanap Autonoé",
        description: "Donec mattis nisl tortor, nec blandit sapien fermentum at. Proin hendrerit efficitur fringilla. Lorem ipsum dolor sit amet.",
    },
    {
        imageUrl: "kanap05.jpeg",
        name: "Kanap Eurydomé",
        description: "Ut laoreet vulputate neque in commodo. Suspendisse maximus quis erat in sagittis. Donec hendrerit purus at congue aliquam.",
    },
    {
        imageUrl: "kanap06.jpeg",
        name: "Kanap Hélicé",
        description: "Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi. Morbi nec vehicula mi, sit amet vestibulum.",
    },
    {
        imageUrl: "kanap07.jpeg",
        name: "Kanap Thyoné",
        description: "EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu. Vestibulum et egestas eros. Vestibulum non lacus orci.",
    },
    {
        imageUrl: "kanap08.jpeg",
        name: "Kanap orthosie",
        description: "Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus. Morbi imperdiet enim metus rhoncus.",
    }
]
let name = document.getElementsByClassName("productName");
let description = document.getElementsByClassName("productDescription

class product {
    constructor(imageUrl,productName,productDescription)
    {
      this.imageUrl = imageUrl;
      this.productName= productName;
      this.productDescription = productDescription;
    }
  }
let product1 = new product("kanap01.jpeg","Kanap Sinopé", "Excepteur sint occaecat cupidatat non proident...");
let product2 = new product("kanap02.jpeg","Kanap Cyllène","Morbi nec erat aliquam, sagittis urna non, laoreet justo...");
let product3 = new product("kanap03.jpeg","Kanap Calycé","Pellentesque fermentum arcu venenatis ex sagittis accumsan...");
let product4 = new product("kanap04.jpeg","Kanap Autonoé","Donec mattis nisl tortor, nec blandit sapien fermentum at...");
let product5 = new product("kanap05.jpeg","Kanap Eurydomé","Ut laoreet vulputate neque in commodo...");
let product6 = new product("kanap06.jpeg","Kanap Hélicé","Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi...");
let product7 = new product("kanap07.jpeg","Kanap Thyoné","EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu...");
let product8 = new product("kanap08.jpeg","Kanap Orthosie","Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus...");
let allProducts = [product1,product2,product3,product4,product5,product6,product7,product8];

document.getElementsByClassName(productName).innerHTML = product.productName;
document.getElementsByClassName(productDescription);
let productName = ["Kanap Sinopé","Kanap Cyllène","Kanap Calycé","Kanap Autonoé","Kanap Eurydomé","Kanap Hélicé","Kanap Thyoné","Kanap orthosie"];
let imageUrl = ["kanap01.jpeg","kanap02.jpeg","kanap03.jpeg","kanap04.jpeg","kanap05.jpeg","kanap06.jpeg","kanap07.jpeg","kanap08.jpeg",]
let productDescription = ["Excepteur sint occaecat cupidatat non proident...","Morbi nec erat aliquam, sagittis urna non, laoreet justo...","Pellentesque fermentum arcu venenatis ex sagittis accumsan...","Donec mattis nisl tortor, nec blandit sapien fermentum at...","Ut laoreet vulputate neque in commodo...","Curabitur vel augue sit amet arcu aliquet interdum. Integer vel quam mi...","EMauris imperdiet tellus ante, sit amet pretium turpis molestie eu...","Mauris molestie laoreet finibus. Aenean scelerisque convallis lacus at dapibus..."];
let allproducts = [productName,imageUrl,productDescription];
   
);
let productName = product.name;
let productDescription = product.description;
let item_img = product.imageUrl
*/
