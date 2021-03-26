<template>
  <div>
    <div class="top">
      <div class="titulo">Mi Aplicación</div>

      <div class="menu-container">
        <ul class="menu">
          <li><router-link to="/shop">Vitrina</router-link></li>
          <li>
            <router-link to="/cart">Carrito ({{ cantidad }})</router-link>
          </li>
          <li><router-link to="/articles">Artículos</router-link></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <router-view
        :availableArticles="datos"
        :cartArticles="carrito"
        @addItem="handleAddItem"
        @deleteItem="handleDeleteItem"
        @buy="handleBuy"
      ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      datos: require("../data/productos.json"),
      carrito: [],
    };
  },
  methods: {
    handleAddItem(form) {
      let add = {
        id: this.generateRandomString(4),
        producto: form.producto,
        precio: form.precio,
        pic: form.pic
      }
      this.datos.unshift(add);
    },
    handleDeleteItem(id) {
      this.datos = this.datos.filter(function (obj) {
        return obj.id !== id;
      });
    },
    handleBuy(item) {
      this.carrito.push(item);
    },
    generateRandomString(num) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result1 = " ";
      const charactersLength = characters.length;
      for (let i = 0; i < num; i++) {
        result1 += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      return result1;
    },
  },
  computed: {
    cantidad() {
      return this.carrito.length;
    },
  },
  created() {},
};
</script>

<style scoped>
.top {
  position: fixed;
  width: 100%;
  margin-top: -120px;
}

.titulo {
  background-color: #0366ee;
  color: white;
  padding: 15px;
  font-weight: bold;
  font-size: 16pt;
}

.menu-container {
  background-color: #0366ee;
  padding-left: 15px;
  padding-bottom: 10px;
  width: 100%;
}

.menu li {
  display: inline-block;
  width: 100px;
  text-align: center;
}

.menu li:hover {
  font-weight: bold;
  cursor: pointer;
}

.menu {
  margin: 0;
  padding: 0;
  color: white;
}

.container {
  margin-top: 120px;
}

li a {
  text-decoration: none;
  color: white;
}
</style>