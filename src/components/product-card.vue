<template>
  <div>
    <div class="producto">
      <center>
        <img
          :src="require('../../assets/' + item.pic)"
          width="150"
          height="150"
        />
      </center>
      <div class="flex-row">
        <div class="flex-small three-fourth">{{ item.producto }}</div>
        <div class="flex-small one-fourth">
          <strong>${{ item.precio }}</strong>
        </div>
      </div>
      <div class="flex-row">
        <div class="flex-small one-third">
          <button v-if="saleOn" class="muted-button full-button" @click="cantidad--">-</button>
        </div>
        <div class="flex-small one-third">
          <input type="text" id="cantidad" :value="cantidad" disabled readonly />
        </div>
        <div class="flex-small one-third">
          <button v-if="saleOn" class="muted-button full-button" @click="cantidad++">+</button>
        </div>
      </div>
      <button v-if="saleOn" class="accent-button full-button" @click="buy">Comprar</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'product-card',
    props: ["showItem"],
    data() {
        return {
            item: this.showItem,
            cantidad: 1,
            saleOn: true
        }
    },
    methods: {
        buy() {
            //alert("comprado");
            this.saleOn = false;
            let payload = this.item;
            payload.cantidad = this.cantidad;
            this.$emit('buy',payload);
        }
    }
};
</script>

<style>
</style>