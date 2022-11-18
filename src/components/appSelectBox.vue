<template>
  <div>
    <select
      v-model="filterValue"
      @change="activeFilter"
      class="form-select select-box-light"
      style="border: none; outline: none; height: 40px"
      :class="watchMode === 'dark' ? 'select-box-dark ' : 'form-select' "
    >
      <option selected>Filter by region...</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return{
      filterValue : ''
    }
  } ,
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  methods: {
    activeFilter(){
      return this.$store.dispatch('countries/filterCountries' , this.filterValue)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/fontSize.scss";
.select-box-light{
    font-size: $font-sm;
}
.select-box-dark {
  background: var(--app-input-select-dark);
  color: var(--app-light);
}
</style>
