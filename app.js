/* =========================================================
   ZAMBIA BUSINESS HUB V2.4
   ========================================================= */


/* =========================================================
   HUB SETTINGS
   ========================================================= */

const HUB_WHATSAPP = "260765054612";


/* =========================================================
   BUSINESS DATABASE
   ========================================================= */

const businesses = [

  {
    id: 1,
    name: "Copper Pot Restaurant",
    category: "Restaurant",
    icon: "🍽️",
    location: "Lusaka",
    address: "Neelkanth Sarovar Premiere, 6111 Manchinchi Rd, Lusaka",
    phone: "260211427700",
    rating: "4.7",
    reviews: "246",
    hours: "Open 24 hours",
    description: "Restaurant in Lusaka offering dining services.",
    featured: true,
    verified: false
  },

  {
    id: 2,
    name: "3 Trees Cafe",
    category: "Restaurant",
    icon: "☕",
    location: "Lusaka",
    address: "2 Nkanchibaya Rd, Lusaka",
    phone: "260978728652",
    rating: "4.4",
    reviews: "2297",
    hours: "Daily: 07:30–17:00",
    description: "Café and restaurant in Lusaka.",
    featured: true,
    verified: false
  },

  {
    id: 3,
    name: "Marlin Restaurant",
    category: "Restaurant",
    icon: "🥩",
    location: "Lusaka",
    address: "Lusaka Club, Los Angeles Boulevard, Lusaka",
    phone: "260211252206",
    rating: "4.2",
    reviews: "1677",
    hours: "Mon–Thu: 12:00–22:00 | Fri: 12:00–22:00 | Sat: 12:00–23:00",
    description: "Restaurant offering dining services in Lusaka.",
    featured: true,
    verified: false
  },

  {
    id: 4,
    name: "MOSAIC RESTAURANT & CAFE",
    category: "Restaurant",
    icon: "🍴",
    location: "Lusaka",
    address: "4622-2 Beit Road, Addis Ababa Dr, Lusaka",
    phone: "260771036277",
    rating: "4.8",
    reviews: "65",
    hours: "Mon–Sat: 10:30–22:30 | Sun: 08:30–22:30",
    description: "Restaurant and café located in Lusaka.",
    featured: true,
    verified: false
  },

  {
    id: 5,
    name: "The Sanctuary Restaurant",
    category: "Restaurant",
    icon: "🍽️",
    location: "Lusaka",
    address: "Plot 10, Kabulonga Rd, Lusaka",
    phone: "260978688866",
    rating: "4.5",
    reviews: "185",
    hours: "Mon–Thu: 12:00–22:00 | Fri–Sun: 12:00–23:00",
    description: "Restaurant offering dining services in Kabulonga.",
    featured: false,
    verified: false
  },

  {
    id: 6,
    name: "Palmwood Lodge",
    category: "Lodge",
    icon: "🏨",
    location: "Lusaka",
    address: "Plot 609 Central St, Lusaka",
    phone: "260966757954",
    rating: "4.0",
    reviews: "740",
    hours: "Contact business for current hours",
    description: "Lodge and hospitality venue in Lusaka.",
    featured: true,
    verified: false
  },

  {
    id: 7,
    name: "Lilayi Lodge",
    category: "Lodge",
    icon: "🌿",
    location: "Lusaka",
    address: "Lilayi Road, Lilayi, Lusaka",
    phone: "260971002010",
    rating: "4.5",
    reviews: "1386",
    hours: "Contact business for current hours",
    description: "Lodge and hospitality destination near Lusaka.",
    featured: true,
    verified: false
  },

  {
    id: 8,
    name: "Shodol Spa and Beauty Salon",
    category: "Beauty",
    icon: "💆",
    location: "Lusaka",
    address: "House Number 14, Kabompo, Lusaka",
    phone: "260767471112",
    rating: "4.8",
    reviews: "636",
    hours: "Mon–Thu: 09:00–17:00 | Fri–Sat: 08:00–18:00 | Sun: 10:00–17:00",
    description: "Beauty salon and spa services in Lusaka.",
    featured: true,
    verified: false
  },

  {
    id: 9,
    name: "Her Rootz",
    category: "Beauty",
    icon: "💇",
    location: "Lusaka",
    address: "Off Parliament Rd, Lusaka",
    phone: "260974227332",
    rating: "4.7",
    reviews: "96",
    hours: "Mon–Sat: 09:00–18:00",
    description: "Beauty salon in Lusaka.",
    featured: false,
    verified: false
  },

  {
    id: 10,
    name: "Enrich By Naseema",
    category: "Beauty",
    icon: "✨",
    location: "Lusaka",
    address: "22 Nangwenya Rd, Lusaka",
    phone: "260973372652",
    rating: "4.5",
    reviews: "147",
    hours: "Tue–Sat: 09:30–17:30 | Sun: 09:30–16:30",
    description: "Beauty and personal care services in Lusaka.",
    featured: false,
    verified: false
  },

  {
    id: 11,
    name: "Ventura Solutions Zambia Limited",
    category: "Business Services",
    icon: "💼",
    location: "Lusaka",
    address: "29 Nalikwanda Rd, Lusaka",
    phone: "260951595566",
    rating: "4.9",
    reviews: "8",
    hours: "Mon–Fri: 08:00–17:00",
    description: "Business administration services in Lusaka.",
    featured: false,
    verified: false
  },

  {
    id: 12,
    name: "Jameska Business Services",
    category: "Business Services",
    icon: "📊",
    location: "Chingola",
    address: "Room 209 Bwafwano House, Town Centre, Chingola",
    phone: "260964533535",
    rating: "4.0",
    reviews: "1",
    hours: "Mon–Fri: 08:00–17:30",
    description: "Business and tax consulting services in Chingola.",
    featured: false,
    verified: false
  }

];


