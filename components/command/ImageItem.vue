<template>
  <figure :class="$style.wrapper" v-lazyload>
    <div :class="$style.spiner">
      <span>lol</span>
    </div>
    <img :class="$style.img" :data-url="source">
  </figure>
</template>

<script>
  export default {
    name: 'ImageItem',

    props: {
      source: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang='scss' module>
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img {
    max-width: 100%;
    height: auto;
    z-index: 2;
    border-radius: $rImg;

  }

  .spiner {
    margin: 25%;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    animation: rot linear infinite .3s;
  }

  @keyframes rot {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
</style>
