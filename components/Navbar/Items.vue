<template>
  <div :class="`${$style.items} ${dark ? 'lightText2' : ''}`">
    <ToggleMode :class="$style.toggle"/>
    <div :class="$style.btns">
      <Messages/>
      <Notification/>
    </div>
    <Profile/>
  </div>
</template>

<script>
  import ToggleMode from "~/components/command/ToggleMode";
  import Messages from "~/components/Navbar/Messages";
  import Notification from "~/components/Navbar/Notification";
  import Profile from "~/components/command/Profile";
  export default {
    name: 'Items',

    components: {
      ToggleMode,
      Messages,
      Notification,
      Profile
    },

    computed: {
      dark(){
        return this.$store.getters.darkMode
      }
    }
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
    @include md-block(){
      padding-right: 16px;
    }
  }
</style>
