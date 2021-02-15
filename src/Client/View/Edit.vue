<template>
  <div class="row justify-content-center mb-5">
    <div class="col-md-9">
      <h3 class="text-center mb-3">
        Editar Articulo con ID: {{ $route.params.id }}
      </h3>
      <div class="card card-body">
        <form>
          <div class="form-group">
            <label for="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              class="form-control text-dark"
              required
            />
          </div>
          <div class="form-group">
            <label for="descripcion">Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              class="form-control"
              rows="4"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="precio">Precio:</label>
            <input type="number" id="precio" class="form-control" required />
          </div>

          <div class="form-group mb-4">
            <button class="btn btn-success btn-block">ENVIAR</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
};
</script>

<style>
</style>