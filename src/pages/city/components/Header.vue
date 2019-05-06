<template>
  <div>
    <header>
      <router-link class="header-left" to="/">
        <span class="iconfont iconfont-back">&#xe624;</span>
      </router-link>
      <h2 class="header-title">城市选择</h2>
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
    width: 100%
    height: .86rem
    background-color: $bgColor
    .header-left
      float: left
      margin-left: .2rem
      line-height: .86rem
      color: #fff
    .header-title
      width: 100%
      text-align:center
      line-height: .86rem
      font-size: .32rem
      color: #fff
</style>
