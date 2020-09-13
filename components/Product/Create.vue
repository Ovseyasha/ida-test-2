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
            <input
              type="text"
              :class="`${$style.input} ${dark ? 'darkBg2 lightText' : ''}`"
              v-model="form.name"
              placeholder="Name">
            <input
              type="text"
              :class="`${$style.input} ${dark ? 'darkBg2 lightText' : ''} `"
              v-model="form.desc"
              placeholder="Description">
            <span :class="`${$style.inputWrap} ${$style.input} `">
              <input
                type="text"
                :class="`${$style.inputNum} ${dark ? 'darkBg2 lightText' : ''} `"
                v-model.number="form.rent"
                @keypress="noText($event.target.value)"
                placeholder="Rent price">
              <span :class="`${$style.after} ${dark ? '$cGrey1' : ''}`" >$/h</span>
            </span>
            <template v-if="showError">
              <p v-for="(e,i) in errors" :key="i" :class="`${$style.error} ${dark? 'lightText' : ''}`">
                {{e.value}}
              </p>
            </template>
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
  import DataErrors from "assets/js/errors";
  import Logo from "@/components/Navbar/Logo";

  export default {
    name: 'ProductCreate',

    components: {
      AddPhoto
    },

    data() {
      return {
        modal: false,
        form: {
          name: '',
          desc: '',
          rent: '',
        },
        fileImg: null,
        urlImg: null,
        showError: false
      }
    },

    computed: {
      dark(){
        return this.$store.getters.darkMode
      },
      errors(){
        const errors = []

        Object.keys(this.form).map(key => {
          if (this.form[key].length < 1){
            errors.push({
              code: `empty-${key}`,
              value: DataErrors[`empty-${key}`]
            })
          }else if (this.form[key].length < 5){
            if (DataErrors[`short-${key}`]) {
              errors.push({
                code: `short-${key}`,
                value: DataErrors[`short-${key}`]})
            }
          }

        })
        if (this.urlImg === null){
          errors.push({
            code: 'photo-not-select',
            value: DataErrors['photo-not-select']
          })
        }
        return errors
      }
    },

    methods: {
       create(){
        try{
          if (this.errors.length < 1){
            this.$store.dispatch('vehicles/create',
              {
                ...this.form,
                preview: this.urlImg,
                image: this.urlImg
                //  fileImg on server
              })

            this.form.name = ''
            this.form.desc = ''
            this.form.rent = ''
            this.fileImg = null
            this.urlImg = null
            this.showError = false

            this.modal = false
          }else {
            this.showError = true
          }
        }catch (e){
          console.log(e)
        }
      },
      setImg(val){
        this.fileImg = val.file
        this.urlImg = val.url
      },
      noText(evt) {
        this.form.rent = evt.replace(/^\D+/g, '')
      }
    }
  };
</script>

<style lang='scss' module>

.inputWrap{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .inputNum{
    width: 100%;
    padding-right: 60px;
  }

  .after{
    position: absolute;
    right: 15px;
    font-size: 16px;
    line-height: 14px;
    color: $cGrey2;
    padding: 10px;
    z-index: 2;
  }
}
.error{
  color: $cDarkBlue;
}

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
      //@include xs-block(){
      //  height: 90%;
      //}

      .changeImg{
        margin-bottom: 24px;
        height: 348px;
        width: 100%;
        @include xs-block(){
          max-height: 260px;
        }
      }

      .input{
        margin-bottom: 24px;
        color: $cDarkBlue;

        @include xs-block(){
          margin-bottom: 16px;
          //padding: 20px;
        }
      }

      .num{
        position: relative;

        input{
          //@include xs-block(){
          //  padding: 20px;
          //}
        }

        &:after{
          content: '$/h';
          width: 20px;
          height: 20px;
          position: absolute;
          right: 0;
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
          margin-bottom: 50px;

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
