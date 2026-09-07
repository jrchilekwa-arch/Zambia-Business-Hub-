/* =========================================
   ZAMBIA BUSINESS HUB V2.1
   ========================================= */

/*
   IMPORTANT:
   Replace this number with YOUR WhatsApp number.

   Example:
   const HUB_WHATSAPP = "260971234567";
*/

const HUB_WHATSAPP = "260765054612";


/* =========================================
   BUSINESS DATA
   ========================================= */

const businesses = [

  {
    id: 1,
    name: "Lusaka Fresh Kitchen",
    category: "Restaurant",
    location: "Lusaka",
    icon: "🍽️",
    description:
      "Fresh meals, local dishes and convenient dining in Lusaka.",
    phone: "260000000001",
    unclaimed: true
  },

  {
    id: 2,
    name: "Golden Beauty Salon",
    category: "Beauty",
    location: "Lusaka",
    icon: "💇",
    description:
      "Hair, beauty and personal care services.",
    phone: "260000000002",
    unclaimed: true
  },

  {
    id: 3,
    name: "Zambia Comfort Lodge",
    category: "Lodge",
    location: "Livingstone",
    icon: "🏨",
    description:
      "Comfortable accommodation for visitors and travellers.",
    phone: "260000000003",
    unclaimed: true
  },

  {
    id: 4,
    name: "Copperbelt Business Solutions",
    category: "Services",
    location: "Kitwe",
    icon: "🛠️",
    description:
      "Professional business support and digital services.",
    phone: "260000000004",
    unclaimed: true
  },

  {
    id: 5,
    name: "Lusaka Style Boutique",
    category: "Shopping",
    location: "Lusaka",
    icon: "🛍️",
    description:
      "Fashion, clothing and lifestyle products.",
    phone: "260000000005",
    unclaimed: true
  },

  {
    id: 6,
    name: "Focus Zambia Photography",
    category: "Photography",
    location: "Lusaka",
    icon: "📸",
    description:
      "Photography services for events, portraits and businesses.",
    phone: "260000000006",
    unclaimed: true
  },

  {
    id: 7,
    name: "Ndola Transport Services",
    category: "Transport",
    location: "Ndola",
    icon: "🚗",
    description:
      "Local transport and travel services.",
    phone: "260000000007",
    unclaimed: true
  },

  {
    id: 8,
    name: "Kabwe Food Corner",
    category: "Restaurant",
    location: "Kabwe",
    icon: "🍔",
    description:
      "Affordable meals, snacks and refreshments.",
    phone: "260000000008",
    unclaimed: true
  },

  {
    id: 9,
    name: "Chingola Beauty Studio",
    category: "Beauty",
    location: "Chingola",
    icon: "💅",
    description:
      "Beauty treatments, styling and personal care.",
    phone: "260000000009",
    unclaimed: true
  },

  {
    id: 10,
    name: "Livingstone Travel Lodge",
    category: "Lodge",
    location: "Livingstone",
    icon: "🛏️",
    description:
      "Accommodation and travel-friendly services.",
    phone: "260000000010",
    unclaimed: true
  },

  {
    id: 11,
    name: "Smart Digital Zambia",
    category: "Services",
    location: "Lusaka",
    icon: "💻",
    description:
      "Web design, digital solutions and business technology.",
    phone: "260000000011",
    unclaimed: true
  },

  {
    id: 12,
    name: "Zambia Home Store",
    category: "Shopping",
    location: "Lusaka",
    icon: "🏪",
    description:
      "Home products, household items and everyday essentials.",
    phone: "260000000012",
    unclaimed: true
  }

];


/* =========================================
   VARIABLES
   ========================================= */

let currentFilter = "all";
let currentSearch = "";
let currentLocation = "all";

const businessGrid =
  document.getElementById("businessGrid");

const emptyState =
  document.getElementById("emptyState");

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const locationFilter =
  document.getElementById("locationFilter");

const clearSearch =
  document.getElementById("clearSearch");

const businessCount =
  document.getElementById("businessCount");


/* =========================================
   WHATSAPP
   ========================================= */

function openWhatsApp(message) {

  if (
    !HUB_WHATSAPP ||
    HUB_WHATSAPP === "260000000000"
  ) {
    alert(
      "Please add your Zambia Business Hub WhatsApp number in app.js first."
    );

    return;
  }

  const url =
    "https://wa.me/" +
    HUB_WHATSAPP +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}


/* =========================================
   BUSINESS WHATSAPP
   ========================================= */

