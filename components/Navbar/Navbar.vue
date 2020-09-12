<template>
  <div :class="$style.navbar">
    <div :class="$style.items" class="wrapper">
      <Logo :class="$style.item"/>
      <Items :class="$style.item"/>
    </div>
  </div>
</template>

<script>
  import Logo from "~/components/Navbar/Logo";
  import Items from "~/components/Navbar/Items";
  export default {
    components: {
      Logo,
      Items
    },

    name: 'Navbar',

    computed: {
    }
  };
</script>

<style lang='scss' module>
  .navbar {
    padding-top: 20px;
    @include sm-block(){
      padding: 20px 16px 0 16px;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
  }
</style>
