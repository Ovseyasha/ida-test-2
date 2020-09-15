<template>
  <div :class="$style.navbar">
    <div :class="$style.items" class="wrapper">
      <Logo :class="$style.item"/>
      <Items :class="$style.item"/>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Navbar',
  };
</script>

<style lang='scss' module>
  .navbar {
    padding-top: 20px;
    @include xl-block() {
      padding: 20px 16px 0 16px;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
  }
</style>
