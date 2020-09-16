<template>
  <transition-group tag="ul" appear mode="out-in" :class="$style.List">
      <PItem :class="$style.item" v-for="p in products" :key="p.id"   :product="p" />
  </transition-group>
</template>

<script>
  export default {
    name: 'PList',


    computed: {
      products(){
        return this.$store.getters['vehicles/getByType']
      }
    },

  };
</script>

<style lang='scss' module>
  .List{
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;

    @include media(mobile){
      padding-top: 24px - 6px;
    }
  }
  .item{
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
