import { products } from "../Data/Allproducts.js";

function renderMainProduct() {
  const data = JSON.parse(localStorage.getItem("viewProduct"));

  const product = data[0];

  let mainImageIndex = 0;

  document.getElementById("mainImage").src = product.images[mainImageIndex];
  document.getElementById("product-title").innerText = product.name;
  document.getElementById("product-category").innerText = product.category;
  document.getElementById("product-price").innerText = product.price;

  document.getElementById("product-thumbnails").innerHTML = "";

  product.images.forEach((image, index) => {
    document.getElementById("product-thumbnails");
    //   .classList.add(`grid-cols-${product.images.length}`);
    document.getElementById("product-thumbnails").innerHTML += `
        <img src="${image}"
        id="${index}"
         alt="thumbnails-image"
            class="tumbnails-images h-18 cursor-pointer active:scale-95 object-cover rounded-lg border"/>`;
  });

  const tumbnailsImages = document.querySelectorAll(".tumbnails-images");

  tumbnailsImages.forEach((image) => {
    image.addEventListener("click", (val) => {
      const index = val.target.id;
      mainImageIndex = index;
      document.getElementById("mainImage").src = product.images[mainImageIndex];
      image.classList.add("border-red-900");
    });
  });
}
renderMainProduct();
