export const zoom = ({ zoomBlock, zoomClose, zoomOpen }) => {
  const body = document.querySelector("body");
  const zoomOverlay = document.getElementById(zoomBlock);

  document.addEventListener("click", (e) => {
    if (e.target.closest(`.${zoomOpen}`)) {
      e.preventDefault();
      zoomOverlay.style.display = "block";
      body.classList.add("active");
    }
    if (
      e.target.closest(`#${zoomBlock}`) ||
      e.target.closest(`#${zoomClose}`)
    ) {
      zoomOverlay.style.display = "none";
      body.classList.remove("active");
    }
  });
};
