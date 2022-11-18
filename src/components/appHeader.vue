<template>
  <div class="app-header-light" :class="watchMode === 'dark' ? 'app-header-dark' : 'app-header-light'">
    <div class="app-title-container">
      <span>Where in the world ?</span>
    </div>
    <div class="app-mode-container">
      <changeMode />
    </div>
  </div>
</template>

<script>
import changeMode from "@/components/changeMode";
export default {
  components: {
    changeMode,
  },
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables/fontSize.scss';
.app-header-light {
  width: 100%;
  height: 10vh;
  display: flex;
  background: var(--app-light);
  padding: 0 50px;
  box-shadow: 1px 1px 1px 1px #cfcfcf;
  span{
    font-size: $font-lg;
    font-weight: 700;
    color: var(--app-text-dark);
  }
  .app-title-container {
    width: 50%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .app-mode-container {
    width: 50%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: end;
  }
}
.app-header-dark {
  background: var(--app-header-dark);
  transition: 0.5s;
  box-shadow: 0px 0px 0px 0px var(--app-header-dark);
  span{
    color: var(--app-text-light);
  }
}

@media (max-width: 900px) {
    .app-header-light{
      padding: 0 10px;
    }
  }
</style>
