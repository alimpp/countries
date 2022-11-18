<template>
  <div class="app-detail-countries application-animation">
    <div class="container">
      <div class="mt-5 d-flex">
        <router-link
          class="back-light"
          :class="watchMode === 'dark' ? 'back-dark' : 'back-light'"
          to="/countries"
          ><i class="bi bi-arrow-left px-2"></i> Back</router-link
        >
      </div>
      <appLoading v-if="loading" />
      <div
        v-else
        class="single-countries application-animation"
        v-for="country in detailCountries"
        :key="country.id"
      >
        <div class="image-container">
          <img :src="country.flags.png" alt="image" />
        </div>
        <div class="detail-text-container">
          <div class="detail-left mt-5">
            <span>{{ country.name.common }}</span>
            <div class="d-flex pt-4">
              <h6>Native Name :</h6>
              <p class="px-1">{{ country.name.common }}</p>
            </div>
            <div class="d-flex">
              <h6>Population :</h6>
              <p class="px-1">{{ country.population }}</p>
            </div>
            <div class="d-flex">
              <h6>Region :</h6>
              <p class="px-1">{{ country.region }}</p>
            </div>
            <div class="d-flex">
              <h6>Sub Region :</h6>
              <p class="px-1">{{ country.subregion }}</p>
            </div>
          </div>
          <div class="detail-right">
            <div class="d-flex">
              <h6>Status :</h6>
              <p class="px-1">{{ country.status }}</p>
            </div>
            <div class="d-flex">
              <h6>Area :</h6>
              <p class="px-1">{{ country.area }}</p>
            </div>
            <div class="d-flex">
              <h6>Fifa :</h6>
              <p class="px-1">{{ country.fifa }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appLoading from "@/components/appLoading";
export default {
  data() {
    return {
      countriess: [],
      country: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  components: { appLoading },
  computed: {
    detailCountries() {
      this.countriess = this.$store.getters["countries/allCountries"];
      this.country = this.countriess.filter(
        (c) => c.name.common == this.$route.params.id
      );
      return this.country;
    },
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/fontSize.scss";
.back-light {
  padding: 5px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--app-text-dark);
  box-shadow: 1px 1px 1px 1px #c9c8db;
  background: var(--app-light);
}
.back-dark {
  background: var(--app-back-btn-dark);
  color: var(--app-text-light);
  box-shadow: 1px 1px #3b3b3f;
}
.single-countries {
  width: 100%;
  height: 60vh;
  display: flex;
  .image-container {
    width: 50%;
    img {
      width: 90%;
      height: 250px;
      margin: 20px 0;
    }
  }
  .detail-text-container {
    width: 50%;
    display: flex;
    .detail-left {
      display: flex;
      flex-direction: column;
      height: 250px;
      span {
        font-size: $font-xl;
        font-weight: 700;
      }
      h6 {
        font-size: $font-lg;
        font-weight: 500;
      }
      p {
        font-size: $font-sx;
        font-weight: 300;
      }
    }
    .detail-right {
      width: 50%;
      margin-top: 102px;
      margin-left: 80px;
      h6 {
        font-size: $font-lg;
        font-weight: 500;
      }
      p {
        font-size: $font-sx;
        font-weight: 300;
      }
    }
  }
}
@media (max-width: 900px) {
  .single-countries {
    flex-direction: column;
    margin-top: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    .image-container {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .detail-text-container {
      width: 100%;
      flex-direction: column;
      .detail-right {
        margin-top: 0px;
        margin-left: 0px;
      }
    }
  }
}
</style>
