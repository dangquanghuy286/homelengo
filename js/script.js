// ====================Toggle MENU==================
document.querySelector(".toggle-mobile").addEventListener("click", function () {
  document.querySelector(".home-page__mobile-menu").classList.toggle("active");
  document.querySelector(".toggle-mobile").classList.toggle("active");
});
// ===================Dropdown=====================
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".hero__dropdown");
  const selected = dropdown.querySelector(".hero__dropdown-selected");
  const menu = dropdown.querySelector(".hero__dropdown-menu");
  const items = dropdown.querySelectorAll(".hero__dropdown-item");
  const icon = dropdown.parentElement.querySelector(".icon-CaretDown");

  // Toggle dropdown
  selected.addEventListener("click", () => {
    menu.classList.toggle("show");
    if (menu.classList.contains("show")) {
      icon.classList.remove("icon-CaretDown");
      icon.classList.add("icon-CaretUp");
    } else {
      icon.classList.remove("icon-CaretUp");
      icon.classList.add("icon-CaretDown");
    }
  });

  // Handle item selection
  items.forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      menu.classList.remove("show");
      icon.classList.remove("icon-CaretUp");
      icon.classList.add("icon-CaretDown");
      const value = item.getAttribute("data-value");
    });
  });

  // Đóng dropdown
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menu.classList.remove("show");
      icon.classList.remove("icon-CaretUp");
      icon.classList.add("icon-CaretDown");
    }
  });
});
// ==================Active===========================
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".hero__tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document
        .querySelector(".hero__tab-active")
        ?.classList.remove("hero__tab-active");
      document
        .querySelector(".hero__tab[aria-selected='true']")
        ?.setAttribute("aria-selected", "false");

      tab.classList.add("hero__tab-active");
      tab.setAttribute("aria-selected", "true");
    });
  });
});
//==================== Explore =====================
document.addEventListener("DOMContentLoaded", () => {
  const exploreSwiper = new Swiper(".explore-cities__list", {
    slidesPerView: 6,
    spaceBetween: 8,
    slidesPerGroup: 2,
    loop: false,
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".explore-cities__dots",
      type: "bullets",
      clickable: true,
      bulletClass: "explore-cities__dot",
      bulletActiveClass: "active",
    },

    breakpoints: {
      320: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 6,
        slidesPerGroup: 1,
      },
    },
  });
});

//================= Testimonials ===================
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".testimonials__list", {
    slidesPerView: 3,
    spaceBetween: 30,
    loopedSlides: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  });
});
// ======================Back-to-Top======================
const backToTopBtn = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("back-to-top--show");
  } else {
    backToTopBtn.classList.remove("back-to-top--show");
  }
});

// Scroll lên đầu
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ================
// Lấy các phần tử cần thiết
const advancedBtn = document.querySelector(".hero__advanced-button");
const advancedDropdown = document.querySelector(".hero__advanced-dropdown");

advancedBtn.addEventListener("click", () => {
  // Kiểm tra dropdown đang hiển thị hay ẩn
  const isOpen = advancedDropdown.style.display === "block";

  // Toggle hiển thị
  advancedDropdown.style.display = isOpen ? "none" : "block";

  // Cập nhật aria-expanded để accessibility
  advancedBtn.setAttribute("aria-expanded", !isOpen);
});
// ================Load===================
document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("progressBar");
  const percentage = document.getElementById("percentage");
  const loading = document.getElementById("loading");

  let progress = 0;

  // Tăng progress từ 0 → 100%
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 5) + 1; // tăng 1-5%
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + "%";
    percentage.textContent = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);

      // Ẩn loading mượt
      loading.style.opacity = 0;
      setTimeout(() => {
        loading.style.display = "none";
      }, 500);
    }
  }, 100); // cập nhật mỗi 100ms
});
