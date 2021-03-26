<template>
  <div>
    <blockquote>
      <p>Escogé los productos, y te los llevamos a casa!...</p>
      <cite>(sujeto a restricciones de horario y distancia)</cite>
    </blockquote>

    <div class="flex-row">
      <div class="flex-small one-fourth" v-for="item in availableArticles" :key="item.id">
        <ProductCard :showItem="item" @buy="handleBuy" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/product-card'

export default {
  name: "Shop",
  props: ["availableArticles"],
  components: {ProductCard},
  data() {
    return {
    }
  },
  methods: {
    handleBuy(item) {
      this.$emit("buy",item);
    }
  }
};
</script>

<style>
.producto {
  border: 2px solid black;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

#cantidad {
  text-align: center;
  background-color: lightgrey;
}
</style>