<template>
  <div :class="$style.Messages">
    <button :class="$style.button">
      <svg-icon name="msg" />
    </button>
  </div>
</template>

<script>
  export default {
    name: 'NavbarMessages',
  };
</script>

<style lang='scss' module>
.button{}
</style>
