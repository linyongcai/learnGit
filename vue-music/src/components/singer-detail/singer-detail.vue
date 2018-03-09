<template>
  <transition name="slide">
    <music-list :bg-image="bgImage" :title="title" :songs="songs"></music-list>
  </transition>

</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import { getSingerDetail } from 'api/singer'
  import MusicList from 'components/music-list/music-list'
  import {createSong} from 'common/js/song'
  import {ERR_OK} from 'api/config'
  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      bgImage() {
        return this.singer.avatar
      },
      title() {
        return this.singer.name
      },
      ...mapGetters([
        'singer'
      ])
    },
    created() {
      this._getSingerDetail()
    },
    methods: {
      _getSingerDetail() {
        if(!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if(res.code === ERR_OK) {
            this.songs = this._normalListSongs(res.data.list)
          }
        })
      },
      _normalListSongs(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if(musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
