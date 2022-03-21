export const zoom = ({ zoomBlock, zoomClose, zoomOpen }) => {
  const zoomOverlay = document.getElementById(zoomBlock);

  document.addEventListener("click", (e) => {
    if (e.target.closest(`.${zoomOpen}`)) {
      e.preventDefault();
      zoomOverlay.style.display = "block";
    }
    if (
      e.target.closest(`#${zoomBlock}`) ||
      e.target.closest(`#${zoomClose}`)
    ) {
      zoomOverlay.style.display = "none";
    }
  });
};
