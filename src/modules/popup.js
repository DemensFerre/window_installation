export const popup = ({
  popupContent,
  popupOverlay = "overlay",
  popupOverlayActive = "overlay-active",
  popupContentActive,
  popupClose,
  popupOpen,
}) => {
  const body = document.querySelector("body");
  const content = document.querySelector(`.${popupContent}`);
  const overlay = document.querySelector(`.${popupOverlay}`);

  document.addEventListener("click", (e) => {
    if (e.target.closest(`.${popupOpen}`)) {
      e.preventDefault();
      content.classList.add(popupContentActive);
      overlay.classList.add(popupOverlayActive);
      body.classList.add("active");
    }
    if (
      e.target.closest(`.${popupClose}`) ||
      e.target.closest(`.${popupOverlay}`)
    ) {
      content.classList.remove(popupContentActive);
      overlay.classList.remove(popupOverlayActive);
      body.classList.remove("active");
    }
  });
};
