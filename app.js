/* =========================================================
   ZAMBIA BUSINESS HUB V3.0
   FUNCTIONAL DIRECTORY
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const HUB_WHATSAPP = "260765054612";
const HUB_NAME = "Zambia Business Hub";


/* =========================================================
   BUSINESS DATABASE
========================================================= */

const businesses = [

  {
    id: 1,
    name: "Copper Pot Restaurant",
    category: "Restaurant",
    icon: "🍽️",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260211427700",
    whatsapp: "260211427700",
    rating: 4.7,
    reviews: 246,
    hours: "Open 24 hours",
    featured: true,
    description:
      "A popular restaurant in Lusaka offering delicious meals in a welcoming atmosphere.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 2,
    name: "3 Trees Cafe",
    category: "Restaurant",
    icon: "☕",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260978728652",
    whatsapp: "260978728652",
    rating: 4.4,
    reviews: 2297,
    hours: "Daily 07:30–17:00",
    featured: true,
    description:
      "A relaxed cafe serving food and drinks in a comfortable setting.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 3,
    name: "Marlin Restaurant",
    category: "Restaurant",
    icon: "🍴",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260211252206",
    whatsapp: "260211252206",
    rating: 4.2,
    reviews: 1677,
    hours: "Mon–Thu 12:00–22:00",
    featured: true,
    description:
      "A well-known dining destination serving a variety of meals and refreshments.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 4,
    name: "MOSAIC RESTAURANT & CAFE",
    category: "Restaurant",
    icon: "🍽️",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260771036277",
    whatsapp: "260771036277",
    rating: 4.8,
    reviews: 65,
    hours: "Mon–Sat 10:30–22:30",
    featured: true,
    description:
      "Restaurant and cafe offering a stylish dining experience.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 5,
    name: "The Sanctuary Restaurant",
    category: "Restaurant",
    icon: "🍛",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260978688866",
    whatsapp: "260978688866",
    rating: 4.5,
    reviews: 185,
    hours: "Mon–Thu 12:00–22:00",
    featured: false,
    description:
      "A welcoming restaurant offering quality food and a relaxed atmosphere.",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 6,
    name: "Palmwood Lodge",
    category: "Lodge",
    icon: "🏨",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260966757954",
    whatsapp: "260966757954",
    rating: 4.0,
    reviews: 740,
    hours: "Open 24 hours",
    featured: true,
    description:
      "A peaceful lodge offering comfortable accommodation and great hospitality.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 7,
    name: "Lilayi Lodge",
    category: "Lodge",
    icon: "🏡",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260971002010",
    whatsapp: "260971002010",
    rating: 4.5,
    reviews: 1386,
    hours: "Open 24 hours",
    featured: true,
    description:
      "A beautiful lodge offering accommodation, nature and a relaxing getaway.",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 8,
    name: "Shodol Spa and Beauty Salon",
    category: "Beauty",
    icon: "💆",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260767471112",
    whatsapp: "260767471112",
    rating: 4.8,
    reviews: 636,
    hours: "Open today",
    featured: true,
    description:
      "Professional beauty and wellness services for your personal care needs.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 9,
    name: "Her Rootz",
    category: "Beauty",
    icon: "💇",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260974227332",
    whatsapp: "260974227332",
    rating: 4.7,
    reviews: 96,
    hours: "Open today",
    featured: false,
    description:
      "Beauty and personal care services with a focus on style and wellness.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 10,
    name: "Enrich By Naseema",
    category: "Beauty",
    icon: "✨",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260973372652",
    whatsapp: "260973372652",
    rating: 4.5,
    reviews: 147,
    hours: "Open today",
    featured: false,
    description:
      "Beauty services designed to help customers look and feel their best.",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 11,
    name: "Ventura Solutions Zambia Limited",
    category: "Business Services",
    icon: "💼",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260951595566",
    whatsapp: "260951595566",
    rating: 4.9,
    reviews: 8,
    hours: "Business hours",
    featured: false,
    description:
      "Professional business solutions and services for organisations and individuals.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 12,
    name: "Jameska Business Services",
    category: "Business Services",
    icon: "💼",
    city: "Chingola",
    province: "Copperbelt",
    phone: "260964533535",
    whatsapp: "260964533535",
    rating: 4.0,
    reviews: 1,
    hours: "Business hours",
    featured: false,
    description:
      "Business support services serving customers in Chingola.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 13,
    name: "Nawab's Kitchen",
    category: "Restaurant",
    icon: "🍛",
    city: "Ndola",
    province: "Copperbelt",
    phone: "260974445557",
    whatsapp: "260974445557",
    rating: null,
    reviews: null,
    hours: "Check with business",
    featured: true,
    description:
      "A restaurant serving customers in Ndola.",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80"
  }

];


/* =========================================================
   STATE
========================================================= */

