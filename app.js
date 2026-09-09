/* =========================================================
   ZAMBIA BUSINESS HUB
   APP.JS — PART 1 OF 2
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
    hours: "Mon–Thu 12:00–22:00 • Fri 12:00–22:00 • Sat 12:00–23:00",
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

const searchInput =
  document.getElementById("searchInput");

const locationFilter =
  document.getElementById("locationFilter");

const topLocation =
  document.getElementById("topLocation");

const searchForm =
  document.getElementById("searchForm");

const businessGrid =
  document.getElementById("businessGrid");

const resultsText =
  document.getElementById("resultsText");

const noResults =
  document.getElementById("noResults");

const clearFilters =
  document.getElementById("clearFilters");

const noResultsClear =
  document.getElementById("noResultsClear");

const topSearchBtn =
  document.getElementById("topSearchBtn");

const menuBtn =
  document.getElementById("menuBtn");

const mobileNav =
  document.getElementById("mobileNav");

const businessModal =
  document.getElementById("businessModal");

const modalBody =
  document.getElementById("modalBody");

const listingModal =
  document.getElementById("listingModal");

const openListing =
  document.getElementById("openListing");

const listingForm =
  document.getElementById("listingForm");

const listingMessage =
  document.getElementById("listingMessage");

const year =
  document.getElementById("year");

/* =========================================================
   STORAGE
   ========================================================= */

const FAVORITES_KEY =
  "zambiaBusinessHubFavorites";

const RECENT_KEY =
  "zambiaBusinessHubRecentlyViewed";

function getFavorites() {
  try {
    return JSON.parse(
      localStorage.getItem(FAVORITES_KEY) || "[]"
    );
  } catch {
    return [];
  }
}

function saveFavorites(list) {
  localStorage.setItem(
    FAVORITES_KEY,
    JSON.stringify(list)
  );
}

function getRecent() {
  try {
    return JSON.parse(
      localStorage.getItem(RECENT_KEY) || "[]"
    );
  } catch {
    return [];
  }
}

function saveRecent(list) {
  localStorage.setItem(
    RECENT_KEY,
    JSON.stringify(list)
  );
}

/* =========================================================
   HELPERS
   ========================================================= */

function clean(value) {
  return String(value || "")
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
      "260" + number.substring(1);
  }

  return number;
}

function whatsappURL(number, message) {

  return (
    "https://wa.me/" +
    whatsappNumber(number) +
    "?text=" +
    encodeURIComponent(message)
  );
}

function mapsURL(name, city) {

  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      name + ", " + city + ", Zambia"
    )
  );
}

/* =========================================================
   FAVORITES
   ========================================================= */

function isFavorite(id) {

  return getFavorites().includes(
    Number(id)
  );
}

function toggleFavorite(id) {

  id = Number(id);

  let favorites =
    getFavorites();

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        item => Number(item) !== id
      );

  } else {

    favorites.push(id);
  }

  saveFavorites(favorites);

  applyFilters();
}

/* =========================================================
   RECENTLY VIEWED
   ========================================================= */

function addRecentlyViewed(id) {

  id = Number(id);

  let recent =
    getRecent();

  recent =
    recent.filter(
      item => Number(item) !== id
    );

  recent.unshift(id);

  recent =
    recent.slice(0, 10);

  saveRecent(recent);
}

/* =========================================================
   BUSINESS CARD
   ========================================================= */

