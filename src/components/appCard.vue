<template>
    <router-link
      class="app-card-light application-animation"
      :class="watchMode === 'dark' ? 'app-card-dark ' : 'app-card-light '"
      :to="`/countries/${name}`"
    >
      <img :src="image" alt="image" />
      <span class="px-4 pt-3">{{ name }}</span>
      <div class="text-container px-4 pt-3">
        <h6>Population :</h6>
        <p class="px-1">{{ population }}</p>
      </div>
      <div class="text-container px-4">
        <h6>Region :</h6>
        <p class="px-1">{{ region }}</p>
      </div>
      <div class="text-container px-4">
        <h6>Subregion :</h6>
        <p class="px-1">{{ subregion }}</p>
      </div>
    </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    population: {
      type: String,
      default: "",
    },
    region: {
      type: String,
      default: "",
    },
    subregion: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
  },
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/fontSize.scss";
.app-card-light {
  width: 90%;
  display: flex;
  flex-direction: column;
  background: var(--app-light-card);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;
  text-decoration: none;
  color: var(--app-text-dark);
  cursor: pointer;
  img {
    width: 100%;
    height: 150px;
  }
  span {
    font-size: $font-lg;
    font-weight: 700;
  }
  .text-container {
    display: flex;
    h6 {
      font-size: $font-sm;
      font-weight: 500;
    }
    p {
      font-size: $font-xs;
      font-weight: 400;
    }
  }
}
.app-card-dark {
  background: var(--app-card-dark);
  color: var(--app-light);
  transition: 0.5s;
}
</style>
