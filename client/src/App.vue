<template>
  <v-app id="inspire">
    <page-header />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import PageHeader from '@/components/Header'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.img-brand {
  width: 45px;
  -webkit-filter: invert(1);
  filter: invert(1);
}
</style>
