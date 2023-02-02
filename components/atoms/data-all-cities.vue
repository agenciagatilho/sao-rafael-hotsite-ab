<template>
  <datalist id="data-all-cities">
    <option v-for="city in cities" :key="city" :value="city" />
  </datalist>
</template>

<script>
export default {
  data () {
    return {
      cities: []
    }
  },
  created () {
    (async () => {
      const cities = await this.$brasil.allCities()

      setTimeout(() => {
        this.cities = cities
      }, 1000)
    })()
  }
}
</script>
