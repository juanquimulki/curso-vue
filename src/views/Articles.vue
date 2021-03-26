<template>
  <div>
    <div class="flex-row">
      <div class="flex-small one-fourth">
        <label for="descripcion">Descripción:</label>
        <input
          type="text"
          placeholder="Descripción del Producto..."
          v-model="form.producto"
        />
      </div>
      <div class="flex-small one-fourth">
        <label for="precio">Precio:</label>
        <input
          type="text"
          placeholder="Precio del Producto..."
          v-model="form.precio"
        />
      </div>
      <div class="flex-small one-fourth">
        <label for="imagen">Imagen:</label>
        <select v-model="form.pic">
          <option value="imagen1.jpg">imagen1.jpg</option>
          <option value="imagen2.jpg">imagen2.jpg</option>
          <option value="imagen3.jpg">imagen3.jpg</option>
          <option value="imagen4.jpg">imagen4.jpg</option>
          <option value="imagen5.jpg">imagen5.jpg</option>
        </select>
      </div>
      <div class="flex-small one-fourth">
        <button class="round-button" style="margin-top: 50px" @click="addItem">
          Agregar
        </button>
      </div>
    </div>

    <br /><br />
    <table>
      <thead>
        <th>#</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Imagen</th>
        <th></th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="item in availableArticles" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.producto }}</td>
          <td>{{ item.precio | formatPrice }}</td>
          <td>{{ item.pic }}</td>
          <td><img :src="require('../../assets/' + item.pic)" width="25" /></td>
          <td>
            <button class="round-button mi-boton" @click="deleteItem(item.id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: ["availableArticles"],
  data() {
    return {
      form: {
        id: "",
        descripcion: "",
        precio: "",
        pic: "",
      },
    };
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    addItem() {
      this.$emit("addItem", this.form);
      this.form.producto = "";
      this.form.precio = "";
    },
  },
  filters: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return "$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style>
.mi-boton {
  font-weight: normal;
  font-size: 10pt;
  padding: 7px;
}
</style>