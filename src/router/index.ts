import { createRouter, createWebHistory } from "vue-router";
import routes from "./routers";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || document.title;
  }

  if (to.meta.requiresAuth) {
    const isAuthenticated = checkAuth(); // 你的认证检查方法
    if (!isAuthenticated) {
      next({ name: "Login", query: { redirect: to.fullPath } });
      return;
    }
  }

  if (to.meta.roles) {
    const userRoles = getUserRoles(); // 获取用户角色
    if (!to.meta.roles.some((role) => userRoles.includes(role))) {
      next({ name: "Forbidden" }); // 跳转到无权限页面
      return;
    }
  }

  next();
});

export default router;

function checkAuth(): boolean {
  return true;
}

function getUserRoles(): string[] {
  return [];
}
