/* ==========================================
   ZAMBIA BUSINESS HUB V2.2
   ========================================== */


/*
   IMPORTANT
   ----------
   Replace this with YOUR WhatsApp number.

   Example:
   const HUB_WHATSAPP = "260971234567";
*/

const HUB_WHATSAPP = "260765054612";


/* ==========================================
   BUSINESS DATABASE
   ========================================== */

const businesses = [

  {
    id: 1,
    name: "Lusaka Fresh Kitchen",
    category: "Restaurant",
    location: "Lusaka",
    icon: "🍽️",
    description: "Fresh meals, local dishes and convenient dining in Lusaka.",
    phone: "260000000001",
    hours: "Open today • 08:00 – 21:00",
    featured: true,
    claimed: false
  },

  {
    id: 2,
    name: "Golden Beauty Salon",
    category: "Beauty",
    location: "Lusaka",
    icon: "💇",
    description: "Hair, beauty and personal care services.",
    phone: "260000000002",
    hours: "Open today • 08:00 – 18:00",
    featured: false,
    claimed: false
  },

  {
    id: 3,
    name: "Zambia Comfort Lodge",
    category: "Lodge",
    location: "Livingstone",
    icon: "🏨",
    description: "Comfortable accommodation for visitors and travellers.",
    phone: "260000000003",
    hours: "Open 24 hours",
    featured: true,
    claimed: false
  },

  {
    id: 4,
    name: "Copperbelt Business Solutions",
    category: "Services",
    location: "Kitwe",
    icon: "🛠️",
    description: "Professional business support and digital services.",
    phone: "260000000004",
    hours: "Open today • 08:00 – 17:00",
    featured: false,
    claimed: false
  },

  {
    id: 5,
    name: "Lusaka Style Boutique",
    category: "Shopping",
    location: "Lusaka",
    icon: "🛍️",
    description: "Fashion, clothing and lifestyle products.",
    phone: "260000000005",
    hours: "Open today • 09:00 – 18:00",
    featured: true,
    claimed: false
  },

  {
    id: 6,
    name: "Focus Zambia Photography",
    category: "Photography",
    location: "Lusaka",
    icon: "📸",
    description: "Photography for events, portraits and businesses.",
    phone: "260000000006",
    hours: "By appointment",
    featured: false,
    claimed: false
  },

  {
    id: 7,
    name: "Ndola Transport Services",
    category: "Transport",
    location: "Ndola",
    icon: "🚗",
    description: "Local transport and travel services.",
    phone: "260000000007",
    hours: "Open today • 06:00 – 22:00",
    featured: false,
    claimed: false
  },

  {
    id: 8,
    name: "Kabwe Food Corner",
    category: "Restaurant",
    location: "Kabwe",
    icon: "🍔",
    description: "Affordable meals, snacks and refreshments.",
    phone: "260000000008",
    hours: "Open today • 07:00 – 20:00",
    featured: false,
    claimed: false
  },

  {
    id: 9,
    name: "Chingola Beauty Studio",
    category: "Beauty",
    location: "Chingola",
    icon: "💅",
    description: "Beauty treatments, styling and personal care.",
    phone: "260000000009",
    hours: "Open today • 08:00 – 18:00",
    featured: false,
    claimed: false
  },

  {
    id: 10,
    name: "Livingstone Travel Lodge",
    category: "Lodge",
    location: "Livingstone",
    icon: "🛏️",
    description: "Accommodation and travel-friendly services.",
    phone: "260000000010",
    hours: "Open 24 hours",
    featured: true,
    claimed: false
  },

  {
    id: 11,
    name: "Smart Digital Zambia",
    category: "Services",
    location: "Lusaka",
    icon: "💻",
    description: "Web design, digital solutions and business technology.",
    phone: "260000000011",
    hours: "Open today • 08:00 – 17:00",
    featured: true,
    claimed: false
  },

  {
    id: 12,
    name: "Zambia Home Store",
    category: "Shopping",
    location: "Lusaka",
    icon: "🏪",
    description: "Home products, household items and everyday essentials.",
    phone: "260000000012",
    hours: "Open today • 08:00 – 18:00",
    featured: false,
    claimed: false
  }

];


/* ==========================================
   STATE
   ========================================== */

let activeFilter = "all";
let searchTerm = "";
let selectedLocation = "all";


/* ==========================================
   ELEMENTS
   ========================================== */

const businessGrid =
  document.getElementById("businessGrid");

const emptyState =
  document.getElementById("emptyState");

const searchInput =
  document.getElementById("searchInput");

const searchButton =
  document.getElementById("searchButton");

const locationFilter =
  document.getElementById("locationFilter");

const businessCount =
  document.getElementById("businessCount");

