import { popup } from "./modules/popup";
popup({
  popupContent: "header-modal",
  // popupOverlay: "",
  // popupOverlayActive: "",
  popupContentActive: "header-modal--opened",
  popupClose: "header-modal__close",
  popupOpen: "btn-block.fancyboxModal",
});
popup({
  popupContent: "services-modal",
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

import { validate } from "./modules/validateForms";
validate();

import { sendData } from "./modules/sendForms";
sendData({
  nameForm: "action-form",
});
sendData({
  nameForm: "action-form2",
});

import { zoom } from "./modules/zoomPhoto";
zoom({
  zoomBlock: "zoom-overlay",
  zoomClose: "close",
  zoomOpen: "sertificate-document",
});

import { scrolls } from "./modules/scroll";
scrolls();
