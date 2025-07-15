import type { AppRouteRecordRaw } from "@/router/types/routers";
import login from "./login";
import bills from "./bills";

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
  ...login,
  ...bills,

  // todo: 404 page
];

export default routers;
