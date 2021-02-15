<template>
  <div class="row justify-content-center">
    <div class="col-md-9">
      <h3 class="text-center mb-3">Añadir Articulos</h3>
      <div class="card card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              v-model.trim="article.name"
              type="text"
              id="nombre"
              class="form-control text-dark"
              required
            />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea
              v-model.trim="article.description"
              id="descripcion"
              name="descripcion"
              class="form-control"
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="precio">Preció:</label>
            <input
              v-model="article.price"
              type="number"
              id="precio"
              class="form-control"
              required
            />
          </div>

          <div class="form-group mb-4">
            <button
              class="btn btn-success btn-block text-uppercase"
              :disabled="disabledButton"
            >
              Enviar
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
  name: "Add",
  data() {
    return {
      article: {
        name: "",
        description: "",
        price: null,
      },
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.article),
        });
        await response.json();
        this.$router.push({ name: "view" });
        Swal.fire("Agregado!", "Articulo añadidó al stock", "success");
      } catch (error) {
        console.error(errror);
      }
    },
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
