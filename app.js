/* =========================================================
   ZAMBIA BUSINESS HUB V3.0
   FINAL JAVASCRIPT
   ========================================================= */


/* =========================================================
   SETTINGS
   ========================================================= */

const HUB_NAME = "Zambia Business Hub";
const HUB_WHATSAPP = "260765054612";


/* =========================================================
   BUSINESS DATABASE
   ========================================================= */

const businesses = [

  {
    id: 1,
    name: "Copper Pot Restaurant",
    category: "Restaurant",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260211427700",
    rating: 4.7,
    reviews: 246,
    hours: "Open 24 hours",
    description:
      "A popular restaurant in Lusaka offering a welcoming dining experience.",
    featured: true,
    icon: "🍽️"
  },

  {
    id: 2,
    name: "3 Trees Cafe",
    category: "Restaurant",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260978728652",
    rating: 4.4,
    reviews: 2297,
    hours: "Daily 07:30–17:00",
    description:
      "A relaxed cafe in Lusaka serving food, drinks and casual dining.",
    featured: true,
    icon: "☕"
  },

  {
    id: 3,
    name: "Marlin Restaurant",
    category: "Restaurant",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260211252206",
    rating: 4.2,
    reviews: 1677,
    hours: "Mon–Thu 12:00–22:00 • Fri 12:00–22:00 • Sat 12:00–23:00",
    description:
      "A Lusaka restaurant offering a comfortable place to enjoy meals and drinks.",
    featured: true,
    icon: "🍴"
  },

  {
    id: 4,
    name: "MOSAIC RESTAURANT & CAFE",
    category: "Restaurant",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260771036277",
    rating: 4.8,
    reviews: 65,
    hours: "Mon–Sat 10:30–22:30 • Sun 08:30–22:30",
    description:
      "Restaurant and cafe offering a modern dining experience in Lusaka.",
    featured: true,
    icon: "🍽️"
  },

  {
    id: 5,
    name: "The Sanctuary Restaurant",
    category: "Restaurant",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260978688866",
    rating: 4.5,
    reviews: 185,
    hours: "Mon–Thu 12:00–22:00 • Fri–Sun 12:00–23:00",
    description:
      "A welcoming restaurant providing meals and a relaxed dining environment.",
    featured: false,
    icon: "🥘"
  },

  {
    id: 6,
    name: "Palmwood Lodge",
    category: "Lodge",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260966757954",
    rating: 4.0,
    reviews: 740,
    hours: "Contact for current hours",
    description:
      "A lodge in Lusaka providing accommodation and hospitality services.",
    featured: true,
    icon: "🏨"
  },

  {
    id: 7,
    name: "Lilayi Lodge",
    category: "Lodge",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260971002010",
    rating: 4.5,
    reviews: 1386,
    hours: "Contact for current hours",
    description:
      "A lodge offering accommodation and a peaceful setting near Lusaka.",
    featured: true,
    icon: "🏡"
  },

  {
    id: 8,
    name: "Shodol Spa and Beauty Salon",
    category: "Beauty",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260767471112",
    rating: 4.8,
    reviews: 636,
    hours: "Contact for current hours",
    description:
      "Beauty and personal care services in Lusaka.",
    featured: true,
    icon: "💆"
  },

  {
    id: 9,
    name: "Her Rootz",
    category: "Beauty",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260974227332",
    rating: 4.7,
    reviews: 96,
    hours: "Contact for current hours",
    description:
      "Beauty services with a focus on personal care and styling.",
    featured: false,
    icon: "💇"
  },

  {
    id: 10,
    name: "Enrich By Naseema",
    category: "Beauty",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260973372652",
    rating: 4.5,
    reviews: 147,
    hours: "Contact for current hours",
    description:
      "Beauty and personal care services in Lusaka.",
    featured: false,
    icon: "✨"
  },

  {
    id: 11,
    name: "Ventura Solutions Zambia Limited",
    category: "Business Services",
    city: "Lusaka",
    province: "Lusaka",
    phone: "260951595566",
    rating: 4.9,
    reviews: 8,
    hours: "Contact for current hours",
    description:
      "Professional business services in Lusaka.",
    featured: false,
    icon: "💼"
  },

  {
    id: 12,
    name: "Jameska Business Services",
    category: "Business Services",
    city: "Chingola",
    province: "Copperbelt",
    phone: "260964533535",
    rating: 4.0,
    reviews: 1,
    hours: "Contact for current hours",
    description:
      "Business and professional services in Chingola.",
    featured: false,
    icon: "📊"
  },

  {
    id: 13,
    name: "Nawab's Kitchen",
    category: "Restaurant",
    city: "Ndola",
    province: "Copperbelt",
    phone: "260974445557",
    rating: null,
    reviews: null,
    hours: "Contact for current hours",
    description:
      "Restaurant serving customers in Ndola.",
    featured: true,
    icon: "🍛"
  }

];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