/* =========================================================
   STARTUP
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("year").textContent =
    new Date().getFullYear();

  document.getElementById("businessCount").textContent =
    businesses.length + "+";

  renderFeatured();
  renderBusinesses(businesses);

});


/* =========================================================
   FEATURED BUSINESSES
   ========================================================= */

function renderFeatured() {

  const grid =
    document.getElementById("featuredGrid");

  const featured =
    businesses.filter(business => business.featured);

  grid.innerHTML = "";

  featured.slice(0, 3).forEach(business => {

    const card =
      document.createElement("div");

    card.className = "featured-card";

    card.innerHTML = `

      <span class="featured-label">
        ⭐ FEATURED
      </span>

      <h3>
        ${escapeHTML(business.name)}
      </h3>

      <p>
        ${escapeHTML(business.category)}
        · ${escapeHTML(business.location)}
      </p>

      <p>
        ⭐ ${escapeHTML(business.rating)}
        (${escapeHTML(business.reviews)} public reviews)
      </p>

      <div class="featured-actions">

        <button
          class="card-btn"
          onclick="openBusiness(${business.id})"
        >
          View Details
        </button>

        <a
          class="card-btn primary"
          href="https://wa.me/${business.phone}"
          target="_blank"
          rel="noopener"
        >
          WhatsApp
        </a>

      </div>

    `;

    grid.appendChild(card);

  });

}


/* =========================================================
   BUSINESS DIRECTORY
   ========================================================= */

function renderBusinesses(list) {

  const grid =
    document.getElementById("businessGrid");

  const noResults =
    document.getElementById("noResults");

  grid.innerHTML = "";

  if (list.length === 0) {

    noResults.style.display = "block";

    document.getElementById("resultsText").textContent =
      "No matching businesses";

    return;

  }

  noResults.style.display = "none";


  list.forEach(business => {

    const card =
      document.createElement("article");

    card.className = "business-card";


    const status =
      business.verified
        ? `<div class="status-badge verified">✓ Verified</div>`
        : `<div class="status-badge unclaimed">Unclaimed</div>`;


    const featured =
      business.featured
        ? `<div class="featured-mini">⭐ Featured</div>`
        : "";


    card.innerHTML = `

      <div class="card-top">

        <div class="business-icon">
          ${business.icon}
        </div>

        ${status}

        ${featured}

      </div>


      <div class="card-body">

        <div class="card-category">
          ${escapeHTML(business.category)}
        </div>


        <h3>
          ${escapeHTML(business.name)}
        </h3>


        <div class="card-info">
          📍 ${escapeHTML(business.location)}
        </div>


        <div class="card-info">
          ⭐

          <span class="rating">
            ${escapeHTML(business.rating)}
          </span>

          (${escapeHTML(business.reviews)} public reviews)
        </div>


        <div class="card-info">
          🕒 ${escapeHTML(business.hours)}
        </div>


        <div class="card-actions">

          <button
            class="card-btn"
            onclick="openBusiness(${business.id})"
          >
            View Details
          </button>


          <a
            class="card-btn primary"
            href="https://wa.me/${business.phone}"
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>

        </div>

      </div>

    `;


    grid.appendChild(card);

  });


  document.getElementById("resultsText").textContent =
    `Showing ${list.length} business${list.length === 1 ? "" : "es"}`;

}


/* =========================================================
   SEARCH
   ========================================================= */

