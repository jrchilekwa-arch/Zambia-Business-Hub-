/* =========================================================
   🇿🇲 ZAMBIA BUSINESS HUB
   V3.0 — ZAMBIA GREEN PREMIUM
   =========================================================

   FEATURES
   • Business directory
   • 13 business listings
   • Featured businesses
   • Search
   • Category filtering
   • Location filtering
   • Business details modal
   • Phone calls
   • WhatsApp
   • Google Maps
   • Favorites
   • Recently viewed
   • List Your Business
   • Mobile navigation
   • Toast notifications
   • Safe HTML rendering
   ========================================================= */


/* =========================================================
   HUB SETTINGS
   ========================================================= */

const HUB_NAME = "Zambia Business Hub";
const HUB_WHATSAPP = "260765054612";

const STORAGE_KEYS = {
  favorites: "zbh_favorites_v3",
  recent: "zbh_recent_v3",
  listings: "zbh_listings_v3"
};


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
    address: "Lusaka, Zambia",
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
    address: "Lusaka, Zambia",
    rating: 4.4,
    reviews: 2297,
    hours: "Daily 07:30–17:00",
    featured: true,
    description:
      "A popular cafe serving food, coffee and refreshments in a relaxed environment.",
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
    address: "Lusaka, Zambia",
    rating: 4.2,
    reviews: 1677,
    hours: "Mon–Thu 12:00–22:00 • Fri 12:00–22:00 • Sat 12:00–23:00",
    featured: true,
    description:
      "A well-known Lusaka restaurant offering dining and refreshments.",
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
    address: "Lusaka, Zambia",
    rating: 4.8,
    reviews: 65,
    hours: "Mon–Sat 10:30–22:30 • Sun 08:30–22:30",
    featured: true,
    description:
      "A stylish restaurant and cafe offering quality food and a comfortable dining experience.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
  },

  {
    id: 5,
    name: "The Sanctuary Restaurant",
    category: "Restaurant",
    icon: "🍴",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260978688866",
    whatsapp: "260978688866",
    address: "Lusaka, Zambia",
    rating: 4.5,
    reviews: 185,
    hours: "Mon–Thu 12:00–22:00 • Fri–Sun 12:00–23:00",
    featured: false,
    description:
      "A welcoming restaurant providing meals and a comfortable atmosphere.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=80"
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
    address: "Lusaka, Zambia",
    rating: 4.0,
    reviews: 740,
    hours: "Open daily",
    featured: true,
    description:
      "A peaceful lodge offering comfortable accommodation and hospitality.",
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
    address: "Lusaka, Zambia",
    rating: 4.5,
    reviews: 1386,
    hours: "Open daily",
    featured: true,
    description:
      "A beautiful lodge offering accommodation, relaxation and a nature-focused experience.",
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
    address: "Lusaka, Zambia",
    rating: 4.8,
    reviews: 636,
    hours: "Open daily",
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
    address: "Lusaka, Zambia",
    rating: 4.7,
    reviews: 96,
    hours: "Open daily",
    featured: false,
    description:
      "A beauty and hair care business serving customers in Lusaka.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80"
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
    address: "Lusaka, Zambia",
    rating: 4.5,
    reviews: 147,
    hours: "Open daily",
    featured: false,
    description:
      "Beauty and personal care services for customers in Lusaka.",
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=80"
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
    address: "Lusaka, Zambia",
    rating: 4.9,
    reviews: 8,
    hours: "Business hours",
    featured: false,
    description:
      "Professional business solutions and services for individuals and organizations.",
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
    address: "Chingola, Copperbelt, Zambia",
    rating: 4.0,
    reviews: 1,
    hours: "Business hours",
    featured: false,
    description:
      "Business services serving customers and businesses in Chingola.",
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
    address: "Ndola, Copperbelt, Zambia",
    rating: null,
    reviews: null,
    hours: "Open daily",
    featured: true,
    description:
      "A restaurant serving customers in Ndola with a variety of meals.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
  }

];


/* =========================================================
   DOM HELPERS
   ========================================================= */

function getElement(...ids) {
  for (const id of ids) {
    const element = document.getElementById(id);

    if (element) {
      return element;
    }
  }

  return null;
}


function query(selector) {
  return document.querySelector(selector);
}


function queryAll(selector) {
  return Array.from(document.querySelectorAll(selector));
}


/* =========================================================
   SAFE HTML
   ========================================================= */

