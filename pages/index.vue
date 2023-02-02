<template>
  <main id="index">
    <v-leave-popup />
    <v-container class="_video_banner" small>
      <h1>{{ index.home.video.title }}</h1>
      <video
        autoplay
        muted
        controls
        playsinline
        preload="auto"
        class="_background"
        src="src/background_video.mp4"
        poster="src/background_poster.jpg"
      />
    </v-container>

    <v-form-want-to-be-franchisee id-form="form_hotsite_ab_inicio" :item="index.home.form" />

    <v-container class="_banner_old __large_background" small>
      <h1>{{ index.home.banner.title }}</h1>
      <p v-html="index.home.banner.description" />
    </v-container>

    <v-container id="who_we_are" class="_peaples_for_peaples __image_and_text_block">
      <v-image src="src/images/de_pessoas_pra_pessoas_novo.avif" width="520px" alt="Pessoas no balção atendendo clientes" />
      <div class="__text">
        <h2>{{ index.who_we_are.peaples_for_peaples.title }}</h2>
        <p v-html="index.who_we_are.peaples_for_peaples.description" />
      </div>
    </v-container>

    <v-container class="_our_trajectory __large_background" nolimit>
      <h2>{{ index.who_we_are.our_trajectory.title }}</h2>
      <v-new-carousel :settings="$device.isDesktop ? { start: 2, focus: 1 } : {}">
        <v-carousel-item-trajectory
          v-for="item, index in index.who_we_are.our_trajectory.list"
          :key="`item_carousel_trajectory_${index}`"
          :title="item.title"
          :description="item.description"
        />
      </v-new-carousel>
    </v-container>

    <v-container id="our_numbers" class="_our_numbers __image_and_text_block">
      <v-image src="src/images/visao_analitica_sobre_o_mercado.avif" width="520px" alt="Corredor de uma farmacia São Rafael" />
      <div class="__text">
        <h2>{{ index.our_numbers.analytics_vision.title }}</h2>
        <p v-html="index.our_numbers.analytics_vision.description" />
      </div>
    </v-container>

    <v-container class="_our_consolidation __large_background" nolimit>
      <h2>{{ index.our_numbers.our_consolidation.title }}</h2>
      <v-new-carousel>
        <v-carousel-item-consolidation
          v-for="item, index in index.our_numbers.our_consolidation.list"
          :key="`item_carousel_consolidation_${index}`"
          :index="index"
          :description="item"
        />
      </v-new-carousel>
    </v-container>

    <v-container class="_selo_abf_abf_assiciation __image_and_text_block">
      <div class="_abf_assiciation">
        <div class="__text">
          <h2>{{ index.our_numbers.abf_assiciation.title }}</h2>
          <p v-html="index.our_numbers.abf_assiciation.description" />
        </div>
        <v-image src="src/images/ABF_assiciation.avif" :width="$device.isDesktop ? '393px' : '265px'" alt="Associação ABF" />
      </div>
      <div class="_selo_abf">
        <div class="__text">
          <h2>{{ index.our_numbers.selo_abf.title }}</h2>
          <p v-html="index.our_numbers.selo_abf.description" />
        </div>
        <v-image src="src/images/selo_ABF.avif" width="205px" alt="Selo ABF" />
      </div>
    </v-container>

    <!-- <v-business-model :item="index.business_model.index" /> -->
    <v-container id="business_model" class="_business_model">
      <h2>{{ index.business_model.index.title }}</h2>
      <div class="__text">
        <div class="_new_shop">
          <h3>{{ index.business_model.index.new_shop.title }}</h3>
          <p class="__content" v-html="index.business_model.index.new_shop.description" />
        </div>
        <div class="_mounth_royalties">
          <h3>{{ index.business_model.index.mounth_royalties.title }}</h3>
          <p class="__content" v-html="index.business_model.index.mounth_royalties.description" />
        </div>
        <div class="_convert_shop">
          <h3>{{ index.business_model.index.convert_shop.title }}</h3>
          <p class="__content" v-html="index.business_model.index.convert_shop.description" />
        </div>
      </div>
      <v-new-carousel
        :settings="$device.isDesktop ? {
          start: 2, perPage: 1, gap: '30px', autoScroll: null,
          autoplay: true, interval: 5000
        } : {
          start: 2
        }"
      >
        <div
          v-for="image in [
            'prateleiras-ilha-de-uma-farmacia-sao-rafael.avif',
            'prateleiras-de-uma-farmacia-sao-rafael.avif',
            'fachada-farmacia-sao-rafael.avif',
            'balcao-farmacia-sao-rafael.avif',
          ]"
          :key="image"
          class="splide__slide"
        >
          <v-image
            :src="`src/images/bussines_model/${image}`"
            width="1000px"
            height="100%"
            alt="foto de uma farmácia da São Rafael"
          />
        </div>
      </v-new-carousel>
      <button class="__cta" @click="goToForm">
        {{ index.business_model.cta }}
      </button>
    </v-container>

    <!-- <v-form-want-to-be-franchisee id-form="form_hotsite_ab_fim" :item="index.form_want_to_be_franchisee" /> -->

    <v-container class="_expand_your_business __image_and_text_block">
      <v-image src="src/images/experiencia_e_conhecimento_novo.avif" width="520px" alt="Colaboradora atendendo cliente" />
      <div class="__text">
        <h2>{{ index.business_model.expand_your_business.title }}</h2>
        <p v-html="index.business_model.expand_your_business.description" />
        <h2>{{ index.business_model.success_in_three_steps.title }}</h2>
        <ul>
          <li
            v-for="item in index.business_model.success_in_three_steps.list"
            :key="item"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </v-container>

    <v-consolidated-brand-business
      :item="index.business_model.consolidated_brand_business"
      :cta="index.business_model.cta"
    />

    <v-container id="differentials" class="_high_quality_support __text_block">
      <h2>{{ index.differentials.high_quality_support.title }}</h2>
      <p>{{ index.differentials.high_quality_support.description }}</p>
    </v-container>

    <v-container class="_trainament_support __image_and_text_block">
      <v-image src="src/images/suporte_de_alta_qualidade.avif" width="520px" alt="Pessoa mostrando planos em uma sala de reunião" />
      <div class="__text">
        <span class="_support">
          <h3>{{ index.differentials.support.title }}</h3>
          <ul>
            <li
              v-for="item in index.differentials.support.list"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </span>
        <span class="_trainament">
          <h3>{{ index.differentials.trainament.title }}</h3>
          <ul>
            <li
              v-for="item in index.differentials.trainament.list"
              :key="item"
            >
              {{ item }}
            </li>
          </ul>
        </span>
      </div>
    </v-container>

    <v-container id="contact" class="_contact __large_background">
      <h2>{{ index.contact.banner.title }}</h2>
      <button class="__cta" @click="goToForm">
        {{ index.contact.banner.cta }}
      </button>
    </v-container>

    <v-container class="_video __text_block">
      <h2>{{ index.contact.video.title }}</h2>
      <v-youtube />
    </v-container>
  </main>
