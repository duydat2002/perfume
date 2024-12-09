import "./assets/style.css";
import "swiper/swiper-bundle.css";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { ClickInside, ClickOutside } from "./directives";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(router);
app.directive("click-outside", ClickOutside);
app.directive("click-inside", ClickInside);
app.mount("#app");
