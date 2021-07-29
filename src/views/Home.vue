<template>
  <div class="home">
    <button class="header">Vending Machine</button>
    <vending-machine />
  </div>
</template>

<script>
import VendingMachine from '../components/VendingMachine'

export default {
  name: 'Home',
  components: {
    VendingMachine,
  },
}
</script>

<style>
.header {
  background-color: #b6b575;
  margin: 1rem;
}
</style>
