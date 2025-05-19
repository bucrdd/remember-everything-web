import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { zhHans } from "vuetify/locale";
import { md3 } from "vuetify/blueprints";
import DateFnsAdapter from "@date-io/date-fns";
import { zhCN } from "date-fns/locale/zh-CN";

const vuetify: any = createVuetify({
  locale: {
    locale: "zhHans",
    messages: { zhHans },
  },
  date: {
    adapter: new DateFnsAdapter({
      locale: zhCN,
      formats: {
        normalDate: "yyyy-MM-dd",
      },
    }),
  },
  blueprint: md3,
  defaults: {
    global: {
      density: "comfortable",
    },
  },
});

declare module "vuetify" {
  namespace DateModule {
    interface Adapter extends DateFnsAdapter {}
  }
}

export default vuetify;
