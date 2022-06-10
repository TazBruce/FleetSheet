import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoggedOut.vue'),
    children: [
      {
        path: 'sign-in',
        component: () => import('pages/loggedOut/SignIn.vue')
      },
      {
        path: 'sign-up',
        component: () => import('pages/loggedOut/Register.vue')
      },
      {
        path: 'reset-password',
        component: () => import('pages/loggedOut/ResetPassword.vue')
      }
    ],
  },
  {
    path: '/home',
    component: () => import('layouts/Dashboard.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
