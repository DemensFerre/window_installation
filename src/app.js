import { popup } from "./modules/popup";
popup({
  popupContent: "header-modal",
  // popupOverlay: "",
  // popupOverlayActive: "",
  popupContentActive: "header-modal--opened",
  popupClose: "header-modal__close",
  popupOpen: "btn-block",
});

import { slider } from "./modules/slider";
slider({
  sliderInner: "benefits-inner",
  sliderWrapper: "benefits-wrap",
  sliderSlide: "benefits__item",
  sliderArrowNext: "benefits__arrow--left",
  sliderArrowPrev: "benefits__arrow--right",
  infinity: true,
  sliderAmount: 3,
  sliderAdaptAmount: 1,
});
