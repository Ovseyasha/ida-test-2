<template>
  <div :class="$style.Team">
    <h2 :class="$style.header">
      Qualified specialists
    </h2>
    <div :class="$style.humans">
      <div :class="$style.man" v-for="(h,index) in humans" :key="index">
        <img :class="$style.avatar" :src="h.url" alt="avatar">
        <div :class="$style.manDesc">
          <h3 :class="$style.name">{{h.name}}</h3>
          <p :class="$style.desc">{{h.position}}</p>
        </div>
      </div>
    </div>
    <p :class="$style.desc">{{teamDesc}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Team',

    data() {
      return {
        humans: [
          {
            url: '/img/man1.png',
            name: 'Marvin McKinney',
            position: 'Pilot assistant',
          },
          {
            url: '/img/man2.png',
            name: 'Savannah Nguyen',
            position: 'Mechanic',
          },
          {
            url: '/img/man3.png',
            name: 'Courtney Henry',
            position: 'Stewardess',
          },
        ],

        teamDesc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      };
    },
  };
</script>

<style lang='scss' module>
  .humans {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    flex-wrap: wrap;

    @media screen and (max-width: 1160px) {
      justify-content: space-evenly;
    }

    @include media(mobile){
      flex-direction: column;
    }

  }

  .man {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media(mobile){
      flex-direction: row;
      justify-content: flex-start;
    }

    .avatar {
      height: 96px;
      width: 162px;
      border-radius: 12px;
      margin: 0 4px 16px 0;

      @include media(mobile){
        width: 132px;
        height: 80px;
      }
    }

  }

  .manDesc {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include media(mobile){
      justify-content: center;
      margin-left: 16px;
    }

  }

  .header {
    margin: 32px 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    color: var(--color);
  }

  .name {
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: var(--color);

  }

  .desc {
    margin: 0;
    padding: 0;
  }

  .desc {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: var(--color-secondary);
    padding-bottom: 40px;
  }
</style>
