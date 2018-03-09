<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bgImage="pic" :rank="rank"></music-list>
  </transition>
</template>

<script>
  import MusicList from 'components/music-list/music-list'
  import {getTopListSongs} from 'api/rank'
  import {createSong} from 'common/js/song'
  import {mapGetters} from 'vuex'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        songs: [],
        pic:'',
        rank:true
      }
    },
    created() {
      this._initTopList()
    },
    computed: {
      title() {
        return this.topList.topTitle
      },
      ...mapGetters([
        'topList'
      ])
    },
    methods: {
      _initTopList() {
        if (!this.topList.id) {
          this.$router.push({
            path: '/rank'
          })
          return
        }
        getTopListSongs(this.topList.id).then((res) => {
          if (res.code === ERR_OK) {
            this.pic = res.topinfo.pic_album
            this.songs = this._normalTopListSong(res.songlist)
          }
        })
      },
      _normalTopListSong(list) {
        let ret = []
        list.forEach((item) => {
          ret.push(createSong(item.data))
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
    transition: all 0.5s ease

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
