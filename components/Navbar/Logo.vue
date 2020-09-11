<template>
  <div :class="$style.logo">
    <div>
      <img src="/img/Logo.svg" alt="logo">
    </div>
    <p :class="$style.words">World's first affordable airsharing</p>
  </div>
</template>

<script>

  export default {
    name: 'Logo',

  };
</script>

<style lang='scss' module>
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .words {
    margin: 0;
    padding: 0;
    margin-left: 64px;
  }
</style>
