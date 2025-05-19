import type { AppRouteRecordRaw } from "@/router/types/routers";

const billsRouter: AppRouteRecordRaw[] = [
  {
    path: "/bills",
    name: "Bills",
    component: () => import("@/views/bills/Index.vue"),
    meta: {
      title: "Bills",
    },
  },
];

export default billsRouter;
