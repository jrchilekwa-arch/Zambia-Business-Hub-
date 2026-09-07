/* =====================================================
   ZAMBIA BUSINESS HUB V2
   ===================================================== */


/* =====================================================
   BUSINESS DATA

   These are DEMO businesses.
   Replace them with real businesses and publicly
   available contact details before publishing.
   ===================================================== */

const businesses = [

  {
    id: 1,
    name: "Lusaka Fresh Kitchen",
    category: "Restaurant",
    location: "Lusaka",
    description:
      "Fresh meals, takeaway food and family dining.",
    phone: "260970000001",
    icon: "🍴",
    featured: true
  },

  {
    id: 2,
    name: "Golden Beauty Salon",
    category: "Beauty",
    location: "Lusaka",
    description:
      "Hair styling, beauty treatments and personal care.",
    phone: "260970000002",
    icon: "💇",
    featured: true
  },

  {
    id: 3,
    name: "Victoria Falls Lodge",
    category: "Lodge",
    location: "Livingstone",
    description:
      "Comfortable accommodation for visitors and travellers.",
    phone: "260970000003",
    icon: "🏨",
    featured: true
  },

  {
    id: 4,
    name: "Copperbelt Auto Services",
    category: "Services",
    location: "Kitwe",
    description:
      "Vehicle servicing, repairs and diagnostics.",
    phone: "260970000004",
    icon: "🚗",
    featured: false
  },

  {
    id: 5,
    name: "Lusaka Digital Studio",
    category: "Technology",
    location: "Lusaka",
    description:
      "Web design, branding and digital services.",
    phone: "260970000005",
    icon: "💻",
    featured: true
  },

  {
    id: 6,
    name: "Ndola Grill House",
    category: "Restaurant",
    location: "Ndola",
    description:
      "Grilled food, drinks and family dining.",
    phone: "260970000006",
    icon: "🍔",
    featured: false
  },

  {
    id: 7,
    name: "Kabwe Hair Studio",
    category: "Beauty",
    location: "Kabwe",
    description:
      "Professional hair styling and beauty services.",
    phone: "260970000007",
    icon: "💇‍♀️",
    featured: false
  },

  {
    id: 8,
    name: "Livingstone Tours",
    category: "Tourism",
    location: "Livingstone",
    description:
      "Tours, travel activities and local experiences.",
    phone: "260970000008",
    icon: "🦁",
    featured: true
  },

  {
    id: 9,
    name: "Kitwe Tech Solutions",
    category: "Technology",
    location: "Kitwe",
    description:
      "Computer repairs, software and IT support.",
    phone: "260970000009",
    icon: "🖥️",
    featured: false
  },

  {
    id: 10,
    name: "Chipata Local Services",
    category: "Services",
    location: "Chipata",
    description:
      "Local professional and household services.",
    phone: "260970000010",
    icon: "🛠️",
    featured: false
  },

  {
    id: 11,
    name: "Kabwe Family Restaurant",
    category: "Restaurant",
    location: "Kabwe",
    description:
      "Affordable meals for families and groups.",
    phone: "260970000011",
    icon: "🍽️",
    featured: false
  },

  {
    id: 12,
    name: "Lusaka Business Lodge",
    category: "Lodge",
    location: "Lusaka",
    description:
      "Convenient accommodation for business and leisure.",
    phone: "260970000012",
    icon: "🏨",
    featured: false
  }

];


/* =====================================================
   CATEGORY DATA
   ===================================================== */

const categories = [

  {
    name: "Restaurants",
    category: "Restaurant",
    icon: "🍴",
    description: "Food & dining"
  },

  {
    name: "Beauty",
    category: "Beauty",
    icon: "💇",
    description: "Salons & beauty"
  },

  {
    name: "Lodges",
    category: "Lodge",
    icon: "🏨",
    description: "Hotels & accommodation"
  },

  {
    name: "Services",
    category: "Services",
    icon: "🛠️",
    description: "Local services"
  },

  {
    name: "Technology",
    category: "Technology",
    icon: "💻",
    description: "IT & digital"
  },

  {
    name: "Tourism",
    category: "Tourism",
    icon: "🦁",
    description: "Tours & travel"
  },

  {
    name: "Shopping",
    category: "Shopping",
    icon: "🛍️",
    description: "Shops & stores"
  },

  {
    name: "Automotive",
    category: "Automotive",
    icon: "🚗",
    description: "Cars & repairs"
  }

];


/* =====================================================
   DOM ELEMENTS
   ===================================================== */

const businessGrid =
  document.getElementById("businessGrid");

