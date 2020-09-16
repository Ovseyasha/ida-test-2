<template>
  <div :class="$style.app">
    <div>
      <Navbar/>
    </div>

    <div :class="$style.content">
        <Nuxt/>
    </div>

    <LazyTheModal/>

  </div>
</template>

<script>

  export default {

  };
</script>

<style lang='scss' module>
  .app {
    height: 100%;
    width: 100%;
  }

  .content {
    padding-top: 50px;

    @include media(mobile){
      padding-top: 25px;
    }
  }

</style>
