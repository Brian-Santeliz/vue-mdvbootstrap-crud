<template>
  <div class="row justify-content-center mb-5">
    <div class="col-md-9">
      <h3 class="text-center mb-3">
        Editar Articulo con ID: {{ $route.params.id }}
      </h3>
      <div class="card card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              class="form-control text-dark"
              required
              v-model.trim="article.name"
            />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              class="form-control"
              rows="4"
              v-model.trim="article.description"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="precio">Preció:</label>
            <input
              type="number"
              v-model="article.price"
              id="precio"
              class="form-control"
              required
            />
          </div>

          <div class="form-group mb-4">
            <button class="btn btn-info btn-block" :disabled="disabledButton">
              Actualizar
              <i class="bi bi-cursor-fill"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
const endPoint = "/api/articles";

export default {
  name: "Edit",
  data() {
    return {
      id: this.$route.params.id,
      article: {
        name: "",
        description: "",
        price: null,
      },
    };
  },
  methods: {
    async fetchDataById() {
      try {
        const response = await fetch(`${endPoint}/${this.id}`);
        const data = await response.json();
        this.article = data[0];
      } catch (error) {
        console.error(error);
      }
    },
    async submitForm() {
      try {
        await fetch(`${endPoint}/${this.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.article),
        });
        this.$router.push({ name: "view" });
        Swal.fire("Actualizado!", "Articulo actualizado al stock", "success");
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchDataById();
  },
  computed: {
    disabledButton() {
      return this.article.name.trim() === "" ||
        this.article.description.trim() === ""
        ? true
        : false;
    },
  },
};
</script>
