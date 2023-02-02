<template>
  <section
    ref="splide"
    class="splide v-new-carousel"
  >
    <div class="splide__slider">
      <div class="splide__track">
        <ul class="splide__list">
          <slot />
        </ul>
      </div>
    </div>
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev">
        Voltar
        <v-image src="icon_prevArrow.svg" width="25px" />
      </button>
      <button class="splide__arrow splide__arrow--next">
        Proximo
        <v-image src="icon_nextArrow.svg" width="25px" />
      </button>
    </div>
  </section>
</template>

<script>
import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide-core.min.css'

export default {
  props: {
    settings: {
      type: Object,
      default: () => ({})
    }
  },
  mounted () {
    const splideRef = this.$refs.splide

    if (!splideRef.classList.contains('is-initialized')) {
      let autoScroll = this.$device.isDesktop ? { speed: 0.3 } : { speed: 0.5 }
      if (typeof this.settings.autoScroll !== 'undefined') {
        autoScroll = this.settings.autoScroll
      }

      const splide = new Splide(splideRef,
        this.$device.isDesktop
          ? {
              type: 'loop',
              drag: true,
              focus: 'center',
              perPage: 3,
              gap: '30px',
              autoScroll,
              ...this.settings
            }
          : {
              type: 'loop',
              drag: true,
              focus: 'center',
              pauseOnFocus: false,
              pauseOnHover: false,
              perPage: 1,
              gap: '30px',
              autoScroll,
              ...this.settings
            }
      )

      if (this.$device.isDesktop && autoScroll) {
        splide.mount({ AutoScroll })
      } else {
        splide.mount()
      }
    }
  }
}
</script>

<style lang="scss">
.v-new-carousel{
  @apply visible;
  .splide__list {
    @apply h-full gap-0px flex-row;
    transition: min-height 0.3s ease-in;
  }

  .splide__pagination {
    @apply gap-25px pointer-events-none;

    li button{
      @apply mt-40px p-0 h-4px bg-$primary rounded-15px origin-center pointer-events-auto;
      width: calc(50vw / var(--list));
      background: rgba(151, 188, 213, 0.5);
      transition: all 0.3s ease-in-out;

      &.is-active{
        width: calc(100vw / var(--list));
        background: #97BCD5;
      }

      button{
        @apply hidden;
        &::before{
          content: '';
        }
      }
    }
  }
}
.splide__pagination{
  display: none !important;
}
.splide__arrows{
  @apply mt-30px;
  .splide__arrow{
    @apply text-0px p-0 w-35px h-35px rounded-full relative mx-20px;

    svg{
      @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;
    }
  }
}

@media screen and (max-width: 768px) {
  .v-new-carousel{
    .splide__list {
      @apply gap-0px;
    }
  }
}
</style>
