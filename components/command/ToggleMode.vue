<template>
  <div :class="$style.ToggleMode">
    <button :class="$style.button" @click="toggle">
      <svg-icon :name="iconName" />
      <span :class="$style.text">
        {{text}}
      </span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ToggleMode',

    computed: {
      dark() {
        return this.$colorMode.preference === 'dark';
      },

      text(){
        return this.dark ?
          'Day mod':
          'Night mod'
      },

      iconName(){
        return `toggle_${this.$colorMode.preference}`
      }
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
  }

  .text {
    margin-left: 16px;

    font-size: 16px;
    line-height: 152%;
    color: var(--color-secondary);

    @include media(desktop){
      display: none;
    }
  }
</style>
