export const cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
}, {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
}];

export function addToCart(productId) {
    let matchingItem; 
        cart.forEach((cartItem) => {
            if (productId === cartItem.productId) { // check if product match
                matchingItem = cartItem;
            } 
        });
      
        if (matchingItem) { // if yes, then add plus 1
            matchingItem.quantity += 1   
        } else {
            cart.push({
                // if not, add to cart
                productId,
                quantity: 1
            });  
        }
  }

  
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

export function removeFromCart(productId) {
    let num = 0;
    cart.forEach(prod => {
    if (prod.productId === productId) {
        cart.splice(num, 1)
    }
    num += 1;
    });
}