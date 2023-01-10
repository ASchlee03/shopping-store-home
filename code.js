document.addEventListener("DOMContentLoaded", function() {
    // Get the add to cart buttons
    const addToCartButtons = document.querySelectorAll(".product .button");
  
    // Handle clicks on the add to cart buttons
    addToCartButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        // Get the product details
        const product = this.parentNode;
        const productName = product.querySelector("h3").innerHTML;
        const productPrice = product.querySelector("p").innerHTML;
  
        // Add the product to the cart
        addProductToCart(productName, productPrice);
  
        // Update the cart count
        updateCartCount();
      });
    });
  
    // Add the product to the cart
    function addProductToCart(name, price) {
      // TODO: Add the product to the cart
    }
  
    // Update the cart count
    function updateCartCount() {
      // TODO: Update the cart count
    }
  });
  