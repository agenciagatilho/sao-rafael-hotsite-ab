<template>
  <v-container id="footer" element="footer">
    <v-link :to="sitemap.index.url" class="_logo">
      {{ sitemap.index.title }}
      <v-image src="logo_s_rafael_footer.svg" width="214px" height="122px" />
    </v-link>

    <menu>
      <li><v-link :to="sitemap.who_we_are.url" :text="sitemap.who_we_are.title" /></li>
      <li><v-link :to="sitemap.our_numbers.url" :text="sitemap.our_numbers.title" /></li>
      <li><v-link :to="sitemap.business_model.url" :text="sitemap.business_model.title" /></li>
      <li><v-link :to="sitemap.differentials.url" :text="sitemap.differentials.title" /></li>
      <li><v-link :to="sitemap.contact.url" :text="sitemap.contact.title" /></li>
      <li><v-link :to="sitemap.privacy.url" :text="sitemap.privacy.title" /></li>
    </menu>

    <div class="_contact">
      <v-link class="__whatsapp" :to="contacts.whatsapp.url" :text="contacts.whatsapp.title" />
      <v-link :to="contacts.address.url" :text="contacts.address.title" />
      <span class="__medias">
        <a :href="contacts.facebook.url" class="_facebook">
          {{ contacts.facebook.title }}
          <v-image src="medias/facebook.svg" width="16px" />
        </a>
        <a :href="contacts.linkedin.url" class="_linkedin">
          {{ contacts.linkedin.title }}
          <v-image src="medias/linkedin.svg" width="22px" />
        </a>
        <a :href="contacts.youtube.url" class="_youtube">
          {{ contacts.youtube.title }}
          <v-image src="medias/youtube.svg" width="24px" height="17px" />
        </a>
        <a :href="contacts.instagram.url" class="_instagram">
          {{ contacts.instagram.title }}
          <v-image src="medias/instagram.svg" width="21px" />
        </a>
      </span>
    </div>
  </v-container>
</template>

<script>
import lang from '~/lang/ptbr'

export default {
  data () {
    return {
      sitemap: lang.sitemap,
      contacts: lang.contacts
    }
  }
}
</script>

<style lang="scss">
  #footer {
    @apply  bg-$primary;

    .container{
      @apply grid grid-cols-3 justify-center h-280px pt-50px;

      >*{
        @apply flex flex-col gap-15px justify-start max-w-240px;
      }

      ._logo{
        @apply text-0px gap-0px;
      }

      menu {
        @apply m-0 p-0;
        li{
          @apply list-none;

          >*{
            @apply text-19px text-$text-light font-medium;
            line-height: 16px;
          }
        }
      }

      ._contact{
        a{
          @apply text-19px font-medium;
          line-height: 24px;

          &.__whatsapp{
            @apply font-semibold;
            line-height: 16px;
          }
        }

        .__medias{
          @apply flex items-end gap-16px;

          a{
            @apply text-0px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #footer {
      .container{
        @apply grid-cols-1 h-full py-40px
              justify-items-center gap-30px;

        >*{
          @apply gap-15px items-center;
        }

        menu {
          @apply p-0;
          li >*{
            @apply text-20px;
            line-height: 16px;
          }
        }
      }
    }
  }
</style>
