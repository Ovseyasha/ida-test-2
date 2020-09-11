<template>
  <div :class="$style.filter">
    <h2>Rent</h2>
    <select v-model="selectedType" :class="$style.select">
      <option :class="$style.option" v-for="(type,index) in types" :key="index" :value="type">
        {{type}}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'Filter',
    data() {
      return {
        selectedType: '',
      };
    },
    computed: {
      types() {
        return this.$store.getters['vehicles/getTypes'];
      },
    },
    mounted() {
      this.selectedType = this.types[0];
    },
  };
</script>

<style lang='scss' module>
  .filter {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    display: flex;
    justify-content: center;
    align-items: center;

    .select {
      outline: none;
      padding-left: 20px;
      color: $cLightBlue;
      border: none;
      background: none;
      font-weight: bold;
      font-size: 50px;
      line-height: 120%;


    }

    .option {
      background: red;
      font-size: 10px !important;
    }
  }
</style>
