<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card class="card">
      <v-card-title
        class="grey lighten-4 py-4 title"
      >
        Edit Song
      </v-card-title>
      <v-container grid-list-sm class="pa-4">
        <v-layout row wrap>
          <v-flex xs6>
            <v-text-field
              prepend-icon="library_music"
              label="Title"
              v-model="song.title"
              :rules="titleRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Album"
              v-model="song.album"
              :rules="albumRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              prepend-icon="account_circle"
              label="Artist"
              v-model="song.artist"
              :rules="artistRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Genre"
              v-model="song.genre"
              :rules="genreRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              prepend-icon="image"
              label="Album Image URL"
              v-model="song.albumImageUrl"
              :rules="albumImageUrlRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Youtube ID"
              v-model="song.youtubeId"
              :rules="youtubeIdRules"
              required
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              multi-line
              label="Lyrics"
              v-model="song.lyrics"
              :rules="lyricsRules"
              counter="2000"
              textarea
              rows="12"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-alert v-if="error" :value="true" color="error" icon="warning">{{error}}</v-alert>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          flat
          color="error"
          :to="{ name: 'songs' }"
        >
          Cancel
        </v-btn>
        <v-btn
          flat
          color="primary"
          :disabled="!valid"
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import Songs from '@/services/Songs'

export default {
  data () {
    return {
      song: {
        singId: null,
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null
      },
      valid: true,
      error: null,
      titleRules: [ v => !!v || 'Title is required' ],
      albumRules: [ v => !!v || 'Album is required' ],
      artistRules: [ v => !!v || 'Artist is required' ],
      genreRules: [ v => !!v || 'Genre is required' ],
      albumImageUrlRules: [ v => !!v || 'Album Image URL is required' ],
      youtubeIdRules: [ v => !!v || 'Youtube ID is required' ],
      lyricsRules: [ v => !!v || 'Lyrics is required' ]
    }
  },
  methods: {
    async save () {
      if (this.$refs.form.validate()) {
        const songId = this.$store.state.route.params.songId
        try {
          await Songs.put(this.song)
          this.$router.push({
            name: 'songshow',
            params: {
              songId: songId
            }
          })
        } catch (err) {
          this.error = err
        }
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await Songs.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 0 10px 0 0;
  }
</style>
