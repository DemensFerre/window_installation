export const popup = ({
  popupContent,
  popupOverlay = "overlay",
  popupOverlayActive = "overlay-active",
  popupContentActive,
  popupClose,
  popupOpen,
}) => {
  const content = document.querySelector(`.${popupContent}`);
  const overlay = document.querySelector(`.${popupOverlay}`);

  const openPopup = () => {
    content.classList.toggle(popupContentActive);
    overlay.classList.toggle(popupOverlayActive);
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(`.${popupOpen}`)) {
      e.preventDefault();
      openPopup();
      console.log(e.target);
    }
    if (
      e.target.closest(`.${popupClose}`) ||
      e.target.closest(`.${popupOverlay}`)
    ) {
      openPopup();
      console.log(e.target);
    }
  });
};
