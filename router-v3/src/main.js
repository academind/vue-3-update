import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import WelcomeScreen from './pages/WelcomeScreen.vue';
import UsersList from './pages/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: WelcomeScreen },
    { path: '/users', component: UsersList },
  ],
});

const app = createApp(App);

app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});
