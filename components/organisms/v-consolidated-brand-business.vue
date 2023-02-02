<template>
  <v-container class="_v_consolidated_brand_business">
    <h2>{{ item.title }}</h2>
    <span class="_buttons">
      <div
        v-for="i, index in item.list"
        :key="i.title"
        class="__button_consolidated_brand"
      >
        <button class="not" @click="openMenu">
          <v-image :src="`buttons/button_${index}.svg`" width="30px" height="27px" />
          {{ i.title }}
          <v-image src="icon_selectArrow.svg" width="10px" class="_select_arrow" />
        </button>

        <ul class="not">
          <li v-for="text in i.list" :key="text">
            {{ text }}
          </li>
        </ul>

      </div>

    </span>
    <button @click="goToForm" class="__cta">
      {{ cta }}
    </button>
  </v-container>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    cta: {
      type: String,
      required: true
    }
  },
  methods: {
    openMenu (e) {
      const ul = e.target.nextElementSibling
      e.target.classList.toggle('active')
      ul.classList.toggle('show')
    },
    goToForm () {
      const form = document.querySelector('._v_want_to_be_franchisee')
      const param = this.$device.isDesktop ? 130 + 75 : 100 + 40
      const formPos = form.offsetTop - param

      scrollTo({
        behavior: 'smooth',
        top: formPos
      })
    }
  }
}
</script>

<style lang="scss">
  ._v_consolidated_brand_business{
    @apply bg-$secondary py-40px;
    >*{
      @apply flex flex-col gap-40px;

      h2{
        @apply max-w-830px text-center mx-auto;
      }

      ._buttons{
        @apply grid grid-cols-3 gap-48px;

        .__button_consolidated_brand{
          @apply flex flex-col gap-20px;
          button{
            @apply h-78px px-40px w-full
                  flex items-center justify-center gap-12px
                  border-2px border-$primary
                  text-20px;
              line-height: 22px;

            >*{
              @apply pointer-events-none;
            }

            svg *{
              @apply fill-white;
            }
            ._select_arrow{
              transition: transform 0.2s;
            }

            &.active{
              @apply bg-$primary;

              ._select_arrow{
                @apply transform -rotate-z-180;
              }
            }

            &:hover{
              @apply bg-$text-light text-$primary;

              svg *{
                @apply fill-$primary;
              }
            }
          }

          ul {
            @apply text-center flex flex-col gap-20px
                   max-h-0px overflow-hidden;
            transition: max-height 0.3s ease-in-out;

            li{
              &::before{
                content: '•';
                @apply text-18px;
              }
            }

            &.show{
              @apply max-h-999px pb-10px;
            }
          }
        }
      }

      .__cta{
        @apply uppercase min-w-343px mx-auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ._v_consolidated_brand_business{
      @apply py-30px;
      >*{
        @apply gap-30px;

        ._buttons{
          @apply grid grid-cols-1 gap-0px;

          .__button_consolidated_brand{
            @apply flex flex-col gap-20px;
            button{
              @apply h-78px px-0px w-full;

              &.active{
                &:hover{
                  @apply bg-$primary text-$text-light;

                  svg *{
                    @apply fill-$text-light;
                  }
                }
              }

              &:hover{
                @apply bg-transparent text-$text-light;

                svg *{
                  @apply fill-$text-light;
                }
              }
            }

            ul {
              @apply gap-16px;

              li{
                @apply text-14px;
              }

              &.show{
                @apply pb-25px;
              }
            }
          }
        }

        .__cta{
          @apply max-w-full min-w-0px -mt-20px;
        }
      }
    }
  }
</style>
