// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import InitialHome from './components/InitialHome.vue';
import DetallesCasita from './components/DetallesCasita.vue';

const routes = [
  { path: '/', component: InitialHome, name: 'home' },
  { path: '/detalles-casita/:cabinIndex', component: DetallesCasita, name: 'detalles-casita' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
