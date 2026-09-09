/* =========================================================
   ZAMBIA BUSINESS HUB — V2.5
   COMPLETE REPLACEMENT APP.JS
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
    icon: "🍽️",
    featured: true,
    description: "A popular restaurant serving quality food in Lusaka."
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
    icon: "☕",
    featured: true,
    description: "A relaxed cafe serving food, coffee and refreshments."
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
    hours: "Mon–Sat 12:00–23:00",
    icon: "🍴",
    featured: true,
    description: "Restaurant offering a variety of meals and dining options."
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
    icon: "🍽️",
    featured: true,
    description: "Restaurant and cafe with a modern dining experience."
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
    icon: "🥘",
    featured: false,
    description: "A welcoming restaurant for meals and social dining."
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
    hours: "Open daily",
    icon: "🏨",
    featured: true,
    description: "Comfortable lodge accommodation in Lusaka."
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
    hours: "Open daily",
    icon: "🌿",
    featured: true,
    description: "A lodge offering accommodation and a relaxing environment."
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
    hours: "Open daily",
    icon: "💆",
    featured: true,
    description: "Beauty, salon and spa services in Lusaka."
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
    hours: "Open daily",
    icon: "✨",
    featured: false,
    description: "Beauty and personal care services."
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
    hours: "Open daily",
    icon: "💄",
    featured: false,
    description: "Beauty and personal care services in Lusaka."
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
    hours: "Open during business hours",
    icon: "💼",
    featured: false,
    description: "Professional business services in Zambia."
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
    hours: "Open during business hours",
    icon: "📊",
    featured: false,
    description: "Business support and professional services in Chingola."
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
    hours: "Contact business",
    icon: "🍛",
    featured: true,
    description: "Restaurant serving meals in Ndola."
  }
];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const $ = id => document.getElementById(id);

const searchInput = $("searchInput");
const locationFilter = $("locationFilter");
const topLocation = $("topLocation");
const searchForm = $("searchForm");
const businessGrid = $("businessGrid");
const resultsText = $("resultsText");
const noResults = $("noResults");
const clearFilters = $("clearFilters");
const noResultsClear = $("noResultsClear");
const topSearchBtn = $("topSearchBtn");
const menuBtn = $("menuBtn");
const mobileNav = $("mobileNav");
const businessModal = $("businessModal");
const modalBody = $("modalBody");
const listingModal = $("listingModal");
const openListing = $("openListing");
const listingForm = $("listingForm");
const listingMessage = $("listingMessage");
const year = $("year");


/* =========================================================
   STORAGE
   ========================================================= */

const FAVORITES_KEY =
  "zambiaBusinessHubFavorites";

const RECENT_KEY =
  "zambiaBusinessHubRecentlyViewed";


function readArray(key) {

  try {

    const value =
      JSON.parse(
        localStorage.getItem(key) || "[]"
      );

    return Array.isArray(value)
      ? value
      : [];

  } catch (error) {

    return [];

  }
}


function writeArray(key, value) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch (error) {

    console.warn(
      "Storage unavailable:",
      error
    );

  }

}


function getFavorites() {

  return readArray(
    FAVORITES_KEY
  ).map(Number);

}


function saveFavorites(list) {

  writeArray(
    FAVORITES_KEY,
    list.map(Number)
  );

}


function getRecent() {

  return readArray(
    RECENT_KEY
  ).map(Number);

}


function saveRecent(list) {

  writeArray(
    RECENT_KEY,
    list.map(Number)
  );

}


/* =========================================================
   HELPERS
   ========================================================= */

function clean(value) {

  return String(value ?? "")
    .toLowerCase()
    .trim();

}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


function cleanPhone(value) {

  return String(value || "")
    .replace(/[^\d+]/g, "");

}


function whatsappNumber(value) {

  let number =
    String(value || "")
      .replace(/\D/g, "");

  if (number.startsWith("0")) {

    number =
      "260" +
      number.substring(1);

  }

  if (
    !number.startsWith("260") &&
    number.length === 9
  ) {

    number =
      "260" + number;

  }

  return number;

}


function whatsappURL(
  number,
  message
) {

  const phone =
    whatsappNumber(number);

  if (!phone) {

    return "#";

  }

  return (
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message)
  );

}


function mapsURL(
  name,
  city
) {

  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      name +
      ", " +
      city +
      ", Zambia"
    )
  );

}


function scrollToBusinesses() {

  $("businesses")
    ?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

}