function businessWhatsApp(business) {

  const message =
    `Hello ${business.name}, I found your business on Zambia Business Hub.`;

  if (!business.phone) {
    openWhatsApp(
      `Hello Zambia Business Hub. I am interested in ${business.name}.`
    );

    return;
  }

  const url =
    "https://wa.me/" +
    business.phone +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}


/* =========================================
   CLAIM BUSINESS
   ========================================= */

function claimBusiness(business) {

  const message =
`Hello Zambia Business Hub 👋

I would like to claim/update the business listing for:

Business: ${business.name}
Category: ${business.category}
Location: ${business.location}

Please let me know what information you need from me.

Thank you.`;

  openWhatsApp(message);
}


/* =========================================
   CREATE BUSINESS CARD
   ========================================= */

function createBusinessCard(business) {

  const card =
    document.createElement("article");

  card.className = "business-card";

  card.innerHTML = `

    <div class="business-top">

      <div class="business-icon">
        ${business.icon}
      </div>

      ${
        business.unclaimed
          ? `<span class="unclaimed">UNCLAIMED</span>`
          : `<span class="unclaimed">LISTED</span>`
      }

    </div>

    <h3>${business.name}</h3>

    <span class="business-category">
      ${business.category}
    </span>

    <div class="business-location">
      📍 ${business.location}, Zambia
    </div>

    <p class="business-description">
      ${business.description}
    </p>

    <div class="business-actions">

      <a
        class="call-btn"
        href="tel:+${business.phone}"
      >
        📞 Call
      </a>

      <button
        class="whatsapp-btn"
        onclick="businessWhatsApp(${business.id})"
      >
        💬 WhatsApp
      </button>

    </div>

    <button
      class="claim-btn"
      onclick="claimBusiness(${business.id})"
    >
      ✏️ Claim / Update this business
    </button>

  `;

  businessGrid.appendChild(card);
}


/* =========================================
   RENDER BUSINESSES
   ========================================= */

function renderBusinesses() {

  businessGrid.innerHTML = "";

  const filtered =
    businesses.filter(business => {

      const matchesCategory =
        currentFilter === "all" ||
        business.category === currentFilter;

      const matchesLocation =
        currentLocation === "all" ||
        business.location === currentLocation;

      const searchText =
        (
          business.name +
          " " +
          business.category +
          " " +
          business.location +
          " " +
          business.description
        ).toLowerCase();

      const matchesSearch =
        searchText.includes(
          currentSearch.toLowerCase()
        );

      return (
        matchesCategory &&
        matchesLocation &&
        matchesSearch
      );

    });


  filtered.forEach(business => {

    createBusinessCard(business);

  });


  if (filtered.length === 0) {

    emptyState.classList.add("show");

  } else {

    emptyState.classList.remove("show");

  }

}


/* =========================================
   SEARCH
   ========================================= */

function performSearch() {

  currentSearch =
    searchInput.value.trim();

  currentLocation =
    locationFilter.value;

  currentFilter = "all";

  document
    .querySelectorAll(".filter-btn")
    .forEach(btn => {

      btn.classList.remove("active");

      if (btn.dataset.filter === "all") {
        btn.classList.add("active");
      }

    });

  renderBusinesses();

  document
    .getElementById("businesses")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================
   SEARCH EVENTS
   ========================================= */

searchBtn.addEventListener(
  "click",
  performSearch
);


searchInput.addEventListener(
  "keydown",
  function(event) {

    if (event.key === "Enter") {
      performSearch();
    }

  }
);


locationFilter.addEventListener(
  "change",
  function() {

    currentLocation =
      locationFilter.value;

    renderBusinesses();

  }
);


/* =========================================
   FILTER BUTTONS
   ========================================= */

document
  .querySelectorAll(".filter-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      function() {

        document
          .querySelectorAll(".filter-btn")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        this.classList.add("active");

        currentFilter =
          this.dataset.filter;

        renderBusinesses();

      }
    );

  });


/* =========================================
   CATEGORY BUTTONS
   ========================================= */

document
  .querySelectorAll(
    ".category-card, .quick-category"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      function() {

        currentFilter =
          this.dataset.category;

        currentSearch = "";

        searchInput.value = "";

        document
          .querySelectorAll(".filter-btn")
          .forEach(btn => {

            btn.classList.remove("active");

            if (
              btn.dataset.filter === currentFilter
            ) {
              btn.classList.add("active");
            }

          });

        renderBusinesses();

        document
          .getElementById("businesses")
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  });


/* =========================================
   CLEAR SEARCH
   ========================================= */