let searchInput;
let locationFilter;
let categoryFilter;
let businessGrid;
let featuredGrid;
let resultsText;
let noResults;
let activeFilters;
let modal;
let modalBody;
let formMessage;


/* =========================================================
   START APPLICATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  searchInput = document.getElementById("searchInput");
  locationFilter = document.getElementById("locationFilter");
  categoryFilter = document.getElementById("categoryFilter");

  businessGrid = document.getElementById("businessGrid");
  featuredGrid = document.getElementById("featuredGrid");

  resultsText = document.getElementById("resultsText");
  noResults = document.getElementById("noResults");
  activeFilters = document.getElementById("activeFilters");

  modal = document.getElementById("businessModal");
  modalBody = document.getElementById("modalBody");

  formMessage = document.getElementById("formMessage");

  setupStats();
  renderFeatured();
  renderBusinesses();
  setupEvents();
  setupMobileMenu();
  setupListingForm();
  setupYear();

});


/* =========================================================
   STATISTICS
   ========================================================= */

function setupStats() {

  const businessCount =
    document.getElementById("businessCount");

  const categoryCount =
    document.getElementById("categoryCount");

  const locationCount =
    document.getElementById("locationCount");

  const categories =
    new Set(
      businesses.map(function (business) {
        return business.category;
      })
    );

  const locations =
    new Set(
      businesses.map(function (business) {
        return business.city;
      })
    );

  if (businessCount) {
    businessCount.textContent =
      businesses.length + "+";
  }

  if (categoryCount) {
    categoryCount.textContent =
      categories.size;
  }

  if (locationCount) {
    locationCount.textContent =
      locations.size;
  }

}


/* =========================================================
   EVENTS
   ========================================================= */

function setupEvents() {

  if (searchInput) {
    searchInput.addEventListener(
      "input",
      renderBusinesses
    );
  }

  if (locationFilter) {
    locationFilter.addEventListener(
      "change",
      renderBusinesses
    );
  }

  if (categoryFilter) {
    categoryFilter.addEventListener(
      "change",
      renderBusinesses
    );
  }


  const searchButton =
    document.getElementById("searchButton");

  if (searchButton) {

    searchButton.addEventListener(
      "click",
      function () {

        renderBusinesses();

        document
          .getElementById("businesses")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  }


  const clearButton =
    document.getElementById("clearFilters");

  if (clearButton) {
    clearButton.addEventListener(
      "click",
      clearFilters
    );
  }


  const showAllButton =
    document.getElementById("showAllButton");

  if (showAllButton) {
    showAllButton.addEventListener(
      "click",
      clearFilters
    );
  }


  const modalClose =
    document.getElementById("modalClose");

  const modalOverlay =
    document.getElementById("modalOverlay");

  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeModal
    );
  }

  if (modalOverlay) {
    modalOverlay.addEventListener(
      "click",
      closeModal
    );
  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal &&
        !modal.classList.contains("hidden")
      ) {
        closeModal();
      }

    }
  );


  document
    .querySelectorAll(".category-card")
    .forEach(function (button) {

      button.addEventListener(
        "click",
        function () {

          const category =
            button.dataset.category;

          if (categoryFilter) {
            categoryFilter.value =
              category;
          }

          renderBusinesses();

          document
            .getElementById("businesses")
            ?.scrollIntoView({
              behavior: "smooth"
            });

        }
      );

    });

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

  const toggle =
    document.getElementById("menuToggle");

  const nav =
    document.getElementById("mainNav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener(
    "click",
    function () {
      nav.classList.toggle("active");
    }
  );


  nav.querySelectorAll("a").forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {
          nav.classList.remove("active");
        }
      );

    }
  );

}