</template>

<script>
import lang from '~/lang/ptbr'

export default {
  data () {
    return {
      index: lang.index
    }
  },
  methods: {
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
  #index{
    @apply flex flex-col gap-75px pb-75px;

    ._video_banner{
      @apply relative;

      .container {
        @apply flex flex-col items-center gap-30px;
        >*{
          @apply items-center justify-center gap-30px
                  text-$primary;
        }

        ._background {
          @apply object-center object-cover
                  w-full h-full;
        }
      }
    }

    ._banner_old{
      @apply min-h-466px bg-top;
      background-image: url('@/static/src/images/background_0.avif');

      >*{
        @apply items-center justify-center gap-30px mb-55px;
      }
    }

    ._our_trajectory{
      background-image: url('@/static/src/images/background_1.avif');
    }

    ._our_numbers .__text h2{
      @apply max-w-350px;
    }

    ._our_consolidation{
      @apply bg-$secondary;
    }

    ._selo_abf_abf_assiciation >*{
      @apply grid grid-cols-2 gap-25px items-start
             text-center;

      ._selo_abf, ._abf_assiciation{
        @apply flex flex-col gap-30px items-center justify-center;
      }
    }

    ._business_model{
      >* {
        @apply bg-$secondary
               px-100px py-50px gap-40px
               flex flex-col items-center;

        h2{
          @apply text-$primary;
        }

        .__text{
          @apply w-full grid grid-cols-2 gap-y-30px
                 justify-items-center text-center;

          >*{
            h3{
              @apply mb-20px;
              font-size: 24px;
              line-height: 28px;
            }

            &._mounth_royalties{
              @apply row-span-2;
            }
          }
        }

        .splide__slide {
          @apply relative h-675px;

          img {
            @apply w-full h-full object-center object-cover;
          }
        }
        .splide__list{
          @apply gap-0;
        }
        .splide__arrows{
          @apply flex justify-center;
        }

        .__cta{
          @apply uppercase w-340px;
        }
      }
    }

    ._expand_your_business{
      .__text{
        @apply max-w-520px;

        h2{
          @apply max-w-500px;
        }
      }
    }

    ._high_quality_support{
      h2{
        @apply max-w-540px mx-auto;
      }
      p{
        @apply max-w-590px mx-auto;
      }
    }

    ._trainament_support >*{
      @apply gap-90px;
      .__text{
        @apply flex-row;

        span{
          @apply flex flex-col gap-30px w-full;

          &._trainament{
            @apply max-w-max;
          }
        }
      }
    }

    ._contact{
      background-image: url('@/static/src/images/background_2.avif');
      @apply h-440px bg-top;

      h2{
        @apply max-w-490px mx-auto;
      }

      button{
        @apply min-w-340px mx-auto bg-$bg-white text-$secondary;

        &:hover{
          @apply bg-$secondary text-$bg-white;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #index{
      @apply gap-40px pb-40px;

      :is(._banner_old, ._high_quality_support) p{
        @apply text-14px;
        line-height: 22px;
      }
      ._banner_old {
        >*{ @apply mb-0px; }
        p { @apply max-w-285px; }
      }

      ._our_trajectory .splide__slider{
        @apply h-340px;
      }
      ._our_numbers .__text h2{
        @apply max-w-290px mx-auto;
      }

      ._selo_abf_abf_assiciation >*{
        @apply grid-cols-1 gap-30px;

        ._selo_abf, ._abf_assiciation{
          @apply gap-10px;
        }
      }

      ._business_model{
        >* {
          @apply px-36px py-40px gap-30px;

          .__text{
            @apply grid-cols-1 gap-y-30px;

            >*{
              h3{
                @apply mb-15px;
                font-size: 20px;
                line-height: 24px;
              }

              &._mounth_royalties{
                @apply row-span-1 row-start-3;
              }
            }
          }
          .splide__slide {
            @apply h-auto;
          }

          .__cta{
            @apply uppercase w-260px;
          }
        }
      }

      ._expand_your_business {
        h2 {
          @apply mt-10px;

          &:first-child{
            @apply mt-0px;
          }
        }
      }

      ._trainament_support {
        @apply -mt-10px;
        >*{
          @apply flex-col gap-30px;
          .__text{
            @apply flex-col-reverse gap-30px;

            h3{
              @apply text-24px;
            }

            span{
              @apply gap-20px;
            }
          }
        }
      }

      ._contact{
        h2{
          @apply max-w-490px mx-auto;
        }

        button{
          @apply bg-$bg-white max-w-full min-w-0px;

          &:hover{
            @apply bg-$bg-white text-$secondary;
          }
        }
      }
    }
  }
</style>
