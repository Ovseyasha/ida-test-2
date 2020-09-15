<template>
  <transition-group mode="out-in" appear name="slide" :class="$style.products">
    <PItem :class="$style.item" v-for="p in products" :key="p.id" :product="p" />
  </transition-group>
</template>

<script>
  export default {
    name: 'ProductList',

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
    overflow: hidden;
    @include xs-block(){
      padding-top: 24px - 6px;
    }
    .item{
      margin: 16px;
      flex-basis: calc(26% - 16px);
      @include md-block(){
        flex-basis:  calc(100% - 16px);
      }
      @include xs-block(){
        flex-basis: 100%;
        margin: 6px 0;
      }
    }
  }


</style>
