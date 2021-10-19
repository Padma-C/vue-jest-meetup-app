import { createApp } from 'vue';
import App from './App.vue';
import store from './state/store';
import router from './routes/router';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
