<template>
  <div>
    <v-text-field
      label="Search by song title, artist, album, or genre"
      v-model="search"
      prepend-icon="search"
    ></v-text-field>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      impediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 0 10px 0 0;
  }
</style>
