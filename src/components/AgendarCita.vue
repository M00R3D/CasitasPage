<template>
    <div class="modal fade show" style="display: block;" tabindex="-1" aria-labelledby="agendarCitaModalLabel" aria-hidden="false">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="agendarCitaModalLabel">Agendar Cita</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="agendar">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" v-model="nombre" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="fecha" class="form-label">Fecha:</label>
                <input type="date" class="form-control" id="fecha" v-model="fecha" required>
              </div>
              <button type="submit" class="btn btn-primary">Agendar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AgendarCita',
    data() {
      return {
        nombre: '',
        email: '',
        fecha: ''
      };
    },
    methods: {
      agendar() {
        // Aquí puedes agregar la lógica para manejar la cita
        console.log(`Cita agendada: ${this.nombre}, ${this.email}, ${this.fecha}`);
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  