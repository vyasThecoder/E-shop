const shopCardContainer = document.getElementById("shop-card-container");
import { products } from "../Data/Allproducts.js";
import { goToViewPageByID } from "../scripts/app.js";

function renderProductCard() {
  shopCardContainer.innerHTML = "";
  products.forEach((item) => {
    shopCardContainer.innerHTML += `
        <div class=rounded-xl border border-pink-600 shadow-xl hover:shadow-none duration-300 overflow-hidden group transition-all ease-in-out">
          <!-- Product Image -->
          <img
            src="${item.images[0]}"
            id="${item.id}"
            alt="product image"
            class="cards w-full h-36 sm:h-48 md:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />

          <!-- Product Details -->
          <div class="p-3 space-y-2">
            <h3 class="text-sm sm:text-base font-medium truncate">
              ${item.name}
            </h3>

            <div class="flex justify-between items-center">
              <p class="text-xs sm:text-sm text-pink-700 font-semibold">
                ₹${item.price}
              </p>
              
              <!-- Add Button -->
              <button data-id="${item.id}" class="addCart px-3 py-1 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 ease-in-out active:scale-95 text-xs sm:text-sm cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
        `;
  });
}

renderProductCard();

let cards = document.querySelectorAll(".cards");

cards.forEach((card) => {
  card.addEventListener("click", (val) => {
    let ID = val.target.id;
    goToViewPageByID(ID);
  });
});
