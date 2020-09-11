<template>
  <div :class="$style.container">
    <div class="wrapper">
      <div :class="$style.page">
        <div :class="$style.controlPanel">
          <TypeFilter/>
          <Create/>
        </div>
        <List/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>


<style lang='scss' module>
  .container {
    .page {
      padding: 55px 65px;
      background: $cLightGrey;
      border-radius: $rLg;

      .controlPanel {
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
