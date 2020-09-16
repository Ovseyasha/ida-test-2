<template>
  <div class="wrapper">
    <div :class="$style.page">
        <div :class="$style.controlPanel">
          <ProductTypeFilter :class="$style.productTypeFilter"/>
          <ProductBtnCreate :class="$style.productCreate"/>
        </div>
        <ProductList :class="$style.list"/>
    </div>
  </div>
</template>

<script>

  export default {

    name: 'MainPage',

    asyncData({store, error}){
      if (store.state.error){
        error({ statusCode: 404, message: 'An error has occurred' })
      }
    },

  };
</script>


<style lang='scss' module>

  .page {
    min-height: calc(100vh - 300px);
    margin-bottom: 48px;
    padding: 55px 32px;

    background: var(--bg-secondary);
    border-radius: $rLg;

    @include media(mobile){
      padding: 55px 16px;

      border-radius: $rXs;
    }
  }

  .controlPanel {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;

    @include media(desktop){
      padding: 0 16px;
    }

    @include media(mobile){
      padding: 0;
    }
  }

  .list{
    width: 100%;
  }


</style>
