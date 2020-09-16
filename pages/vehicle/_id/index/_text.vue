<template>
  <div :class="$style._text">
    <div :class="$style.text" v-html="desc"/>
    <component :is="$route.params.text" :class="$style.component"/>
  </div>
</template>

<script>


  export default {
    name: 'SubComponent',

    props: {
      data: {
        type: Object,
        default: () => {},
      },
    },

    components: {
      'specifications': () => import('@/components/Product/Desc/Specifications'),
      'team': () => import('@/components/Product/Desc/Team'),
      'term': () => import('@/components/Product/Desc/Term'),
    },


    computed: {
      desc() {
        return this.data[`${this.$route.params.text}_text`].replace('\n\n', '<br /><br />');
      },
    },
  };
</script>

<style lang="scss" module>

  .text {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: var(--color-secondary);
  }
  .component{
    width: 100%;
  }

</style>
