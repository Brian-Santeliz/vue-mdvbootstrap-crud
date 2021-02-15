<template>
  <section>
    <section v-if="loading" class="d-flex justify-content-center text-center">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </section>
    <template v-if="!articles.length">
      <h3 class="text-center p-2 mt-3 text-capitalize">
        El Inventario esta vació, empieza agregar
      </h3>
    </template>
    <template v-else>
      <table class="table table-hover">
        <thead>
          <tr class="table-primary">
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Preció</th>
            <th scope="col">Acciónes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ name, description, price, id } in articles" :key="id">
            <th scope="row">{{ id }}</th>
            <td>{{ name }}</td>
            <td>{{ description }}</td>
            <td>{{ price }}</td>
            <td>
              <router-link :to="`/edit/${id}`" class="btn btn-info mb-1"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                  />
                </svg>
              </router-link>
              <button
                class="btn btn-danger mb-1"
                @click="handleDeleteArticle(id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </section>
</template>

<script>
import Swal from "sweetalert2";
 const endPoint = "/api/articles";


export default {
  name: "List",
  data() {
    return {
      articles: [],
      loading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    handleDeleteArticle(idx) {
      Swal.fire({
        title: "Eliminar",
        text: "¿Estas seguro en eliminar este artículo?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Si, eliminar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire("Eliminado!", "Articulo eliminado del stock", "success");
          try {
            await fetch(`${endPoint}/${idx}`, {
              method: "DELETE",
            });
            this.articles = this.articles.filter(
              (article) => article.id !== idx
            );
          } catch (error) {
            console.error(error);
          }
        }
      });
    },
    async fetchData() {
      try {
        this.loading = true;
        const response = await fetch(endPoint);
        const data = await response.json();
        this.articles = data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },
  },
};
</script>
