import AllProducts from "../Data/Allproducts.js";
import Influencers from "../Data/Infulesar.js";
import CustomerReviews from "../Data/CustmerRev.js";
import SpotLightData from "../Data/Sptotlight.js";

/* -----------------------------------------------------
    FUNCTION 1: Render "For You" product cards
----------------------------------------------------- */

function renderForYouCards() {
  const forYouContainer = document.querySelector("#for-you-card-container");

  AllProducts.slice(0.4).forEach((product) => {
    forYouContainer.innerHTML += `
        <div class="rounded-xl border border-pink-600 shadow-xl hSover:shadow-none duration-300 overflow-hidden group transition-all ease-in-out">
          
          <img
            id="image"
            onclick="viewProduct(${product.id})"
            src="${product.images[0]}"
            alt="product image"
            class="w-full h-36 sm:h-48 md:h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
            loading="lazy"
          />
         
          <div class="p-3 space-y-2">
            <h3 class="text-sm sm:text-base font-medium truncate">
              ${product.name}
            </h3>

            <div class="flex justify-between items-center">
              <p class="text-xs sm:text-sm text-pink-700 font-semibold">
                ₹${product.price}
              </p>
          
              <button class="px-3 py-1 rounded-full border border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 ease-in-out active:scale-95 text-xs sm:text-sm cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
      `;
  });
}

/* -----------------------------------------------------
    FUNCTION 2: Render Spotlight Video Cards
----------------------------------------------------- */

function renderSpotlightCards() {
  const spotlightContainer = document.querySelector(
    "#spot-light-card-container"
  );

  SpotLightData.forEach((item) => {
    spotlightContainer.innerHTML += `
      <div class="w-80 h-[500px] rounded-xl overflow-hidden snap-center flex-shrink-0 shadow-xl group transition-all duration-300 ease-in-out">
        <video
          src="${item.video}"
          class="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 ease-in-out group-hover:scale-110"
          autoplay
          muted
          loop
        ></video>
      </div>
    `;
  });
}

/* -----------------------------------------------------
    FUNCTION 3: Render Influencer Gallery Cards
----------------------------------------------------- */

function renderInfluencerCards() {
  const influencerContainer = document.querySelector(
    "#our-influencer-card-container"
  );

  Influencers.forEach((person) => {
    influencerContainer.innerHTML += `
      <div class="w-48 h-44 border-l border-r border-pink-600 rounded-xl shadow-xl hover:shadow-none duration-300 flex flex-col justify-center items-center">
        
        <img
          src="${person.image}"
          alt="Influencer"
          loading="lazy"
          class="w-20 h-20 rounded-full object-cover object-center"
        />
        
        <h3 class="mt-4 text-sm font-medium">${person.name}</h3>
      </div>
    `;
  });
}

/* -----------------------------------------------------
    FUNCTION 4: Render Customer Review Cards
----------------------------------------------------- */

function renderCustomerReviewCards() {
  const reviewContainer = document.querySelector(
    "#customer-love-card-container"
  );

  CustomerReviews.forEach((review) => {
    reviewContainer.innerHTML += `
      <div class="w-96 h-56 snap-start rounded-tl-[110px] bg-white shadow-xl hover:shadow-none duration-300 border-l-2 border-pink-600 flex flex-col justify-center items-center snap-center flex-shrink-0">
        
        <img
          src="${review.image}"
          class="w-20 h-20 rounded-full object-cover object-center"
          loading="lazy"
          alt="customer"
        />
        
        <h3 class="mt-2 font-semibold text-sm">${review.name}</h3>
        <span class="mt-1 text-sm">${review.rating}</span>
        <p class="mt-2 text-sm text-center px-3">${review.comment}</p>
      </div>
    `;
  });
}

/* -----------------------------------------------------
    FUNCTION CALLS
----------------------------------------------------- */

renderForYouCards();
renderSpotlightCards();
renderInfluencerCards();
renderCustomerReviewCards();

// ----------------------------------------------------------------------

gsap.registerPlugin(ScrollTrigger);

gsap.to("#hero-text", {
  opacity: 1, // fade in
  y: 0, // move up
  duration: 1.5, // smooth duration
  ease: "power2.out", // smooth easing
});
