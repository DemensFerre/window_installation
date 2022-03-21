export const scrolls = () => {
  const itemScroll = document.querySelector(".smooth-scroll");
  const blockScroll = document.querySelector("#header");

  itemScroll.addEventListener("click", () => {
    blockScroll.scrollIntoView({ behavior: "smooth" });
  });
};
