<template>
  <component :is="require('@/assets/svgs/'+src+'?inline')" v-if="isSvg" :width="compWidth" :height="compHeight" />
  <picture
    v-else
    class="_v_image"
    :style="`--m-w: ${compWidth};`"
  >
    <source :srcset="src" :type="`image/${src.split('.')[1]}`">
    <img
      loading="lazy"
      :src="`${src.split('.')[0]}.png`"
      :alt="alt"
      :width="compWidth"
      :height="compHeight"
    >
  </picture>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    mobWidth: {
      type: String,
      default: null
    },
    mobHeight: {
      type: String,
      default: null
    }
  },
  computed: {
    isSvg () {
      if (this.src.includes('.svg')) {
        return true
      }
      return false
    },
    isMobile () {
      if (this.$device.isMobile) {
        return true
      }
      return false
    },
    compWidth () {
      if (this.isMobile && this.mobWidth) {
        return this.mobWidth
      }
      return this.width
    },
    compHeight () {
      if (this.isMobile && this.mobHeight) {
        return this.mobHeight
      }
      return this.height
    }
  }
}
</script>

<style lang="scss">
  ._v_image{
    @apply w-full max-w-max min-w-$m-w;
  }

  @media screen and (max-width: 768px) {
    ._v_image{
    @apply w-auto;
    min-width: auto;
  }
  }
</style>
