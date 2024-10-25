<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid navbar-content">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mx-auto" href="#">
          <img src="https://i.ibb.co/Tq7v2SD/path1584.png" alt="Logo" class="logo">
          <p class="logo-text">Texto bajo el logo</p>
        </a>
        <button class="btn btn-primary">Agendar Cita</button>
      </div>
    </nav>

    <div class="banner mt-3">
      <img src="https://i.ibb.co/VNC8cvs/path2418120958092185912.webp" alt="Banner" class="img-fluid w-100">
    </div>

    <div class="container mt-5 gallery">
      <h2 class="text-center">Nuestras Cabañas</h2>
      <div class="gallery-content">
        <div class="card mb-4 shadow-sm" v-for="(cabin, index) in cabins" :key="index">
          <img :src="cabin.image" class="card-img-top" alt="Cabaña">
          <div class="card-body">
            <h5 class="card-title">{{ cabin.title }}</h5>
            <p class="card-text">{{ cabin.description }}</p>
            <button class="btn btn-secondary">Ver Más</button>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-info mt-5">
      <div class="container text-center">
        <h3>Contáctanos</h3>
        <p>Teléfono: (555) 555-5555</p>
        <p>Email: contacto@cabanas.com</p>
      </div>
    </div>

    <footer class="bg-light text-center py-3">
      <p>&copy; 2024 Cabañas. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      cabins: [
        { image: 'cabin1.jpg', title: 'Cabaña 1', description: 'Descripción de la cabaña 1' },
        { image: 'cabin2.jpg', title: 'Cabaña 2', description: 'Descripción de la cabaña 2' },
        { image: 'cabin3.jpg', title: 'Cabaña 3', description: 'Descripción de la cabaña 3' },
      ]
    };
  }
};
</script>

<style scoped>
.logo{
  width: 75%;
  height: 125%px;
}

button{
  background-color: #dfc479;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navbar {
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  background-color: bisque;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 24px;
  margin: 10px 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 50px;
}

.logo-text {
  font-size: 12px;
  color: #555;
  margin-top: 5px;
}

.banner img {
  max-height: 400px;
  object-fit: cover;
}

.gallery h2 {
  margin-bottom: 30px;
  font-weight: bold;
  color: #333;
}

.gallery-content {
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding: 1rem 0;
}

.card {
  min-width: 250px;
  flex: 0 0 auto;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.card-body {
  text-align: center;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
}

.contact-info {
  background-color: #f1f1f1;
  padding: 40px 0;
}

.contact-info h3 {
  color: #333;
  font-weight: bold;
}

.contact-info p {
  font-size: 18px;
  color: #666;
}

footer {
  background-color: #f8f9fa;
  padding: 15px 0;
  font-size: 14px;
  color: #777;
}
</style>
