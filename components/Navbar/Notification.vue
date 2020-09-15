<template>
  <div>
    <button :class="$style.btn">
      <svg-icon name="noti" />
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Notification',
  };
</script>

<style lang='scss' module>
  .btn {
    padding-left: 30px;
    @include md-block(){
      padding-left: 16px;
    }
  }
</style>
