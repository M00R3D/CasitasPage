<template>
  <InitialHome />
</template>

<script>
import InitialHome from './components/InitialHome.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {
  name: 'App',
  components: {
    InitialHome,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: rgb(117, 138, 141);
}
</style>
