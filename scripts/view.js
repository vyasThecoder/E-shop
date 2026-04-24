import Allproducts from "../Data/Allproducts.js";

const productId = localStorage.getItem("productId");
const product = Allproducts.find((item) => item.id == productId);

if (!product) {
  console.error("Product not found!");
}

let imageIndex = 0;


function initProductPage() {
  renderBasicDetails();
  renderMainImage();
  renderThumbnails();
  renderSizes();
}
initProductPage();


function renderBasicDetails() {
  document.getElementById("item-name").innerText = product.name;
  document.getElementById("item-category").innerText = product.category;
  document.getElementById("item-price").innerText = "₹ " + product.price;
}


function renderMainImage() {
  document.getElementById("mainImage").src = product.images[imageIndex];
}


function renderThumbnails() {
  const thumbBox = document.getElementById("item-thumbnails");
  thumbBox.innerHTML = "";

  product.images.forEach((img, index) => {
    thumbBox.innerHTML += `
      <img
        src="${img}"
        onclick="changeImage(${index})"
        class="w-20 h-20 rounded-lg object-cover cursor-pointer border transition
        ${
          imageIndex === index
            ? "border-2 border-pink-600 scale-80"
            : "border-gray-300"
        }
      "
      />
    `;
  });
}


function renderSizes() {
  const sizeBox = document.getElementById("item-size");
  sizeBox.innerHTML = "";

  product.size.forEach((size) => {
    sizeBox.innerHTML += `
      <button class="py-2 border border-gray-700 rounded-md hover:bg-black hover:text-white transition">
        ${size}
      </button>`;
  });
}


window.changeImage = function (index) {
  imageIndex = index;
  renderMainImage();
  renderThumbnails(); 
};
