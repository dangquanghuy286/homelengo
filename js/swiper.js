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
  const swiperEl = document.querySelector(".tf-sw-location");
  let swiperInstance;

  // Hàm khởi tạo Swiper
  function initSwiper() {
    if (!swiperEl) return;

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

    // Nếu Swiper đã tồn tại, xóa trước khi tạo lại
    if (swiperInstance) swiperInstance.destroy(true, true);

    // Khởi tạo mới
    swiperInstance = new Swiper(".tf-sw-location", {
      slidesPerView: mobile,
      spaceBetween: spacing,
      pagination: {
        el: ".sw-pagination-location",
        clickable: true,
      },
      slidesPerGroup: perGroup,
      navigation: {
        clickable: true,
        nextEl: ".nav-prev-location",
        prevEl: ".nav-next-location",
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
  }

  // Gọi lần đầu khi trang load
  initSwiper();
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
