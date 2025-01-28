import { createRouter, createWebHistory } from 'vue-router';
import InitialHome from '../components/InitialHome.vue'; // Asegúrate de que la ruta sea correcta
import AgendarCita from '../components/AgendarCita.vue';

const routes = [
  {
    path: '/',
    name: 'InitialHome',
    component: InitialHome
  },
  {
    path: '/agendar-cita',
    name: 'AgendarCita',
    component: AgendarCita
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
