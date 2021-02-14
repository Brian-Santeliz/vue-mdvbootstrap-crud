<template>
  <table class="table table-hover">
    <thead>
      <tr class="table-primary">
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
        <th scope="col">Preció</th>
        <th scope="col">Boton ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Primary</th>
        <td>Column content</td>
        <td>Column content</td>
        <td>Column content</td>
        <td>
          <router-link :to="{ name: 'edit', params: { id: 10 } }">
            <button>Ejemplo</button>
          </router-link>
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
      articles: [],
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
};
</script>