const categoryGrid =
  document.getElementById("categoryGrid");

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const locationFilter =
  document.getElementById("locationFilter");

const emptyState =
  document.getElementById("emptyState");

const resultsText =
  document.getElementById("resultsText");

const businessCount =
  document.getElementById("businessCount");

const categoryCount =
  document.getElementById("categoryCount");

const locationCount =
  document.getElementById("locationCount");

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");

const year =
  document.getElementById("year");

const modal =
  document.getElementById("businessModal");

const modalBody =
  document.getElementById("modalBody");

const modalClose =
  document.getElementById("modalClose");

const modalOverlay =
  document.getElementById("modalOverlay");


/* =====================================================
   CURRENT FILTER
   ===================================================== */

let currentCategory = "All";


/* =====================================================
   STATS
   ===================================================== */

const uniqueLocations =
  [...new Set(
    businesses.map(
      business => business.location
    )
  )];

businessCount.textContent =
  businesses.length;

categoryCount.textContent =
  categories.length;

locationCount.textContent =
  uniqueLocations.length;

year.textContent =
  new Date().getFullYear();


/* =====================================================
   RENDER CATEGORIES
   ===================================================== */

function renderCategories() {

  categoryGrid.innerHTML = "";

  categories.forEach(category => {

    const card =
      document.createElement("button");

    card.className =
      "category-card";

    card.type = "button";

    card.innerHTML = `

      <div class="category-icon">
        ${category.icon}
      </div>

      <h3>
        ${category.name}
      </h3>

      <p>
        ${category.description}
      </p>

    `;

    card.addEventListener(
      "click",
      () => {

        currentCategory =
          category.category;

        updateFilterButtons();

        renderBusinesses();

        document
          .getElementById("businesses")
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

    categoryGrid.appendChild(card);

  });

}


/* =====================================================
   CREATE BUSINESS CARD
   ===================================================== */

function createBusinessCard(business) {

  const card =
    document.createElement("article");

  card.className =
    "business-card";

  const message =
    encodeURIComponent(
      `Hello ${business.name}, I found your business on Zambia Business Hub.`
    );

  card.innerHTML = `

    <div class="business-cover">

      ${
        business.featured
          ? `<span class="featured-tag">⭐ Featured</span>`
          : ""
      }

      <div class="business-icon">
        ${business.icon}
      </div>

    </div>

    <div class="business-info">

      <span class="business-category">
        ${business.category}
      </span>

      <h3>
        ${business.name}
      </h3>

      <div class="business-location">
        📍 ${business.location}
      </div>

      <p class="business-description">
        ${business.description}
      </p>

      <div class="business-actions">

        <button
          class="details-btn"
          data-id="${business.id}"
        >
          View
        </button>

        <a
          class="call-btn"
          href="tel:+${business.phone}"
        >
          📞 Call
        </a>

        <a
          class="whatsapp-btn"
          href="https://wa.me/${business.phone}?text=${message}"
          target="_blank"
          rel="noopener"
        >
          💬
        </a>

      </div>

    </div>

  `;

  const detailsButton =
    card.querySelector(".details-btn");

  detailsButton.addEventListener(
    "click",
    () => openBusinessModal(business)
  );

  return card;

}


/* =====================================================
   FILTER + SEARCH
   ===================================================== */

function getFilteredBusinesses() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  const selectedLocation =
    locationFilter.value;


  return businesses.filter(
    business => {

      const matchesCategory =
        currentCategory === "All" ||
        business.category === currentCategory;


      const matchesLocation =
        selectedLocation === "All" ||
        business.location === selectedLocation;


      const searchableText = `

        ${business.name}
        ${business.category}
        ${business.location}
        ${business.description}

      `.toLowerCase();


      const matchesSearch =
        !query ||
        searchableText.includes(query);


      return (
        matchesCategory &&
        matchesLocation &&
        matchesSearch
      );

    }
  );

}


/* =====================================================
   RENDER BUSINESSES
   ===================================================== */

function renderBusinesses() {

  const results =
    getFilteredBusinesses();

  businessGrid.innerHTML = "";


  if (results.length === 0) {

    emptyState.style.display =
      "block";

    resultsText.textContent =
      "No matching businesses found.";

    return;

  }


  emptyState.style.display =
    "none";


  resultsText.textContent =
    `${results.length} business${
      results.length === 1 ? "" : "es"
    } found`;


  results.forEach(
    business => {

      businessGrid.appendChild(
        createBusinessCard(business)
      );

    }
  );

}


/* =====================================================
   UPDATE CATEGORY BUTTONS
   ===================================================== */

function updateFilterButtons() {

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === currentCategory
      );

    });

}


