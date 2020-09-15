<template>
  <div :class="$style.product" class="wrapper">

    <div :class="$style.wrapImg">
<!--      <ImageItem :class="$style.image" :source="product.image"/>-->
      <img :class="$style.image" :data-src="product.image" v-lazy-load>
    </div>

    <div :class="$style.content">
      <h1 :class="$style.name">
        {{product.name}}
      </h1>
      <div :class="$style.text">

        <div :class="$style.links">

          <nuxt-link :class="$style.link"
                     :active-class="$style.active"
                     :to="`/vehicle/${product.id}/specifications`">
            Specifications
          </nuxt-link>
          <nuxt-link :class="$style.link"
                     :active-class="$style.active"
                     :to="`/vehicle/${product.id}/team`">
            Team
          </nuxt-link>
          <nuxt-link :class="$style.link"
                     :active-class="$style.active"
                     :to="`/vehicle/${product.id}/term`">
            Rent terms
          </nuxt-link>
        </div>
        <transition mode="out-in" name="fade">

          <nuxt-child :data="product"/>
        </transition>

      </div>

      <div :class="$style.rent">
        <h4 :class="$style.price">
          <span>Rent for</span>
          <Price :price="product.rent"/>
        </h4>
        <button :class="$style.btn" @click="rent">Rent now</button>
      </div>

    </div>

  </div>
</template>

<script>

  export default {

    async asyncData({store, params, redirect, error}) {
      if (store.state.error) {
        error({ statusCode: 404, message: 'An error has occurred' })
      }
      if (store.state.vehicles.length < 1) {
        await store.dispatch('vehicles/read');
      }

      const product = store.getters['vehicles/getById'](params.id);

      if (!params.text) {
        redirect(`/vehicle/${product.id}/specifications`);
      }

      return {product};
    },


    methods: {
      rent() {
        console.log('buy it!');
      },
    },
  };
</script>


<style lang='scss' module>
  .product {
    display: flex;
    margin-top: 25px;
    flex-wrap: wrap;

    @include xl-block() {
      padding: 0 16px;
    }

    @include lg-block() {
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding-bottom: 150px;
    }

  }

  .wrapImg {
    width: 50%;
    height: 100%;
    @include lg-block() {
      width: 100%;
    }
  }

  .image {

    height: 100%;
    width: 100%;

    border-radius: $rImg;
    object-fit: cover;

    @include lg-block() {
      margin-bottom: 22px;
    }

    @include md-block() {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 64px;
    width: calc(50% - 64px);

    @include lg-block() {
      width: 100%;
      margin-left: 0;
    }
  }

  .name {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: var(--color);


    @include sm-block() {
      font-size: 24px;
    }
  }

  .links {
    display: flex;
    align-items: center;
    margin: 32px 0;

    @include sm-block() {
      margin: 16px 0 20px 0;
    }

    @include xs-block() {
      width: 100%;
      justify-content: space-between;
    }

  }

  .link {
    margin-right: 32px;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: var(--color-secondary);

    @include xs-block() {
      margin-right: 0;
      font-size: 14px;
    }
  }

  .active {
    color: $cLightBlue;
  }

  .rent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-secondary);
    border-radius: 16px;
    padding: 16px 32px;
    transition: all .3s ease;
    margin-bottom: 64px;


    @include lg-block() {
      position: fixed;
      width: calc(100% - 80px);
      z-index: 999;
      margin: 0px 16px;
      padding: 12px 24px;
      left: 0;
      bottom: 32px;
      box-shadow: 10px 10px 64px 25px var(--bg);
    }

  }


  .price {
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    display: flex;
    align-items: center;

    @include xs-block() {
      font-size: 14px;
    }

    span {
      margin-right: 10px;
      color: var(--color);
    }
  }

  .btn {
    padding: 17px 32px;
    background: $cLightBlue;
    border-radius: 12px;
    color: $cDarkWhite;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;

    @include xs-block() {
      font-size: 14px;
      padding: 16px 24px;
    }
  }
</style>
