<template>
  <div>
    <button :class="$style.button">
      <img src="/img/toggle.svg">
      <span></span>Night mod
    </button>
  </div>
</template>

<script>
  export default {
    name: 'NavbarToggleMode',
  };
</script>

<style lang='scss' module>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 16px;
      font-weight: 300;
      font-size: 16px;
      line-height: 152%;
    }
  }
</style>
