<template>
  <div :class="$style.TypeFilter">
    <div :class="$style.wrapper">
      <h2 :class="$style.header">
        Rent
      </h2>

      <div :class="$style.selector">
        <h2 :class="$style.selectHeader">
          {{selectedType}}
        </h2>
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
  </div>
</template>

<script>
  export default {
    name: 'ProductTypeFilter',

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
      if (this.types.length > 0){
        this.selectedType = this.types[0];
        this.$store.dispatch('vehicles/setFilter', this.selectedType);
      }
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
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: var(--color);

    @include respond-to(mobile-l) {
      font-size: 24px;
    }

    @include respond-to(mobile-xs) {
      font-size: 18px;
    }
  }

  .selectHeader {
    padding-left: 20px;
    font-weight: bold;
    font-size: 40px;
    line-height: 120%;
    color: $cLightBlue;

    @include respond-to(mobile-l) {
      font-size: 24px;
    }

    @include respond-to(mobile-xs) {
      padding-left: 10px;
      font-size: 18px;
    }

    &:after {
      content: url("/img/arrow.svg");
      position: relative;
      bottom: 8px;
      margin-left: 10px;

      @include respond-to(mobile-l) {
        bottom: 2px;
      }
    }

  }

  .selector {
    position: relative;
  }

  .select {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;
    color: $cLightBlue;
    opacity: 0;

    @include respond-to(mobile-l) {
      padding-left: 10px;
    }
  }

</style>
