/**
 * ClayRoots - Main JavaScript
 * Handles product details modal, Buy Now actions, and interactive UI feedback.
 */

// Product Catalog
// Preserves all existing product images, names, and descriptions without inventing false specs or prices.
const CLAYROOTS_PRODUCTS = {
  // Homepage featured products
  "home-1": {
    id: "home-1",
    name: "Earthen Utensils",
    category: "Traditional Cookware",
    image: "https://cdn.shopify.com/s/files/1/0594/7251/1153/files/Clay_Utensils_480x480.jpg?v=1646297762",
    description: "Eco-friendly earthen utensils made from natural clay – perfect for healthy, traditional cooking and serving.",
    details: "Crafted from 100% natural, biodegradable terracotta clay. Promotes even heat distribution and retains food flavors naturally."
  },
  "home-2": {
    id: "home-2",
    name: "HandPainted Mugs",
    category: "Artisan Drinkware",
    image: "https://www.zwende.com/cdn/shop/products/Happy_Earth_Studio_Homeware_Mugs_Dialogue_Sets_Set_of_2_Src_1_PDP.jpg?v=1656057031&width=1080",
    description: "Beautifully crafted handmade mugs – each piece unique, eco-friendly, and perfect for your favorite drink.",
    details: "Wheel-thrown and individually hand-painted with organic earthy motifs. Food-safe, non-toxic, and comfortable to hold."
  },
  "home-3": {
    id: "home-3",
    name: "Unique Clay Earrings",
    category: "Clay Jewelry",
    image: "https://m.media-amazon.com/images/I/718I5QKm0ZL._AC_UY1100_.jpg",
    description: "Handcrafted clay earrings that blend tradition with style. Lightweight, eco-friendly, and perfect for adding a touch of earthy elegance to any look.",
    details: "Hand-molded terracotta beads and accents, gently kiln-fired and assembled with hypoallergenic findings."
  },

  // Products collection page (Product.html)
  "prod-1": {
    id: "prod-1",
    name: "Terracotta Jewelry Set",
    category: "Artisanal Jewelry",
    categories: ["all", "jewelry"],
    image: "https://i.etsystatic.com/18224007/r/il/522bba/2630645301/il_fullxfull.2630645301_r5y7.jpg",
    description: "Artisan-crafted terracotta necklace set featuring traditional handcrafted motifs and rich earthy tones.",
    details: "Hand-molded from natural clay, kiln-fired and hand-painted. Lightweight, skin-friendly, and perfect for traditional occasions."
  },
  "prod-2": {
    id: "prod-2",
    name: "Decorative Miniature Clay Pots",
    category: "Home & Festive Decor",
    categories: ["all", "pots", "home-decor"],
    image: "https://i.ytimg.com/vi/MIt9K_dN3Nk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAu7oWH81R1giv4jbVWN6Umg1trSg",
    description: "Hand-shaped miniature terracotta pots designed for table accents, festive displays, and craft lovers.",
    details: "Intricate miniature craftsmanship created by skilled rural potters. Ideal for cultural displays and artisanal gift hampers."
  },
  "prod-3": {
    id: "prod-3",
    name: "Clay Serving Bowl with Glass Lid",
    category: "Earthen Cookware",
    categories: ["all", "cookware"],
    image: "https://cdn.shopify.com/s/files/1/0594/7251/1153/files/Clay_Serving_Bowl_with_Glass_Lid_480x480.jpg?v=1632810965",
    description: "Handcrafted earthen serving bowl with a transparent glass lid, preserving warmth and aroma for slow-cooked dishes.",
    details: "Unglazed natural terracotta interior. Retains heat and moisture for slow cooking and elegant direct-to-table serving."
  },
  "prod-4": {
    id: "prod-4",
    name: "Traditional Terracotta Cooking Pots",
    category: "Traditional Cookware",
    categories: ["all", "pots", "cookware"],
    image: "https://thumbs.dreamstime.com/b/clay-pots-22051881.jpg",
    description: "Classic wheel-thrown terracotta cooking pots (handis and matkas) engineered for wholesome, slow-cooked meals.",
    details: "Porous natural clay promotes moisture circulation, keeping dishes tender while adding a subtle natural aroma."
  },
  "prod-5": {
    id: "prod-5",
    name: "Handmade Clay Kulhad Cups",
    category: "Chai & Beverage Drinkware",
    categories: ["all", "drinkware"],
    image: "https://5.imimg.com/data5/SELLER/Default/2020/9/RL/JL/SL/114602185/kulhad-jpeg-500x500.jpeg",
    description: "Authentic unglazed terracotta kulhad cups for tea, coffee, and traditional beverages.",
    details: "Biodegradable, eco-friendly, and naturally insulative. Imparts the beloved earthy fragrance ('mitti ki khushboo') to every sip."
  },
  "prod-6": {
    id: "prod-6",
    name: "Earthen Clay Water Bottle",
    category: "Eco Living & Storage",
    categories: ["all", "eco-living"],
    image: "https://m.media-amazon.com/images/I/61wW5EBf1GL._SL1500_.jpg",
    description: "Natural clay water bottle designed to cool water through natural evaporation without any electricity.",
    details: "Ergonomic shape with a secure wooden cap. Naturally balances the pH level of water and provides refreshing chilled hydration."
  },
  "prod-7": {
    id: "prod-7",
    name: "Artisan Terracotta Vase",
    category: "Decorative Pottery",
    categories: ["all", "vases", "home-decor"],
    image: "https://i.etsystatic.com/47070131/r/il/3cf339/5617703815/il_fullxfull.5617703815_iips.jpg",
    description: "Sculptural textured clay vase showcasing organic earthenware textures and contemporary minimalism.",
    details: "Individually hand-textured with clay tools and kiln-fired. A striking centerpiece for dried floral arrangements."
  },
  "prod-8": {
    id: "prod-8",
    name: "Terracotta Planter Pot",
    category: "Garden & Indoor Plants",
    categories: ["all", "pots", "home-decor"],
    image: "https://i.pinimg.com/564x/cd/3f/1f/cd3f1ff1578dccca33d27ab65a81d8c6.jpg",
    description: "Porous natural terracotta planter pot offering superior aeration and moisture balance for plant roots.",
    details: "Fosters healthy plant growth by preventing root rot. Beautiful natural patina develops gracefully over time."
  }
};

