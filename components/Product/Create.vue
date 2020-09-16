<template>
  <div :class="$style.container">
    <button :class="$style.addBtn" @click="openModal">
      <span>Add new</span>
      <span :class="$style.plus">
        <svg-icon :class="$style.svg" name="plus" />
      </span>
    </button>
  </div>
</template>

<script>

  export default {
    name: 'PCreate',

    methods: {
      openModal() {
        this.$store.commit('toggleModal');
      },
    },

  };
</script>

<style lang='scss' module>

  .addBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    color: $cLightBlue;

    @include media(mobile){
      font-size: 16px;
    }

  }
  .plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 47px;
    margin-left: 20px;
    background: $cLightBlue;
    color: $cDarkWhite;
    border-radius: 16px;

    @include media(mobile){
      width: 32px;
      height: 32px;
      border-radius: 8px;
      margin-left: 10px;
    }
  }

  .svg{
    width: 14px;
    height: 14px;
  }

</style>
