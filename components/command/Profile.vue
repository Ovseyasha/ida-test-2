<template>
  <div>
    <div :class="$style.profile">
      <h2 :class="`${$style.name} ${dark ? 'lightText' : ''}`">
        Bessie Cooper
      </h2>
      <img :class="$style.img" src="/img/ava.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarProfile',

    computed: {
      dark(){
        return this.$store.getters.darkMode
      }
    }
  };
</script>

<style lang='scss' module>
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 60px;

    @include xs-block(){
      padding-left: 0;
    }
    .name {
      font-weight: bold;
      font-size: 16px;
      line-height: 152%;
      color: $cDarkBlue;
      transition: color .3s ease;

      @include xs-block(){
        display: none;
      }
    }

    .img {
      margin-left: 15px;
      border-radius: 50%;
      width: 56px;
      height: 56px;
      object-fit:cover;

      @include xs-block(){
        height: 32px;
        width: 32px;
      }
    }
  }
</style>
