<template>
  <div>
    <h2 class="title">热销推荐</h2>
    <router-link class="item" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
      <img :src="item.imgUrl" alt="图片" class="item-img">
      <div class="item-info">
        <h3 class="item-title">{{item.title}}</h3>
        <p class="item-desc">{{item.desc}}</p>
        <span class="item-more">查看详情</span>
      </div>
    </router-link>
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
    padding: 2%
    overflow: hidden
    // border-bottom: .01rem solid #ccc
    .item-img
      float: left
      width: 20%
    .item-info
      margin-left: 22%
      .item-title
        line-height: .46rem
        font-size: .3rem
        font-weight: bold
        ellipsis()
      .item-desc
        color: #999
        line-height: .46rem
        ellipsis()
      .item-more
        color: #fff
        font-size: .2rem
        font-weight: bold
        line-height: .42rem
        padding: 0 .3rem
        background-color: orange
        border-radius: .06rem
        ellipsis()
</style>
