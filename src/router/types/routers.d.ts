import "vue-router";
import type { RouteRecordRaw } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    requiresAuth?: boolean;
    title?: string;
    roles?: string[];
    keepAlive?: boolean;
    icon?: string;
    hidden?: boolean;
    order?: number;
  }

  interface AppRouteRecordRaw extends RouteRecordRaw {
    path: string;
    name?: string;
    component?: Component | string;
    meta?: RouteMeta;
    redirect?: string;
    children?: AppRouteRecordRaw[];
    props?: boolean | Record<string, any> | ((to: RouteLocationNormalized) => Record<string, any>);
  }
}

