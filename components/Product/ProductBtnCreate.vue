<template>
  <div :class="$style.BtnCreate">
      <button
        :class="$style.addBtn"
        @click="openModal"
      >
        <span :class="$style.head">
          Add new
        </span>
        <span :class="$style.plus">
          <svg-icon
            :class="$style.svg"
            name="plus"
          />
        </span>
      </button>
  </div>
</template>

<script>

  export default {
    name: 'ProductBtnCreate',

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
    font-size: 20px;
    font-weight: bold;
    line-height: 140%;
    color: $cLightBlue;

    @include respond-to(mobile){
      font-size: 16px;
    }

  }

  .head{
    @include respond-to(mobile-xs) {
      display: none;
    }
  }

  .plus {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 47px;
    height: 47px;
    margin-left: 20px;
    border-radius: 16px;
    background: $cLightBlue;
    color: $cDarkWhite;


    @include respond-to(mobile){
      width: 32px;
      height: 32px;
      margin-left: 10px;
      border-radius: 8px;
    }
  }

  .svg{
    width: 14px;
    height: 14px;
  }

</style>
