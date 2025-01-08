import { createRouter, createWebHistory } from 'vue-router';
import { Dashboard } from '@/features/dashboard';
import { Patients } from '@/features/patients';
import { RouteName, RoutePath } from '@/enums';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.Dashboard,
      name: RouteName.Dashboard,
      component: Dashboard,
    },
    {
      path: RoutePath.Patients,
      name: RouteName.Patients,
      component: Patients,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next({ name: RouteName.Dashboard });
  } else {
    next();
  }
});

export default router;