clearSearch.addEventListener(
  "click",
  function() {

    currentSearch = "";
    currentFilter = "all";
    currentLocation = "all";

    searchInput.value = "";
    locationFilter.value = "all";

    document
      .querySelectorAll(".filter-btn")
      .forEach(btn => {

        btn.classList.remove("active");

        if (btn.dataset.filter === "all") {
          btn.classList.add("active");
        }

      });

    renderBusinesses();

  }
);


/* =========================================
   MOBILE MENU
   ========================================= */

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");

menuBtn.addEventListener(
  "click",
  function() {

    navMenu.classList.toggle("show");

  }
);


document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      function() {

        navMenu.classList.remove("show");

      }
    );

  });


/* =========================================
   OWNER FORM SCROLL
   ========================================= */

const ownerBtn =
  document.getElementById("ownerBtn");

ownerBtn.addEventListener(
  "click",
  function() {

    document
      .getElementById("listingForm")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


/* =========================================
   BUSINESS FORM
   ========================================= */

const businessForm =
  document.getElementById("businessForm");

businessForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();

    const businessName =
      document
        .getElementById("ownerBusiness")
        .value.trim();

    const category =
      document
        .getElementById("ownerCategory")
        .value;

    const city =
      document
        .getElementById("ownerCity")
        .value.trim();

    const phone =
      document
        .getElementById("ownerPhone")
        .value.trim();

    const description =
      document
        .getElementById("ownerDescription")
        .value.trim();


    const message =
`Hello Zambia Business Hub 👋

I would like to list my business.

Business Name:
${businessName}

Category:
${category}

City/Town:
${city}

Phone/WhatsApp:
${phone}

Description:
${description}

Please let me know the next steps.`;

    openWhatsApp(message);

  }
);


/* =========================================
   MODAL
   ========================================= */

const modal =
  document.getElementById("businessModal");

const modalBody =
  document.getElementById("modalBody");

const modalClose =
  document.getElementById("modalClose");

const modalOverlay =
  document.getElementById("modalOverlay");


function openBusinessModal(id) {

  const business =
    businesses.find(
      item => item.id === id
    );

  if (!business) return;

  modalBody.innerHTML = `

    <div class="modal-business-icon">
      ${business.icon}
    </div>

    <h2>${business.name}</h2>

    <p class="business-category">
      ${business.category}
    </p>

    <div class="modal-info">

      <p>
        📍 ${business.location}, Zambia
      </p>

      <p>
        📞 +${business.phone}
      </p>

      <p style="margin-top:12px;">
        ${business.description}
      </p>

    </div>

    <div class="modal-buttons">

      <a
        class="modal-call"
        href="tel:+${business.phone}"
      >
        📞 Call
      </a>

      <button
        class="modal-whatsapp"
        onclick="businessWhatsApp(${business.id})"
      >
        💬 WhatsApp
      </button>

      <button
        class="modal-claim"
        onclick="claimBusiness(${business.id})"
      >
        ✏️ Claim / Update this Business
      </button>

    </div>

  `;

  modal.classList.add("show");

}


function closeBusinessModal() {

  modal.classList.remove("show");

}


modalClose.addEventListener(
  "click",
  closeBusinessModal
);

modalOverlay.addEventListener(
  "click",
  closeBusinessModal
);


/* =========================================
   MAKE CARD CLICKABLE
   ========================================= */

businessGrid.addEventListener(
  "click",
  function(event) {

    const card =
      event.target.closest(".business-card");

    if (!card) return;

    if (
      event.target.closest("a") ||
      event.target.closest("button")
    ) {
      return;
    }

    const cards =
      Array.from(
        businessGrid.children
      );

    const index =
      cards.indexOf(card);

    const visibleBusinesses =
      businesses.filter(business => {

        const matchesCategory =
          currentFilter === "all" ||
          business.category === currentFilter;

        const matchesLocation =
          currentLocation === "all" ||
          business.location === currentLocation;

        const searchText =
          (
            business.name +
            " " +
            business.category +
            " " +
            business.location +
            " " +
            business.description
          ).toLowerCase();

        const matchesSearch =
          searchText.includes(
            currentSearch.toLowerCase()
          );

        return (
          matchesCategory &&
          matchesLocation &&
          matchesSearch
        );

      });

    if (visibleBusinesses[index]) {

      openBusinessModal(
        visibleBusinesses[index].id
      );

    }

  }
);


/* =========================================
   INITIALIZE
   ========================================= */

businessCount.textContent =
  businesses.length + "+";

renderBusinesses();
