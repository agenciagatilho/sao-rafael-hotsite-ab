<template>
  <div class="_v_youtube_outer">
    <v-new-carousel :settings="{ perPage: 1, autoScroll: false }">
      <div
        v-for="id in videosIds"
        :key="id"
        class="_v_youtube splide__slide"
      >
        <!-- <youtube
          ref="youtube"
          class="__video"
          :video-id="id"
          :player-vars="playerVars"
        /> -->
        <lite-youtube class="__video" :videoid="id" params="controls=1&enablejsapi=1" />
      </div>
    </v-new-carousel>
  </div>
</template>

<script>

export default {
  props: {
    links: {
      type: Array,
      default: () => [
        'https://www.youtube.com/watch?v=s0lTQP5_0E0',
        'https://www.youtube.com/watch?v=ItYfKlfid74',
        'https://www.youtube.com/watch?v=9eEoiSTicVk',
        'https://www.youtube.com/watch?v=ipMeJCYIONk'
      ]
    }
  },
  data () {
    return {
      playerVars: {
      }
    }
  },
  computed: {
    videosIds () {
      return this.links.map(link => link.split('watch?v=')[1])
    }
  },
  mounted () {
    document.querySelectorAll('._v_youtube_outer .splide__arrow').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('._v_youtube_outer .__video').forEach((video) => {
          const iframe = video.querySelector('iframe')
          if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
          }
        })
      })
    })
  }
}
</script>

<style lang="scss">
  ._v_youtube_outer {
    ._v_youtube {
      position: relative;
      @apply w-100vw;

      &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: calc((9px / 16px) * 100%);
      }
      > .__video {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-width: none;
      }
    }

    .splide__arrows {
      .splide__arrow {
        @apply border border-$primary;
      }
    }
  }
</style>
