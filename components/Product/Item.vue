<template>
  <div :class="`${$style.product} ${dark ? 'darkBg1' : ''}`">
    <img :class="$style.img" :src="product.preview" >
    <div :class="$style.content">
      <nuxt-link :to="`/vehicle/${product.id}`">
        <h2 :class="`${$style.name} ${dark ? 'lightText' : ''}`">{{product.name}}</h2>
      </nuxt-link>
      <p :class="$style.desc">{{product.description}}</p>
      <nuxt-link :to="`/vehicle/${product.id}`">
        <Price :price="product.rent" size="14px" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import Price from "~/components/Product/Price";
  export default {
    name: 'ProductItem',

    components: {
      Price
    },

    props: {
      product: {
        type: Object,
        default: () => {}
      }
    },

    computed: {
      dark(){
        return this.$store.getters.darkMode
      }
    }


  };
</script>

<style lang='scss' module>
  .product{
    display: flex;
    padding: 24px 32px;
    background: $cDarkWhite;
    border-radius: $rProductLg;
    transition: all .3s ease;

    @include xs-block(){
      border-radius: $rXs;
    }

    .img{
      width: 88px;
      height: 88px;
      margin-bottom: 52px - 32px;
      border-radius: $rImg;
      object-fit:cover;
    }
    .content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 24px;

      .name{
        margin: 10px 0 12px 0;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;
        color: $cDarkBlue;
        transition: color .3s ease;
      }

      .desc{
        max-width: 197px;
        min-width: 150px;
        margin-bottom: 16px;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 148%;
        color: $cGrey1;

        //@include xs-block(){
        //}
      }
    }
  }
</style>
