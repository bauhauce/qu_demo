<template>
  <div class="wrapper">
    <input class="search" type="text" placeholder="输入城市或拼音" v-model="keyword">
    <div class="content" ref="content" v-show="this.keyword">
      <ul>
        <li class="item" v-for="item of result" :key="item.id">{{item.name}}</li>
        <li class="item" v-show="!this.result.length">找不到该城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      keyword: '',
      timer: null,
      result: []
    }
  },
  props: {
    list: Object
  },
  watch: {
    keyword () {
      const cities = []
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        for (let i in this.list) {
          this.list[i].forEach((item) => {
            if (item.spell.indexOf(this.keyword.toLowerCase()) > -1 || item.name.indexOf(this.keyword) > -1) {
              cities.push(item)
            }
          })
        }
      }, 16)
      this.result = cities
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.content)
  }
}
</script>

<style lang="stylus" scoped>
@import './../../../assets/styles/varibles.styl';
  .wrapper
    padding: .1rem .2rem
    background-color: $bgColor
    .search
      width: 100%
      height: .6rem
      text-align: center
      border-radius: .06rem
    .content
      position: absolute
      top: 1.68rem
      right: 0
      bottom: 0
      left: 0
      background: #eee
      z-index: 999
      overflow: hidden
      .item
        padding-left: .2rem
        line-height: .68rem
        border-bottom: .01rem solid #eee
        background-color: #fff
</style>
