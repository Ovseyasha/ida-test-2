<template>
  <div>
    <div :class="$style.navbar">
      <Navbar/>
    </div>
    <div :class="$style.content">
      <Nuxt/>
    </div>
  </div>
</template>

<style lang='scss' module>
  .content {
    padding-top: 50px;
  }
</style>
