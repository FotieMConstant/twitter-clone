<template>
  <div id="app">
    <div class="flex justify-between">
      <LeftSideMenu />
      <router-view />
      <RightSideMenu />
    </div>
  </div>
</template>
<script>
import LeftSideMenu from "@/components/LeftSideMenu.vue";
import RightSideMenu from "@/components/RightSideMenu.vue";

export default {
  components: {
    LeftSideMenu,
    RightSideMenu
  }
};
</script>
<style scoped></style>
