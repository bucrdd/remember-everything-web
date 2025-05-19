import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vuetify from "vite-plugin-vuetify";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vuetify(),
    Components({
      dirs: ["src/components", "src/layout"],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 18099,
    proxy: {
      "^/api/": {
        target: "http://127.0.0.1:8000",
      },
    },
  },
});