function createBusinessCard(business) {

  const favorite =
    isFavorite(business.id);

  const ratingHTML =
    business.rating
      ? `⭐ ${business.rating}
         <span>(${business.reviews} reviews)</span>`
      : `⭐ Public listing`;

  return `

    <article class="business-card">

      <div class="business-icon">
        ${escapeHTML(business.icon)}
      </div>

      <div class="business-card-content">

        <div class="business-top">

          <span class="business-category">
            ${escapeHTML(business.category)}
          </span>

          ${
            business.featured
              ? `<span class="featured-badge">FEATURED</span>`
              : ""
          }

        </div>

        <h3>
          ${escapeHTML(business.name)}
        </h3>

        <p class="business-location">
          📍 ${escapeHTML(business.city)},
          ${escapeHTML(business.province)}
        </p>

        <p class="business-rating">
          ${ratingHTML}
        </p>

        <p class="business-hours">
          🕒 ${escapeHTML(business.hours)}
        </p>

        <div class="business-actions">

          <button
            class="btn btn-small"
            type="button"
            data-view="${business.id}">
            View
          </button>

          <a
            class="btn btn-small"
            href="tel:${cleanPhone(business.phone)}">
            Call
          </a>

          <a
            class="btn btn-small"
            href="${whatsappURL(
              business.phone,
              `Hello ${business.name}, I found your business on ${HUB_NAME}.`
            )}"
            target="_blank"
            rel="noopener">
            WhatsApp
          </a>

          <button
            class="btn btn-small favorite-btn"
            type="button"
            data-favorite="${business.id}">
            ${favorite ? "♥" : "♡"}
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
      searchInput
        ? searchInput.value
        : ""
    );

  const location =
    clean(
      locationFilter
        ? locationFilter.value
        : "all"
    );

  return businesses.filter(
    business => {

      const searchableText =
        clean(`
          ${business.name}
          ${business.category}
          ${business.city}
          ${business.province}
          ${business.description}
        `);

      const matchesSearch =
        !search ||
        searchableText.includes(search);

      const matchesLocation =
        location === "all" ||
        clean(business.city) ===
          location;

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

  if (!businessGrid) return;

  businessGrid.innerHTML =
    list.map(
      createBusinessCard
    ).join("");

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

/* =========================================================
   SEARCH
   ========================================================= */

if (searchForm) {

  searchForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      applyFilters();

      document
        .getElementById("businesses")
        ?.scrollIntoView({
          behavior: "smooth"
        });
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
    function() {

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
    function() {

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
    function() {

      if (searchInput) {
        searchInput.focus();
      }

      document
        .getElementById("home")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }
  );
}

/* =========================================================
   END OF PART 1
/* =========================================================
   CATEGORY FILTER BUTTONS
   ========================================================= */

document
  .querySelectorAll("[data-category]")
  .forEach(button => {

    button.addEventListener(
      "click",
      function() {

        const category =
          clean(this.dataset.category);

        if (category === "all") {

          if (searchInput) {
            searchInput.value = "";
          }

          if (locationFilter) {
            locationFilter.value = "all";
          }

          if (topLocation) {
            topLocation.value = "all";
          }

          renderBusinesses(
            businesses
          );

        } else {

          const filtered =
            businesses.filter(
              business =>
                clean(business.category) ===
                category
            );

          renderBusinesses(
            filtered
          );
        }

        document
          .getElementById("businesses")
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }
    );

  });


/* =========================================================
   LOCATION BUTTONS
   ========================================================= */

document
  .querySelectorAll("[data-location]")
  .forEach(button => {

    button.addEventListener(
      "click",
      function() {

        const location =
          clean(this.dataset.location);

        if (searchInput) {
          searchInput.value = "";
        }

        if (locationFilter) {
          locationFilter.value =
            location;
        }

        if (topLocation) {
          topLocation.value =
            location;
        }

        applyFilters();

        document
          .getElementById("businesses")
          ?.scrollIntoView({
            behavior: "smooth"
          });
      }
    );

  });


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearAllFilters() {

  if (searchInput) {
    searchInput.value = "";
  }

  if (locationFilter) {
    locationFilter.value = "all";
  }

  if (topLocation) {
    topLocation.value = "all";
  }

  renderBusinesses(
    businesses
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
      ? `⭐ ${business.rating} (${business.reviews} reviews)`
      : "⭐ Public listing";

  modalBody.innerHTML = `

    <div class="modal-business">

      <div class="modal-icon">
        ${escapeHTML(
          business.icon
        )}
      </div>

      <span class="business-category">
        ${escapeHTML(
          business.category
        )}
      </span>

      <h2>
        ${escapeHTML(
          business.name
        )}
      </h2>

      <p>
        📍 ${escapeHTML(
          business.city
        )},
        ${escapeHTML(
          business.province
        )}
      </p>

      <p>
        ${rating}
      </p>

      <p>
        🕒 ${escapeHTML(
          business.hours
        )}
      </p>

      <p>
        ${escapeHTML(
          business.description
        )}
      </p>

      <div class="modal-actions">

        <a
          class="btn"
          href="tel:${cleanPhone(
            business.phone
          )}">
          📞 Call
        </a>

        <a
          class="btn"
          href="${whatsappURL(
            business.phone,
            `Hello ${business.name}, I found your business on ${HUB_NAME}.`
          )}"
          target="_blank"
          rel="noopener">
          💬 WhatsApp
        </a>

        <a
          class="btn"
          href="${mapsURL(
            business.name,
            business.city
          )}"
          target="_blank"
          rel="noopener">
          📍 Directions
        </a>

        <button
          class="btn"
          type="button"
          data-modal-favorite="${business.id}">
          ${
            favorite
              ? "♥ Remove Favorite"
              : "♡ Add Favorite"
          }
        </button>

        <button
          class="btn"
          type="button"
          data-claim="${business.id}">
          ✓ Claim Business
        </button>

      </div>

    </div>

  `;

  businessModal.classList.add(
    "open"
  );

  businessModal.setAttribute(
    "aria-hidden",
    "false"
  );
}


function closeBusinessModal() {

  if (!businessModal) {
    return;
  }

  businessModal.classList.remove(
    "open"
  );

  businessModal.setAttribute(
    "aria-hidden",
    "true"
  );
}


/* =========================================================
   BUSINESS BUTTON ACTIONS
   ========================================================= */

document.addEventListener(
  "click",
  function(event) {

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

      toggleFavorite(
        modalFavorite.dataset.modalFavorite
      );

      openBusinessModal(
        modalFavorite.dataset.modalFavorite
      );

      return;
    }


    const claimButton =
      event.target.closest(
        "[data-claim]"
      );

    if (claimButton) {

      const business =
        businesses.find(
          item =>
            Number(item.id) ===
            Number(
              claimButton.dataset.claim
            )
        );

      if (business) {

        const message =
          `Hello ${HUB_NAME}! I would like to claim the listing for ${business.name} in ${business.city}.`;

        window.open(
          whatsappURL(
            HUB_WHATSAPP,
            message
          ),
          "_blank"
        );
      }

      return;
    }


    if (
      event.target.matches(
        "[data-close-modal]"
      )
    ) {

      closeBusinessModal();

      return;
    }


    if (
      event.target.matches(
        "[data-close-listing]"
      )
    ) {

      closeListingModal();

      return;
    }


    if (
      event.target ===
      businessModal
    ) {

      closeBusinessModal();

      return;
    }


    if (
      event.target ===
      listingModal
    ) {

      closeListingModal();

      return;
    }

  }
);


/* =========================================================
   LISTING MODAL
   ========================================================= */

function openListingModal() {

  if (!listingModal) {
    return;
  }

  listingModal.classList.add(
    "open"
  );

  listingModal.setAttribute(
    "aria-hidden",
    "false"
  );
}


function closeListingModal() {

  if (!listingModal) {
    return;
  }

  listingModal.classList.remove(
    "open"
  );

  listingModal.setAttribute(
    "aria-hidden",
    "true"
  );
}


if (openListing) {

  openListing.addEventListener(
    "click",
    function(event) {

      event.preventDefault();

      openListingModal();

    }
  );
}


/* =========================================================
   LIST YOUR BUSINESS FORM
   ========================================================= */

if (listingForm) {

  listingForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const name =
        document
          .getElementById(
            "ownerBusiness"
          )
          ?.value.trim() || "";

      const category =
        document
          .getElementById(
            "ownerCategory"
          )
          ?.value.trim() || "";

      const location =
        document
          .getElementById(
            "ownerLocation"
          )
          ?.value.trim() || "";

      const businessPhone =
        document
          .getElementById(
            "ownerPhone"
          )
          ?.value.trim() || "";

      const description =
        document
          .getElementById(
            "ownerDescription"
          )
          ?.value.trim() || "";


      if (
        !name ||
        !category ||
        !location ||
        !businessPhone
      ) {

        if (listingMessage) {

          listingMessage.textContent =
            "Please complete all required fields.";

        }

        return;
      }


      const message =
`Hello ${HUB_NAME}!