let currentBusinesses = businesses.slice();

let favorites = [];

try {
  favorites = JSON.parse(
    localStorage.getItem("zbh_favorites") || "[]"
  );
} catch (error) {
  favorites = [];
}


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  initializeSite();

});


/* =========================================================
   INITIALIZE
========================================================= */

function initializeSite() {

  setYear();

  renderFeatured();

  renderBusinesses(businesses);

  setupSearch();

  setupFilters();

  setupCategories();

  setupMobileMenu();

  setupListingForm();

  setupModal();

  setupLocations();

  setupNavigation();

}


/* =========================================================
   YEAR
========================================================= */

function setYear() {

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  const searchForm =
    document.getElementById("searchForm");

  const searchInput =
    document.getElementById("searchInput");

  if (!searchForm || !searchInput) {
    return;
  }

  searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    applyFilters();

    document
      .getElementById("directory")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

  searchInput.addEventListener(
    "input",
    function () {
      applyFilters();
    }
  );

}


/* =========================================================
   FILTERS
========================================================= */

function setupFilters() {

  const locationFilter =
    document.getElementById("locationFilter");

  const categoryFilter =
    document.getElementById("categoryFilter");

  const clearFilters =
    document.getElementById("clearFilters");

  const resetSearch =
    document.getElementById("resetSearch");

  if (locationFilter) {

    locationFilter.addEventListener(
      "change",
      applyFilters
    );

  }

  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      applyFilters
    );

  }

  if (clearFilters) {

    clearFilters.addEventListener(
      "click",
      clearAllFilters
    );

  }

  if (resetSearch) {

    resetSearch.addEventListener(
      "click",
      clearAllFilters
    );

  }

}


/* =========================================================
   APPLY FILTERS
========================================================= */

function applyFilters() {

  const searchInput =
    document.getElementById("searchInput");

  const locationFilter =
    document.getElementById("locationFilter");

  const categoryFilter =
    document.getElementById("categoryFilter");

  const search =
    searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

  const location =
    locationFilter
      ? locationFilter.value.toLowerCase()
      : "all";

  const category =
    categoryFilter
      ? categoryFilter.value.toLowerCase()
      : "all";

  currentBusinesses =
    businesses.filter(function (business) {

      const searchableText = (
        business.name +
        " " +
        business.category +
        " " +
        business.city +
        " " +
        business.province +
        " " +
        business.description
      ).toLowerCase();

      const matchesSearch =
        !search ||
        searchableText.includes(search);

      const matchesLocation =
        location === "all" ||
        business.city.toLowerCase() === location;

      const matchesCategory =
        category === "all" ||
        business.category.toLowerCase() === category;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesCategory
      );

    });

  renderBusinesses(currentBusinesses);

}


/* =========================================================
   CLEAR FILTERS
========================================================= */

function clearAllFilters() {

  const searchInput =
    document.getElementById("searchInput");

  const locationFilter =
    document.getElementById("locationFilter");

  const categoryFilter =
    document.getElementById("categoryFilter");

  if (searchInput) {
    searchInput.value = "";
  }

  if (locationFilter) {
    locationFilter.value = "all";
  }

  if (categoryFilter) {
    categoryFilter.value = "all";
  }

  currentBusinesses = businesses.slice();

  renderBusinesses(currentBusinesses);

  window.scrollTo({
    top: document.getElementById("directory").offsetTop - 70,
    behavior: "smooth"
  });

}


/* =========================================================
   CATEGORY BUTTONS
========================================================= */

