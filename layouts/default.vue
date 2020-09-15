<template>
  <div :class="`${$style.app} ${dark ? 'darkBg1' : ''}`">
    <div>
      <Navbar/>
    </div>

    <div :class="$style.content">

      <transition appear mode="out-in" name="fade">
        <Nuxt/>
      </transition>

    </div>

    <LazyModal/>

  </div>
</template>

<script>

  export default {

    computed: {
      dark() {
        return this.$store.getters.darkMode;
      },
    },
  };
</script>

<style lang='scss' module>
  .app {
    height: 100%;
    width: 100%;
    transition: background .3s ease;

  }

  .content {
    padding-top: 50px;

    @include xs-block() {
      padding-top: 25px;
    }
  }

</style>