function escapeHTML(value) {

  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

function getStorage(key, fallback = []) {

  try {

    const saved = localStorage.getItem(key);

    if (!saved) {
      return fallback;
    }

    return JSON.parse(saved);

  } catch (error) {

    console.warn("Storage read error:", error);

    return fallback;
  }
}


function setStorage(key, value) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.warn("Storage write error:", error);
  }
}


/* =========================================================
   FAVORITES
   ========================================================= */

let favorites = getStorage(
  STORAGE_KEYS.favorites,
  []
);


function isFavorite(id) {

  return favorites.includes(Number(id));
}


function toggleFavorite(id) {

  id = Number(id);

  if (favorites.includes(id)) {

    favorites = favorites.filter(
      favoriteId => favoriteId !== id
    );

    showToast("Removed from favorites");

  } else {

    favorites.push(id);

    showToast("Added to favorites ❤️");
  }

  setStorage(
    STORAGE_KEYS.favorites,
    favorites
  );

  renderBusinesses();
  renderFeatured();
  refreshModalFavorite(id);
}


function refreshModalFavorite(id) {

  const button =
    document.querySelector(
      `[data-modal-favorite="${id}"]`
    );

  if (!button) {
    return;
  }

  button.innerHTML = isFavorite(id)
    ? "♥ Saved"
    : "♡ Save";
}


/* =========================================================
   RECENTLY VIEWED
   ========================================================= */

function addRecentlyViewed(id) {

  id = Number(id);

  let recent = getStorage(
    STORAGE_KEYS.recent,
    []
  );

  recent = recent.filter(
    recentId => Number(recentId) !== id
  );

  recent.unshift(id);

  recent = recent.slice(0, 6);

  setStorage(
    STORAGE_KEYS.recent,
    recent
  );
}


/* =========================================================
   FILTER STATE
   ========================================================= */

let currentSearch = "";
let currentLocation = "all";
let currentCategory = "all";


/* =========================================================
   BUSINESS COUNT
   ========================================================= */

function updateBusinessCount() {

  const countElement =
    getElement("businessCount");

  if (!countElement) {
    return;
  }

  countElement.textContent =
    `${businesses.length}+`;
}


/* =========================================================
   CATEGORY HELPERS
   ========================================================= */

function normalizeCategory(category) {

  if (!category) {
    return "all";
  }

  const value =
    String(category)
      .toLowerCase()
      .trim();

  if (
    value.includes("restaurant") ||
    value.includes("food") ||
    value.includes("cafe")
  ) {
    return "restaurant";
  }

  if (
    value.includes("lodge") ||
    value.includes("hotel") ||
    value.includes("travel")
  ) {
    return "lodge";
  }

  if (
    value.includes("beauty") ||
    value.includes("salon") ||
    value.includes("spa")
  ) {
    return "beauty";
  }

  if (
    value.includes("business") ||
    value.includes("service")
  ) {
    return "business-services";
  }

  if (value.includes("shopping")) {
    return "shopping";
  }

  if (value.includes("technology")) {
    return "technology";
  }

  return value;
}


/* =========================================================
   FILTER BUSINESSES
   ========================================================= */

function getFilteredBusinesses() {

  return businesses.filter(business => {

    const searchText =
      currentSearch.toLowerCase().trim();

    const matchesSearch =
      !searchText ||
      business.name.toLowerCase().includes(searchText) ||
      business.category.toLowerCase().includes(searchText) ||
      business.city.toLowerCase().includes(searchText) ||
      business.province.toLowerCase().includes(searchText) ||
      business.description.toLowerCase().includes(searchText);

    const matchesLocation =
      currentLocation === "all" ||
      business.city.toLowerCase() ===
        currentLocation.toLowerCase() ||
      business.province.toLowerCase() ===
        currentLocation.toLowerCase();

    const matchesCategory =
      currentCategory === "all" ||
      normalizeCategory(business.category) ===
        normalizeCategory(currentCategory);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory
    );
  });
}


/* =========================================================
   BUSINESS IMAGE FALLBACK
   ========================================================= */

function imageFallback(event) {

  if (!event.target.dataset.fallback) {

    event.target.dataset.fallback = "true";

    event.target.src =
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80";
  }
}


/* =========================================================
   BUSINESS CARD
   ========================================================= */