/* =====================================================
   FILTER BUTTONS
   ===================================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentCategory =
          button.dataset.filter;

        updateFilterButtons();

        renderBusinesses();

      }
    );

  });


/* =====================================================
   SEARCH
   ===================================================== */

function performSearch() {

  renderBusinesses();

}


searchBtn.addEventListener(
  "click",
  performSearch
);


searchInput.addEventListener(
  "input",
  performSearch
);


searchInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      performSearch();

    }

  }
);


/* =====================================================
   LOCATION
   ===================================================== */

locationFilter.addEventListener(
  "change",
  renderBusinesses
);


/* =====================================================
   QUICK CATEGORY BUTTONS
   ===================================================== */

document
  .querySelectorAll(".quick-links button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        currentCategory =
          button.dataset.category;

        updateFilterButtons();

        renderBusinesses();

        document
          .getElementById("businesses")
          .scrollIntoView({
            behavior: "smooth"
          });

      }
    );

  });


/* =====================================================
   VIEW ALL
   ===================================================== */

document
  .getElementById("showAllBtn")
  .addEventListener(
    "click",
    () => {

      currentCategory = "All";

      searchInput.value = "";

      locationFilter.value = "All";

      updateFilterButtons();

      renderBusinesses();

    }
  );


/* =====================================================
   RESET
   ===================================================== */

document
  .getElementById("resetBtn")
  .addEventListener(
    "click",
    () => {

      currentCategory = "All";

      searchInput.value = "";

      locationFilter.value = "All";

      updateFilterButtons();

      renderBusinesses();

    }
  );


/* =====================================================
   BUSINESS MODAL
   ===================================================== */

function openBusinessModal(business) {

  const message =
    encodeURIComponent(
      `Hello ${business.name}, I found your business on Zambia Business Hub.`
    );


  modalBody.innerHTML = `

    <div class="modal-business-icon">
      ${business.icon}
    </div>

    <span class="business-category">
      ${business.category}
    </span>

    <h2>
      ${business.name}
    </h2>

    <div class="modal-meta">
      📍 ${business.location}
    </div>

    <p class="modal-description">
      ${business.description}
    </p>

    ${
      business.featured
        ? `
          <p>
            ⭐ This is a featured listing.
          </p>
        `
        : ""
    }

    <div class="modal-buttons">

      <a
        class="modal-call"
        href="tel:+${business.phone}"
      >
        📞 Call Business
      </a>

      <a
        class="modal-whatsapp"
        href="https://wa.me/${business.phone}?text=${message}"
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>

    </div>

  `;


  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

}


/* =====================================================
   CLOSE MODAL
   ===================================================== */

function closeModal() {

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    "";

}


modalClose.addEventListener(
  "click",
  closeModal
);


modalOverlay.addEventListener(
  "click",
  closeModal
);


document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("show")
    ) {

      closeModal();

    }

  }
);


/* =====================================================
   MOBILE MENU
   ===================================================== */

menuBtn.addEventListener(
  "click",
  () => {

    navMenu.classList.toggle("open");

  }
);


document
  .querySelectorAll("#navMenu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        navMenu.classList.remove("open");

      }
    );

  });


/* =====================================================
   LIST YOUR BUSINESS FORM
   ===================================================== */

/*
   IMPORTANT:
   Replace this number with YOUR actual Zambia
   Business Hub WhatsApp number.

   Format:
   260XXXXXXXXX

   Do not put +, spaces or brackets.
*/

const HUB_WHATSAPP =
  "260000000000";


document
  .getElementById("listingForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const businessName =
        document
          .getElementById("ownerBusiness")
          .value
          .trim();


      const category =
        document
          .getElementById("ownerCategory")
          .value;


      const city =
        document
          .getElementById("ownerCity")
          .value
          .trim();


      const phone =
        document
          .getElementById("ownerPhone")
          .value
          .trim();


      const description =
        document
          .getElementById("ownerDescription")
          .value
          .trim();


      const message = encodeURIComponent(`

Hello Zambia Business Hub!

I would like to list my business.

Business Name:
${businessName}

Category:
${category}

City:
${city}

Phone / WhatsApp:
${phone}

Description:
${description}

Please let me know the next steps.

      `);


      const whatsappURL =
        `https://wa.me/${HUB_WHATSAPP}?text=${message}`;


      window.open(
        whatsappURL,
        "_blank"
      );

    }
  );


/* =====================================================
   START WEBSITE
   ===================================================== */

renderCategories();

renderBusinesses();
