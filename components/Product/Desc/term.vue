<template>
  <div :class="$style.term">
    <h2 :class="$style.listHeader">
      Additional conditions:
    </h2>
    <ul>
      <li :class="$style.li" v-for="(li,index) in list" :key="index">
        {{li}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'term',

    data() {
      return {
        list: [
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        ],
      };
    },

  };
</script>

<style lang='scss' module>
  .listHeader {
    font-weight: bold;
    font-size: 16px;
    line-height: 152%;
    margin: 24px 0;
    color: var(--color);
  }

  .li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 16px;

    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    list-style: none;
    color: var(--color-secondary);

    &:before {
      content: url("/img/dot.svg");
      color: $cPink;
      padding-right: 20px;
    }
  }
</style>
