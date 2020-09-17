<template>
  <div :class="$style.Item">
    <nuxt-link
      :to="`/vehicle/${product.id}`"
      :class="$style.wrapper"
    >

      <img
        :class="$style.img"
        :src="product.preview"
      >

      <div :class="$style.content">
        <h2 :class="$style.name">
          {{ product.name }}
        </h2>
        <p :class="$style.desc">
          {{product.description}}
        </p>
        <ProductPrice
          :price="product.rent"
          size="14px"
        />
      </div>

    </nuxt-link>
  </div>
</template>

<script>

  export default {
    name: 'ProductItem',

    props: {
      product: {
        type: Object,
        default: () => {
        },
      },
    },
  };
</script>

<style lang='scss' module>

  .wrapper {
    display: flex;
    width: 100%;
    padding: 24px 32px;
    border-radius: $rProductLg;
    background: var(--bg);
    transition: all .3s ease;

    @include respond-to(mobile) {
      border-radius: $rXs;
    }

    @include respond-to(mobile-xs) {
      padding: 18px 8%;
    }

  }

  .img {
    width: 88px;
    height: 88px;
    object-fit: cover;
    margin-bottom: 52px - 32px;
    border-radius: $rImg;

    @include respond-to(mobile-xs) {
      margin-bottom: 3%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 24px;

    @include respond-to(mobile-xs) {
      margin-left: 8%;
    }
  }

  .name {
    margin: 10px 0 12px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: var(--color);
  }

  .desc {
    min-width: 150px;
    margin-bottom: 16px;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 148%;
    color: var(--color-secondary);
  }
</style>
