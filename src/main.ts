import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import { createPinia } from "pinia";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { zhHans } from "vuetify/locale";

const vuetify: any = createVuetify({
  locale: {
    locale: "zhHans",
    messages: { zhHans },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
