<template>
  <div
    :class="$style.product"
    class="wrapper"
  >
    <div :class="$style.wrapImg">
      <img
        :class="$style.image"
        :data-src="`${product.image}?${product.id}`"
        v-lazy-load
      >
    </div>

    <div :class="$style.content">
      <h1 :class="$style.name">
        {{product.name}}
      </h1>
      <div :class="$style.text">

        <div :class="$style.links">

          <nuxt-link
            :class="$style.link"
            :active-class="$style.active"
            :to="`/vehicle/${product.id}/specifications`"
          >
            Specifications
          </nuxt-link>
          <nuxt-link
            :class="$style.link"
            :active-class="$style.active"
            :to="`/vehicle/${product.id}/team`"
          >
            Team
          </nuxt-link>
          <nuxt-link
            :class="$style.link"
            :active-class="$style.active"
            :to="`/vehicle/${product.id}/term`"
          >
            Rent terms
          </nuxt-link>
        </div>
        <transition mode="out-in" name="fade">

          <nuxt-child :data="product"/>
        </transition>

      </div>

      <div :class="$style.rent">

        <h4 :class="$style.price">

          <span :class="$style.span">
            Rent for
          </span>

          <ProductPrice :price="product.rent"/>
        </h4>

        <button
          :class="$style.btn"
          @click="rent"
        >
          Rent now
        </button>
      </div>

    </div>

  </div>
</template>

<script>

  export default {

    name: 'ProductDetail',

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

    head: {
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      ],
    }
  };
</script>


<style lang='scss' module>
  .product {
    display: flex;
    flex-wrap: wrap;
    margin-top: 25px;

    @include respond-to(wrapper) {
      padding: 0 16px;
    }

    @include respond-to(desktop) {
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding-bottom: 150px;
    }

  }

  .wrapImg {
    width: 50%;
    height: 100%;

    @include respond-to(desktop) {
      width: 50%;
    }

    @include respond-to(mobile-l) {
      width: 100%;
    }
  }

  .image {
    height: 100%;
    width: 100%;
    border-radius: $rImg;
    object-fit: cover;

    @include respond-to(desktop) {
      margin-bottom: 22px;
    }

    @include respond-to(tablet) {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: calc(50% - 64px);
    margin-left: 64px;

    @include respond-to(desktop) {
      width: 100%;
      margin-left: 0;
    }
  }

  .name {
    font-size: 40px;
    font-weight: bold;
    line-height: 120%;
    color: var(--color);

    @include respond-to(mobile-l) {
      font-size: 24px;
    }
  }

  .links {
    display: flex;
    align-items: center;
    margin: 32px 0;

    @include respond-to(mobile-l) {
      margin: 16px 0 20px 0;
    }

    @include respond-to(mobile) {
      justify-content: space-between;
      width: 100%;
    }

  }

  .link {
    margin-right: 32px;
    font-size: 16px;
    font-weight: bold;
    line-height: 14px;
    color: var(--color-secondary);

    @include respond-to(mobile) {
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
    margin-bottom: 64px;
    padding: 16px 32px;
    border-radius: 16px;
    background: var(--bg-secondary);
    transition: all .3s ease;


    @include respond-to(desktop) {
      position: fixed;
      z-index: 999;
      left: 0;
      bottom: 32px;
      width: calc(100% - 80px);
      margin: 0px 16px;
      padding: 12px 24px;
      box-shadow: 10px 10px 64px 25px var(--bg);
    }

  }


  .price {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    line-height: 140%;

    @include respond-to(mobile) {
      font-size: 14px;
    }

  }

  .span {
    margin-right: 10px;
    color: var(--color);
  }

  .btn {
    padding: 17px 32px;
    border-radius: 12px;
    background: $cLightBlue;
    font-size: 16px;
    font-weight: bold;
    line-height: 14px;
    color: $cDarkWhite;

    @include respond-to(mobile) {
      padding: 16px 24px;
      font-size: 14px;
    }
  }
</style>
