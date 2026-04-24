export function viewProduct(id) {
  localStorage.setItem("productId", id);
  window.location.href = "../pages/view.html";
}

export function addToCart(product) {
  const exitProduct = JSON.parse(localStorage.getItem("addProduct")) || [];

  exitProduct.push(product);

  localStorage.setItem("addProduct", JSON.stringify(exitProduct));
  alert("product add");
}
