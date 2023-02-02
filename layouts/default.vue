<template>
  <div id="body">
    <v-menu-aside />
    <v-header />
    <Nuxt />
    <v-footer />
    <BaseToast />
  </div>
</template>

<script>
import { useMenuStore } from '~/store/menuState'
export default {
  data () {
    return {
      state: useMenuStore()
    }
  }
}
</script>

<style lang="scss">
  #body{
    @apply flex flex-col bg-$bg pt-130px;
  }
  #toasts{
    @apply top-0 left-1/2;
  }

  @media screen and (max-width: 768px) {
    #body{
      @apply relative text-center pt-100px;
    }
  }
</style>
