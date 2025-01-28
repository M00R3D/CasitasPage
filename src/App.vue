<template>
  <div id="app">
    <router-view></router-view> <!-- Este es el contenedor de las rutas -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
