/* =====================================================
   ZAMBIA BUSINESS HUB V3.0
   SIMPLE + RELIABLE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const searchInput =
    document.getElementById("searchInput");

  const locationFilter =
    document.getElementById("locationFilter");

  const categoryFilter =
    document.getElementById("categoryFilter");

  const searchBtn =
    document.getElementById("searchBtn");

  const clearFilters =
    document.getElementById("clearFilters");

  const featuredGrid =
    document.getElementById("featuredGrid");

  const businessGrid =
    document.getElementById("businessGrid");

  const noResults =
    document.getElementById("noResults");

  const resultsText =
    document.getElementById("resultsText");

  const menuBtn =
    document.getElementById("menuBtn");

  const mainNav =
    document.getElementById("mainNav");

  const modal =
    document.getElementById("businessModal");

  const modalContent =
    document.getElementById("modalContent");

  const closeModal =
    document.getElementById("closeModal");

  const year =
    document.getElementById("year");


  /* ===================================================
     YEAR
  =================================================== */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ===================================================
     MOBILE MENU
  =================================================== */

  if (menuBtn && mainNav) {

    menuBtn.addEventListener("click", function () {

      mainNav.classList.toggle("open");

    });


    mainNav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("open");

      });

    });

  }


  /* ===================================================
     BUSINESS CARDS
  =================================================== */

  function getCards() {

    if (!businessGrid) {
      return [];
    }

    return Array.from(
      businessGrid.querySelectorAll(".business-card")
    );

  }


  /* ===================================================
     FILTER BUSINESSES
  =================================================== */

  function filterBusinesses() {

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
        ? categoryFilter.value
        : "all";


    const cards = getCards();

    let visible = 0;


    cards.forEach(function (card) {

      const name =
        (card.dataset.name || "")
          .toLowerCase();

      const cardCategory =
        card.dataset.category || "";

      const cardLocation =
        (card.dataset.location || "")
          .toLowerCase();


      const matchesSearch =
        !search ||
        name.includes(search) ||
        cardCategory.toLowerCase().includes(search) ||
        cardLocation.includes(search);


      const matchesLocation =
        location === "all" ||
        cardLocation === location;


      const matchesCategory =
        category === "all" ||
        cardCategory === category;


      if (
        matchesSearch &&
        matchesLocation &&
        matchesCategory
      ) {

        card.style.display = "";

        visible++;

      } else {

        card.style.display = "none";

      }

    });


    if (resultsText) {

      if (visible === 1) {

        resultsText.textContent =
          "Showing 1 business";

      } else {

        resultsText.textContent =
          "Showing " +
          visible +
          " businesses";

      }

    }


    if (noResults) {

      if (visible === 0) {

        noResults.classList.remove("hidden");

      } else {

        noResults.classList.add("hidden");

      }

    }


    const directory =
      document.getElementById("directory");

    if (directory) {

      directory.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }


  /* ===================================================
     SEARCH BUTTON
  =================================================== */

  if (searchBtn) {

    searchBtn.addEventListener(
      "click",
      filterBusinesses
    );

  }


  /* ===================================================
     ENTER KEY SEARCH
  =================================================== */

  if (searchInput) {

    searchInput.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Enter") {

          filterBusinesses();

        }

      }
    );

  }


  /* ===================================================
     LOCATION FILTER
  =================================================== */

  if (locationFilter) {

    locationFilter.addEventListener(
      "change",
      filterBusinesses
    );

  }


  /* ===================================================
     CATEGORY FILTER
  =================================================== */

  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      filterBusinesses
    );

  }


  /* ===================================================
     CLEAR FILTERS
  =================================================== */

  if (clearFilters) {

    clearFilters.addEventListener(
      "click",
      function () {

        if (searchInput) {
          searchInput.value = "";
        }

        if (locationFilter) {
          locationFilter.value = "all";
        }

        if (categoryFilter) {
          categoryFilter.value = "all";
        }

        filterWithoutScroll();

      }
    );

  }


  /* ===================================================
     FILTER WITHOUT SCROLL
  =================================================== */

  function filterWithoutScroll() {

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
        ? categoryFilter.value
        : "all";


    const cards = getCards();

    let visible = 0;


    cards.forEach(function (card) {

      const name =
        (card.dataset.name || "")
          .toLowerCase();

      const cardCategory =
        card.dataset.category || "";

      const cardLocation =
        (card.dataset.location || "")
          .toLowerCase();


      const matchesSearch =
        !search ||
        name.includes(search) ||
        cardCategory.toLowerCase().includes(search) ||
        cardLocation.includes(search);


      const matchesLocation =
        location === "all" ||
        cardLocation === location;


      const matchesCategory =
        category === "all" ||
        cardCategory === category;


      if (
        matchesSearch &&
        matchesLocation &&
        matchesCategory
      ) {

        card.style.display = "";
        visible++;

      } else {

        card.style.display = "none";

      }

    });


    if (resultsText) {

      resultsText.textContent =
        "Showing " +
        visible +
        " businesses";

    }


    if (noResults) {

      if (visible === 0) {

        noResults.classList.remove("hidden");

      } else {

        noResults.classList.add("hidden");

      }

    }

  }


  /* ===================================================
     CATEGORY BUTTONS
  =================================================== */

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

          filterWithoutScroll();

          const directory =
            document.getElementById("directory");

          if (directory) {

            directory.scrollIntoView({
              behavior: "smooth"
            });

          }

        }
      );

    });


  /* ===================================================
     BUSINESS MODAL
  =================================================== */

  function openBusiness(card) {

    if (!modal || !modalContent) {
      return;
    }


    const name =
      card.dataset.name || "Business";

    const category =
      card.dataset.category || "";

    const location =
      card.dataset.location || "";

    const heading =
      card.querySelector("h3");

    const phoneLink =
      card.querySelector(".action-call");

    const whatsappLink =
      card.querySelector(".action-whatsapp");


    const phone =
      phoneLink
        ? phoneLink.getAttribute("href")
        : "#";


    const whatsapp =
      whatsappLink
        ? whatsappLink.getAttribute("href")
        : "#";


    modalContent.innerHTML = `

      <span class="eyebrow">
        ${category}
      </span>

      <h2 class="modal-title">
        ${name}
      </h2>

      <p class="modal-info">
        📍 ${location.charAt(0).toUpperCase() + location.slice(1)}
      </p>

      <p class="modal-info">
        🇿🇲 Listed on Zambia Business Hub
      </p>

      <div class="modal-buttons">

        <a
          href="${phone}"
          class="modal-call"
        >
          📞 Call
        </a>

        <a
          href="${whatsapp}"
          target="_blank"
          class="modal-whatsapp"
        >
          WhatsApp
        </a>

      </div>

    `;


    modal.classList.add("show");

  }


  /* ===================================================
     CARD CLICK
  =================================================== */

  document
    .querySelectorAll(".business-card")
    .forEach(function (card) {

      card.addEventListener(
        "click",
        function (event) {

          if (
            event.target.closest("a")
          ) {

            return;

          }

          openBusiness(card);

        }
      );

    });


  /* ===================================================
     CLOSE MODAL
  =================================================== */

  function closeBusinessModal() {

    if (modal) {

      modal.classList.remove("show");

    }

  }


  if (closeModal) {

    closeModal.addEventListener(
      "click",
      closeBusinessModal
    );

  }


  if (modal) {

    modal.addEventListener(
      "click",
      function (event) {

        if (event.target === modal) {

          closeBusinessModal();

        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Escape") {

        closeBusinessModal();

      }

    }
  );


  /* ===================================================
     FEATURED CARD INTERACTION
  =================================================== */

  if (featuredGrid) {

    featuredGrid
      .querySelectorAll(".business-card")
      .forEach(function (card) {

        card.addEventListener(
          "click",
          function (event) {

            if (
              event.target.closest("a")
            ) {

              return;

            }

            openBusiness(card);

          }
        );

      });

  }


  /* ===================================================
     INITIAL STATE
  =================================================== */

  filterWithoutScroll();


  console.log(
    "🇿🇲 Zambia Business Hub V3.0 loaded successfully."
  );

});
