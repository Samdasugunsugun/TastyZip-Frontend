import { createApp } from 'vue';
import App from '@/App.vue';
import vClickOutside from 'click-outside-vue3';
import router from '@/router';

import '@/assets/main.css';

const app = createApp(App);

app.use(router);
app.use(vClickOutside);

app.mount('#app');
