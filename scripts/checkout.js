import { cart } from "../data/cart.js";
import { products } from "../data/products.js";



let summaryCartHtml = ``;

cart.forEach((cartItem) => {
  
  let matchingProduct;
  let productId = cartItem.productId;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  summaryCartHtml += `
  <div class="delivery-details">
  <h3 class="date-delivery">Delivery date: Tuesday, June 21</h3>
  <div class="product-detail">
    <div class="product-image">
      <img src="${matchingProduct.image}">
    </div>
    <div class="product">
      <p class="products-name">${matchingProduct.name}</p>
      <div class="pricing">$${(matchingProduct.priceCents/100).toFixed(2)}</div>
      <div>
        <span>Quantity: ${cartItem.quantity}</span>
        <span class="update">Update</span>
        <span class="delete">Delete</span>
      </div>
    </div>
    <div class="delivery-date">
      <p class="delivery-option">Choose a delivery option:</p>
      <div class="option">
        <input type="radio" name="deliery-option-${matchingProduct.id}">
        <div>
          <p>Tuesday, June 21</p>
          FREE Shipping
        </div>
      </div>
      <div class="option">
        <input type="radio" name="deliery-option-${matchingProduct.id}">
        <div>
          <p>Wednesday, June 15</p>
          $4.99 - Shipping
        </div>
      </div>
      <div class="option">
        <input type="radio" name="deliery-option-${matchingProduct.id}">
        <div>
          <p>Monday, June 13</p>
          $9.99 - Shipping
        </div>
      </div>
    </div>
  </div>
 
</div>
  `;

  
});

document.querySelector('.delivery-grid-1').innerHTML = summaryCartHtml;