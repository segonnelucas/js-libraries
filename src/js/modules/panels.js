export const panels = () => {
  const panelButtons = document.querySelectorAll(".toggle-panel");
  const panelCloseButtons = document.querySelectorAll(".close-panel");
  const panelBg = document.querySelector(".panel-bg");

  for (const panelButton of panelButtons) {
    panelButton.addEventListener("click", () => {
      showPanel(panelButton);
    });
  }
  for (const panelCloseButton of panelCloseButtons) {
    panelCloseButton.addEventListener("click", () => {
      hidePanel();
    });
  }
  panelBg.addEventListener("click", () => {
    hidePanel();
  });

  const showPanel = panelButton => {
    const dateAttrTargetPanel = panelButton.getAttribute("data-paneltarget");
    const targetPanel = document.querySelector(
      `.panel[data-paneltype="${dateAttrTargetPanel}"]`
    );
    targetPanel.classList.add("open");
    document.body.classList.add("panel-open");
  };

  const hidePanel = () => {
    const panelOpen = document.querySelector(".panel.open");
    panelOpen.classList.remove("open");
    document.body.classList.remove("panel-open");
  };
};
