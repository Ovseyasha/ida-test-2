<template>
  <div :class="$style.filter">
    <h2 :class="`${$style.header} ${dark ? 'lightText' : ''}`">Rent</h2>
    <select v-model="selectedType" :class="$style.select" @change="updFilter">
      <option :class="$style.option" v-for="(type,index) in types" :key="index" :value="type">
        {{type}}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'TypeFilter',
    data() {
      return {
        selectedType: '',
      };
    },
    computed: {
      types() {
        return this.$store.getters['vehicles/getTypes'];
      },
      dark(){
        return this.$store.getters.darkMode
      }
    },
    mounted() {
      this.selectedType = this.types[0];
      this.$store.dispatch('vehicles/setFilter', this.selectedType)
    },
    methods: {
      updFilter(){
        this.$store.dispatch('vehicles/setFilter', this.selectedType)
      }
    }
  };
</script>

<style lang='scss' module>
  .filter {
    display: flex;
    justify-content: center;
    align-items: center;

    .header{
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      color: $cDarkBlue;
      transition: color .3s ease;

      @include sm-block(){
        font-size: 24px;
      }
    }

    .select {
      outline: none;
      padding-left: 20px;
      color: $cLightBlue;
      border: none;
      background: none;
      font-weight: bold;
      font-size: 40px;
      line-height: 120%;
      @include sm-block(){
        padding-left: 10px;
        font-size: 24px;
      }
    }

    .option {
      font-size: 15px;
    }
  }
</style>
