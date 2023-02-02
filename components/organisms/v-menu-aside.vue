<template>
  <v-container element="aside" id="_menu_aside">
    <menu>
      <li>
        <v-link :to="sitemap.index.url" class="_logo">
          {{ sitemap.index.title }}
          <v-image src="logo_s_rafael.svg" width="116px" />
        </v-link>
      </li>
      <li><v-link :to="sitemap.who_we_are.url" :text="sitemap.who_we_are.title" /></li>
      <li><v-link :to="sitemap.our_numbers.url" :text="sitemap.our_numbers.title" /></li>
      <li><v-link :to="sitemap.business_model.url" :text="sitemap.business_model.title" /></li>
      <li><v-link :to="sitemap.differentials.url" :text="sitemap.differentials.title" /></li>
      <li><v-link :to="sitemap.contact.url" :text="sitemap.contact.title" /></li>
    </menu>
  </v-container>
</template>

<script>
import lang from '~/lang/ptbr'
import { useMenuStore } from '~/store/menuState'
export default {
  data () {
    return {
      sitemap: lang.sitemap,
      state: useMenuStore()
    }
  },
  watch: {
    'state.show' (newVal, oldVal) {
      if (newVal) {
        document.querySelector('#_menu_aside').classList.add('show')
      } else {
        document.querySelector('#_menu_aside').classList.remove('show')
      }
    }
  },
  mounted () {
    document.querySelector('#_menu_aside')
      .addEventListener('click', this.closeMenu)
  },
  methods: {
    closeMenu () {
      this.state.show = false
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 769px) {
    #_menu_aside {
      @apply hidden;
    }
  }

  @media screen and (max-width: 768px) {
    #_menu_aside{
      @apply fixed w-200vw h-100vh
            left-0 top-0 z-999
            transform -translate-x-1/1
            pointer-events-none;
      background-color: #ffffff00;
      transition: background-color 0.3s linear 0.25s,
                  transform 0.3s ease-in-out;

      .container{
        @apply flex justify-start p-0 m-0;
        menu{
          @apply m-0 p-25px min-w-75vw h-100vh
                bg-$bg-white shadow
                list-none
                flex flex-col gap-30px;

          li{
            @apply text-left;

            ._logo{
              @apply text-0px mb-15px;
            }

            button{
              @apply text-22px text-$primary;
            }
          }
        }
      }

      &.show{
        @apply pointer-events-auto translate-x-0;
        background-color: #ffffff55;
      }
    }
  }
</style>
