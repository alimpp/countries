<template>
  <div class="app" :class="watchMode === 'dark' ? 'dark' : 'light'">
    <appHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "@/components/appHeader";
export default {
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  mounted() {
    return this.$router.push('/countries')
  },
  components: {
    appHeader,
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100vh;
}
.light {
  background: var(--app-base-light);
  color: #505050;
  transition: 0.5s;
}
.dark {
  background: var(--app-base-dark);
  color: #fff;
  transition: 0.5s;
}
</style>
