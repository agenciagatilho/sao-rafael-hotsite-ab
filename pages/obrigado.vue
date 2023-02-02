<template>
  <main id="obrigado">
    <v-container class="_banner __large_background" small>
      <h1>{{ thanks.banner.title }}</h1>
      <p v-html="thanks.banner.description" />
    </v-container>
  </main>
</template>

<script>
import lang from '~/lang/ptbr'
export default {
  data () {
    return {
      thanks: lang.thanks
    }
  }
}
</script>

<style lang="scss">
  #obrigado {
    @apply mb-75px;
    ._banner{
      @apply min-h-695px bg-$primary;
      background-image: url('@/static/src/images/background_3.avif');

      >*{
        @apply items-center justify-center gap-30px;

        h1{
          @apply -mx-25px;
          font-size: 48px;
          line-height: 58px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #obrigado {
      @apply mb-50px;
      ._banner{
        >*{
          h1{
            @apply mx-0px;
            font-size: 40px;
            line-height: 48px;
          }
        }
      }
    }
  }
</style>
