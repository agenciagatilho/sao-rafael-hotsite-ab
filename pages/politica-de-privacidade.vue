<template>
  <main id="politica-de-privacidade">
    <v-container class="content">
      <h2>{{ privacy.title }}</h2>
      <div class="_content" v-html="privacy.content" />
    </v-container>
  </main>
</template>

<script>
import lang from '@/lang/ptbr.js'
export default {
  data () {
    return {
      privacy: lang.privacy
    }
  }
}
</script>

<style lang="scss">
  #politica-de-privacidade {
    @apply py-75px;
    .content{
      >*{
        @apply text-$text-dark
               flex flex-col gap-30px;
        font-size: 16px;
        line-height: 24px;

        ._trace{
          li::marker{
            @apply text-22px;
            content: '- ';
          }
        }
      }
    }
  }
</style>
