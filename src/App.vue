<template>
  <div id="app">
    <div class="flex ">
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
<style>
.__headerBgBlur {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
}
</style>
