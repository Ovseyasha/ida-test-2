<template>
  <div :class="$style.List">
    <transition name="slide" mode="out-in">
      <ul
        :class="$style.wrapper"
        :key="products.length"
      >
        <ProductItem
          :class="$style.item"
          v-for="p in products"
          :key="p.id"
          :product="p" />
      </ul>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ProductList',

    computed: {
      products(){
        return this.$store.getters['vehicles/getByType']
      }
    },

  };
</script>

<style lang='scss' module>
  .wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    overflow: hidden;

    @include media(mobile){
      padding-top: 24px - 6px;
    }
  }
  .item{
    display: flex;
    flex-basis: calc(100% / 3 - 32px);
    margin: 16px;

    list-style-type: none;


    @include media(bigDesktop){
      flex-basis: calc(100% / 2 - 32px);
    }

    @include media(tablet){
      flex-basis: calc(100% - 32px);
    }

    @include media(mobile){
      flex-basis: 100%;
      margin: 6px 0;
    }
  }


</style>
