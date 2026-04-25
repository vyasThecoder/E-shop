import { products } from "../Data/Allproducts.js";

export function goToViewPageByID(ID) {
  const product = products.filter((val) => val.id === ID);
  if (!product) {
    alert("not paroduct found");
    return;
  }
  localStorage.setItem("viewProduct", JSON.stringify(product));
  window.location.href = "../pages/view.html";
}
