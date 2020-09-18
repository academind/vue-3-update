import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      users: [],
    };
  },
  mutations: {
    addUser(state, payload) {
      const newUser = {
        id: new Date().toISOString(),
        name: payload.name,
      };
      state.users.push(newUser);
    },
  },
  actions: {
    addUser(context, payload) {
      context.commit('addUser', payload);
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
});

const app = createApp(App)

app.use(store);
// app.use(router);

app.mount('#app');
