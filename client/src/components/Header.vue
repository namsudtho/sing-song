<template>
  <v-toolbar
    color="blue darken-3"
    dark
    app
    fixed
  >
    <img class="img-brand" src="http://cdn.onlinewebfonts.com/svg/img_375331.png">
    <v-toolbar-title class="ml-0 pl-3 toolbar-title">
      SING SONG
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{
          name: 'songs'
        }">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'login'
        }">
        Login
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{
          name: 'register'
        }">
        Sign Up
      </v-btn>
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'sings'
      })
    }
  }
}
</script>

<style>
.img-brand {
  width: 35px;
  -webkit-filter: invert(1);
  filter: invert(1);
}
.home {
  cursor: pointer;
}
.home:hover {
  color: #E9E;
}
.toolbar-title {
  width: 150px;
}
</style>
