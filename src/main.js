import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Tạo ứng dụng Vue
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

// Sử dụng router
app.use(router);

// Mount ứng dụng
app.mount('#app');
