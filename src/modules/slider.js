import Swiper from "swiper/bundle";

export const slider = ({
  sliderInner,
  sliderWrapper,
  sliderSlide,
  sliderArrowNext,
  sliderArrowPrev,
  infinity,
  sliderAmount,
  sliderAdaptAmount,
}) => {
  const wrapper = document.querySelector(`.${sliderWrapper}`);
  const slide = wrapper.querySelectorAll(`.${sliderSlide}`);

  wrapper.classList.add("swiper-wrapper");

  slide.forEach((elem) => {
    elem.classList.add("swiper-slide");
  });

  const swiper = new Swiper(`.${sliderInner}`, {
    slidesPerView: sliderAdaptAmount,
    loop: infinity,
    navigation: {
      nextEl: `.${sliderArrowPrev}`,
      prevEl: `.${sliderArrowNext}`,
    },
    breakpoints: {
      576: {
        slidesPerView: sliderAmount,
      },
    },
  });
};