/* =========================================================
   FILTER BUSINESSES
   ========================================================= */

function getFilteredBusinesses() {

  const search =
    searchInput
      ? searchInput.value
          .trim()
          .toLowerCase()
      : "";

  const location =
    locationFilter
      ? locationFilter.value.toLowerCase()
      : "all";

  const category =
    categoryFilter
      ? categoryFilter.value.toLowerCase()
      : "all";


  return businesses.filter(
    function (business) {

      const name =
        business.name.toLowerCase();

      const businessCategory =
        business.category.toLowerCase();

      const city =
        business.city.toLowerCase();

      const province =
        business.province.toLowerCase();


      const matchesSearch =
        !search ||
        name.includes(search) ||
        businessCategory.includes(search) ||
        city.includes(search) ||
        province.includes(search);


      const matchesLocation =
        location === "all" ||
        city === location;


      const matchesCategory =
        category === "all" ||
        businessCategory === category;


      return (
        matchesSearch &&
        matchesLocation &&
        matchesCategory
      );

    }
  );

}


/* =========================================================
   RENDER DIRECTORY
   ========================================================= */

function renderBusinesses() {

  if (!businessGrid) {
    return;
  }

  const filtered =
    getFilteredBusinesses();


  businessGrid.innerHTML = "";


  if (filtered.length === 0) {

    noResults?.classList.remove("hidden");

    if (resultsText) {
      resultsText.textContent =
        "No businesses match your search.";
    }

    updateActiveFilters();

    return;
  }


  noResults?.classList.add("hidden");


  if (resultsText) {

    resultsText.textContent =
      "Showing " +
      filtered.length +
      " business" +
      (filtered.length === 1 ? "" : "es");

  }


  filtered.forEach(
    function (business) {

      businessGrid.appendChild(
        createBusinessCard(business)
      );

    }
  );


  updateActiveFilters();

}


/* =========================================================
   RENDER FEATURED
   ========================================================= */

function renderFeatured() {

  if (!featuredGrid) {
    return;
  }

  const featured =
    businesses.filter(
      function (business) {
        return business.featured;
      }
    );


  featuredGrid.innerHTML = "";


  featured.forEach(
    function (business) {

      featuredGrid.appendChild(
        createBusinessCard(business)
      );

    }
  );

}


/* =========================================================
   BUSINESS CARD
   ========================================================= */

function createBusinessCard(business) {

  const card =
    document.createElement("article");

  card.className = "business-card";


  const top =
    document.createElement("div");

  top.className = "card-top";


  const icon =
    document.createElement("div");

  icon.className = "business-icon";

  icon.textContent =
    business.icon || "🏢";


  top.appendChild(icon);


  if (business.featured) {

    const badge =
      document.createElement("span");

    badge.className =
      "featured-badge";

    badge.textContent =
      "Featured";

    top.appendChild(badge);

  }


  const content =
    document.createElement("div");

  content.className =
    "card-content";


  const title =
    document.createElement("h3");

  title.textContent =
    business.name;


  const category =
    document.createElement("span");

  category.className =
    "category-label";

  category.textContent =
    business.category;


  const location =
    document.createElement("div");

  location.className =
    "location";

  location.textContent =
    "📍 " +
    business.city +
    ", " +
    business.province;


  const rating =
    document.createElement("div");

  rating.className =
    "rating";


  if (
    typeof business.rating === "number"
  ) {

    rating.innerHTML =
      '<span class="rating-stars">★★★★★</span>' +
      '<strong>' +
      business.rating.toFixed(1) +
      '</strong>' +
      '<span class="rating-count">(' +
      business.reviews +
      ')</span>';

  } else {

    rating.innerHTML =
      '<span class="rating-count">⭐ Public rating not available</span>';

  }


  const actions =
    document.createElement("div");

  actions.className =
    "card-actions";


  const details =
    document.createElement("button");

  details.className =
    "card-button primary";

  details.textContent =
    "View Details";

  details.addEventListener(
    "click",
    function () {
      openBusiness(business.id);
    }
  );


  const call =
    document.createElement("a");

  call.className =
    "card-button";

  call.textContent =
    "📞 Call";

  call.href =
    "tel:+" + cleanPhone(business.phone);


  const whatsapp =
    document.createElement("a");

  whatsapp.className =
    "card-button whatsapp";

  whatsapp.textContent =
    "💬 WhatsApp";

  whatsapp.target =
    "_blank";

  whatsapp.rel =
    "noopener noreferrer";

  whatsapp.href =
    "https://wa.me/" +
    cleanPhone(business.phone);


  actions.appendChild(details);
  actions.appendChild(call);


  content.appendChild(title);
  content.appendChild(category);
  content.appendChild(location);
  content.appendChild(rating);
  content.appendChild(actions);


  card.appendChild(top);
  card.appendChild(content);


  return card;

}


