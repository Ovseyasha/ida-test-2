<template>
  <div :class="$style.Modal">
    <transition mode="out-in" name="slide-right">

      <div :class="$style.modal" v-if="open">

        <div :class="$style.head">

          <h1 :class="$style.header">
            {{title}}
          </h1>

          <button :class="$style.btnClose" @click="close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z"
                :fill="dark? '#FCFCFC' : '#012345'"/>
            </svg>
          </button>

        </div>

        <component :is="mode"/>
      </div>
    </transition>

    <transition mode="out-in" name="fade">
      <div :class="$style.popup" @click="close" v-if="open"></div>
    </transition>

  </div>
</template>

<script>

  export default {
    name: 'Modal',

    components: {
      'CreateProduct': () => import('~/components/Product/CreateProduct'),
    },

    props: {
      mode: {
        type: String,
        default: () => 'CreateProduct',
      },
    },


    computed: {
      open() {
        return this.$store.getters.modal;
      },

      title() {
        let ans = '';
        switch (this.mode) {
          case 'CreateProduct':
            ans = 'Add new vehicle';
            break;
          case  'UpdateProduct':
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

  .Modal {

  }

  .head {
    //position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @include xs-block() {
      margin-bottom: 24px;
    }

    .header {
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      color: var(--color);

      @include xs-block() {
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
      //padding: 12px;
      background: var(--bg-secondary);

      @include xs-block() {
        width: 32px;
        height: 32px;
        border-radius: 8px;
      }

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

    @include sm-block() {
      width: calc(100% - 72px * 2);
    }

    @include xs-block() {
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

  .popup {
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /*width: 100%;*/
    /*height: 100%;*/
    background: rgba(52, 79, 106, 0.32);
    backdrop-filter: blur(32px);
  }
</style>
