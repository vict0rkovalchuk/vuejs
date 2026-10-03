import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-member',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      }
    },
    {
      path: '/:404(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(_, _2, savedPosition) {
    return savedPosition ? savedPosition :  { left: 0, top: 0 };
  }
});

export default router;