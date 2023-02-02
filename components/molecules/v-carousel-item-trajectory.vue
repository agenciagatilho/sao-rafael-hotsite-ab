<template>
  <div class="_v_carousel_item_trajectory splide__slide">
    <h3>{{ title }}</h3>
    <div class="_text" v-html="description" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  ._v_carousel_item_trajectory{
    @apply px-33px pb-35px pt-40px
           bg-$primary max-w-385px h-340px
           flex flex-col items-center justify-start gap-30px;
  }

  @media screen and (max-width: 768px) {
    ._v_carousel_item_trajectory{
      @apply max-w-90vw gap-20px;
    }
  }
</style>
