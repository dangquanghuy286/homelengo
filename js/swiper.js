// =================== Categories====================
document.addEventListener("DOMContentLoaded", () => {
  const swiperEl = document.querySelector(".tf-sw-categories");

  if (swiperEl) {
    const preview = swiperEl.dataset.preview;
    const tablet = swiperEl.dataset.tablet;
    const mobile = swiperEl.dataset.mobile;
    const mobileSm = swiperEl.dataset.mobileSm;

    const spacing = swiperEl.dataset.space;
    const spacingMd = swiperEl.dataset.spaceMd;
    const spacingLg = swiperEl.dataset.spaceLg;

    new Swiper(".tf-sw-categories", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-category",
        prevEl: ".nav-next-category",
      },
      pagination: {
        el: ".sw-pagination-category",
        clickable: true,
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});

// =================== Explore Swiper ===================
document.addEventListener("DOMContentLoaded", () => {
  const swiperElements = document.querySelectorAll(".tf-sw-location");

  swiperElements.forEach((swiperEl, index) => {
    // Lấy các dataset (từ HTML)
    const preview = parseInt(swiperEl.dataset.preview);
    const tablet = parseInt(swiperEl.dataset.tablet);
    const mobile = parseInt(swiperEl.dataset.mobile);
    const mobileSm = parseInt(swiperEl.dataset.mobileSm);
    const spacing = parseInt(swiperEl.dataset.space);
    const spacingMd = parseInt(swiperEl.dataset.spaceMd);
    const spacingLg = parseInt(swiperEl.dataset.spaceLg);
    const perGroup = parseInt(swiperEl.dataset.paginationSm);
    const perGroupSm = parseInt(swiperEl.dataset.pagination);
    const perGroupMd = parseInt(swiperEl.dataset.paginationMd);
    const perGroupLg = parseInt(swiperEl.dataset.paginationLg);

    // Gán ID duy nhất cho từng pagination & nav
    const paginationEl = swiperEl.querySelector(".sw-pagination-location");
    const nextEl = swiperEl.querySelector(".nav-next-location");
    const prevEl = swiperEl.querySelector(".nav-prev-location");

    // Khởi tạo Swiper riêng cho từng section
    new Swiper(swiperEl, {
      slidesPerView: mobile,
      spaceBetween: spacing,
      speed: 1000,
      pagination: {
        el: paginationEl,
        clickable: true,
      },
      slidesPerGroup: perGroup,
      navigation: {
        clickable: true,
        nextEl: nextEl,
        prevEl: prevEl,
      },
      breakpoints: {
        575: {
          slidesPerView: mobileSm,
          spaceBetween: spacing,
          slidesPerGroup: perGroupSm,
        },
        768: {
          slidesPerView: tablet,
          spaceBetween: spacingMd,
          slidesPerGroup: perGroupMd,
        },
        1200: {
          slidesPerView: preview,
          spaceBetween: spacingLg,
          slidesPerGroup: perGroupLg,
        },
      },
    });
  });
});

// ================ Testimonials ====================
document.addEventListener("DOMContentLoaded", function () {
  const testimonialEl = document.querySelector(".tf-sw-testimonial");

  if (testimonialEl) {
    const mobile = testimonialEl.dataset.mobile;
    const mobileSm = testimonialEl.dataset.mobileSm;
    const tablet = testimonialEl.dataset.tablet;
    const preview = testimonialEl.dataset.preview;
    const spacing = testimonialEl.dataset.space;
    const spacingMd = testimonialEl.dataset.spaceMd;
    const spacingLg = testimonialEl.dataset.spaceLg;
    const centered = testimonialEl.dataset.centered === "true";
    const loop = testimonialEl.dataset.loop === "true";

    const swTestimonial = new Swiper(".tf-sw-testimonial", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      speed: 1000,
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-testimonial",
        prevEl: ".nav-next-testimonial",
      },
      pagination: {
        el: ".sw-pagination-testimonial",
        clickable: true,
      },
      loop: loop,
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
          centeredSlides: false,
        },
        1440: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
          centeredSlides: centered,
        },
      },
    });
  }
});
// ================Card Mobile =====================
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".tf-swiper-mobile-1")) {
    let swiperMb;
    let screenWidth = document.querySelector(".tf-swiper-mobile-1").dataset
      .screen;
    function initSwiperMb() {
      if (matchMedia(`(max-width: ${screenWidth}px)`).matches) {
        if (!swiperMb) {
          let preview = document.querySelector(".tf-swiper-mobile-1").dataset
            .preview;
          let spacing = document.querySelector(".tf-swiper-mobile-1").dataset
            .space;

          swiperMb = new Swiper(".tf-swiper-mobile-1", {
            slidesPerView: preview,
            spaceBetween: spacing,
            speed: 1000,
            pagination: {
              el: ".sw-pagination-mb-1",
              clickable: true,
            },
            navigation: {
              clickable: true,
              nextEl: ".nav-prev-mb-1",
              prevEl: ".nav-next-mb-1",
            },
          });
        }
      } else {
        if (swiperMb) {
          swiperMb.destroy(true, true);
          swiperMb = null;
          document
            .querySelector(".tf-swiper-mobile-1 .swiper-wrapper")
            .removeAttribute("style");
          const slides = document.querySelectorAll(
            ".tf-swiper-mobile-1 .swiper-slide"
          );
          slides.forEach((slide) => slide.removeAttribute("style"));
        }
      }
    }

    initSwiperMb();
    window.addEventListener("resize", function () {
      initSwiperMb();
    });
  }
});
// ===============Latest ===========================
document.addEventListener("DOMContentLoaded", () => {
  const tfSwLatest = document.querySelector(".tf-swiper-latest");
  if (tfSwLatest) {
    const preview = tfSwLatest.dataset.preview;
    const tablet = tfSwLatest.dataset.tablet;
    const mobile = tfSwLatest.dataset.mobile;
    const mobileSm = tfSwLatest.dataset.mobileSm;
    const spacingLg = tfSwLatest.dataset.spaceLg;
    const spacingMd = tfSwLatest.dataset.spaceMd;
    const spacing = tfSwLatest.dataset.space;

    const swiper = new Swiper(".tf-swiper-latest", {
      slidesPerView: parseInt(mobile),
      spaceBetween: parseInt(spacing),
      pagination: {
        el: ".sw-pagination-latest",
        clickable: true,
      },
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-latest",
        prevEl: ".nav-next-latest",
      },
      breakpoints: {
        575: {
          slidesPerView: parseInt(mobileSm),
          spaceBetween: parseInt(spacing),
        },
        768: {
          slidesPerView: parseInt(tablet),
          spaceBetween: parseInt(spacingMd),
        },
        1200: {
          slidesPerView: parseInt(preview),
          spaceBetween: parseInt(spacingLg),
        },
      },
    });
  }
});
