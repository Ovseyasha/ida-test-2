<template>
  <div :class="$style.Term">
    <div :class="$style.wrapper">
      <h2 :class="$style.listHeader">
        Additional conditions:
      </h2>
      <ul>
        <li :class="$style.li" v-for="(li,index) in list" :key="index">
          {{li}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Term',

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
    margin: 24px 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 152%;
    color: var(--color);
  }

  .li {
    display: flex;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: 300;
    line-height: 146%;
    color: var(--color-secondary);
    list-style: none;

    &:before {
      content: url("/img/dot.svg");
      padding-right: 20px;
      color: $cPink;
    }
  }
</style>
