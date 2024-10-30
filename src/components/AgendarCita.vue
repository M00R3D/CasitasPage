<template>
    <div class="modal fade show" style="display: block;" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Agendar Cita</h5>
            <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="enviarFormulario">
              <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-3">
                <label for="date" class="form-label">Fecha</label>
                <input type="date" class="form-control" id="date" required>
              </div>
              <div class="mb-3">
                <label for="time" class="form-label">Hora</label>
                <input type="time" class="form-control" id="time" required>
              </div>
              <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      enviarFormulario() {
        alert('¡Tu cita ha sido agendada con éxito!');
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  