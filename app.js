/* ==========================================
   ZAMBIA BUSINESS HUB
   ========================================== */


/* BUSINESS DATA */

const businesses = [

  {
    name: "Lusaka Fresh Kitchen",
    category: "Restaurant",
    location: "Lusaka",
    description: "Fresh meals and takeaway food in Lusaka.",
    phone: "260970000001",
    icon: "🍴"
  },

  {
    name: "Copperbelt Auto Services",
    category: "Services",
    location: "Kitwe",
    description: "Vehicle servicing, repairs and diagnostics.",
    phone: "260970000002",
    icon: "🚗"
  },

  {
    name: "Golden Beauty Salon",
    category: "Beauty",
    location: "Lusaka",
    description: "Hair, beauty and personal care services.",
    phone: "260970000003",
    icon: "💇"
  },

  {
    name: "Victoria Falls Lodge",
    category: "Lodge",
    location: "Livingstone",
    description: "Comfortable accommodation for visitors.",
    phone: "260970000004",
    icon: "🏨"
  },

  {
    name: "Lusaka Digital Studio",
    category: "Services",
    location: "Lusaka",
    description: "Web design, branding and digital services.",
    phone: "260970000005",
    icon: "💻"
  },

  {
    name: "Ndola Grill House",
    category: "Restaurant",
    location: "Ndola",
    description: "Grilled food and family dining.",
    phone: "260970000006",
    icon: "🍔"
  },

  {
    name: "Kabwe Hair Studio",
    category: "Beauty",
    location: "Kabwe",
    description: "Professional hair styling and beauty services.",
    phone: "260970000007",
    icon: "💇‍♀️"
  },

  {
    name: "Livingstone Tours",
    category: "Tourism",
    location: "Livingstone",
    description: "Tours, activities and travel experiences.",
    phone: "260970000008",
    icon: "🦁"
  },

  {
    name: "Kitwe Tech Solutions",
    category: "Technology",
    location: "Kitwe",
    description: "Computer repairs, software and IT support.",
    phone: "260970000009",
    icon: "💻"
  }

];


/* CATEGORIES */

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
    description: "Accommodation"
  },

  {
    name: "Services",
    category: "Services",
    icon: "🛠️",
    description: "Local services"
  },

  {
    name: "Tourism",
    category: "Tourism",
    icon: "🦁",
    description: "Travel & tours"
  },

  {
    name: "Technology",
    category: "Technology",
    icon: "💻",
    description: "Tech & IT"
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


/* ELEMENTS */

const businessGrid =
  document.getElementById("businessGrid");

const categoryGrid =
  document.getElementById("categoryGrid");

const searchInput =
  document.getElementById("searchInput");

const searchBtn =
  document.getElementById("searchBtn");

const emptyState =
  document.getElementById("emptyState");

const businessCount =
  document.getElementById("businessCount");

const categoryCount =
  document.getElementById("categoryCount");

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");

const year =
  document.getElementById("year");


/* DISPLAY STATS */

businessCount.textContent = businesses.length;

categoryCount.textContent = categories.length;

year.textContent = new Date().getFullYear();


/* CREATE CATEGORY CARDS */

function renderCategories() {

  categoryGrid.innerHTML = "";

  categories.forEach(category => {

    const card =
      document.createElement("div");

    card.className = "category-card";

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

    card.addEventListener("click", () => {

      filterBusinesses(category.category);

      document
        .getElementById("businesses")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

    categoryGrid.appendChild(card);

  });

}


/* CREATE BUSINESS CARD */

function createBusinessCard(business) {

  const card =
    document.createElement("article");

  card.className = "business-card";

  const whatsappMessage =
    encodeURIComponent(
      `Hello ${business.name}, I found your business on Zambia Business Hub.`
    );

  card.innerHTML = `

    <div class="business-top">
      ${business.icon}
    </div>

    <div class="business-info">

      <span class="business-category">
        ${business.category}
      </span>

      <h3>
        ${business.name}
      </h3>

      <p>
        📍 ${business.location}
      </p>

      <p>
        ${business.description}
      </p>

      <div class="business-actions">

        <a
          href="tel:+${business.phone}"
          class="call-btn"
        >
          📞 Call
        </a>

        <a
          href="https://wa.me/${business.phone}?text=${whatsappMessage}"
          class="whatsapp-btn"
          target="_blank"
        >
          💬 WhatsApp
        </a>

      </div>

    </div>

  `;

  return card;

}


/* DISPLAY BUSINESSES */

function renderBusinesses(list) {

  businessGrid.innerHTML = "";

  if (list.length === 0) {

    emptyState.style.display = "block";

    return;

  }

  emptyState.style.display = "none";

  list.forEach(business => {

    businessGrid.appendChild(
      createBusinessCard(business)
    );

  });

}


/* FILTER */

function filterBusinesses(category) {

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.remove("active");

      if (
        button.dataset.filter === category ||
        (category === "All" &&
          button.dataset.filter === "All")
      ) {
        button.classList.add("active");
      }

    });


  if (category === "All") {

    renderBusinesses(businesses);

    return;

  }


  const filtered =
    businesses.filter(
      business =>
        business.category === category
    );

  renderBusinesses(filtered);

}


/* SEARCH */

function searchBusinesses() {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();


  if (!query) {

    renderBusinesses(businesses);

    return;

  }


  const results =
    businesses.filter(business => {

      return (

        business.name
          .toLowerCase()
          .includes(query)

        ||

        business.category
          .toLowerCase()
          .includes(query)

        ||

        business.location
          .toLowerCase()
          .includes(query)

        ||

        business.description
          .toLowerCase()
          .includes(query)

      );

    });


  renderBusinesses(results);

}


/* FILTER BUTTONS */

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      filterBusinesses(
        button.dataset.filter
      );

    });

  });


/* QUICK CATEGORY BUTTONS */

document
  .querySelectorAll(".quick-links button")
  .forEach(button => {

    button.addEventListener("click", () => {

      filterBusinesses(
        button.dataset.category
      );

      document
        .getElementById("businesses")
        .scrollIntoView({
          behavior: "smooth"
        });

    });

  });


/* SEARCH BUTTON */

searchBtn.addEventListener(
  "click",
  searchBusinesses
);


/* ENTER KEY SEARCH */

searchInput.addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {

      searchBusinesses();

    }

  }
);


/* SEARCH WHILE TYPING */

searchInput.addEventListener(
  "input",
  searchBusinesses
);


/* VIEW ALL */

document
  .getElementById("showAllBtn")
  .addEventListener("click", () => {

    searchInput.value = "";

    filterBusinesses("All");

  });


/* MOBILE MENU */

menuBtn.addEventListener(
  "click",
  () => {

    navMenu.classList.toggle("open");

  }
);


/* CLOSE MOBILE MENU */

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


/* START WEBSITE */

renderCategories();

renderBusinesses(businesses);
