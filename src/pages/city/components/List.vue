<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="city-current">
          <h3 class="city-title">当前城市</h3>
          <div class="city-content">
            <div class="city-item-wrap">
              <div class="city-item">上海</div>
            </div>
          </div>
        </div>
        <div class="city-hot">
          <h3 class="city-title">热门城市</h3>
          <div class="city-content">
            <div class="city-item-wrap" v-for="item of hot" :key="item.id">
              <div class="city-item">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="city-list" v-for="(item, key, index) of list" :key="index" :ref="key">
          <h3 class="city-title">{{key}}</h3>
          <div class="list-item" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    hot: Array,
    list: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        let element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position: absolute
  top: 1.68rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  .city-title
    padding-left: .2rem
    line-height: .6rem
    background-color: #eee
  .city-content
    padding: .2rem
    padding-right: .4rem
    padding-bottom: 0
    overflow: hidden
    .city-item-wrap
      float: left
      width: 33.3%
      line-height: .6rem
      .city-item
        line-height: .6rem
        text-align: center
        margin-right: .2rem
        margin-bottom: .2rem
        border: .01rem solid #ccc
        border-radius: .06rem
  .list-item
    padding-left: .2rem
    line-height: .66rem
    border-bottom: .01rem solid #eee
</style>
