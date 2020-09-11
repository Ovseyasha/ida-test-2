<template>
  <div>
    <div :class="$style.profile">
      <h2>
        Bessie Cooper
      </h2>
      <img src="/img/ava.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarProfile',
  };
</script>

<style lang='scss' module>
  .profile {
    padding-left: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-weight: bold;
      font-size: 16px;
      line-height: 152%;
      color: $cDarkBlue;
    }

    img {
      margin-left: 15px;
      border-radius: 50%;
    }
  }
</style>
