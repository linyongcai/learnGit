<template>
  <div class="loading">
    <img width="24" hegiht="24" src="./loading.gif">
    <p v-text="title"></p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入'
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable.styl'
  .loading
    width: 100%
    text-align: center
    p
      color: $color-text-ll
      font-size: $font-size-small
</style>
