import {cart} from "../data/cart.js";
import { products } from "../data/products.js";


let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
          ${(product.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
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

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}" data-product-name="${product.name}">
            Add to Cart
          </button>
        </div>`
});

document.querySelector('.js-products-grid').innerHTML = productsHTML;

let Cartquantity = 0;
document.querySelector('.js-cart-quantity').innerHTML = Cartquantity;



document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
    console.log('loop')
    let addedCartTimeoutId;

    button.addEventListener('click', () => {     
        
        let matchingItem;
        let { productId, productName } = button.dataset;

        cart.forEach((item) => {
            if (productId === item.productId) { // verifies if there is already a item in cart
                matchingItem = item;
            } 
        })

        quantity_item = document.querySelector(`.js-quantity-selector-${productId}`).value;
        const addedCart = document.querySelector(`.js-added-to-cart-${productId}`);

        if (matchingItem) { // if yes, then add plus 1
            matchingItem.quantity += Number(quantity_item)    
        } else {
            cart.push({
                productName, // if not, add to cart
                productId,
                quantity: Number(quantity_item)
            });  
        }

        let Cartquantity = 0;
        cart.forEach((item) => {
          Cartquantity += item.quantity;
        })
        document.querySelector('.js-cart-quantity').innerHTML = Cartquantity;
        addedCart.classList.add('cart-added')
        if (addedCartTimeoutId) {
          clearTimeout(addedCartTimeoutId);
        }
        const timeoutId = setTimeout(() => addedCart.classList.remove('cart-added'), 2000);
        addedCartTimeoutId = timeoutId;
        
          
    })
});

