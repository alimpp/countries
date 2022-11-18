<template>
  <div class="countries">
    <div class="container">
      <div class="filter-items-container">
        <div class="search-box-container">
          <i class="bi bi-search"></i>
          <input
            class="app-input-light"
            placeholder="Search for a country..."
            v-model="search"
            :class="watchMode === 'dark' ? 'app-input-dark' : 'app-input-light'"
          />
        </div>
        <div class="select-box-container">
          <appSelectBox />
        </div>
      </div>
      <appLoading v-if="loading" />
      <div class="all-countries" v-else>
        <div class="row">
          <div
            class="col-lg-3 d-flex justify-content-center"
            v-for="countries in allCountries"
            :key="countries.id"
          >
            <appCard
              class="mt-4"
              :name="countries.name.common"
              :population="countries.population"
              :region="countries.region"
              :subregion="countries.subregion"
              :image="countries.flags.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appSelectBox from "@/components/appSelectBox";
import appCard from "@/components/appCard";
import appLoading from "@/components/appLoading";
export default {
  data() {
    return {
      search: "",
      loading: false,
    };
  },
  components: { appSelectBox, appCard, appLoading },
  mounted() {
    this.loading = true;
    this.$store.dispatch("countries/featchCountries");
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  },
  computed: {
    allCountries() {
      const countries = this.$store.getters["countries/allCountries"];
      return countries.filter((country) => {
        return country.name.common.match(this.search);
      });
    },
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/fontSize.scss";
.filter-items-container {
  width: 100%;
  display: flex;
  margin: 20px 0;

  .search-box-container {
    width: 50%;
    display: flex;
    justify-content: start;
    display: flex;
    .bi {
      z-index: 1;
      margin: 8px 30px;
    }
    .app-input-light {
      position: absolute;
      width: 340px;
      height: 40px;
      padding: 0px 60px;
      font-size: $font-sm;
      border: none;
      background: var(--app-light);
      border-radius: 5px;
      outline: none;
      color: var(--app-text-gray);
    }
    .app-input-dark {
      background: var(--app-input-select-dark);
      color: var(--app-light);
    }
  }

  .select-box-container {
    width: 50%;
    display: flex;
    justify-content: end;
  }
}

.all-countries {
  width: 100%;
  height: 70vh;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0px 4px;
}
@media (max-width: 900px) {
  .filter-items-container {
    flex-direction: column;
    .search-box-container {
      width: 100%;
    }
    .select-box-container {
      justify-content: start;
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