/* =========================================================
   FAVORITES
   ========================================================= */

function isFavorite(id) {

  return getFavorites()
    .includes(Number(id));

}


function toggleFavorite(id) {

  const businessId =
    Number(id);

  let favorites =
    getFavorites();

  if (
    favorites.includes(
      businessId
    )
  ) {

    favorites =
      favorites.filter(
        item =>
          item !== businessId
      );

  } else {

    favorites.push(
      businessId
    );

  }

  saveFavorites(
    favorites
  );

  applyFilters();

}


/* =========================================================
   RECENTLY VIEWED
   ========================================================= */

function addRecentlyViewed(id) {

  const businessId =
    Number(id);

  let recent =
    getRecent().filter(
      item =>
        item !== businessId
    );

  recent.unshift(
    businessId
  );

  saveRecent(
    recent.slice(0, 10)
  );

}


/* =========================================================
   BUSINESS CARD
   ========================================================= */

function createBusinessCard(
  business
) {

  const favorite =
    isFavorite(
      business.id
    );

  const ratingHTML =
    business.rating

      ? `⭐ ${escapeHTML(
          business.rating
        )}
        <span>
          (${escapeHTML(
            business.reviews
          )} reviews)
        </span>`

      : `⭐ Public listing`;

  const phone =
    cleanPhone(
      business.phone
    );

  const wa =
    whatsappURL(
      business.phone,
      `Hello ${business.name}, I found your business on ${HUB_NAME}.`
    );

  return `

    <article
      class="business-card">

      <div
        class="business-icon">

        ${escapeHTML(
          business.icon
        )}

      </div>


      <div
        class="business-card-content">


        <div
          class="business-top">

          <span
            class="business-category">

            ${escapeHTML(
              business.category
            )}

          </span>


          ${
            business.featured

              ? `
                <span
                  class="featured-badge">
                  FEATURED
                </span>
              `

              : ""
          }

        </div>


        <h3>

          ${escapeHTML(
            business.name
          )}

        </h3>


        <p
          class="business-location">

          📍
          ${escapeHTML(
            business.city
          )},

          ${escapeHTML(
            business.province
          )}

        </p>


        <p
          class="business-rating">

          ${ratingHTML}

        </p>


        <p
          class="business-hours">

          🕒
          ${escapeHTML(
            business.hours
          )}

        </p>


        <div
          class="business-actions">


          <button
            class="btn btn-small"
            type="button"
            data-view="${business.id}">

            View

          </button>


          <a
            class="btn btn-small"
            href="tel:${phone}">

            Call

          </a>


          <a
            class="btn btn-small"
            href="${wa}"
            target="_blank"
            rel="noopener">

            WhatsApp

          </a>


          <button
            class="btn btn-small favorite-btn"
            type="button"
            data-favorite="${business.id}"
            aria-label="${
              favorite
                ? "Remove from favorites"
                : "Add to favorites"
            }">

            ${
              favorite
                ? "♥"
                : "♡"
            }

          </button>


        </div>

      </div>

    </article>

  `;

}


/* =========================================================
   FILTERING
   ========================================================= */

function getFilteredBusinesses() {

  const search =
    clean(
      searchInput?.value
    );

  const location =
    clean(
      locationFilter?.value ||
      "all"
    );


  return businesses.filter(
    business => {

      const searchableText =
        clean(
          [
            business.name,
            business.category,
            business.city,
            business.province,
            business.description
          ].join(" ")
        );


      const matchesSearch =
        !search ||
        searchableText.includes(
          search
        );


      const matchesLocation =
        location === "all" ||
        clean(
          business.city
        ) === location;


      return (
        matchesSearch &&
        matchesLocation
      );

    }
  );

}


/* =========================================================
   RENDER
   ========================================================= */

function renderBusinesses(list) {

  if (!businessGrid) {

    return;

  }


  businessGrid.innerHTML =
    list
      .map(
        createBusinessCard
      )
      .join("");


  if (resultsText) {

    resultsText.textContent =
      `${list.length} ${
        list.length === 1
          ? "business"
          : "businesses"
      }`;

  }


  if (noResults) {

    noResults.hidden =
      list.length !== 0;

  }

}


function applyFilters() {

  renderBusinesses(
    getFilteredBusinesses()
  );

}


function setLocation(value) {

  const location =
    clean(value) ||
    "all";


  if (locationFilter) {

    locationFilter.value =
      location;

  }


  if (topLocation) {

    topLocation.value =
      location;

  }


  applyFilters();

}


