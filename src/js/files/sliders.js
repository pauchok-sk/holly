import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

export default function sliders() {
  const productSlider = document.querySelector(".product__slider");

  if (productSlider) {
    const nav = document.querySelector(".product__nav");
    const navButtons = nav.querySelectorAll(".product__nav-btn");

    if (window.matchMedia("(min-width: 577px)").matches) {
      sizeSlider();
      window.addEventListener("resize", sizeSlider);
    }

    function sizeSlider() {
      // подстраиваем размер слайдера под размер навигацонных кнопок(картинок)
      productSlider.style.maxHeight = `${nav.clientHeight}px`;
    }

    const swiper = new Swiper(productSlider, {
      speed: 1000,
      modules: [Autoplay, Navigation, Pagination],
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      slideToClickedSlide: true,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".product .slider-btn._prev",
        nextEl: ".product .slider-btn._next",
      },
      pagination: {
        el: ".product__slider-pagination",
        clickable: true,
      },
      on: {
        init: () => {
          navButtons[0].classList.add("_active");

          navButtons.forEach((btn, index) => {
            btn.addEventListener("click", () => {
              navButtons.forEach(
                (b, i) => i !== index && b.classList.remove("_active")
              );
              swiper.slideTo(index);
            });
          });
        },
        slideChange: ({ activeIndex }) => {
          navButtons.forEach((b) => b.classList.remove("_active"));
          navButtons[activeIndex].classList.add("_active");
        },
      },
      breakpoints: {
        577: {
          direction: "vertical",
        },
      },
    });
  }

  const recSlider = document.querySelector(".rec__slider");

  if (recSlider) {
    const swiper = new Swiper(recSlider, {
      speed: 1000,
      modules: [Autoplay],
      slidesPerView: 2,
      spaceBetween: 20,
      grabCursor: true,
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        993: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        744: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        577: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    });
  }
}
