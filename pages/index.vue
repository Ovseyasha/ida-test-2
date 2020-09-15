<template>
  <div :class="$style.container" >
    <div class="wrapper">
      <div :class="$style.page">

        <div :class="$style.products">
          <div :class="$style.controlPanel">
            <PTypeFilter/>
            <PCreate/>
          </div>
          <PList/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {

    asyncData({store, error}){
      if (store.state.error){
        error({ statusCode: 404, message: 'An error has occurred' })
      }
    },

  };
</script>


<style lang='scss' module>
  .container {
    padding-bottom: 48px;
  }

  .page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 300px);
    padding: 55px 32px;
    border-radius: $rLg;
    background: var(--bg-secondary);

    @include xs-block() {
      border-radius: $rXs;
      padding: 55px 16px;
    }
  }

  .products {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    align-self: flex-start;
  }

  .controlPanel {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    @include md-block() {
      padding: 0 16px;
    }
    @include xs-block() {
      padding: 0;
    }
  }


</style>
