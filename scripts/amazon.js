import { products } from "../data/products.js";
import { cart, addCartItem } from "../data/cart.js";

let productHtmlCode = ``;

products.forEach((product) => {
  let htmlCode = `
  <div class="product-container">
  <div class="image-container">
    <img class="product-image" src="${product.image}">
  </div>
  <p class="product-name">${product.name}</p>
  <div class="ratings">
    <img src="./images/ratings/rating-${product.rating.stars * 10}.png" alt="">
    <div class="rating-count">${product.rating.count}</div>
  </div>
  <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
  <div class="product-quantity">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="added-to-cart">
      <img src="/images/icons/checkmark.png" alt="">
      Added
    </div>
    <button data-product-id="${product.id}" class="add-to-cart">Add to Cart</button>
  
</div>
  `;

productHtmlCode += htmlCode;
});


document.querySelector('.grid-container').innerHTML = productHtmlCode;



function updateCart() {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });
  document.querySelector('.cart-quantity').innerHTML = cartQuantity;
};

document.querySelectorAll('.add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    let productId = button.dataset.productId;
    addCartItem(productId);
    updateCart();
  });
});