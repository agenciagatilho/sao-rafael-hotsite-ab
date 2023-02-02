<template>
  <v-container id="header" element="header">
    <v-link :to="sitemap.index.url" class="_logo">
      {{ sitemap.index.title }}
      <v-image src="logo_s_rafael.svg" :width="$device.isDesktop ? '116px' : '74px'" />
    </v-link>

    <menu >
      <li><v-link :to="sitemap.who_we_are.url" :text="sitemap.who_we_are.title" /></li>
      <li><v-link :to="sitemap.our_numbers.url" :text="sitemap.our_numbers.title" /></li>
      <li><v-link :to="sitemap.business_model.url" :text="sitemap.business_model.title" /></li>
      <li><v-link :to="sitemap.differentials.url" :text="sitemap.differentials.title" /></li>
      <li><v-link :to="sitemap.contact.url" :text="sitemap.contact.title" /></li>
    </menu>

    <v-menu-button />
  </v-container>
</template>

<script>
import lang from '~/lang/ptbr'

export default {
  data () {
    return {
      sitemap: lang.sitemap
    }
  }
}
</script>

<style lang="scss">
  #header {
    @apply  bg-$bg-white
            fixed top-0 left-0
            w-full h-130px z-998;

    .container{
      @apply h-130px
             flex justify-between items-center;

      ._logo{
        @apply text-0px;
      }

      menu {
        @apply flex gap-50px;

        li{
          @apply list-none;

          >*{
            @apply text-16px text-$text-primary;
            line-height: 16px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #header {
      @apply h-100px;
      .container{
        @apply h-100px;

        menu {
          @apply hidden;
        }
      }
    }
  }
</style>
