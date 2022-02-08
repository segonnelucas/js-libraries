import trackScroll from "../utils/trackScroll";

console.log(trackScroll(100));
// export default () => {
//   const goTopBtn = document.querySelector(".go-top");

//   const trackScroll = () => {
//     const scrolled = window.pageYOffset;
//     const coords = document.documentElement.clientHeight;

//     if (scrolled > coords) {
//       goTopBtn.classList.add("go-top--visible");
//     }
//     if (scrolled < coords) {
//       goTopBtn.classList.remove("go-top--visible");
//     }
//   };

//   const backToTop = () =>
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });

//   if (goTopBtn !== undefined) {
//     window.addEventListener("scroll", trackScroll, { passive: true });
//     goTopBtn.addEventListener("click", backToTop);
//   }
// };
