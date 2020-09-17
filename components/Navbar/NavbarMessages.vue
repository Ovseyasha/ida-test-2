<template>
  <div :class="$style.Messages">
    <div :class="$style.wrapper">
      <button :class="$style.button">
        <svg-icon name="msg" />
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarMessages',
  };
</script>

<style lang='scss' module>
.wrapper {

}
</style>
