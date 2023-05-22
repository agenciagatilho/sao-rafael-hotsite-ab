<template>
  <div class="__popup_outer" :class="{'active': state}" v-if="$device.isDesktop">
    <div class="__inner">
      <div class="_text">
        <h2>Empreenda com garantia de sucesso!</h2>
        <p>Não perca a chance de fazer parte de uma das maiores franquias de farmácias do Sul do Brasil.</p>
      </div>
      <button @click="goToForm">Saiba mais sobre como se tornar um franqueado</button>

      <button class="_close" @click="close">X</button>
    </div>
    <div class="_close" @click="close" />
  </div>
</template>

<script>
import lang from '~/lang/ptbr'
export default {
  data () {
    return {
      inputs: lang.inputs,
      state: false,
      persistState: false
    }
  },
  mounted () {
    document.addEventListener('mouseleave', (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      if (
        clientX < 0 ||
        clientX > innerWidth ||
        clientY < 0 ||
        clientY > innerHeight
      ) {
        if (!this.persistState) {
          this.state = true
        }
      }
    })
  },
  methods: {
    close () {
      this.state = false
    },
    goToForm () {
      const form = document.querySelector('#_v_want_to_be_franchisee')
      scrollTo({ behavior: 'smooth', top: form.offsetTop - (form.offsetHeight / 2) })
      this.persistState = true
      this.close()
    }
  }
}
</script>

<style lang="scss">
  .__popup_outer {
    @apply fixed left-0 top-0 z-9999
            w-full h-full opacity-0 pointer-events-none
            flex items-center justify-center;
    font-family: 'Quicksand', sans-serif;
    transition: opacity 0.15s ease-in-out;

    .__inner {
      @apply max-w-770px m-auto relative z-2
              px-100px py-130px overflow-y-auto
              rounded-50px font-semibold bg-$secondary
              flex flex-col gap-60px text-center justify-start
              bg-center bg-cover
              transform scale-125 origin-center;
      background-image: url('@/static/src/images/background_popup.png');
      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.25);
      transition: transform 0.2s ease-in-out;

      >* {
        @apply my-auto;
      }

      ._text {
        @apply flex flex-col gap-25px;

        h2 {
          @apply text-55px;
          line-height: 60px;
        }
        p {
          @apply text-20px;
          line-height: 27px;
        }
      }

      button {
        @apply text-22px px-26px;
        line-height: 27px;
      }

      ._close {
        @apply  p-0 m-0 w-27px h-27px text-center bg-transparent text-$text-light
                absolute top-40px right-40px;
      }
    }

    >._close {
      @apply absolute left-0 top-0 z-1
              w-full h-full;
      background: rgba(0, 0, 0, 0.6);
      background-blend-mode: multiply;
    }

    &.active {
      @apply opacity-100 pointer-events-auto;

      .__inner {
        @apply scale-100;
      }
    }
  }
</style>
