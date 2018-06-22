<template>
  <v-container>
    <v-layout row wrap>
        <v-flex xs8>
          <!-- <song-view />
          <song-show /> -->
          <router-view />
        </v-flex>
        <v-flex xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
        <v-btn
          fab
          bottom
          right
          color="pink"
          dark
          fixed
          :to="{ name: 'songadd' }"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-layout>
  </v-container>
</template>

<script>
import Songs from '@/services/Songs'
import SongView from './SongView'
import SongShow from './SongShow'

export default {
  components: {
    SongView,
    SongShow
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await Songs.index()).data
  }
}
</script>

<style scoped>

</style>
