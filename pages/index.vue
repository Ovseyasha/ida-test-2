<template>
  <div class="wrapper">
    <div :class="$style.page">
        <div :class="$style.controlPanel">
          <PTypeFilter/>
          <PCreate/>
        </div>
        <PList/>
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

  .page {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-self: flex-start;

    min-height: calc(100vh - 300px);
    padding: 55px 32px;
    border-radius: $rLg;
    background: var(--bg-secondary);
    margin-bottom: 48px;

    @include media(mobile){
      border-radius: $rXs;
      padding: 55px 16px;
    }
  }

  .controlPanel {
    padding: 0 32px;
    display: flex;
    justify-content: space-between;

    @include media(desktop){
      padding: 0 16px;
    }

    @include media(mobile){
      padding: 0;
    }
  }


</style>
