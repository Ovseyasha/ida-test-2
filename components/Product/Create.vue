<template>
  <button :class="$style.addBtn">
    <span>Add new</span>
    <span :class="$style.plus">+</span>
  </button>
</template>

<script>
  export default {
    name: 'ProductCreate',
  };
</script>

<style lang='scss' module>
  .addBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 140%;
    color: $cLightBlue;

    .plus {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 47px;
      height: 47px;
      background: $cLightBlue;
      color: $cDarkWhite;
      border-radius: 16px;
    }
  }
</style>
