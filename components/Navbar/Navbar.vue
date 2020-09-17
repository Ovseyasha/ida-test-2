<template>
  <div :class="$style.Navbar">
    <div :class="$style.wrapper">
      <div
        :class="$style.items"
        class="wrapper"
      >
        <TheLogo :class="$style.item"/>

        <div :class="$style.userBtns">

          <ToggleMode :class="$style.toggle"/>

          <div :class="$style.btns">

            <NavbarMessages :class="$style.messages"/>

            <NavbarNotification/>

          </div>

          <Profile/>

        </div>

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
  .wrapper {
    padding-top: 20px;

    @include respond-to(wrapper) {
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

    @include respond-to(tablet) {
      padding-right: 16px;
    }
  }
</style>
