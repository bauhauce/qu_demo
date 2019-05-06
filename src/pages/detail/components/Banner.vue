<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="imgSrc">
      <div class="banner-info">
        <p class="banner-title">{{title}}</p>
        <p class="banner-number">
          <span class="iconfont icon-img">&#xe64a;</span>
          {{this.galleryImgs.length}}
        </p>
      </div>
    </div>
    <fade-animation>
      <common-gallery
      v-show="showGallery"
      :imgs="galleryImgs"
      @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from '../../../common/Gallery'
import FadeAnimation from '../../../common/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    title: String,
    imgSrc: String,
    galleryImgs: Array
  },
  data () {
    return {
      gallery: [
        'http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg',
        'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'
      ],
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      color: #fff
      background: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.5))
      .banner-title
        float: left
        padding: .2rem
        font-size: .32rem
      .banner-number
        float: right
        padding: .2rem
        font-size: .32rem
</style>
