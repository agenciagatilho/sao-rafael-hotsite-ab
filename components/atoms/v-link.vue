<template>
  <button v-if="type==='button'" class="not" @click="goTo(to)">
    {{ text }}
    <slot />
  </button>
  <a v-else-if="type==='a'" :href="to" target="_blank">
    {{ text }}
    <slot />
  </a>
  <a v-else-if="type==='text'">
    {{ text }}
    <slot />
  </a>
  <nuxt-link v-else :to="to">
    {{ text }}
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    }
  },
  computed: {
    type () {
      if (this.to.includes('http')) {
        return 'a'
      }
      if (this.to.includes('#')) {
        return 'button'
      }
      if (!this.to) {
        return 'text'
      }
      return 'nuxt-link'
    }
  },
  methods: {
    goTo (link) {
      const id = '#' + link.split('#')[1]

      const param = this.$device.isDesktop ? 130 + 75 : 100 + 40

      if (this.$route.path === link.split('#')[0]) {
        scrollTo({
          top: document.querySelector(id)?.offsetTop - param || 0,
          behavior: 'smooth'
        })
      } else {
        this.$router.push(link)
      }
    }
  }
}
</script>
