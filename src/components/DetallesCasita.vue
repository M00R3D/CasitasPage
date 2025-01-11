<template>
  <div v-if="cabinDetails">
    <div class="container mt-5">
      <h1>{{ cabinDetails.title }}</h1>
      <img :src="cabinDetails.image" class="img-fluid" alt="Cabaña">
      <p>{{ cabinDetails.description }}</p>
      <p><strong>Camas:</strong> {{ cabinDetails.beds }}</p>
      <p><strong>Baños:</strong> {{ cabinDetails.baths }}</p>
      <p><strong>Recámaras:</strong> {{ cabinDetails.rooms }}</p>
      <p><strong>Capacidad:</strong> {{ cabinDetails.capacity }} personas</p>
      <p><strong>Disponibilidad:</strong></p>
      <div id="calendar"></div>
      <button class="btn btn-primary mt-3" @click="$emit('agendar-cita')">Solicitar Agendar Cita</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cabin: {
      type: Object,
      required: true
    }
  },
  computed: {
    cabinDetails() {
      const cabinIndex = this.$route.params.cabinIndex; // Obtén el índice de la ruta
      return this.$store.state.cabins[cabinIndex]; // Asegúrate de que tienes acceso a la lista de cabins
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