/**
 * Initializes product click listeners, catalogue filters & sorting, and modal integration.
 */
document.addEventListener("DOMContentLoaded", function () {
  const modalElement = document.getElementById("productDetailModal");
  let bsModal = null;
  if (modalElement && typeof bootstrap !== "undefined") {
    bsModal = new bootstrap.Modal(modalElement, {
      keyboard: true,
      backdrop: true
    });
  }

  // Handle product opening
  function showProductDetails(productId, triggerElement) {
    let product = CLAYROOTS_PRODUCTS[productId];

    // Fallback if not found in dictionary: read directly from dataset
    if (!product && triggerElement) {
      const card = triggerElement.closest(".clay-card") || triggerElement;
      product = {
        name: card.dataset.productName || "Handmade Pottery Item",
        category: card.dataset.productCategory || "Handicrafts",
        image: card.dataset.productImg || "",
        description: card.dataset.productDesc || "Handcrafted clay creation from ClayRoots artisans.",
        details: "Made from natural clay with sustainable, eco-friendly pottery methods."
      };
    }

    if (!product || !modalElement) return;

    // Populate modal fields
    const imgEl = document.getElementById("modalProductImage");
    const nameEl = document.getElementById("modalProductName");
    const catEl = document.getElementById("modalProductCategory");
    const descEl = document.getElementById("modalProductDescription");
    const metaEl = document.getElementById("modalProductMeta");
    const noticeEl = document.getElementById("orderConfirmationNotice");

    if (imgEl) {
      imgEl.src = product.image;
      imgEl.alt = product.name;
    }
    if (nameEl) nameEl.textContent = product.name;
    if (catEl) catEl.textContent = product.category || "Handmade Pottery";
    if (descEl) descEl.textContent = product.description;
    if (metaEl) {
      metaEl.innerHTML = `
        <div class="p-2 rounded bg-light border border-light-subtle">
          <small class="d-block text-secondary"><strong>Craftsmanship:</strong> ${product.details || "100% Natural terracotta clay, hand-shaped by artisans."}</small>
          <small class="d-block text-secondary mt-1"><strong>Availability:</strong> In stock &bull; Handmade to order</small>
          ${product.price ? `<small class="d-block text-secondary mt-1"><strong>Price:</strong> ${product.price}</small>` : ""}
        </div>
      `;
    }
    if (noticeEl) {
      noticeEl.classList.add("d-none");
    }

    if (bsModal) {
      bsModal.show();
    }
  }

  // Attach event delegation for all product interaction points
  document.addEventListener("click", function (event) {
    const trigger = event.target.closest("[data-product-id], .clay-product-trigger, .btn-buy-now, .btn-show-details");
    if (trigger) {
      // Prevent standard anchor jump if href is "#"
      if (trigger.tagName === "A" && trigger.getAttribute("href") === "#") {
        event.preventDefault();
      }

      const card = trigger.closest(".clay-card") || trigger;
      const productId = trigger.dataset.productId || card.dataset.productId;
      if (productId) {
        showProductDetails(productId, trigger);
      }
    }
  });

  // Modal "Order Now" demonstration button
  const orderBtn = document.getElementById("modalOrderBtn");
  if (orderBtn) {
    orderBtn.addEventListener("click", function () {
      const noticeEl = document.getElementById("orderConfirmationNotice");
      if (noticeEl) {
        noticeEl.classList.remove("d-none");
        noticeEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // Product Catalogue Filtering & Sorting (Product.html)
  const productGrid = document.getElementById("productGrid");
  const filterButtons = document.querySelectorAll(".btn-category-filter");
  const sortSelect = document.getElementById("productSortSelect");
  const emptyState = document.getElementById("productEmptyState");
  const resetFilterBtn = document.getElementById("btnResetFilter");
  const statusEl = document.getElementById("catalogueStatus");

  if (productGrid) {
    const productCols = Array.from(productGrid.querySelectorAll(".product-col"));
    let activeCategory = "all";
    let activeSort = sortSelect ? sortSelect.value : "default";

    // Helper: Determine if a product card matches the selected category
    function itemMatchesCategory(col, category) {
      if (!category || category === "all") return true;
      const target = category.toLowerCase().trim();

      // 1. Check data-categories attribute list
      const categoriesAttr = (col.dataset.categories || "").toLowerCase();
      const categoriesList = categoriesAttr.split(/\s+/);
      if (categoriesList.includes(target)) return true;

      // 2. Check data-category attribute
      const singleCategory = (col.dataset.category || "").toLowerCase();
      if (singleCategory.includes(target)) return true;

      // 3. Check CLAYROOTS_PRODUCTS entry
      const prodId = col.dataset.productId;
      const prod = CLAYROOTS_PRODUCTS[prodId];
      if (prod && Array.isArray(prod.categories)) {
        if (prod.categories.map(c => c.toLowerCase()).includes(target)) return true;
      }

      return false;
    }

    // Helper: Safely extract numeric price if present, returning NaN if absent
    function getProductPrice(col) {
      const prodId = col.dataset.productId;
      const prod = CLAYROOTS_PRODUCTS[prodId];
      if (prod && typeof prod.price !== "undefined" && prod.price !== null) {
        const num = parseFloat(String(prod.price).replace(/[^0-9.]/g, ""));
        if (!isNaN(num)) return num;
      }
      if (col.dataset.price) {
        const num = parseFloat(String(col.dataset.price).replace(/[^0-9.]/g, ""));
        if (!isNaN(num)) return num;
      }
      return NaN;
    }

    // Render price on product cards only when valid price is available
    productCols.forEach(col => {
      const prodId = col.dataset.productId;
      const prod = CLAYROOTS_PRODUCTS[prodId];
      const priceEl = col.querySelector("[data-product-price]");
      if (priceEl) {
        const priceVal = (prod && prod.price) || col.dataset.price;
        if (priceVal) {
          priceEl.textContent = priceVal;
          priceEl.classList.remove("d-none");
        } else {
          priceEl.classList.add("d-none");
        }
      }
    });

    // Core function: Filter and sort catalogue items
    function updateCatalogue() {
      // 1. Sort all cards according to activeSort
      const sortedCols = [...productCols].sort((a, b) => {
        if (activeSort === "name-asc") {
          const nameA = (a.dataset.name || "").trim().toLowerCase();
          const nameB = (b.dataset.name || "").trim().toLowerCase();
          return nameA.localeCompare(nameB, undefined, { sensitivity: "base" });
        }

        if (activeSort === "price-asc") {
          const priceA = getProductPrice(a);
          const priceB = getProductPrice(b);
          const hasA = !isNaN(priceA);
          const hasB = !isNaN(priceB);
          if (hasA && hasB) return priceA - priceB;
          if (hasA && !hasB) return -1;
          if (!hasA && hasB) return 1;
          // Fallback to default catalog order
          const orderA = parseInt(a.dataset.defaultOrder, 10) || 0;
          const orderB = parseInt(b.dataset.defaultOrder, 10) || 0;
          return orderA - orderB;
        }

        if (activeSort === "price-desc") {
          const priceA = getProductPrice(a);
          const priceB = getProductPrice(b);
          const hasA = !isNaN(priceA);
          const hasB = !isNaN(priceB);
          if (hasA && hasB) return priceB - priceA;
          if (hasA && !hasB) return -1;
          if (!hasA && hasB) return 1;
          // Fallback to default catalog order
          const orderA = parseInt(a.dataset.defaultOrder, 10) || 0;
          const orderB = parseInt(b.dataset.defaultOrder, 10) || 0;
          return orderA - orderB;
        }

        // Default Order
        const orderA = parseInt(a.dataset.defaultOrder, 10) || 0;
        const orderB = parseInt(b.dataset.defaultOrder, 10) || 0;
        return orderA - orderB;
      });

      // 2. Append elements to DOM in sorted order and apply category visibility
      let visibleCount = 0;
      sortedCols.forEach(col => {
        const matches = itemMatchesCategory(col, activeCategory);
        if (matches) {
          col.classList.remove("d-none");
          visibleCount++;
        } else {
          col.classList.add("d-none");
        }
        productGrid.appendChild(col);
      });

      // 3. Show/hide empty state
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.remove("d-none");
        } else {
          emptyState.classList.add("d-none");
        }
      }

      // 4. Update status counter text
      if (statusEl) {
        if (visibleCount === 0) {
          statusEl.textContent = "No products found in this category";
        } else if (visibleCount === productCols.length) {
          statusEl.textContent = `Showing all ${visibleCount} products`;
        } else {
          statusEl.textContent = `Showing ${visibleCount} of ${productCols.length} products`;
        }
      }
    }

    // Category filter button click events
    filterButtons.forEach(btn => {
      btn.addEventListener("click", function () {
        activeCategory = this.dataset.category || "all";

        filterButtons.forEach(b => {
          const isActive = b === btn;
          b.classList.toggle("active", isActive);
          b.setAttribute("aria-pressed", isActive ? "true" : "false");
        });

        updateCatalogue();
      });
    });

    // Sorting dropdown change event
    if (sortSelect) {
      sortSelect.addEventListener("change", function () {
        activeSort = this.value;
        updateCatalogue();
      });
    }

    // Empty state reset button click event
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener("click", function () {
        activeCategory = "all";
        filterButtons.forEach(b => {
          const isAll = (b.dataset.category || "").toLowerCase() === "all";
          b.classList.toggle("active", isAll);
          b.setAttribute("aria-pressed", isAll ? "true" : "false");
        });
        updateCatalogue();
      });
    }

    // Initial catalogue render
    updateCatalogue();
  }

  // Contact page query form handling (frontend demo)
  const contactForm = document.getElementById("queryForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const feedbackEl = document.getElementById("queryFormFeedback");
      if (feedbackEl) {
        feedbackEl.classList.remove("d-none");
        contactForm.reset();
      }
    });
  }
});
