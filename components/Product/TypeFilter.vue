<template>
  <div :class="$style.filter">
    <h2 :class="$style.header">Rent</h2>

    <div :class="$style.selector">
      <h2 :class="$style.selectHeader">{{selectedType}}</h2>
      <select v-model="selectedType"
              :class="$style.select"
              @change="updFilter"
      >
        <option :class="$style.option"
                v-for="(type,index) in types"
                :key="index"
                :value="type">
          {{type}}
        </option>
      </select>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TypeFilter',

    async asyncData({store}) {
      if (store.state.vehicles.length < 1) {
        await store.dispatch['vehicles/read'];
      }
    },

    data() {
      return {
        selectedType: '',
        options: false,
      };
    },

    computed: {
      types() {
        return this.$store.getters['vehicles/getTypes'];
      },
    },

    mounted() {
      this.selectedType = this.types[0];
      this.$store.dispatch('vehicles/setFilter', this.selectedType);
    },

    methods: {
      updFilter() {
        this.$store.dispatch('vehicles/setFilter', this.selectedType);
      },

    },
  }
  ;
</script>

<style lang='scss' module>
  .filter {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: var(--color);

    @include sm-block() {
      font-size: 24px;
    }
  }

  .selectHeader {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: $cLightBlue;
    padding-left: 20px;

    &:after {
      position: relative;
      content: url("/img/arrow.svg");
      bottom: 8px;
      margin-left: 10px;
    }

    @include sm-block() {
      font-size: 24px;
    }
  }

  .selector {
    position: relative;
  }

  .select {
    position: absolute;
    opacity: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: none;
    color: $cLightBlue;
    border: none;
    background: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;

    @include sm-block() {
      padding-left: 10px;
      font-size: 24px;
    }
  }

</style>
