<template>
  <div :class="$style.Notification">
    <div :class="$style.wraper">
      <button :class="$style.btn">
        <svg-icon name="noti" />
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarNotification',
  };
</script>

<style lang='scss' module>
  .btn {
    padding-left: 30px;

    @include respond-to(tablet) {
      padding-left: 16px;
    }
  }
</style>
