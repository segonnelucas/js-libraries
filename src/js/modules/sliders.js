import Swiper from "swiper/bundle";

export const sliders = () => {
  const swiperMultiple = new Swiper('.swiper[data-slidertype="multiple"]', {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 4,
    autoHeight: true,
    spaceBetween: 10,
  });
  const swiperSimple = new Swiper('.swiper[data-slidertype="simple"]', {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: 0,
  });
};
