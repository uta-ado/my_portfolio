import { createRouter, createWebHistory } from 'vue-router'
import routes from 'pages-generated';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...routes
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return {
      el: to.hash,
      behavior: "smooth",
    }
  },
})

export default router