const clearButton =
  document.getElementById("clearButton");

const mobileNav =
  document.getElementById("mobileNav");

const menuButton =
  document.getElementById("menuButton");

const businessModal =
  document.getElementById("businessModal");

const modalContent =
  document.getElementById("modalContent");

const modalClose =
  document.getElementById("modalClose");

const modalBackground =
  document.getElementById("modalBackground");


/* ==========================================
   WHATSAPP HUB
   ========================================== */

function openHubWhatsApp(message) {

  if (HUB_WHATSAPP === "260000000000") {

    alert(
      "Please add your real Zambia Business Hub WhatsApp number in app.js."
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


/* ==========================================
   BUSINESS WHATSAPP
   ========================================== */

function openBusinessWhatsApp(business) {

  const message =
    `Hello ${business.name}. I found your business on Zambia Business Hub and would like more information.`;

  const url =
    "https://wa.me/" +
    business.phone +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}


/* ==========================================
   CLAIM BUSINESS
   ========================================== */

function claimBusiness(business) {

  const message =
`Hello Zambia Business Hub 👋

I would like to claim/update my business listing.

Business:
${business.name}

Category:
${business.category}

Location:
${business.location}

Please let me know how I can verify and update this listing.

Thank you.`;

  openHubWhatsApp(message);
}


/* ==========================================
   FILTER BUSINESSES
   ========================================== */

function getFilteredBusinesses() {

  return businesses.filter(business => {

    const categoryMatch =
      activeFilter === "all" ||
      business.category === activeFilter;

    const locationMatch =
      selectedLocation === "all" ||
      business.location === selectedLocation;

    const searchableText =
      (
        business.name +
        " " +
        business.category +
        " " +
        business.location +
        " " +
        business.description
      ).toLowerCase();

    const searchMatch =
      searchableText.includes(
        searchTerm.toLowerCase()
      );

    return (
      categoryMatch &&
      locationMatch &&
      searchMatch
    );

  });

}


/* ==========================================
   CREATE BUSINESS CARD
   ========================================== */

function createBusinessCard(business) {

  const card =
    document.createElement("article");

  card.className = "business-card";

  card.innerHTML = `

    <div class="card-top">

      <div class="card-icon">
        ${business.icon}
      </div>

      <div class="badges">

        ${
          business.featured
            ? `<span class="featured-badge">★ FEATURED</span>`
            : ""
        }

        ${
          !business.claimed
            ? `<span class="unclaimed-badge">UNCLAIMED</span>`
            : ""
        }

      </div>

    </div>


    <h3>${business.name}</h3>

    <div class="card-category">
      ${business.category}
    </div>

    <div class="card-location">
      📍 ${business.location}, Zambia
    </div>

    <p class="card-description">
      ${business.description}
    </p>

    <div class="card-hours">
      🕐 ${business.hours}
    </div>


    <div class="card-actions">

      <a
        class="call"
        href="tel:+${business.phone}"
      >
        📞 Call
      </a>

      <button
        class="whatsapp"
        onclick="event.stopPropagation(); openBusinessWhatsApp(businesses.find(b => b.id === ${business.id}))"
      >
        💬 WhatsApp
      </button>

    </div>


    <button
      class="claim"
      onclick="event.stopPropagation(); claimBusiness(businesses.find(b => b.id === ${business.id}))"
    >
      ✏️ Claim / Update this business
    </button>

  `;


  card.addEventListener(
    "click",
    () => openModal(business)
  );


  businessGrid.appendChild(card);

}


/* ==========================================
   RENDER
   ========================================== */

function renderBusinesses() {

  businessGrid.innerHTML = "";

  const results =
    getFilteredBusinesses();

  results.forEach(
    business => createBusinessCard(business)
  );


  if (results.length === 0) {

    emptyState.classList.add("show");

  } else {

    emptyState.classList.remove("show");

  }

}


/* ==========================================
   SEARCH
   ========================================== */

function performSearch() {

  searchTerm =
    searchInput.value.trim();

  selectedLocation =
    locationFilter.value;

  activeFilter = "all";

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.remove("active");

      if (
        button.dataset.filter === "all"
      ) {
        button.classList.add("active");
      }

    });

  renderBusinesses();

  document
    .getElementById("businesses")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* ==========================================
   SEARCH EVENTS
   ========================================== */

searchButton.addEventListener(
  "click",
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


locationFilter.addEventListener(
  "change",
  () => {

    selectedLocation =
      locationFilter.value;

    renderBusinesses();

  }
);


/* ==========================================
   FILTER BUTTONS
   ========================================== */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(btn =>
            btn.classList.remove("active")
          );

        button.classList.add("active");

        activeFilter =
          button.dataset.filter;

        renderBusinesses();

      }
    );

  });


