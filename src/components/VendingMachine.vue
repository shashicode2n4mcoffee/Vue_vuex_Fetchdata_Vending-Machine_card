<template lang="">
  <div class="container">
    <!-- <div>
      <h1>{{ itemNum }}</h1>
      <button @click="addItem">Add</button>
    </div> -->
    <div class="card-wrapper">
      <div
        class="card-image"
        @mouseover="show = true"
        @mouseleave="show = false"
      >
        <img :src="image" />
        <div class="card-color" v-if="show">
          <h3 v-if="stock > 0">
            In Stock
          </h3>
          <h3 v-if="stock === 0">Out of stock</h3>
        </div>
      </div>

      <div class="card-details ">
        <p>Coca Cola</p>
        <span class="card-details-stock"> &nbsp;{{ stock }} </span>
        <span>&nbsp; in Stock</span>
        <div class="card-move">
          <button @click="dispense">Dispense</button>
          <button @click="restock">
            Restock
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VendingMachine',
  data() {
    return {
      item: 0,
      image: 'https://wallpapercave.com/wp/wp2725034.jpg',
      show: false,
    }
  },
  computed: {
    itemNum() {
      console.log('Item before dispatch')
      return this.$store.state.item
    },
    stock() {
      return this.$store.state.list.stock
    },
  },
  methods: {
    dispense() {
      this.$store.dispatch('dispense')
    },
    restock() {
      this.$store.state.list.stock = 25
    },
    addItem() {
      this.$store.dispatch('addItem')
    },
  },
}
</script>
<style>
body {
  margin: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-wrapper {
  min-width: 18rem;
  height: 70vh;
  overflow: hidden;
  background-color: #ccc7c7;
  border-radius: 1rem;
}

.card-image {
  height: 70%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.card-image h3 {
  z-index: 100;
}

.card-wrapper img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  object-fit: cover;
  transition: 0.5s ease-in-out;
  z-index: 0;
}

.card-wrapper img:hover {
  opacity: 0.5;
  transform: scale(1.1);
}

.card-details {
  margin: 0;
  height: 30%;
  color: rgb(39, 39, 39);
}

.show {
  display: none;
}
.card-details p {
  font-weight: bold;
}

button {
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  background-color: #48daa1;
  border: none;
  border-radius: 0.5rem;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

button:hover {
  box-shadow: 3px 3px 3px #888888;
  transform: scale(1.1);
}

.card-details-stock {
  font-weight: 800;
}

.card-color {
  color: #ffff;
  opacity: 2;
  color: rgb(238, 86, 15);
}
</style>
