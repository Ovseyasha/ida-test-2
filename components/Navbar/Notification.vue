<template>
  <div>
    <button :class="$style.btn">
      <img src="/img/noti.svg">
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
