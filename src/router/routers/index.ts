import bills from "./bills";
import type { AppRouteRecordRaw } from "@/router/types/routers";

const routers: AppRouteRecordRaw[] = [
  {
    path: "/countdown",
    name: "countdown",
    component: () => import("@/views/count-down/CountDownCalendar.vue"),
  },
  {
    path: "/test",
    component: () => import("@/views/TestPage.vue"),
  },
  ...bills,

  // todo: 404 page
];

export default routers;
