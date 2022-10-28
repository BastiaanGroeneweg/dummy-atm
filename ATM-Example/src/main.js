import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCalculator,
  faPuzzlePiece,
  faBookOpen,
  faCircleCheck,
  faGears,
  faBolt,
  faPeopleGroup,
  faArrowRight,
  faCircleInfo,
  faAngleDown,
  faAngleUp,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons";

import App from "@/App.vue";
import "@/assets/tailwind.css";
import "tw-elements";
import router from "@/router";
import store from "@/store";

library.add(
  faCalculator,
  faPuzzlePiece,
  faBookOpen,
  faCircleCheck,
  faGears,
  faBolt,
  faPeopleGroup,
  faArrowRight,
  faCircleInfo,
  faAngleDown,
  faAngleUp,
  faNavicon
);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
