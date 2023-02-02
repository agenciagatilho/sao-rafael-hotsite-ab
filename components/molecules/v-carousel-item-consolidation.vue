<template>
  <div class="_v_carousel_item_consolidation splide__slide">
    <v-image :src="`consolidation/con_${index+1}.svg`" width="100px" height="100px" />
    <p class="_text" v-html="description" />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
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
  ._v_carousel_item_consolidation{
    @apply bg-transparent max-w-150px text-center
           flex flex-col items-center justify-start gap-30px pb-20px;

    ._text{
      @apply text-20px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    ._v_carousel_item_consolidation{
      @apply pb-20px;

      ._text{
        @apply text-20px;
        line-height: 24px;
      }
    }
  }
</style>
