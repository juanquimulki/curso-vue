<template>
  <div>
    <table>
      <thead>
        <th>#</th>
        <th>Descripción</th>
        <th>Precio U.</th>
        <th>Imagen</th>
        <th></th>
        <th>Cantidad</th>
        <th>Total</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartArticles" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.producto }}</td>
          <td>{{ item.precio | formatPrice }}</td>
          <td>{{ item.pic }}</td>
          <td></td>
          <td>{{ item.cantidad }}</td>
          <td>{{ (item.cantidad * item.precio) | formatPrice }}</td>
          <td>
            <img :src="require('../../assets/' + item.pic)" width="25" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-right">
      <h5>Sub-Total: {{ subtotal | formatPrice }}</h5>
      Forma de pago:<br />
      <select v-model="descuento" style="width: 200px !important; float: right">
        <option disabled value="-1">Escoja por favor...</option>
        <option value="0">1 Cuota - +0%</option>
        <option value="5">3 Cuotas - +5%</option>
        <option value="10">6 Cuotas - +10%</option>
        <option value="20">12 Cuotas - +20%</option></select
      ><br />
      <h2>Total: {{ total | formatPrice }}</h2>
    </div>

    <button :class="claseBotonComprar" :disabled="disabledBotonComprar" @click="confirm">Confirmar Compra</button>

    <br>
    <pre v-html="salida"></pre>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ["cartArticles"],
  data() {
    return {
      descuento: -1,
      total: 0,
      salida: ""
    };
  },
  methods: {
    confirm() {
      var d = new Date()
      let fecha = (d.getFullYear().toString() + '-' + (d.getMonth()+1).toString() + '-' + d.getDate().toString());
      let hora = (d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

      let articulos = this.cartArticles.map((x) => { return { id: x.id, quantity: x.cantidad } });

      let payload = {
        now: {
          date: fecha,
          time: hora
        },
        products: articulos,
        payment: this.descuento
      }

      this.salida = payload;
    }
  },
  created() {
    this.total = this.cartArticles.reduce(function (a, b) {
      return a + b.precio * b.cantidad;
    }, 0);
  },
  computed: {
    disabledBotonComprar() {
      return (this.cartArticles.length == 0 || this.descuento < 0);
    },
    subtotal() {
      return this.cartArticles.reduce(function (a, b) {
        return a + b.precio * b.cantidad;
      }, 0);
    },
    claseBotonComprar() {
      if (!this.disabledBotonComprar) {
        return "full-button accent-button";
      } else {
        return "full-button muted-button";
      }
    },
  },
  watch: {
    descuento(valor) {
      this.total = this.subtotal + (this.subtotal * valor) / 100;
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
</style>