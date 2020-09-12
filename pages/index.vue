<template>
  <div :class="$style.container" :style="error? 'padding-bottom: 55px': ''" >
    <div class="wrapper">
      <div :class="`${$style.page} ${dark ? 'darkBg2': ''} `" :style="errorStyle">
        <template v-if="!error">
          <div :class="$style.controlPanel" >
            <TypeFilter/>
            <Create/>
          </div>
            <List/>
        </template>
        <template v-else>
          <Loader v-if="loading" />
          <div :class="$style.error" v-else>
            <h1 :class="`${$style.header} ${dark ? 'lightText' : ''}`">An error has occurred</h1>
            <p :class="`${$style.sub} ${dark ? 'lightText2' : ''}`">
              Please refresh the page
            </p>
            <button :class="$style.btnReload" @click="reload">Reload page</button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import TypeFilter from "~/components/Product/TypeFilter";
  import Create from "~/components/Product/Create";
  import List from "~/components/Product/List";
  import Loader from "~/components/command/Loader";

  export default {
    components: {
      TypeFilter,
      Create,
      List,
      Loader
    },

    data(){
      return {
        loading: false
      }
    },

    computed: {
      error(){
        return this.$store.getters.error !== null
      },
      errorStyle(){
        return this.error ?
          {
          height: '70vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        } :
          ''
      },
      dark(){
        return this.$store.getters.darkMode
      }
    },

    methods:{
      async reload(){
        try{
          this.loading = true
          await this.$store.dispatch('vehicles/read')
        }
        catch (e) {
          this.loading = false
          console.log(e)
        }
      }
    }
  };
</script>


<style lang='scss' module>
  .container {
    padding-bottom: 48px;

    .page {
      min-height: 72vh;
      padding: 55px 32px;
      border-radius: $rLg;
      background: $cLightGrey;
      transition: background .3s ease;

      @include xs-block(){
        border-radius: $rXs;
        padding: 55px 16px;
      }

      .controlPanel {
        padding: 0 32px;
        display: flex;
        justify-content: space-between;
        @include md-block(){
          padding: 0 16px;
        }
        @include xs-block(){
          padding: 0;
        }
      }

      .error{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .header{
          margin: 0;
          padding: 0;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 120%;
          color: $cDarkBlue;
          @include xs-block(){
            font-size: 24px;
          }
        }

        .sub{
          margin: 24px 0 40px 0;
          padding: 0;
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 146%;
          color: $cGrey1;
        }

        .btnReload{
          border-radius: $rInput;
          background: $cLightBlue;
          color: $cDarkWhite;
          padding: 17px 32px;

          @include xs-block(){
            padding: 16px 24px;
          }
        }
      }
    }
  }

</style>
