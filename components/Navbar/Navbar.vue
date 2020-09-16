<template>
  <div :class="$style.navbar">
    <div :class="$style.items" class="wrapper">
      <Logo :class="$style.item"/>

      <div :class="$style.userBtns">

        <ToggleMode :class="$style.toggle"/>

        <div :class="$style.btns">
          <Messages/>
          <Notification/>
        </div>

        <Profile/>

      </div>

    </div>
  </div>
</template>

<script>

  export default {
    name: 'Navbar',
  };
</script>

<style lang='scss' module>
  .navbar {
    padding-top: 20px;

    @include media(wrapper){
      padding: 20px 16px 0 16px;
    }
  }

  .items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .userBtns {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .btns {
    display: flex;
  }

  .toggle {
    padding-right: 100px;

    @include media(desktop){
      padding-right: 16px;
    }
  }
</style>
