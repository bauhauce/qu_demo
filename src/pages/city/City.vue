<template>
  <div>
    <city-header></city-header>
    <city-search :list="cities"></city-search>
    <city-list :hot="hotCities" :list="cities" :letter="letter"></city-list>
    <city-alphabet :list="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

import axios from 'axios'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleChange (val) {
      this.letter = val
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
