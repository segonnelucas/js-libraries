import { scrollFromTop } from "../utils/scrollFromTop.js";

export const goToTop = () => {
  // Create Element
  const goTopBtn = document.createElement("div");
  goTopBtn.classList.add("go-top");
  document.body.appendChild(goTopBtn);

  // Check scroll diff with top
  const trackScroll = () => {
    if (scrollFromTop(1000) == true) {
      goTopBtn.classList.add("go-top--visible");
    } else {
      goTopBtn.classList.remove("go-top--visible");
    }
  };

  // Go to top
  const backToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  window.addEventListener("scroll", trackScroll, { passive: true });
  goTopBtn.addEventListener("click", backToTop);
};