/* ==========================================
   CATEGORY BUTTONS
   ========================================== */

document
  .querySelectorAll(
    ".category-card, .quick-links button"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        activeFilter =
          button.dataset.category;

        searchTerm = "";

        searchInput.value = "";

        document
          .querySelectorAll(".filter")
          .forEach(filter => {

            filter.classList.remove("active");

            if (
              filter.dataset.filter ===
              activeFilter
            ) {
              filter.classList.add("active");
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


/* ==========================================
   CLEAR
   ========================================== */

clearButton.addEventListener(
  "click",
  () => {

    activeFilter = "all";
    searchTerm = "";
    selectedLocation = "all";

    searchInput.value = "";

    locationFilter.value = "all";

    document
      .querySelectorAll(".filter")
      .forEach(button => {

        button.classList.remove("active");

        if (
          button.dataset.filter === "all"
        ) {
          button.classList.add("active");
        }

      });

    renderBusinesses();

  }
);


/* ==========================================
   VIEW ALL
   ========================================== */

document
  .getElementById("showAll")
  .addEventListener(
    "click",
    () => {

      activeFilter = "all";
      searchTerm = "";
      selectedLocation = "all";

      searchInput.value = "";
      locationFilter.value = "all";

      document
        .querySelectorAll(".filter")
        .forEach(button => {

          button.classList.remove("active");

          if (
            button.dataset.filter === "all"
          ) {
            button.classList.add("active");
          }

        });

      renderBusinesses();

    }
  );


/* ==========================================
   MOBILE MENU
   ========================================== */

menuButton.addEventListener(
  "click",
  () => {

    mobileNav.classList.toggle("show");

  }
);


document
  .querySelectorAll(".mobile-nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mobileNav.classList.remove("show");

      }
    );

  });


/* ==========================================
   HEADER SEARCH
   ========================================== */

document
  .getElementById("headerSearchBtn")
  .addEventListener(
    "click",
    () => {

      document
        .getElementById("home")
        .scrollIntoView({
          behavior: "smooth"
        });

      setTimeout(
        () => searchInput.focus(),
        500
      );

    }
  );


/* ==========================================
   BUSINESS FORM
   ========================================== */

document
  .getElementById("businessForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const name =
        document
          .getElementById("businessName")
          .value.trim();

      const category =
        document
          .getElementById("businessCategory")
          .value;

      const city =
        document
          .getElementById("businessCity")
          .value.trim();

      const phone =
        document
          .getElementById("businessPhone")
          .value.trim();

      const description =
        document
          .getElementById("businessDescription")
          .value.trim();


      const message =
`Hello Zambia Business Hub 👋

I would like to list my business.

Business:
${name}

Category:
${category}

City/Town:
${city}

Phone/WhatsApp:
${phone}

Description:
${description}

Please let me know the next steps.`;

      openHubWhatsApp(message);

    }
  );


/* ==========================================
   MODAL
   ========================================== */

function openModal(business) {

  modalContent.innerHTML = `

    <div class="modal-icon">
      ${business.icon}
    </div>

    <h2>${business.name}</h2>

    <div class="modal-category">
      ${business.category}
    </div>

    <div class="modal-info">

      <p>
        📍 ${business.location}, Zambia
      </p>

      <p>
        📞 +${business.phone}
      </p>

      <p>
        🕐 ${business.hours}
      </p>

      <p style="margin-top:15px;">
        ${business.description}
      </p>

      ${
        !business.claimed
          ? `
            <p style="
              margin-top:18px;
              padding:12px;
              background:#fff7df;
              border-radius:9px;
              color:#725900;
              font-size:13px;
            ">
              ℹ️ This business has not yet claimed
              this listing.
            </p>
          `
          : ""
      }

    </div>


    <div class="modal-actions">

      <a
        class="call"
        href="tel:+${business.phone}"
      >
        📞 Call
      </a>

      <button
        class="whatsapp"
        onclick="openBusinessWhatsApp(businesses.find(b => b.id === ${business.id}))"
      >
        💬 WhatsApp
      </button>

      <button
        class="modal-claim"
        onclick="claimBusiness(businesses.find(b => b.id === ${business.id}))"
      >
        ✏️ Claim / Update this Business
      </button>

    </div>

  `;

  businessModal.classList.add("show");

}


function closeModal() {

  businessModal.classList.remove("show");

}


modalClose.addEventListener(
  "click",
  closeModal
);


modalBackground.addEventListener(
  "click",
  closeModal
);


/* ==========================================
   INITIALIZE
   ========================================== */

businessCount.textContent =
  businesses.length + "+";

renderBusinesses();
