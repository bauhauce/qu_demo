<template>
  <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="item" v-for="item of page" :key="item.id">
            <img :src="item.imgUrl" alt="图片">
            <p>{{item.desc}}</p>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      let pages = []
      if (this.list) {
        this.list.forEach(function (item, index) {
          const page = Math.floor(index/8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item);
        })
      }
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%
    height: 0
    padding-bottom: 52%
    overflow: hidden
    .item
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      text-align: center
      img
        width:70%
        margin: .12rem 0
</style>
