export const scrollFromTop = scrollTrigger => {
  let scrolled = window.pageYOffset;
  if (scrolled > scrollTrigger) {
    return true;
  } else {
    return false;
  }
};
