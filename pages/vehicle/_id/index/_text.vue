<template>
  <div :class="$style.page">
    <div :class="`${$style.text} ${dark ? 'lightText2' : ''}`" v-html="desc"/>

    <div :class="$style.content">
      <template v-if="$route.params.text === 'specifications'">
        <h2 :class="`${$style.header} ${dark ? 'lightText' : ''}`">
          Features:
        </h2>
        <div :class="$style.item" v-for="(item, index) in items" :key="index">
          <div :class="`${$style.icon} ${dark ? 'darkBg2' : ''}`">
            <img :src="item.icon" alt="icon">
          </div>
          <div>
            <h3 :class="`${$style.header} ${dark ? 'lightText' : ''}`">{{item.header}}</h3>
            <p :class="`${$style.desc} ${dark ? 'lightText2' : ''}`">{{item.desc}}</p>
          </div>
        </div>
      </template>
      <template v-if="$route.params.text === 'team'">
        <h2 :class="`${$style.header} ${dark ? 'lightText' : ''}`">
          Qualified specialists
        </h2>
        <div :class="$style.humans">
          <div :class="$style.man" v-for="(h,index) in humans" :key="index">
            <img :class="$style.avatar" :src="h.url" alt="avatar">
            <div :class="$style.manDesc">
              <h3 :class="`${$style.header} ${dark ? 'lightText' : ''}`">{{h.name}}</h3>
              <p :class="`${$style.desc} ${dark ? 'lightText2' : ''}`">{{h.position}}</p>
            </div>
          </div>
        </div>
        <p :class="`${$style.desc} ${dark ? 'lightText2' : ''}`">{{teamDesc}}</p>
      </template>
      <template v-if="$route.params.text === 'term'">
        <h2 :class="`${$style.listHeader} ${dark ? 'lightText' : ''}`">
          Additional conditions:
        </h2>
        <ul :class="$style.list">
          <li :class="`${$style.li} ${dark ? 'lightText2' : ''}`" v-for="(li,index) in list" :key="index">
            {{li}}
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "subCat",

  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },

  data(){
    return {
      // spec
      items: [
        {
          icon: '/img/champ.svg',
          header: 'A challenge for a true champion',
          desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
          icon: '/img/pilot.svg',
          header: 'Pilot\'s sweaty hands',
          desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        }
      ],

      // team
      humans: [
        {
          url: '/img/man1.png',
          name: 'Marvin McKinney',
          position: 'Pilot assistant'
        },
        {
          url: '/img/man2.png',
          name: 'Savannah Nguyen',
          position: 'Mechanic'
        },
        {
          url: '/img/man3.png',
          name: 'Courtney Henry',
          position: 'Stewardess'
        }
      ],

      teamDesc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',

      // rent
      list: [
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
      ]
    }
  },

  computed: {
    desc(){
      return this.data[`${this.$route.params.text}_text`]
    },

    dark(){
      return this.$store.getters.darkMode
    }
  }
}
</script>

<style lang="scss" module>
.page{
  transition: all .3s ease;

  .text{
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: $cGrey1;
  }

  .content{
    display: flex;
    flex-direction: column;

    // spec
    .header{
      margin: 32px 0;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 21px;
      color: $cDarkBlue;
    }

    .item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 96px;
        margin-right: 24px;
        padding: 0 24px;
        background: $cLightGrey;
        border-radius: 16px;
      }

      .header{
        margin: 0;
        font-size: 16px;
        line-height: 152%;
      }

      .desc{
        font-weight: 300;
        font-size: 14px;
        line-height: 146%;
        color: $cGrey1;
      }

    }
    //  team
    .humans{
      display: flex;
      justify-content: space-between;
      margin-bottom: 32px;

      @include xs-block(){
        flex-direction: column;
      }

      .man{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include xs-block(){
          flex-direction: row;
          justify-content: flex-start;
        }

        .avatar{
          border-radius: 12px;
          margin-bottom: 16px;
        }

        .manDesc{
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @include xs-block(){
            justify-content: center;
            margin-left: 16px;
          }

          .header{
            margin: 0;
            font-size: 16px;
            line-height: 152%;
            margin-bottom: 8px;
          }
          .desc{
            margin: 0;
            padding: 0;
          //
          }
        }
      }
    }
    .desc{
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 146%;
      color: $cGrey1;
      //margin-bottom: 40px;
      padding-bottom: 40px;
    }
  //  term
    .listHeader{
      font-weight: bold;
      font-size: 16px;
      line-height: 152%;
      margin: 24px 0;
    }
    .list{


      .li{
        display: flex;
        align-items: flex-start;
        margin-bottom: 16px;

        font-weight: 300;
        font-size: 14px;
        line-height: 146%;
        list-style: none;
        color: $cGrey1;
        &:before{
          content: url("/img/dot.svg");
          color: $cPink;
          padding-right: 20px;
        }
      }
    }
  }
}

</style>
