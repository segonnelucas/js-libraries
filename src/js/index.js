import "../sass/styles.scss";

// Utils
import { isMobile } from "./utils/isMobile.js";
// Modules
import { goToTop } from "./modules/goToTop.js";
import { tabs } from "./modules/tabs.js";
import { panels } from "./modules/panels.js";

goToTop();
tabs();
panels();
