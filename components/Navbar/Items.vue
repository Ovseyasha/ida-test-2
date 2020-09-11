<template>
  <div :class="$style.items">
    <ToggleMode :class="$style.toggle"/>
    <div :class="$style.btns">
      <Messages/>
      <Notification/>
    </div>
    <Profile/>
  </div>
</template>

<script>

  export default {
    name: 'Items',
  };
</script>

<style lang='scss' module>
  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btns {
    display: flex;
  }

  .toggle {
    padding-right: 100px;
  }
</style>