function createBusinessCard(business) {

  const ratingHTML =
    business.rating !== null
      ? `
        <span class="rating">
          ★ ${escapeHTML(business.rating)}
        </span>

        ${
          business.reviews !== null
            ? `<span class="reviews">
                (${escapeHTML(business.reviews)} reviews)
               </span>`
            : ""
        }
      `
      : `
        <span class="public-rating">
          Public listing
        </span>
      `;

  const favoriteIcon =
    isFavorite(business.id)
      ? "♥"
      : "♡";

  return `

    <article
      class="business-card"
      data-business-id="${business.id}"
    >

      <div class="business-image-wrap">

        <img
          class="business-image"
          src="${escapeHTML(business.image)}"
          alt="${escapeHTML(business.name)}"
          loading="lazy"
          onerror="imageFallback(event)"
        >

        ${
          business.featured
            ? `
              <span class="featured-badge">
                Featured
              </span>
            `
            : ""
        }

        <button
          class="favorite-button"
          type="button"
          aria-label="Save ${escapeHTML(business.name)}"
          onclick="toggleFavorite(${business.id})"
        >
          ${favoriteIcon}
        </button>

      </div>

      <div class="business-content">

        <div class="business-category">
          <span>
            ${escapeHTML(business.icon)}
          </span>

          ${escapeHTML(business.category)}
        </div>

        <h3>
          ${escapeHTML(business.name)}
        </h3>

        <div class="business-rating">
          ${ratingHTML}
        </div>

        <div class="business-location">
          <span>📍</span>
          ${escapeHTML(business.city)}, ${escapeHTML(business.province)}
        </div>

        <p class="business-description">
          ${escapeHTML(business.description)}
        </p>

        <div class="business-actions">

          <button
            class="primary-button"
            type="button"
            onclick="openBusiness(${business.id})"
          >
            View Details →
          </button>

          <a
            class="icon-action"
            href="tel:+${escapeHTML(business.phone)}"
            aria-label="Call ${escapeHTML(business.name)}"
          >
            ☎
            <span>Call</span>
          </a>

          <a
            class="icon-action"
            href="https://wa.me/${escapeHTML(business.whatsapp)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp ${escapeHTML(business.name)}"
          >
            ◉
            <span>WhatsApp</span>
          </a>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER FEATURED BUSINESSES
   ========================================================= */

function renderFeatured() {

  const container =
    getElement("featuredGrid");

  if (!container) {
    console.warn(
      "featuredGrid was not found."
    );

    return;
  }

  const featured =
    businesses.filter(
      business => business.featured
    );

  if (!featured.length) {

    container.innerHTML = `
      <div class="empty-state">
        <h3>No featured businesses yet</h3>
        <p>Check back soon for featured businesses.</p>
      </div>
    `;

    return;
  }

  container.innerHTML =
    featured
      .map(createBusinessCard)
      .join("");
}


/* =========================================================
   RENDER DIRECTORY
   ========================================================= */

function renderBusinesses() {

  const container =
    getElement("businessGrid");

  const noResults =
    getElement("noResults");

  const resultsText =
    getElement("resultsText");

  if (!container) {

    console.warn(
      "businessGrid was not found."
    );

    return;
  }

  const filtered =
    getFilteredBusinesses();

  if (resultsText) {

    if (
      currentSearch ||
      currentLocation !== "all" ||
      currentCategory !== "all"
    ) {

      resultsText.textContent =
        `${filtered.length} business${
          filtered.length === 1 ? "" : "es"
        } found`;

    } else {

      resultsText.textContent =
        "Discover businesses across Zambia";
    }
  }

  if (!filtered.length) {

    container.innerHTML = "";

    if (noResults) {
      noResults.style.display = "block";
    }

    return;
  }

  if (noResults) {
    noResults.style.display = "none";
  }

  container.innerHTML =
    filtered
      .map(createBusinessCard)
      .join("");
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

  const searchInput =
    getElement(
      "searchInput",
      "heroSearch",
      "businessSearch"
    );

  const locationFilter =
    getElement(
      "locationFilter",
      "heroLocation"
    );

  if (searchInput) {
    currentSearch =
      searchInput.value.trim();
  }

  if (locationFilter) {
    currentLocation =
      locationFilter.value || "all";
  }

  renderBusinesses();

  const directory =
    document.getElementById(
      "directory"
    );

  if (directory) {

    directory.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


/* =========================================================
   SEARCH INPUT LIVE UPDATE
   ========================================================= */

function setupSearch() {

  const inputs =
    queryAll(
      "#searchInput, #heroSearch, #businessSearch"
    );

  inputs.forEach(input => {

    input.addEventListener(
      "input",
      function () {

        currentSearch =
          this.value.trim();

        renderBusinesses();
      }
    
