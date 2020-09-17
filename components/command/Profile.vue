<template>
  <div :class="$style.Profile">
    <div :class="$style.wrapper">
      <h2 :class="$style.name">
        Bessie Cooper
      </h2>
      <img
        :class="$style.img"
        data-src="/img/ava.png"
        v-lazy-load
      >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Profile',
  };
</script>

<style lang='scss' module>
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 60px;

    @include respond-to(mobile) {
      padding-left: 0;
    }
  }

  .name {
    font-size: 16px;
    font-weight: bold;
    line-height: 152%;
    color: var(--color);

    @include respond-to(mobile) {
      display: none;
    }
  }

  .img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    margin-left: 15px;
    border-radius: 50%;

    @include respond-to(mobile) {
      height: 32px;
      width: 32px;
    }
  }
</style>
