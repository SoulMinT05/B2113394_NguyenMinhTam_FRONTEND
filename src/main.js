import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import router
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons'; // Import các biểu tượng mà bạn muốn sử dụng

// Thêm các biểu tượng vào thư viện
// library.add(faUser, faCoffee);

// Tạo ứng dụng Vue
const app = createApp(App);

// Đăng ký FontAwesomeIcon như là một component toàn cục
app.component('font-awesome-icon', FontAwesomeIcon);

// Sử dụng router
app.use(router);

// Mount ứng dụng
app.mount('#app');
