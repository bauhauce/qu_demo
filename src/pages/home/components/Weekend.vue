<template>
  <div>
    <h2 class="title">周末去哪儿</h2>
    <div class="item" v-for="item of list" :key="item.id">
      <img :src="item.imgUrl" alt="图片" class="item-img">
      <h3 class="item-title">{{item.title}}</h3>
      <p class="item-desc">{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
  .title
    line-height: .6rem
    background-color #eee
    padding-left: .2rem
  .item
    margin-bottom: .2rem
    overflow: hidden
    .item-img
      width: 100%
    .item-title
      line-height: .46rem
      font-size: .3rem
      font-weight: bold
      ellipsis()
    .item-desc
      color: #999
      line-height: .46rem
      ellipsis()

</style>
