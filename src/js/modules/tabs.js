export const tabs = () => {
  const TabsWraps = document.querySelectorAll(".nav-tabs");

  for (const TabsWrap of TabsWraps) {
    const myTabs = TabsWrap.querySelectorAll(".tab-wrap");

    const myTabClicks = tabClickEvent => {
      const clickedTab = tabClickEvent.currentTarget;
      const anchorReference = tabClickEvent.target;
      const activePaneId = anchorReference.getAttribute("href");
      const activePane = document.querySelector(activePaneId);
      const myContentPanes = document.querySelectorAll(".tab-pane");

      tabClickEvent.preventDefault();

      for (const myTab of myTabs) {
        myTab.classList.remove("active");
      }

      for (const myContentPane of myContentPanes) {
        myContentPane.classList.remove("active");
      }

      clickedTab.classList.add("active");
      activePane.classList.add("active");
    };
    for (const myTab of myTabs) {
      const myTabParent = myTab.parentElement;
      const triggerChoice = myTabParent.getAttribute("data-tabstrigger");
      if (triggerChoice === "hover") {
        myTab.addEventListener("mouseover", myTabClicks);
      } else {
        myTab.addEventListener("click", myTabClicks);
      }
    }
  }
};
