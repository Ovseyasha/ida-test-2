<template>
  <div>
    <button :class="$style.button" @click="toggle">
      <img :class="$style.img" :src="dark ? '/img/day.svg' : '/img/toggle.svg'">
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

    .img {
      margin-right: 16px;
      @include md-block() {
        margin-bottom: 5px;
        margin-right: 0;

      }
      font-weight: 300;
      font-size: 16px;
      line-height: 152%;
    }

    .text {
      font-size: 16px;
      line-height: 152%;
      color: var(--color-secondary);

      @include md-block() {
        display: none;
      }
    }
  }
</style>
