<template>
<!--  через ul-->
  <transition-group mode="out-in" appear name="slide" :class="$style.products">
    <PItem :class="$style.item" v-for="p in products" :key="p.id" :product="p" />
  </transition-group>
</template>

<script>
  export default {
    name: 'PList',

    computed: {
      products(){
        return this.$store.getters['vehicles/getByType']
      }
    }
  };
</script>

<style lang='scss' module>
  .products{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    @include media(mobile){
      padding-top: 24px - 6px;
    }
  }
  .item{
    margin: 16px;
    flex-basis: calc(26% - 16px);

    @include media(desktop){
      flex-basis:  calc(100% - 16px);
    }

    @include media(mobile){
      flex-basis: 100%;
      margin: 6px 0;
    }
  }


</style>
