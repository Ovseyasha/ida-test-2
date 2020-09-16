<template>
  <div :class="$style.Logo">
    <div :class="$style.wrapper">
      <nuxt-link
        to="/"
        :class="$style.link"
      >
        <svg-icon
          :class="$style.logoIcon"
          :name="`logo_${$colorMode.preference}`"
        />
        <h2 :class="$style.name">
          Pepelane
        </h2>
      </nuxt-link>
      <p :class="$style.words">
        World's first affordable airsharing
      </p>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Logo',

    computed: {
      dark() {
        return this.$colorMode.preference === 'dark';
      },
    },
  };
</script>

<style lang='scss' module>
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    padding-left: 18px;
    color: var(--color);

    @include media(mobile){
      font-size: 18px;
    }

    @include media(smallMobile){
      display: none;
    }
  }

  .logoIcon{
    width: 48px;
    height: 48px;

    @include media(mobile){
      width: 32px;
      height: 32px;
    }
  }

  .words {
    margin-left: 64px;
    color: var(--color-secondary);

    @include media(bigDsktop){
      display: none;
    }

  }
</style>
