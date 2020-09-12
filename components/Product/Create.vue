<template>
  <div :class="$style.container">
    <button :class="$style.addBtn" @click="modal = !modal">
      <span>Add new</span>
      <span :class="$style.plus">+</span>
    </button>
    <template v-if="modal">
      <transition appear name="slide-right">
        <div :class="`${$style.modal} ${dark ? 'darkBg1' : ''}`">
          <div :class="$style.head">
            <h1 :class="`${$style.header} ${dark? 'lightText' : ''}`">
              Add new vehicle
            </h1>
            <button :class="`${$style.btnClose} ${dark ? 'darkBg2' : ''}`" @click="modal = !modal">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" :fill="dark? '#FCFCFC' : '#012345'"/>
              </svg>
            </button>
          </div>
          <form :class="$style.form" @submit.prevent="create">
            <AddPhoto @changed-img="setImg" :class="$style.changeImg"  />
            <input type="text" :class="`${$style.input} ${dark ? 'darkBg2 lightText' : ''}`" v-model="name" placeholder="Name">
            <input type="text" :class="`${$style.input} ${dark ? 'darkBg2 lightText' : ''}`" v-model="desc" placeholder="Description">
            <input type="text" :class="`${$style.input} ${dark ? 'darkBg2 lightText' : ''}`" v-model="price" placeholder="Rent price">
            <button type="submit" :class="$style.submit">Complete</button>
          </form>
        </div>
      </transition>
      <transition appear name="fade" mode="out-in">
        <div :class="$style.popup" @click="modal = !modal" />
      </transition>
    </template>
  </div>
</template>

<script>
  import AddPhoto from "~/components/command/AddPhoto";
  export default {
    name: 'ProductCreate',

    components: {
      AddPhoto
    },

    data() {
      return {
        modal: false,
        name: '',
        desc: '',
        price: '',
        fileImg: null,
        urlImg: null
      }
    },

    computed: {
      dark(){
        return this.$store.getters.darkMode
      }
    },

    methods: {
       create(){
        try{
          this.$store.dispatch('vehicles/create',
    {
              name: this.name,
              description: this.desc,
              rent: parseInt(this.price),
              preview: this.urlImg,
              image: this.urlImg
            //  fileImg on server
            })
          this.modal = false
        }catch (e){
          console.log(e)
        }
      },
      setImg(val){
        this.fileImg = val.file
        this.urlImg = val.url
      }
    }
  };
</script>

<style lang='scss' module>
.container{
  //position: relative;
  .addBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
    color: $cLightBlue;

    @include xs-block(){
      font-size: 16px;
    }

    .plus {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 47px;
      height: 47px;
      margin-left: 20px;
      background: $cLightBlue;
      color: $cDarkWhite;
      border-radius: 16px;

      @include xs-block(){
        width: 32px;
        height: 32px;
        border-radius: 8px;
      }
    }
  }
  .modal{
    position: fixed;
    top: 0;
    right: 0;
    z-index: 11;
    // fix that
    height: 87vh;
    width: 600px - 72px * 2;
    padding: 64px 72px;
    border-top-left-radius: $rLg;
    border-bottom-left-radius: $rLg;
    background: $cDarkWhite;

    @include sm-block(){
      width: calc(100% - 72px * 2);
    }

    @include xs-block(){
      top: 17%;
      bottom: 0;
      width: calc(100% - 16px * 2);
      padding: 24px 16px 32px 16px;
      border-radius: 24px 24px 0px 0px;
    }

    .head{
      //position: fixed;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      @include xs-block(){
        margin-bottom: 24px;
      }

      .header{
        font-weight: bold;
        font-size: 40px;
        line-height: 120%;
        color: $cDarkBlue;

        @include xs-block(){
          font-size: 24px;
        }
      }

      .btnClose{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        border-radius: 16px;
        //padding: 12px;
        background: $cLightGrey;

        @include xs-block(){
          width: 32px;
          height: 32px;
          border-radius: 8px;
        }

      }

    }
    .form{
      display: flex;
      flex-direction: column;
      overflow-y: auto;

      @include xs-block(){
        height: 90%;
      }

      .changeImg{
        margin-bottom: 24px;
        height: 348px;

        @include xs-block(){
          height: 260px;
          //height: 20%;
        }
      }

      .input{
        margin-bottom: 24px;
        color: $cDarkBlue;

        @include xs-block(){
          margin-bottom: 16px;
        }
      }

      .submit{
        margin-top: 16px;
        padding: 21px 0;
        border-radius: $rInput;
        background: $cLightBlue;
        color: $cDarkWhite;
        font-weight: bold;
        font-size: 16px;
        line-height: 14px;

        @include xs-block(){
          margin-top: 8px;
        }
      }

    }
  }
  .popup{
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    //width: 100%;
    //height: 100%;
    background: rgba(52, 79, 106, 0.32);
    backdrop-filter: blur(32px);
  }
}

</style>