I would like to list my business.

Business: ${name}
Category: ${category}
Location: ${location}
Phone: ${businessPhone}
Description: ${description || "Not provided"}`;


      if (listingMessage) {

        listingMessage.textContent =
          "Opening WhatsApp...";

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
   MOBILE MENU
   ========================================================= */

if (menuBtn) {

  menuBtn.addEventListener(
    "click",
    function() {

      if (!mobileNav) {
        return;
      }

      mobileNav.classList.toggle(
        "open"
      );

      menuBtn.setAttribute(
        "aria-expanded",
        mobileNav.classList.contains(
          "open"
        )
          ? "true"
          : "false"
      );

    }
  );

}


document
  .querySelectorAll(
    "#mobileNav a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      function() {

        mobileNav?.classList.remove(
          "open"
        );

      }
    );

  });


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  function(event) {

    if (event.key !== "Escape") {
      return;
    }

    closeBusinessModal();

    closeListingModal();

    mobileNav?.classList.remove(
      "open"
    );

  }
);


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

document
  .querySelectorAll(
    ".desktop-nav a, #mobileNav a"
  )
  .forEach(link => {

    link.addEventListener(
      "click",
      function() {

        document
          .querySelectorAll(
            ".desktop-nav a, #mobileNav a"
          )
          .forEach(item => {

            item.classList.remove(
              "active"
            );

          });

        this.classList.add(
          "active"
        );

      }
    );

  });


/* =========================================================
   YEAR
   ========================================================= */

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   START
   ========================================================= */

renderBusinesses(
  businesses
);

console.log(
  "Zambia Business Hub loaded successfully."
);

console.log(
  `${businesses.length} businesses loaded.`
);

/* =========================================================
   END OF APP.JS
   ========================================================= */   ========================================================= */
