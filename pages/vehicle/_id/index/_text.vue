<template>
  <div :class="$style.page">

    <div :class="$style.text" v-html="desc"></div>

    <div :class="$style.content">
      <component :is="$route.params.text"/>
    </div>

  </div>
</template>

<script>


  export default {
    name: 'subCat',

    props: {
      data: {
        type: Object,
        default: () => {
        },
      },
    },

    components: {
      'specifications': () => import('~/components/Product/Desc/specifications'),
      'team': () => import('~/components/Product/Desc/team'),
      'term': () => import('~/components/Product/Desc/term'),
    },


    computed: {
      desc() {
        return this.data[`${this.$route.params.text}_text`].replace('\n\n', '<br /><br />');
      },
    },
  };
</script>

<style lang="scss" module>
  .page {

    .text {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 146%;
      color: var(--color-secondary);
    }

    .content {
      display: flex;
      flex-direction: column;
    }
  }

</style>
