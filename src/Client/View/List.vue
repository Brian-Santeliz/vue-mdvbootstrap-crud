<template>
  <table class="table table-hover mb-5">
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
      <tr v-for="(article, index) in articles" :key="article.id">
        <th scope="row">{{ article.id }}</th>
        <td>{{ article.name }}</td>
        <td>{{ article.description }}</td>
        <td>{{ article.price }}</td>
        <td>
          <router-link
            :to="{ name: 'edit', params: { id: article.id } }"
            class="btn btn-info"
            >Edit</router-link
          >
          <button class="btn btn-danger" @click="handleDeleteArticle(index)">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const endPoint = "/articles";
export default {
  name: "List",
  data() {
    return {
      articles: [
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
          name: "Example",
          description: "This is a example how description, example lorem2323",
          price: 232323323,
        },
        {
          id: "12121",
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
