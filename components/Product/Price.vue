<template>
  <div :class="$style.price">
    {{ price | price }}
  </div>
</template>

<script>
  export default {
    name: 'ProductPrice',

    props: {
      price: {
        type: Number,
        default: () => 0
      }
    },

    computed: {
      // maskPrice(){
      //   return `${this.price} $/h`
      // }
    }
  };
</script>

<style lang='scss' module>
  .price{
    color: $cPink;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 148%;
  }
</style>
