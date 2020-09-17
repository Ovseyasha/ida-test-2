<template>
  <div class="wrapper">
    <div :class="$style.page" >
      <div :class="$style.error" >
        <h1 :class="$style.header">
          An error has occurred
        </h1>
        <p :class="$style.sub">
          Please refresh the page
        </p>
        <button
          :class="$style.btnReload"
          @click="reload"
        >
          Reload page
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",

  methods: {
    reload() {
      location.reload();
    },
  },
}
</script>

<style lang="scss" module>

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 300px);
  padding: 55px 32px;
  border-radius: $rLg;
  background: var(--bg-secondary);

  @include respond-to(mobile) {
    padding: 55px 16px;
    border-radius: $rXs;
  }
}

.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.header {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 120%;
  color: var(--color);

  @include respond-to(mobile) {
    font-size: 24px;
  }
}
.sub {
  margin: 24px 0 40px 0;
  padding: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 146%;
  color: var(--color-secondary);
}
.btnReload {
  padding: 17px 32px;
  color: $cDarkWhite;
  border-radius: $rInput;
  background: $cLightBlue;

  @include respond-to(mobile) {
    padding: 16px 24px;
  }
}
</style>
