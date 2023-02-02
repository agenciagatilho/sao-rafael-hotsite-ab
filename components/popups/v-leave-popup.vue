<template>
  <div class="__popup_outer" :class="{'active': state}" v-if="$device.isDesktop">
    <div class="__inner">
      <div class="_text">
        <h2>Empreenda com garantia de sucesso!</h2>
        <p>Não perca a chance de fazer parte de uma das maiores franquias de farmácias do Sul do Brasil.</p>
      </div>
      <hr>
      <form id="sao-rafael-hotsite-ab-popup-saida" @submit="submit">
        <h3>Saiba mais sobre como se tornar um franqueado:</h3>
        <v-input id="name" placeholder="Nome:" />
        <v-input id="email" type="email" placeholder="E-mail:" />
        <v-input id="telphone" type="tel" placeholder="Telefone/WhatsApp:" :maxlength="15" mask="(##) ##### ####" />
        <v-input id="city" placeholder="Estado/Cidade:" list="data-all-cities" />
        <data-all-cities />
        <button type="submit">Enviar</button>
      </form>
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
      state: false
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
        this.state = true
      }
    })
  },
  methods: {
    close () {
      this.state = false
    },
    submit (e) {
      e.preventDefault()
      const form = e.target

      const address = form.city.value.split('/')
      const state = address[0]
      const city = address[1]

      const data = {
        conversion_identifier: 'sao_rafael_hotsite_ab_popup_saida',
        email: form.email.value,
        name: form.name.value,
        mobile_phone: form.telphone.value,
        state,
        city
      }

      this.$api.send(data).then((res) => {
        if (res.ok) {
          setTimeout(() => {
            this.$router.push('obrigado')
            form.reset()
          }, 10)
        } else {
          this.$toast.set(`Erro: ${res.status} - ${res.type} ${res.statusText}`)
        }
      })
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

    .__inner {
      @apply max-w-770px h-700px max-h-90vh m-auto relative z-2
              px-110px py-60px overflow-y-auto
              rounded-50px font-semibold bg-$secondary
              flex flex-col gap-30px text-center justify-start
              bg-center bg-cover;
      background-image: url('@/static/src/images/background_popup.png');
      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.25);

      >* {
        @apply my-auto;
      }

      ._text {
        @apply flex flex-col gap-25px;
      }

      hr {
        @apply border-$primary;
      }

      form {
        @apply flex flex-col gap-15px;

        h3 {
          @apply text-23px font-semibold;
          line-height: 28px;
        }

        .input-box {
          @apply h-39px text-$primary;
          color: #344F91;

          &#span_input_city {
            @apply flex-col;
            &::after {
              content: 'De interesse de atuação.';
              @apply text-$text-light text-left text-12px px-20px pt-2px;
            }
          }
        }

        button {
          @apply py-8px mt-30px;
          @apply uppercase;
        }
      }
    }

    ._close {
      @apply absolute left-0 top-0 z-1
              w-full h-full;
      background: rgba(0, 0, 0, 0.6);
      background-blend-mode: multiply;
    }

    &.active {
      @apply opacity-100 pointer-events-auto;
    }
  }
</style>
