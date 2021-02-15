<template>
  <div>
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <a class="navbar-brand float-left">FerreRoque CRUD</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">
              Listar Articulos
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add">
              Añadir Articulos
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container my-5">
      <router-view />
    </div>
    <footer
      class="fixed-bottom navbar navbar-dark bg-primary d-flex justify-content-center text-white"
    >
      <p class="">Frontend UVM | Roque Barrios &copy; {{ year }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
