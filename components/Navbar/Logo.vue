<template>
  <div :class="$style.logo">
    <nuxt-link to="/" :class="$style.link">
      <svg-icon :class="$style.logoIcon" :name="`logo_${$colorMode.preference}`"/>
      <h2 :class="$style.name">Pepelane</h2>
    </nuxt-link>
    <p :class="`${$style.words} ${dark ? 'lightText2' : ''}`">World's first affordable airsharing</p>
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
  .logo {
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
  }

  .logoIcon{
    width: 48px;
    height: 48px;
  }

  .words {
    margin-left: 64px;
    color: var(--color-secondary);

    @include lg-block() {
      display: none;
    }
  }
</style>
