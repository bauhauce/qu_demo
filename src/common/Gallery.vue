<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery >>> .swiper-container
    overflow: inherit
  .gallery
    position: fixed
    left: 0
    top: 0
    right: 0
    bottom: 0
    display: flex
    align-items: center
    background: #000
    z-index: 9
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallery-img
        width:100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>
