<template>
  <div>
    <header>
      <div class="header-left">
        <span class="iconfont iconfont-back">&#xe624;</span>
      </div>
      <div class="header-search">
        <span class="iconfont iconfont-search">&#xe632;</span>
        <input type="text" class="search-input" placeholder="输入城市/景点/游玩主题">
      </div>
      <router-link to="/city" class="header-right">
        上海
        <span class="iconfont iconfont-down">&#xe6aa;</span>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import './../../../assets/styles/varibles.styl'
  header
    display: flex
    justify-content: space-between
    align-items: center
    width: 100%
    height: .86rem
    background-color: $bgColor
    .header-left
      margin-left: .2rem
      color: #fff
    .header-search
      flex: 1
      margin: 0 .2rem
      height: .6rem
      background-color: #fff
      border-radius: .06rem
      position: relative
      .iconfont-search
        position: absolute
        left: .1rem
        top: .12rem
      input
        width: 100%
        height: 100%
        text-align: center
        border-radius: .06rem
    .header-right
      margin-right: .2rem
      color: #fff
</style>
