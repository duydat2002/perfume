import AppLayout from "@/layouts/AppLayout.vue";
import BlankLayout from "@/layouts/BlankLayout.vue";
import { RouteRecordRaw } from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "Perfume Store", layout: AppLayout },
  },
  {
    path: "/products/:category?",
    name: "Products",
    beforeEnter: (to, from, next) => {
      const validCategories = ["men", "women", "unisex"];

      if (
        !to.params.category ||
        validCategories.includes(to.params?.category?.toString())
      ) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    },
    component: () => import("@/views/product/Products.vue"),
    meta: { title: "Perfume Store", layout: AppLayout },
  },
  {
    path: "/product/:slug",
    name: "Product",
    component: () => import("@/views/product/Product.vue"),
    meta: { title: "Perfume Store", layout: AppLayout },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("@/views/Cart.vue"),
    meta: { title: "Perfume Store • Giỏ hàng", layout: AppLayout },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/Account.vue"),
    meta: { title: "Perfume Store • Tài khoản", layout: AppLayout },
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/blog/index.vue"),
    meta: { title: "Perfume Store • Bài viết", layout: AppLayout },
  },
  {
    path: "/blog/:slug",
    name: "BlogDetail",
    component: () => import("@/views/blog/Detail.vue"),
    meta: { title: "Perfume Store • Bài viết", layout: AppLayout },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact.vue"),
    meta: { title: "Perfume Store • Liên hệ", layout: AppLayout },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: { title: "Perfume Store • Giới thiệu", layout: AppLayout },
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("@/views/auth/SignUp.vue"),
    meta: { title: "Perfume Store • Đăng ký", layout: BlankLayout },
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("@/views/auth/SignIn.vue"),
    meta: { title: "Perfume Store • Đăng nhập", layout: BlankLayout },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: "Không tìm thấy trang" },
  },
];

export default routes;
