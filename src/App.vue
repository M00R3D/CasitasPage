<template>
  <router-view />
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import InitialHome from './components/InitialHome.vue'; // Importa tu componente
import DetallesCasita from './components/DetallesCasita.vue'; // Asegúrate de importar DetallesCasita

const routes = [
  { path: '/', component: InitialHome, name: 'home' },
  { path: '/detalles-casita/:cabinIndex', component: DetallesCasita, name: 'detalles-casita' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default {
  setup() {
    return { router };
  }
};
</script>
