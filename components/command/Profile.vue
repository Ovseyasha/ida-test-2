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

    @include media(mobile){
      padding-left: 0;
    }
  }

  .name {
    font-size: 16px;
    font-weight: bold;
    line-height: 152%;
    color: var(--color);

    @include media(mobile){
      display: none;
    }
  }

  .img {
    width: 56px;
    height: 56px;
    margin-left: 15px;

    border-radius: 50%;

    object-fit: cover;

    @include media(mobile){
      height: 32px;
      width: 32px;
    }
  }
</style>
