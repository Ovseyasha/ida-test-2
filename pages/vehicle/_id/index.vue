<template>
  <div :class="`${$style.product}`" class="wrapper">
    <img :class="$style.image" :src="product.image" alt="image">
    <div :class="$style.content">
      <h1 :class="`${$style.name} ${dark ? 'lightText' : ''}`">
        {{product.name}}
      </h1>
      <div :class="$style.text">
        <div :class="$style.links">
          <nuxt-link :class="`${$style.link} ${dark ? 'lightText2' : '' } `" :active-class="$style.active" :to="`/vehicle/${product.id}/specifications`">Specifications</nuxt-link>
          <nuxt-link :class="`${$style.link} ${dark ? 'lightText2' : '' } `" :active-class="$style.active" :to="`/vehicle/${product.id}/team`">Team</nuxt-link>
          <nuxt-link :class="`${$style.link} ${dark ? 'lightText2' : '' } `" :active-class="$style.active" :to="`/vehicle/${product.id}/term`">Rent terms</nuxt-link>
        </div>
        <transition appear mode="out-in" name="fade">
          <nuxt-child :data="product" />
        </transition>
      </div>
      <div :class="`${$style.rent} ${dark ? 'darkBg2  darkShadow' : ''}`">
        <h4 :class="`${$style.price} ${dark ? 'lightText': ''}`">
          <span>Rent for</span> <Price :price="product.rent"/>
        </h4>
        <button :class="$style.btn" @click="rent">Rent now</button>
      </div>
    </div>
  </div>
</template>

<script>
import Price from "@/components/Product/Price";
export default {

  async asyncData({ store, params, redirect }){
    if (store.state.error){
      redirect('/')
    }
    if (store.state.vehicles.length < 1){
      await store.dispatch('vehicles/read')
    }

    const product = store.getters['vehicles/getById'](params.id)

    if (!params.text){
      redirect(`/vehicle/${product.id}/specifications`)
    }

    return { product }
  },

  components: {
    Price
  },

  data(){
    return {

    }
  },

  computed: {
    dark(){
      return this.$store.getters.darkMode
    }
  },

  methods: {
    rent(){
      console.log('buy it!')
    }
  }
};
</script>


<style lang='scss' module>
.product{
  display: flex;
  margin-top: 25px;
  padding-bottom: 200px;
  @include xl-block(){
    padding: 0 16px;
    padding-bottom: 0px;
  }

  @include lg-block(){
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-bottom: 150px;
  }

  .image{
    max-width: 712px;
    max-height: 700px;
    border-radius: $rImg;
    object-fit:cover;
    margin-right: 64px;

    @include lg-block(){
      margin-right: 0;
      margin-bottom: 22px;
    }

    @include md-block(){
      width: 100%;
      height: 100%;
    }
  }

  .content{
    //margin-top: 64px;
    display: flex;
    flex-direction: column;

    .name{
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      color: $cDarkBlue;

      @include sm-block(){
        font-size: 24px;
      }
    }

    .text{

      .links{
        display: flex;
        align-items: center;
        margin: 32px 0;

        @include sm-block(){
          margin: 16px 0 20px 0;
        }

        @include xs-block(){
          width: 100%;
          justify-content: space-between;
        }

        .link{
          margin-right: 32px;
          font-weight: bold;
          font-size: 16px;
          line-height: 14px;
          color: $cGrey1;

          @include xs-block(){
            margin-right: 0;
          }
        }

        .active{
          color: $cLightBlue !important;
        }

      }
    }

    .rent{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: $cLightGrey;
      border-radius: 16px;
      padding: 16px 32px;

      @include lg-block(){
        width: calc(100% - 80px);
        position: fixed;
        margin: 0px 16px;
        padding: 12px 24px;
        left: 0;
        bottom: 32px;
        box-shadow: 10px 10px 64px 25px rgba($cDarkWhite, 1);

      }


      .lightMode{
        background: $cLightGrey;
        box-shadow: 10px 10px 64px 25px rgba($cDarkWhite, 1);
      }
      .price{
        font-weight: bold;
        font-size: 20px;
        line-height: 140%;
        color: $cDarkBlue;
        display: flex;
        align-items: center;

        @include xs-block(){
          font-size: 16px;
        }

        span{
          margin-right: 10px;
        }
      }

      .btn{
        padding: 17px 32px;
        background: $cLightBlue;
        border-radius: 12px;
        color: $cDarkWhite;
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;

        @include xs-block(){
          font-size: 14px;
          padding: 16px 24px;
        }
      }
    }
  }
}
</style>
