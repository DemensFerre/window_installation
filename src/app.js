import { popup } from "./modules/popup";
popup({
  popupContent: "header-modal",
  // popupOverlay: "",
  // popupOverlayActive: "",
  popupContentActive: "header-modal--opened",
  popupClose: "header-modal__close",
  popupOpen: "btn-block",
});
popup({
  popupContent: "services-modal",
  // popupOverlay: "",
  // popupOverlayActive: "",
  popupContentActive: "services-modal--opened",
  popupClose: "services-modal__close",
  popupOpen: "btn-success",
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
slider({
  sliderInner: "services__inner",
  sliderWrapper: "services__wrapper",
  sliderSlide: "col-md-12",
  sliderArrowNext: "services__arrow--left",
  sliderArrowPrev: "services__arrow--right",
  infinity: false,
  sliderAmount: 2,
  sliderAdaptAmount: 1,
});

import { timer } from "./modules/timer";
timer("26 Marth 2022");
