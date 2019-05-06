<template>
  <div class="header">
    <router-link to="/">
      <div class="header-abs" v-show="showIcon">
        <span class="iconfont iconfont-abs-back">&#xe624;</span>
      </div>
    </router-link>
    <div class="header-fix" :style="opacityStyle">
      <router-link to="/">
        <span class="iconfont iconfont-fix-back">&#xe624;</span>
      </router-link>
      <h3>景点详情</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showIcon: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top >= 0 && top <= 41) {
        this.showIcon = true
        let opacity = top / 41
        this.opacityStyle.opacity = opacity
      } else {
        this.showIcon = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, false)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header-abs
    position: absolute
    left: .1rem
    top: .1rem
    width:.7rem
    height: .7rem
    line-height: .7rem
    text-align: center
    border-radius: 50%
    background-color: rgba(0,0,0,.6)
    z-index: 1
    .iconfont-abs-back
      color: #fff
  .header-fix
    position: fixed
    left: 0
    top: 0
    right: 0
    line-height: .82rem
    text-align: center
    // background: rgba(0,0,0,.7)
    background: #00bcd4
    color: #fff
    z-index: 1
    .iconfont-fix-back
      float: left
      padding-left: .2rem
      color: #fff
</style>
