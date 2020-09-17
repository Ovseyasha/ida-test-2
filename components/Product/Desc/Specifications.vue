<template>
  <div :class="$style.Specifications">
    <div :class="$style.wrapper">
      <h2 :class="$style.header">
        Features:
      </h2>
      <div
        :class="$style.item"
        v-for="(item, index) in items"
        :key="index"
      >
        <svg-icon
          :class="$style.icon"
          :name="item.icon"
        />
        <div :class="$style.text">
          <h3 :class="$style.subHeader">
            {{item.header}}
          </h3>
          <p :class="$style.desc">
            {{item.desc}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Specifications',

    data() {
      return {
        items: [
          {
            icon: 'champ',
            header: 'A challenge for a true champion',
            desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
          },
          {
            icon: 'pilot',
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
    font-size: 24px;
    line-height: 21px;
    font-weight: bold;
    color: var(--color);
  }

  .subHeader {
    color: var(--color);
  }

  .item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    padding: 24px;
    margin-right: 24px;
    border-radius: 16px;
    background: var(--bg-secondary);

    @include respond-to(mobile) {
      width: 48px;
      height: 48px;
    }
  }

  .text{
      margin-top: 14px;
  }

  .desc {
    font-size: 14px;
    font-weight: 300;
    line-height: 146%;
    color: var(--color-secondary);
  }
</style>
