function confirmPurchase() {
  
  localStorage.removeItem("buyNowItem");

  if (Array.isArray(buyItems)) {
    localStorage.removeItem("cart");
  }

  
  window.location.href = "customer.html";
}