function clearAllFilters() {

  if (searchInput) {

    searchInput.value =
      "";

  }

  setLocation("all");

}


/* =========================================================
   SEARCH
   ========================================================= */

if (searchForm) {

  searchForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      applyFilters();

      scrollToBusinesses();

    }
  );

}


if (searchInput) {

  searchInput.addEventListener(
    "input",
    applyFilters
  );

}


if (locationFilter) {

  locationFilter.addEventListener(
    "change",
    () => {

      if (topLocation) {

        topLocation.value =
          locationFilter.value;

      }

      applyFilters();

    }
  );

}


if (topLocation) {

  topLocation.addEventListener(
    "change",
    () => {

      if (locationFilter) {

        locationFilter.value =
          topLocation.value;

      }

      applyFilters();

    }
  );

}


if (topSearchBtn) {

  topSearchBtn.addEventListener(
    "click",
    () => {

      if (searchInput) {

        searchInput.focus();

      }

      $("home")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

    }
  );

}


if (clearFilters) {

  clearFilters.addEventListener(
    "click",
    clearAllFilters
  );

}


if (noResultsClear) {

  noResultsClear.addEventListener(
    "click",
    clearAllFilters
  );

}


/* =========================================================
   CATEGORY FILTERS
   ========================================================= */

document
  .querySelectorAll(
    "[data-category]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const category =
          clean(
            button.dataset.category
          );


        if (searchInput) {

          searchInput.value =
            "";

        }


        if (
          category === "all"
        ) {

          setLocation("all");

          scrollToBusinesses();

          return;

        }


        const filtered =
          businesses.filter(
            business =>
              clean(
                business.category
              ) === category
          );


        renderBusinesses(
          filtered
        );

        scrollToBusinesses();

      }
    );

  });


/* =========================================================
   LOCATION BUTTONS
   ========================================================= */

document
  .querySelectorAll(
    "[data-location]"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        if (searchInput) {

          searchInput.value =
            "";

        }

        setLocation(
          button.dataset.location
        );

        scrollToBusinesses();

      }
    );

  });


/* =========================================================
   BUSINESS MODAL
   ========================================================= */

function openBusinessModal(id) {

  const business =
    businesses.find(
      item =>
        Number(item.id) ===
        Number(id)
    );


  if (
    !business ||
    !businessModal ||
    !modalBody
  ) {

    return;

  }


  addRecentlyViewed(
    business.id
  );


  const favorite =
    isFavorite(
      business.id
    );


  const rating =
    business.rating

      ? `${business.rating} (${business.reviews} reviews)`

      : "Public listing";


  const phone =
    cleanPhone(
      business.phone
    );


  const wa =
    whatsappURL(
      business.phone,
      `Hello ${business.name}, I found your business on ${HUB_NAME}.`
    );


  const maps =
    mapsURL(
      business.name,
      business.city
    );


  modalBody.innerHTML = `

    <div
      class="modal-business">


      <div
        class="modal-icon">

        ${escapeHTML(
          business.icon
        )}

      </div>


      <span
        class="business-category">

        ${escapeHTML(
          business.category
        )}

      </span>


      ${
        business.featured

          ? `
            <span
              class="featured-badge">

              FEATURED

            </span>
          `

          : ""
      }


      <h2>

        ${escapeHTML(
          business.name
        )}

      </h2>


      <p>

        📍
        ${escapeHTML(
          business.city
        )},

        ${escapeHTML(
          business.province
        )}

      </p>


      <p>

        ⭐
        ${escapeHTML(
          rating
        )}

      </p>


      <p>

        🕒
        ${escapeHTML(
          business.hours
        )}

      </p>


      <p>

        ${escapeHTML(
          business.description
        )}

      </p>


      <div
        class="modal-actions">


        <a
          class="btn"
          href="tel:${phone}">

          📞 Call

        </a>


        <a
          class="btn"
          href="${wa}"
          target="_blank"
          rel="noopener">

          💬 WhatsApp

        </a>


        <a
          class="btn"
          href="${maps}"
          target="_blank"
          rel="noopener">

          📍 Directions

        </a>


        <button
          class="btn favorite-btn"
          type="button"
          data-modal-favorite="${business.id}">

          ${
            favorite
              ? "♥ Remove Favorite"
              : "♡ Add Favorite"
          }

        </button>


      </div>

    </div>

  `;


  businessModal.setAttribute(
    "aria-hidden",
    "false"
  );


  businessModal.classList.add(
    "active"
  );


  document.body.classList.add(
    "modal-open"
  );

}


