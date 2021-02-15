<template>
  <section>
    <template v-if="!articles.length">
      <h3 class="text-center p-2 mt-3">
        Inventario esta vació, empieza agregar
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
          <tr
            v-for="({ name, description, price, id }, index) in articles"
            :key="id"
          >
            <th scope="row">{{ id }}</th>
            <td>{{ name }}</td>
            <td>{{ description }}</td>
            <td>{{ price }}</td>
            <td>
              <router-link :to="`/edit/${id}`" class="btn btn-info"
                >Editar</router-link
              >
              <button
                class="btn btn-danger mt-1"
                @click="handleDeleteArticle(index)"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </section>
</template>

<script>
const endPoint = "/articles";
export default {
  name: "List",
  data() {
    return {
      articles: [
        {
          id: "1",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "2",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "3",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "4",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "5",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "6",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "7",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "1211",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
      ],
    };
  },
  created() {
    fetch(endPoint)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    handleDeleteArticle(idx) {
      this.articles.splice(idx, 1);
    },
  },
};
</script>
