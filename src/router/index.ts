import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layout/AppLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/countdown",
          name: "dashboard",
          component: () => import("@/views/count-down/CountDownCalendar.vue"),
        },
      ],
    },
    {
      path: "/test",
      component: () => import("@/views/TestPage.vue"),
    },
  ],
});

export default router;
