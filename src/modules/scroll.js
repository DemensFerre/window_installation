export const scrolls = () => {
  const itemScroll = document.querySelector(".smooth-scroll");
  const blockScroll = document.querySelector("#header");

  itemScroll.addEventListener("click", () => {
    blockScroll.scrollIntoView({ behavior: "smooth" });
  });

  const checkItemScroll = () => {
    if (document.documentElement.scrollTop > 800) {
      itemScroll.style.display = "block";
    } else if (document.documentElement.scrollTop < 800) {
      itemScroll.style.display = "none";
    }
  };

  window.addEventListener("scroll", () => {
    checkItemScroll();
  });

  checkItemScroll();
};