function setupCategories() {

  const categoryCards =
    document.querySelectorAll(
      ".category-card"
    );

  categoryCards.forEach(function (card) {

    card.addEventListener(
      "click",
      function () {

        const category =
          card.getAttribute("data-category");

        const categoryFilter =
          document.getElementById("categoryFilter");

        if (categoryFilter) {

          categoryFilter.value =
            category === "all"
              ? "all"
              : category;

        }

        applyFilters();

        document
          .getElementById("directory")
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  });


  const viewAll =
    document.querySelector(
      '[data-category="all"]'
    );

  if (viewAll) {

    viewAll.addEventListener(
      "click",
      clearAllFilters
    );

  }

}


/* =========================================================
   RENDER FEATURED
========================================================= */

function renderFeatured() {

  const featuredGrid =
    document.getElementById(
      "featuredGrid"
    );

  if (!featuredGrid) {
    return;
  }

  const featured =
    businesses.filter(function (business) {
      return business.featured === true;
    });

  featuredGrid.innerHTML =
    featured
      .slice(0, 6)
      .map(createBusinessCard)
      .join("");

  attachBusinessCardEvents(
    featuredGrid
  );

}


/* =========================================================
   RENDER DIRECTORY
========================================================= */

function renderBusinesses(list) {

  const businessGrid =
    document.getElementById(
      "businessGrid"
    );

  const noResults =
    document.getElementById(
      "noResults"
    );

  const resultsText =
    document.getElementById(
      "resultsText"
    );

  if (!businessGrid) {
    return;
  }

  if (resultsText) {

    resultsText.textContent =
      list.length +
      " business" +
      (list.length === 1 ? "" : "es") +
      " found";

  }

  if (list.length === 0) {

    businessGrid.innerHTML = "";

    if (noResults) {
      noResults.classList.remove("hidden");
    }

    return;

  }

  if (noResults) {
    noResults.classList.add("hidden");
  }

  businessGrid.innerHTML =
    list.map(createBusinessCard).join("");

  attachBusinessCardEvents(
    businessGrid
  );

}


/* =========================================================
   BUSINESS CARD
========================================================= */

function createBusinessCard(business) {

  const favorite =
    favorites.includes(business.id);

  const ratingText =
    business.rating !== null
      ? "⭐ " + business.rating
      : "⭐ Public listing";

  const reviewsText =
    business.reviews !== null
      ? "(" + business.reviews + " reviews)"
      : "";

  return `
    <article
      class="business-card"
      data-id="${business.id}"
    >

      <div
        class="business-image"
        style="background-image:url('${business.image}')"
      >

        ${
          business.featured
            ? `<span class="featured-badge">Featured</span>`
            : ""
        }

        <button
          class="favorite-button ${
            favorite ? "active" : ""
          }"
          data-favorite="${business.id}"
          type="button"
          aria-label="Save ${escapeHTML(business.name)}"
        >
          ${favorite ? "♥" : "♡"}
        </button>

      </div>

      <div class="business-content">

        <span class="business-category">
          ${business.icon}
          ${escapeHTML(business.category)}
        </span>

        <h3 class="business-name">
          ${escapeHTML(business.name)}
        </h3>

        <div class="business-meta">

          <span class="rating">
            ${ratingText}
          </span>

          <span>
            ${reviewsText}
          </span>

          <span>
            📍 ${escapeHTML(business.city)}
          </span>

        </div>

        <p class="business-description">
          ${escapeHTML(business.description)}
        </p>

        <div class="business-actions">

          <button
            class="view-button"
            data-view="${business.id}"
            type="button"
          >
            View Details →
          </button>

          <a
            class="action-button"
            href="tel:+${business.phone}"
            aria-label="Call ${escapeHTML(business.name)}"
            title="Call"
          >
            ☎
          </a>

          <a
            class="action-button"
            href="https://wa.me/${business.whatsapp}"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp ${escapeHTML(business.name)}"
            title="WhatsApp"
          >
            ◉
          </a>

        </div>

      </div>

    </article>
  `;

}


/* =========================================================
   CARD EVENTS
========================================================= */

function attachBusinessCardEvents(container) {

  const viewButtons =
    container.querySelectorAll(
      "[data-view]"
    );

  viewButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const id =
          Number(
            button.getAttribute(
              "data-view"
            )
          );

        openBusiness(id);

      }
    );

  });


  const favoriteButtons =
    container.querySelectorAll(
      "[data-favorite]"
    );

  favoriteButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const id =
          Number(
            button.getAttribute(
              "data-favorite"
            )
          );

        toggleFavorite(id);

      }
    );

  });

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(function (item) {
        return item !== id;
      });

    showToast("Removed from saved businesses");

  } else {

    favorites.push(id);

    showToast("Business saved ❤️");

  }

  try {

    localStorage.setItem(
      "zbh_favorites",
      JSON.stringify(favorites)
    );

  } catch (error) {
    console.log("Local storage unavailable.");
  }

  renderFeatured();

  renderBusinesses(
    currentBusinesses
  );

}


/* =========================================================
   MODAL
========================================================= */

function setupModal() {

  const modal =
    document.getElementById(
      "businessModal"
    );

  const close =
    document.getElementById(
      "modalClose"
    );

  const backdrop =
    document.querySelector(
      ".modal-backdrop"
    );

  if (close) {

    close.addEventListener(
      "click",
      closeModal
    );

  }

  if (backdrop) {

    backdrop.addEventListener(
      "click",
      closeModal
    );

  }

  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {
        closeModal();
      }

    }
  );

}


/* =========================================================
   OPEN BUSINESS
========================================================= */

function openBusiness(id) {

  const business =
    businesses.find(function (item) {
      return item.id === id;
    });

  if (!business) {
    return;
  }

  const modal =
    document.getElementById(
      "businessModal"
    );

  const modalBody =
    document.getElementById(
      "modalBody"
    );

  if (!modal || !modalBody) {
    return;
  }

  const rating =
    business.rating !== null
      ? "⭐ " + business.rating
      : "⭐ Public listing";

  const reviews =
    business.reviews !== null
      ? " • " + business.reviews + " reviews"
      : "";