function closeBusinessModal() {

  if (!businessModal) {

    return;

  }


  businessModal.setAttribute(
    "aria-hidden",
    "true"
  );


  businessModal.classList.remove(
    "active"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


/* =========================================================
   LISTING MODAL
   ========================================================= */

function openListingModal() {

  if (!listingModal) {

    return;

  }


  listingModal.setAttribute(
    "aria-hidden",
    "false"
  );


  listingModal.classList.add(
    "active"
  );


  document.body.classList.add(
    "modal-open"
  );

}


function closeListingMol() {
   
  if (!listingModal) {

    return;

  }


  listingModal.setAttribute(
    "aria-hidden",
    "true"
  );


  listingModal.classList.remove(
    "active"
  );


  document.body.classList.remove(
    "modal-open"
  );

}


if (openListing) {

  openListing.addEventListener(
    "click",
    openListingModal
  );

}


/* =========================================================
   LIST BUSINESS FORM
   ========================================================= */

if (listingForm) {

  listingForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        $("ownerBusiness")
          ?.value
          .trim() || "";


      const category =
        $("ownerCategory")
          ?.value
          .trim() || "";


      const location =
        $("ownerLocation")
          ?.value
          .trim() || "";


      const phone =
        $("ownerPhone")
          ?.value
          .trim() || "";


      const description =
        $("ownerDescription")
          ?.value
          .trim() || "";


      const message =

        `Hello ${HUB_NAME}! ` +
        `I would like to list my business.\n\n` +

        `Business: ${name}\n` +

        `Category: ${category}\n` +

        `Location: ${location}\n` +

        `Phone: ${phone}\n` +

        `Description: ${description}`;


      if (listingMessage) {

        listingMessage.textContent =
          "Opening WhatsApp to submit your listing request...";

      }


      window.open(
        whatsappURL(
          HUB_WHATSAPP,
          message
        ),
        "_blank"
      );

    }
  );

}


/* =========================================================
   GLOBAL CLICK HANDLER
   ========================================================= */

document.addEventListener(
  "click",
  event => {


    const viewButton =
      event.target.closest(
        "[data-view]"
      );


    if (viewButton) {

      openBusinessModal(
        viewButton.dataset.view
      );

      return;

    }


    const favoriteButton =
      event.target.closest(
        "[data-favorite]"
      );


    if (favoriteButton) {

      event.preventDefault();

      toggleFavorite(
        favoriteButton.dataset.favorite
      );

      return;

    }


    const modalFavorite =
      event.target.closest(
        "[data-modal-favorite]"
      );


    if (modalFavorite) {

      event.preventDefault();

      toggleFavorite(
        modalFavorite.dataset.modalFavorite
      );

      openBusinessModal(
        modalFavorite.dataset.modalFavorite
      );

      return;

    }


    if (
      event.target.closest(
        "[data-close-modal]"
      )
    ) {

      closeBusinessModal();

      return;

    }


    if (
      event.target.closest(
        "[data-close-listing]"
      )
    ) {

      closeListingModal();

      return;

    }


    const navLink =
      event.target.closest(
        "#mobileNav a"
      );


    if (
      navLink &&
      mobileNav
    ) {

      mobileNav.classList.remove(
        "open"
      );

      if (menuBtn) {

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }

  }
);


/* =========================================================
   MOBILE MENU
   ========================================================= */

if (
  menuBtn &&
  mobileNav
) {

  menuBtn.addEventListener(
    "click",
    () => {

      const open =
        mobileNav.classList.toggle(
          "open"
        );


      menuBtn.setAttribute(
        "aria-expanded",
        String(open)
      );

    }
  );

}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeBusinessModal();

      closeListingModal();


      if (mobileNav) {

        mobileNav.classList.remove(
          "open"
        );

      }

    }

  }
);


/* =========================================================
   INITIALISE
   ========================================================= */

if (year) {

  year.textContent =
    new Date()
      .getFullYear();

}


if (
  locationFilter &&
  topLocation
) {

  topLocation.value =
    locationFilter.value ||
    "all";

}


renderBusinesses(
  businesses
);


console.log(
  `${HUB_NAME} loaded successfully — ${businesses.length} businesses.`
);
