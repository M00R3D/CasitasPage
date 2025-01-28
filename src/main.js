// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa las rutas definidas en tu archivo router

// Crea y monta la app
const app = createApp(App);
app.use(router);
app.mount('#app');
