<template lang="">
  <div class="container">
    <div>
      I am in Fetch Api
      <Button @click="fetchdata">Fetch Data</Button>
      <Button @click="deletedata">Delete Data</Button>
    </div>
    <div>
      <table>
        <tr v-if="data">
          <th>
            User ID
          </th>
          <th>
            Title
          </th>
        </tr>
        <tr v-for="item in data" :key="item.id">
          <td>
            {{ item.userId }}
          </td>
          <td>
            {{ item.title }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'FetchApi',
  data() {
    return {
      // data: undefined,
    }
  },

  computed: {
    data() {
      return this.$store.state.data
    },
  },
  methods: {
    fetchdata() {
      this.$store.dispatch('fetchdata')
      // axios
      //   .get('https://jsonplaceholder.typicode.com/albums')
      //   .then((response) => {
      //     this.data = response.data
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    deletedata() {
      this.$store.dispatch('deletedata')
    },
  },
}
</script>

<style>
.container {
  flex-direction: column;
}

table {
  width: 80%;
  margin: 2rem;
}

th {
  border: 3px solid;
}

td {
  border: 1px solid;
}
</style>
