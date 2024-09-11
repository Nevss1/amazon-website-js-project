export const cart = [];

let Cartquantity = 0;

export function addedCart(addedCartTimeoutId, productId) {
    let quantityAdded = document.querySelector(`.js-quantity-selector-${productId}`).value
    Cartquantity += Number(quantityAdded);
    document.querySelector('.js-cart-quantity').innerHTML = Cartquantity;
  
    const addedCart = document.querySelector(`.js-added-to-cart-${productId}`);
    addedCart.classList.add('cart-added')
  
    if (addedCartTimeoutId) {
      clearTimeout(addedCartTimeoutId);
    }
  
    const timeoutId = setTimeout(() => addedCart.classList.remove('cart-added'), 2000);
    addedCartTimeoutId = timeoutId;
  }