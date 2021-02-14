<template>
  <div class="row justify-content-center">
    <div class="col-md-12">
      <h3 class="text-center mb-3">Agregar Registro</h3>
      <div class="card card-body">
        <form>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              v-model="article.name"
              type="text"
              id="nombre"
              class="form-control text-dark"
              required
            />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea
              v-model="article.descripcion"
              id="descripcion"
              name="descripcion"
              class="form-control"
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="precio">Precio:</label>
            <input
              v-model="article.price"
              type="number"
              id="precio"
              class="form-control"
              required
            />
          </div>

          <div class="form-group">
            <button class="btn btn-success btn-block">ENVIAR</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      article: {
        name: "",
        description: "",
        price: "",
      },
    };
  },
};
</script>
