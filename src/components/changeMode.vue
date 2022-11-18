<template>
  <div>
    <button
      class="light-mode-btn"
      v-if="watchMode === 'light'"
      @click="darkMode"
    >
      <i class="bi bi-moon-stars px-1"></i> Dark Mode
    </button>
    <button class="dark-mode-btn" @click="lightMode" v-else>
      <i class="bi bi-sun px-1"></i> Light Mode
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  methods: {
    darkMode() {
      return this.$store.commit("theme/darkMode", "dark");
    },
    lightMode() {
      return this.$store.commit("theme/lightMode", "light");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/fontSize.scss";
.light-mode-btn {
  border: none;
  outline: none;
  background: none;
  padding: 5px 5px;
  transition: 0.5s;
  font-size: $font-sm;
  font-weight: 400;
}
.dark-mode-btn {
  border: none;
  outline: none;
  background: none;
  color: var(--app-light);
  padding: 5px 5px;
  transition: 0.5s;
  font-size: $font-sm;
  font-weight: 400;
}
</style>
