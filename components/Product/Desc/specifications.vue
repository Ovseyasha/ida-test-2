<template>
  <div :class="$style.specifications">
    <h2 :class="$style.header">
      Features:
    </h2>
    <div :class="$style.item" v-for="(item, index) in items" :key="index">
      <!--      <div :class="$style.icon">-->
      <img :class="$style.icon" :src="item.icon" alt="icon">
      <!--      </div>-->
      <div>
        <h3 :class="$style.subHeader">{{item.header}}</h3>
        <p :class="$style.desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'specifications',

    data() {
      return {
        items: [
          {
            icon: '/img/champ.svg',
            header: 'A challenge for a true champion',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
          },
          {
            icon: '/img/pilot.svg',
            header: 'Pilot\'s sweaty hands',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
          },
        ],
      };
    },
  };
</script>

<style lang='scss' module>
  .header {
    margin: 32px 0;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    color: var(--color);
  }

  .subHeader {
    color: var(--color);
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    padding: 24px;
    margin-right: 24px;
    background: var(--bg-secondary);
    border-radius: 16px;
  }


  .desc {
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: var(--color-secondary);
  }
</style>
