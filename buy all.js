function buyAllItems() {
  const cartItems = JSON.parse(localStorage.getItem('cart'));

  // Check if cartItems is an array with at least one item
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  // Save cart items to buyNowItem key for purchase summary page
  localStorage.setItem("buyNowItem", JSON.stringify(cartItems));

  // Clear the cart
  localStorage.removeItem('cart');

  // Redirect to the purchase summary page
  window.location.href = "buynow.html";
}
