import AllProducts from "../Data/Allproducts.js";

function renderShopCards() {
  const shopContainer = document.querySelector("#shop-card-container");

  AllProducts.forEach((product) => {
    shopContainer.innerHTML += `
        <div class=rounded-xl border border-pink-600 shadow-xl hover:shadow-none duration-300 overflow-hidden group transition-all ease-in-out">
          
          <!-- Product Image -->
          <img
            src="${product.images[0]}"
            alt="product image"
            data-prodcut=${product.id}
            class="product-image w-full h-36 sm:h-48 md:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />

          <!-- Product Details -->
          <div class="p-3 space-y-2">
            <h3 class="text-sm sm:text-base font-medium truncate">
              ${product.name}
            </h3>

            <div class="flex justify-between items-center">
              <p class="text-xs sm:text-sm text-pink-700 font-semibold">
                ₹${product.price}
              </p>
              
              <!-- Add Button -->
              <button data-id="${product.id}" class="addCart px-3 py-1 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 ease-in-out active:scale-95 text-xs sm:text-sm cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        `;
  });
}

renderShopCards();

let buttons = document.querySelectorAll(".addCart");

buttons.forEach((btn) => {
  btn.addEventListener("click", function (b) {
    console.log(b);

    let product = this.dataset.id;
  });
});

let productImage = document.querySelectorAll(".product-image");

productImage.forEach((card) => {
  card.addEventListener("click", function (prodcut) {
    let product = this.dataset.id;
    console.log("", prodcut);
  });
});
