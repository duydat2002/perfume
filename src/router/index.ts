import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "link-active",
  linkExactActiveClass: "exact-link-active",
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.name == from.name || to.matched[0] != from.matched[0]) {
        return {
          top: 0,
        };
      }
    }
  },
});

const authPath = ["/accounts/login", "/accounts/emailsignup"];

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth) return "/accounts/login";
  if (authPath.includes(to.path)) return "/";
  return;
});

export default router;
