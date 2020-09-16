<template>
  <div :class="$style.Modal">

    <div :class="$style.wrapper">
      <transition
        mode="out-in"
        name="slide-right"
      >
        <div
          :class="$style.modal"
          v-if="open"
        >

          <div :class="$style.head">

            <h1 :class="$style.header">
              {{title}}
            </h1>

            <button
              :class="$style.btnClose"
              @click="close"
            >
              <svg-icon
                :class="$style.svg"
                :name="`close_${$colorMode.preference}`"/>
            </button>

          </div>

          <component :is="mode"/>
        </div>
      </transition>

      <transition mode="out-in" name="fade">
        <div
          :class="$style.popup"
          v-if="open"
          @click="close"
        />
      </transition>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Modal',
    components: {
      'ProductFormCreate': () => import('@/components/Product/FormCreate'),
    },

    props: {
      mode: {
        type: String,
        default: () => 'ProductFormCreate',
      },
    },


    computed: {
      open() {
        return this.$store.getters.modal;
      },

      title() {
        let ans = '';
        switch (this.mode) {
          case 'ProductFormCreate':
            ans = 'Add new vehicle';
            break;
          case  'ProductFormUpdate':
            ans = 'Update vehicle';
            break;
        }
        return ans;
      },

      dark() {
        return this.$colorMode.preference === 'dark';
      },

    },

    methods: {
      close() {
        this.$store.commit('toggleModal');
      },
    },
  };
</script>

<style lang='scss' module>

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @include media(mobile){
      margin-bottom: 24px;
    }

  }

  .header {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: var(--color);


    @include media(mobile){
      font-size: 24px;
    }
  }

  .btnClose {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: var(--bg-secondary);

    @include media(mobile){
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }

  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    width: 600px - 72px * 2;
    padding: 64px 72px;
    border-top-left-radius: $rLg;
    border-bottom-left-radius: $rLg;
    background: var(--bg);


    @include media(tablet){
      width: calc(100% - 72px * 2);
    }

    @include media(mobile){
      overflow: auto;
      height: 100%;
      bottom: 0;
      width: calc(100% - 16px * 2);
      padding: 24px 16px 32px 16px;
      border-radius: 0;

      @media (min-height: 750px) {
        height: 100vh;
        margin-top: 20%;
        border-radius: 24px 24px 0 0;
      }
    }

  }

  .svg{
    width: 14px;
    height: 14px;
  }

  .popup {
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(52, 79, 106, 0.32);
    backdrop-filter: blur(32px);
  }
</style>
