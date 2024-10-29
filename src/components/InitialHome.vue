<template>
  <div>

    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid navbar-content">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand mx-auto" href="#">
          <img src="https://i.ibb.co/Tq7v2SD/path1584.png" alt="Logo" class="logo">
          <p class="logo-text">Casitas El Salitral<br>Escápate a la naturaleza</p>
        </a>
        <button class="btn btn-primary btn-agendar d-lg-none mt-2">Agendar Cita</button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">Sobre Nosotros</a>
            <ul class="dropdown-menu" aria-labelledby="aboutDropdown">
              <li><a class="dropdown-item" href="#">Quienes somos</a></li>
              <li><a class="dropdown-item" href="#">En donde nos encontramos</a></li>
              <li><a class="dropdown-item" href="#">FAQ</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="siteDropdown" role="button" data-bs-toggle="dropdown">El Sitio</a>
            <ul class="dropdown-menu" aria-labelledby="siteDropdown">
              <li><a class="dropdown-item" href="#">Galería de todas las fotos</a></li>
              <li><a class="dropdown-item" href="#">Ver todas las casitas</a></li>
              <li><a class="dropdown-item" href="#">Información de Eventos Próximos</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="contactDropdown" role="button" data-bs-toggle="dropdown">Contáctanos</a>
            <ul class="dropdown-menu" aria-labelledby="contactDropdown">
              <li><a class="dropdown-item" href="#">Medios de Contacto</a></li>
              <li><a class="dropdown-item" href="#">Envíanos un Email</a></li>
            </ul>
          </li>
        </ul>
        <button class="btn btn-primary btn-agendar d-none d-lg-inline-block">Agendar Cita</button>
      </div>
    </nav>

    <div class="banner">
      <img :src="currentBanner" alt="Banner" class="banner-image">
      <div class="banner-text">Explora Nuestras Cabañas</div>
    </div>

    <div class="container mt-5 gallery">
      <h2 class="text-center">Nuestras Cabañas</h2>
      <div class="gallery-content">
        <div class="card mb-4 shadow-lg" v-for="(cabin, index) in cabins" :key="index">
          <img :src="cabin.image" class="card-img-top" alt="Cabaña">
          <div class="card-body">
            <h5 class="card-title">{{ cabin.title }}</h5>
            <p class="card-text">{{ cabin.description }}</p>
            <button class="btn btn-secondary btn-ver-mas">Ver Más</button>
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
      <p>&copy; 2024 Casitas El Salitral. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      cabins: [
        { image: 'https://i.ibb.co/c3rTJvn/path359-8235235.jpg', title: 'Cabaña 1', description: 'Descripción de la cabaña 1' },
        { image: 'https://i.ibb.co/TRGMHPY/path123058912958125.jpg', title: 'Cabaña 2', description: 'Descripción de la cabaña 2' }
      ],
      banners: [
        'https://i.ibb.co/C6Gq0xS/BANNER-TOP-FOTO-CARIBE.jpg',
        'https://i.ibb.co/kqzpsHj/banner2.jpg',
      ],
      currentBanner: ''
    };
  },
  mounted() {
    let index = 0;
    this.currentBanner = this.banners[index];
    setInterval(() => {
      index = (index + 1) % this.banners.length;
      this.currentBanner = this.banners[index];
    }, 3000);
  }
};
</script>


<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';

.logo {
  width: 15%;
}

.logo-text {
  color: #555;
  font-size: 1.2rem;
  text-align: center;
}

.navbar {
  background-color: #f7f7f7;
  padding: 1rem 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-agendar {
  background-color: #d19f3c;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.btn-agendar:hover {
  background-color: #b88a2a;
}

.banner {
  position: relative;
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  transition: opacity 1s ease;
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3.5rem;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem 2rem;
  border-radius: 10px;
}

.gallery h2 {
  font-weight: bold;
  color: #333;
  margin-bottom: 30px;
}

.gallery-content {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 2rem 0;
  scrollbar-width: thin;
  scrollbar-color: #2282d6 #e0e0e0;
}

.gallery-content::-webkit-scrollbar {
  height: 8px;
}

.gallery-content::-webkit-scrollbar-track {
  background: #e0e0e0;
}

.gallery-content::-webkit-scrollbar-thumb {
  background-color: #2282d6;
  border-radius: 10px;
}

.card {
  width: 250px;
  flex: 0 0 auto;
  border-radius: 20px;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-img-top {
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card-body {
  text-align: center;
  background-color: #f8f9fa;
}

.btn-ver-mas {
  background-color: #2282d6;
  transition: background-color 0.3s;
}

.btn-ver-mas:hover {
  background-color: #1a6fb3;
}

.contact-info {
  background-color: #ececec;
  padding: 40px 0;
  border-radius: 10px;
}

.contact-info h3 {
  color: #333;
  font-weight: bold;
}

.contact-info p {
  font-size: 1.1rem;
  color: #555;
}

footer {
  background-color: #7c9e92;
  padding: 15px 0;
  font-size: 0.9rem;
  color: #000000;
}
</style>
