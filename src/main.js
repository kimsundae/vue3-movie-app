import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";
import store from "./store/index.js";
import loadImage from './plugins/loadImage'
createApp(App)
    .use(router)
    .use(store)
    .use(loadImage)
    .mount("#app");
