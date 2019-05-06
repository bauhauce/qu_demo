<template>
  <div>
    <ul class="wrapper" ref="wrapper">
      <li
      v-for="(item, key) of list"
      :key="item.id"
      @click="handleClick"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
      >{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      touchStatus: false,
      startY: 0
    }
  },
  props: {
    list: Object
  },
  computed: {
    letterList () {
      return Object.keys(this.list)
    }
  },
  updated () {
    this.startY = this.$refs.wrapper.offsetTop
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchstart () {
      this.touchStatus = true
    },
    handleTouchmove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.changedTouches[0].clientY - this.startY
          const index = Math.floor(touchY / 21)
          if (index >= 0 && index <= this.letterList.length) {
            this.$emit('change', this.letterList[index])
          }
        }, 10)
      }
    },
    handleTouchend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    list-style: none
    position: absolute
    top: 2.5rem
    right: 0
    width: .4rem
    line-height: .42rem
    text-align: center
    z-index: 99
</style>
