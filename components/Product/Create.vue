<template>
  <div :class="$style.container">
    <button :class="$style.addBtn" @click="openModal">
      <span>Add new</span>
      <span :class="$style.plus">+</span>
    </button>
  </div>
</template>

<script>

  export default {
    name: 'ProductCreate',

    computed: {
      dark() {
        return this.$store.getters.darkMode;
      },
    },

    methods: {
      openModal() {
        this.$store.commit('toggleModal');
      },
    },
  };
</script>

<style lang='scss' module>

  .inputWrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .inputNum {
      width: 100%;
      padding-right: 60px;
    }

    .after {
      position: absolute;
      right: 15px;
      font-size: 16px;
      line-height: 14px;
      color: $cGrey2;
      padding: 10px;
      z-index: 2;
    }
  }

  .error {
    color: $cDarkBlue;
  }

  .container {
    //position: relative;
    .addBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      line-height: 140%;
      color: $cLightBlue;

      @include xs-block() {
        font-size: 16px;
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

        @include xs-block() {
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }
      }
    }

  }

</style>
