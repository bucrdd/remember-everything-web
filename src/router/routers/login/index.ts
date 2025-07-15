import type { AppRouteRecordRaw } from "@/router/types/routers";

const loginRouter: AppRouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/Index.vue"),
    meta: {
      title: "Login",
    },
  },
];

export default loginRouter;