/* =========================================================
   OPEN BUSINESS MODAL
   ========================================================= */

function openBusiness(id) {

  const business =
    businesses.find(
      function (item) {
        return item.id === id;
      }
    );


  if (!business || !modal || !modalBody) {
    return;
  }


  let ratingHTML = "";

  if (
    typeof business.rating === "number"
  ) {

    ratingHTML =
      '<div>' +
        '<strong>Rating</strong>' +
        '<span>⭐ ' +
        business.rating.toFixed(1) +
        ' (' +
        business.reviews +
        ' public ratings/reviews)</span>' +
      '</div>';

  } else {

    ratingHTML =
      '<div>' +
        '<strong>Rating</strong>' +
        '<span>Public rating not available</span>' +
      '</div>';

  }


  modalBody.innerHTML =

    '<div class="modal-header">' +

      '<div class="modal-icon">' +
        escapeHTML(business.icon || "🏢") +
      '</div>' +

      '<span class="modal-category">' +
        escapeHTML(business.category) +
      '</span>' +

      '<h2>' +
        escapeHTML(business.name) +
      '</h2>' +

    '</div>' +


    '<div class="modal-info">' +

      '<div>' +
        '<strong>Location</strong>' +
        '<span>📍 ' +
        escapeHTML(
          business.city +
          ", " +
          business.province
        ) +
        '</span>' +
      '</div>' +

      ratingHTML +

      '<div>' +
        '<strong>Opening Hours</strong>' +
        '<span>🕒 ' +
        escapeHTML(business.hours) +
        '</span>' +
      '</div>' +

      '<div>' +
        '<strong>Phone</strong>' +
        '<span>📞 +' +
        escapeHTML(
          cleanPhone(business.phone)
        ) +
        '</span>' +
      '</div>' +

    '</div>' +


    '<p class="modal-description">' +
      escapeHTML(business.description) +
    '</p>' +


    '<div class="modal-actions">' +

      '<a class="modal-action" href="tel:+' +
        cleanPhone(business.phone) +
      '">' +
        '📞 Call' +
      '</a>' +

      '<a class="modal-action" target="_blank" rel="noopener noreferrer" href="https://wa.me/' +
        cleanPhone(business.phone) +
      '">' +
        '💬 WhatsApp' +
      '</a>' +

      '<a class="modal-action" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(
          business.name +
          ", " +
          business.city +
          ", Zambia"
        ) +
      '">' +
        '🗺️ Directions' +
      '</a>' +

    '</div>';


  modal.classList.remove("hidden");

  document.body.style.overflow =
    "hidden";

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

  if (!modal) {
    return;
  }

  modal.classList.add("hidden");

  document.body.style.overflow =
    "";

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearFilters() {

  if (searchInput) {
    searchInput.value = "";
  }

  if (locationFilter) {
    locationFilter.value = "all";
  }

  if (categoryFilter) {
    categoryFilter.value = "all";
  }

  renderBusinesses();

}


/* =========================================================
   ACTIVE FILTERS
   ========================================================= */

function updateActiveFilters() {

  if (!activeFilters) {
    return;
  }

  activeFilters.innerHTML = "";


  const search =
    searchInput?.value.trim();


  const location =
    locationFilter?.value;


  const category =
    categoryFilter?.value;


  if (search) {

    addFilterTag(
      "Search: " + search
    );

  }


  if (
    location &&
    location !== "all"
  ) {

    addFilterTag(
      "Location: " +
      capitalize(location)
    );

  }


  if (
    category &&
    category !== "all"
  ) {

    addFilterTag(
      "Category: " +
      capitalize(category)
    );

  }

}


function addFilterTag(text) {

  const tag =
    document.createElement("span")
