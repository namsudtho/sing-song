<template>
  <div class="song-show">
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-card-media :src="song.albumImageUrl" height="500px">
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <div class="title">
                  <div class="display-2">{{song.title}}</div>
                  <div class="headline">Artist: {{song.artist}}</div>
                  <div class="headline">Album: {{song.album}}</div>
                  <div class="headline">Genre: {{song.genre}}</div>
                </div>
              </v-flex>
            </v-layout>
          </v-card-media>
          <v-layout align-center justify-center>
            <youtube
              class="youtube"
              :video-id="song.youtubeId"
              :player-width="700"
            >
            </youtube>
          </v-layout>
          <div>
            <p class="headline text-xs-center">Lyrics: {{song.title}}</p>
            <textarea
              class="text-xs-center body-2"
              readonly
              v-model="song.lyrics"
            ></textarea>
          </div>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="mt-2">
      <v-flex xs12>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Songs from '@/services/Songs'
// import { mapState } from 'vuex'

// console.log(this.route.params.songId)
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await Songs.show(songId)).data
    // if (this.isUserLoggedIn) {
    //   SongHistoryService.post({
    //     songId: songId
    //   })
    // }
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
    margin-top: 320px;
    background: -moz-linear-gradient(left, rgba(0,0,0,0.5) 1%, rgba(0,0,0,0.48) 2%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 98%, rgba(0,0,0,0) 100%);
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.5) 1%,rgba(0,0,0,0.48) 2%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 98%,rgba(0,0,0,0) 100%);
    background: linear-gradient(to right, rgba(0,0,0,0.5) 1%,rgba(0,0,0,0.48) 2%,rgba(0,0,0,0) 25%,rgba(0,0,0,0) 98%,rgba(0,0,0,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80000000', endColorstr='#00000000',GradientType=1 );
  }
  .song-show {
    margin: 0 10px 0 0;
  }
  .youtube {
    margin-top: 30px;
  }
  textarea {
    width: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    border: none;
    height: 600px;
    border-style: none;
    border-color: transparent;
    overflow: auto;
  }
</style>
