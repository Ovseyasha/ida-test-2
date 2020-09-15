<template>
  <div>
    <button :class="$style.button" @click="toggle">
      <svg-icon :name="`toggle_${$colorMode.preference}`" />
      <span :class="$style.text">{{dark? 'Day mod' : 'Night mod'}}</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'NavbarToggleMode',

    computed: {
      dark() {
        return this.$colorMode.preference === 'dark';
      },
    },

    methods: {
      toggle() {
        this.$colorMode.preference = this.dark ? 'light' : 'dark';
      },
    },
  };
</script>

<style lang='scss' module>
  .button {
    display: flex;
    justify-content: center;
    align-items: center;


    .text {
      margin-left: 16px;
      font-size: 16px;
      line-height: 152%;
      color: var(--color-secondary);

      @include md-block() {
        display: none;
      }
    }
  }
</style>
