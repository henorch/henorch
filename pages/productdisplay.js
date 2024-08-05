const productCardContainer = document.getElementById('productcard');
import PRODUCTS from '../assets/products/products.js'


//for whatsapp
const phoneNumber = +2347033407608;
const message = encodeURIComponent("Lets discuss about this product");
const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
// Assuming PRODUCTS is an array of product objects
PRODUCTS.forEach(prod => {
    // Create the product container
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = prod.image;
    productImage.style.width = "100%"
    productImage.style.height = "60%"
    productDiv.appendChild(productImage)

    // Create and append the product name
    const productName = document.createElement('h2');
    productName.textContent = prod.name;
    productDiv.appendChild(productName);

    const productDescription = document.createElement('i')
    productDescription.textContent = prod.Description;
    productDiv.appendChild(productDescription);
    // Create and append the product price
    const productPrice = document.createElement('p');
    productPrice.textContent = prod.price;
    productPrice.style.fontSize = "20px";
    productPrice.style.backgroundColor = "blue";
    productPrice.style.width = "120px"
    productPrice.style.padding = "10px";
    productPrice.style.margin = "5px";
    productPrice.style.textAlign = "center";
    productPrice.style.color = "white";
    productPrice.style.borderRadius = '20%';
    productDiv.appendChild(productPrice);

    const whatsapp = document.createElement('button');
    whatsapp.textContent = "Order now";
    whatsapp.style.float = "right";
    whatsapp.style.marginTop = "-40px";
    whatsapp.style.border = "none";
    whatsapp.style.color = "white";
    whatsapp.style.backgroundColor = "green";
    whatsapp.style.padding = "10px";
    whatsapp.addEventListener('click', () => {
        window.open(whatsappURL, '_blank')
    })
    productDiv.appendChild(whatsapp);
    // Append the product container to the product card container
    productCardContainer.appendChild(productDiv);
});
