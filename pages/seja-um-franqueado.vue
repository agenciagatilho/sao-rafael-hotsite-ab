<template>
  <main id="seja-um-franqueado">
    <h2>
      Esta pagina foi transferida para: <br>
      <a href="/">https://www.franquiasaorafael.com.br</a>
    </h2>
  </main>
</template>

<script>
export default {
  head () {
    return {
      meta: [
        { 'http-equiv': 'refresh', content: '0; url=https://www.franquiasaorafael.com.br' }
      ]
    }
  }
}
</script>

<style lang="scss">
  #seja-um-franqueado{
    @apply py-75px text-$primary min-h-[calc(100vh-130px-280px)];

    h2{
      @apply flex flex-col items-center justify-center w-full;
    }

    a{
      @apply underline;
    }
  }
</style>
