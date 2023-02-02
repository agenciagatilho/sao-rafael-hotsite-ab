<template>
  <v-container id="_v_want_to_be_franchisee" class="_v_want_to_be_franchisee">
    <h2>{{ item.title }}</h2>
    <form :id="idForm" @submit="submit">
      <v-input id="name" :placeholder="inputs.name" />
      <v-input id="telphone" :placeholder="inputs.telphone" :maxlength="15" mask="(##) ##### ####" />
      <v-input id="email" type="email" :placeholder="inputs.email" />
      <v-input id="state" type="select" :placeholder="inputs.state">
        <option v-for="state in $brasil.states()" :value="state.sigla" :key="'_state_' + state.sigla">
          {{ state.nome }}
        </option>
      </v-input>
      <v-input id="act_in_city" :placeholder="inputs.act_in_city" list="data_cities" />

      <datalist id="data_cities">
        <option v-for="city in cities" :key="'_city_' + city" :value="city" />
      </datalist>

      <v-input @change="addFormatData" id="format" type="select" :placeholder="inputs.format">
        <option v-for="item in list.format" :key="'_format_' + item">
          {{ item }}
        </option>
      </v-input>

      <v-input id="available_capital" type="select" :placeholder="inputs.available_capital">
        <option v-for="item in list.available_capital" :key="'_available_capital_' + item">
          {{ item }}
        </option>
      </v-input>

      <v-input id="how_did_find_us" type="select" :placeholder="inputs.how_did_find_us">
        <option v-for="item in list.how_did_find_us" :key="'_how_did_find_us_' + item">
          {{ item }}
        </option>
      </v-input>

      <v-input id="contact_options" type="select" :placeholder="inputs.contact_options">
        <option v-for="item in list.contact_options" :key="'_contact_options_' + item">
          {{ item }}
        </option>
      </v-input>

      <div class="_privacy">
        <p>{{ sitemap.privacy.title }}</p>
        <label>
          <input type="checkbox" name="accept_privacy" required>
          <div class="__box" />
          <a :href="sitemap.privacy.url" target="_blank">
            {{ inputs.accept_privacy }}
          </a>
        </label>
        <label>
          <input type="checkbox" name="accept_receive_email" required>
          <div class="__box" />
          {{ inputs.accept_receive_email }}
        </label>
      </div>

      <button type="submit">
        {{ item.cta }}
      </button>
    </form>
  </v-container>
</template>

<script>
import lang from '~/lang/ptbr'
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    idForm: {
      type: String,
      default: 'form_want_to_be_franchisee'
    }
  },
  data () {
    return {
      inputs: lang.inputs,
      sitemap: lang.sitemap,
      list: lang.inputs.list,
      formatData: '',
      cities: []
    }
  },
  mounted () {
    document.querySelector('#state').addEventListener('change', (e) => {
      (async () => {
        this.cities = await this.$brasil.cities(e.target.value)
      })()
    })
  },
  methods: {
    submit (e) {
      e.preventDefault()
      const form = e.target

      const tags = []
      if (form.accept_receive_email.checked) { tags.push('aceitou envio de emails') }
      if (form.accept_privacy.checked) { tags.push('aceitou politica de privacidade') }
      if (form.format.value) { tags.push(form.format.value.toLowerCase()) }

      const data = {
        conversion_identifier: 'sao_rafael_hotsite_franqueado',
        email: form.email.value,
        name: form.name.value,
        mobile_phone: form.telphone.value,
        cf_estado_deseja_atuar: form.state.value,
        cf_cidade_deseja_atuar: form.act_in_city.value,
        cf_formato_de_negocio: form.format.value,
        cf_capital_disponivel: form.available_capital.value,
        cf_como_chegou_ate_nos: form.how_did_find_us.value,
        cf_melhor_opcao_contato: form.contact_options.value,
        tags,
        legal_bases: [
          {
            category: 'communications',
            type: 'consent',
            status: form.accept_privacy.checked ? 'granted' : 'declined'
          }
        ]
      }

      this.$api.send(data).then((res) => {
        if (res.ok) {
          setTimeout(() => {
            this.$router.push('obrigado')
          }, 10)
        } else {
          this.$toast.set(`Erro: ${res.status} - ${res.type} ${res.statusText}`)
        }
      })
    },
    addFormatData (e) {
      this.formatData = e.target.value
    }
  }
}
</script>

<style lang="scss">
  ._v_want_to_be_franchisee {
    @apply bg-$primary py-40px;

    >*{
      @apply flex flex-col gap-30px text-center;

      form{
        @apply flex flex-wrap justify-between gap-x-0px gap-y-20px;

        >span{
          @apply max-w-220px w-[calc(20%-25px)];

          &#span_input_available_capital,
          &#span_input_how_did_find_us,
          &#span_input_contact_options
          {
            @apply max-w-300px w-[calc(27%-25px)];
          }

          &#span_input_telphone{
            @apply max-w-189px;
          }
          &#span_input_act_in_city{
            @apply max-w-255px w-[calc(27%-25px)];
          }
        }
        ._privacy{
          @apply flex flex-col gap-10px mt-10px
                px-10px w-full text-12px;

          p{
            @apply font-bold;
          }

          label{
            @apply max-w-345px mx-auto w-full
                   flex items-start gap-7px
                   text-center;

            .__box{
              @apply min-w-11px min-h-11px
                     w-11px h-11px
                     border border-$text-light
                     flex relative;

              &::after{
                content: '';
                @apply w-4/5 h-4/5
                       absolute top-1/2 left-1/2
                       transform -translate-x-1/2 -translate-y-1/2
                       bg-transparent;
                transition: all 0.2s ease-in-out;
              }
            }

            input{
              @apply opacity-0 absolute pointer-events-none;

              &:checked + .__box::after{
                @apply bg-$text-light;
              }
            }

            a{
              @apply underline;
            }
          }
        }
      }

      button{
        @apply bg-$secondary col-span-4 min-w-343px mx-auto text-20px uppercase;

        &:hover{
          @apply bg-$text-light text-$secondary;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    ._v_want_to_be_franchisee {
      @apply py-30px;

      >*{
        @apply gap-20px;

        form{
          @apply grid-cols-1 gap-y-20px;
          >span{
            @apply w-full max-w-full;

            &#span_input_available_capital,
            &#span_input_how_did_find_us,
            &#span_input_contact_options,
            &#span_input_telphone,
            &#span_input_act_in_city
            {
              @apply max-w-full w-full;
            }
          }
        }

        button{
          @apply col-span-1 max-w-full min-w-0px;

          &:hover{
            @apply bg-$secondary text-$text-light;
          }
        }
      }
    }
  }
</style>