function filterBusinesses() {

  const search =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();


  const location =
    document
      .getElementById("locationFilter")
      .value
      .toLowerCase();


  const filtered =
    businesses.filter(business => {

      const text = `

        ${business.name}
        ${business.category}
        ${business.location}
        ${business.address}
        ${business.description}

      `.toLowerCase();


      const matchesSearch =
        !search || text.includes(search);


      const matchesLocation =
        location === "all" ||
        business.location.toLowerCase() === location;


      return matchesSearch && matchesLocation;

    });


  renderBusinesses(filtered);

}


/* =========================================================
   QUICK CATEGORY
   ========================================================= */

function quickCategory(category) {

  document.getElementById("searchInput").value =
    category;

  document.getElementById("locationFilter").value =
    "all";

  filterBusinesses();

  document
    .getElementById("businesses")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearFilters() {

  document.getElementById("searchInput").value = "";

  document.getElementById("locationFilter").value = "all";

  renderBusinesses(businesses);

}


/* =========================================================
   BUSINESS DETAILS
   ========================================================= */

function openBusiness(id) {

  const business =
    businesses.find(item => item.id === id);

  if (!business) return;


  const modal =
    document.getElementById("businessModal");

  const body =
    document.getElementById("modalBody");


  const whatsappMessage =
    encodeURIComponent(
      `Hello, I found ${business.name} on Zambia Business Hub. I would like more information.`
    );


  const claimMessage =
    encodeURIComponent(
      `Hello Zambia Business Hub. I am the owner or representative of ${business.name} and would like to claim/update this listing.`
    );


  const verificationStatus =
    business.verified
      ? "🟢 Verified business"
      : "🟡 Unclaimed — owner verification pending";


  body.innerHTML = `

    <div class="business-icon">
      ${business.icon}
    </div>


    <div class="modal-label">
      ${escapeHTML(business.category)}
    </div>


    <h2 class="modal-title">
      ${escapeHTML(business.name)}
    </h2>


    <div class="modal-label">
      Listing Status
    </div>

    <div class="modal-value">
      ${verificationStatus}
    </div>


    <div class="modal-label">
      Location
    </div>

    <div class="modal-value">
      ${escapeHTML(business.address)}
    </div>


    <div class="modal-label">
      Public Rating
    </div>

    <div class="modal-value">
      ⭐ ${escapeHTML(business.rating)}
      (${escapeHTML(business.reviews)} public reviews)
    </div>


    <div class="modal-label">
      Opening Hours
    </div>

    <div class="modal-value">
      ${escapeHTML(business.hours)}
    </div>


    <div class="modal-label">
      About
    </div>

    <div class="modal-value">
      ${escapeHTML(business.description)}
    </div>


    <div class="modal-actions">

      <a
        class="card-btn primary"
        href="tel:+${business.phone}"
      >
        📞 Call
      </a>


      <a
        class="card-btn primary"
        href="https://wa.me/${business.phone}?text=${whatsappMessage}"
        target="_blank"
        rel="noopener"
      >
        💬 WhatsApp
      </a>


      <a
        class="card-btn"
        href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}"
        target="_blank"
        rel="noopener"
      >
        📍 Directions
      </a>


      <a
        class="card-btn"
        href="https://wa.me/${HUB_WHATSAPP}?text=${claimMessage}"
        target="_blank"
        rel="noopener"
      >
        ✓ Claim Listing
      </a>

    </div>

  `;


  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeModal() {

  document
    .getElementById("businessModal")
    .classList.remove("active");

  document.body.style.overflow = "";

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

  document
    .getElementById("mainNav")
    .classList.toggle("active");

}


/* =========================================================
   LIST BUSINESS FORM
   ========================================================= */

document
  .getElementById("listingForm")
  .addEventListener("submit", function(event) {

    event.preventDefault();


    const business =
      document.getElementById("ownerBusiness").value.trim();

    const category =
      document.getElementById("ownerCategory").value;

    const location =
      document.getElementById("ownerLocation").value.trim();

    const phone =
      document.getElementById("ownerPhone").value.trim();

    const description =
      document.getElementById("ownerDescription").value.trim();


    const message = `

Hello Zambia Business Hub 👋

I would like to list my business.

Business Name:
${business}

Category:
${category}

Location:
${location}

Phone / WhatsApp:
${phone}

Description:
${description}

Please let me know the next steps.

    `;


    const url =
      `https://wa.me/${HUB_WHATSAPP}?text=${encodeURIComponent(message)}`;


    window.open(url, "_blank");

  });


/* =========================================================
   HTML SECURITY
   ========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================================================
   CLOSE MOBILE MENU
   ========================================================= */

document.querySelectorAll("#mainNav a").forEach(link => {

  link.addEventListener("click", () => {

    document
      .getElementById("mainNav")
      .classList.remove("active");

  });

});
