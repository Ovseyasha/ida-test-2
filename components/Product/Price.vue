<template>
  <div :class="$style.price" :style="fontSize">
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
      },
      size: {
        type: String,
        default: () => 'inherit'
      }
    },

    computed: {
      fontSize(){
        return {
          fontSize: this.size
        }
      }
    }
  };
</script>

<style lang='scss' module>
  .price{
    color: $cPink;
    font-style: normal;
    font-weight: bold;
    line-height: 148%;
  }
</style>
