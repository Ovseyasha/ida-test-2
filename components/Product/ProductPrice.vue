<template>
  <div :class="$style.Price">
    <div :class="$style.wrapper" :style="fontSize">
      {{ price | price }}
    </div>
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
  .wrapper{
    font-style: normal;
    font-weight: bold;
    line-height: 148%;
    color: $cPink;
  }
</style>
