import { createStore } from 'vuex';
import counterModule from './counter/index';
import authModule from './auth/index';

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: authModule
  }
});

export default store;