<template>
  <v-layout>
    <v-flex
      xs12
      md6
      lg3
      v-for="song in songs"
      :key="song.id"
    >
      <v-card class="song-list">
        <v-layout row>
          <v-flex>
            <v-card flat>
              <v-card-media class="v-card-media"
                :src="song.albumImageUrl"
                height="200px"
              >
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <div class="title">
                      <label>{{song.title}} - {{song.artist}}</label>
                    </div>
                  </v-flex>
                </v-layout>
              </v-card-media>
            </v-card>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                icon
                :to="{
                  name: 'songshow',
                  params: {
                    songId: song.id
                  }
                }"
              >
                <v-icon medium>play_arrow</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Songs from '@/services/Songs'

export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await Songs.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
  .v-card-media {
    height: 600px;
  }
  .title {
    color: white;
    padding: 10px;
    margin-top: 160px;
    background: -moz-linear-gradient(left, rgba(0,0,0,0.5) 1%, rgba(0,0,0,0.49) 2%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.5) 1%,rgba(0,0,0,0.49) 2%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0.5) 1%,rgba(0,0,0,0.49) 2%,rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=1 );
  }
  .song-list {
    margin: 0 10px 10px 0;
  }
</style>
