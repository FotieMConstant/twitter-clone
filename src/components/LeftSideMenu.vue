<template>
  <div class="LeftSideMenu w-3/12 px-8 pt-3 border-r h-screen">
    <div>
      <!-- twitter logo -->
      <router-link to="/">
        <img
          class="w-12 p-2 hover:bg-lightBlue rounded-full cursor-pointer"
          src="@/assets/svg/logo.svg"
          alt=""
        />
      </router-link>
      <!-- / twitter logo -->
    </div>
    <div class="mt-2">
      <button
        class="flex text-xl font-bold pl-4 w-40 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>
          <img class="w-7" src="@/assets/svg/home.svg" alt="" />
        </div>
        <div>Home</div>
      </button>
      <button
        class="flex text-xl pl-4 w-40 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div><img class="w-7" src="@/assets/svg/explore.svg" alt="" /></div>
        <div>Explore</div>
      </button>
      <button
        class="flex text-xl pl-4 w-52 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>
          <img class="w-7" src="@/assets/svg/notifications.svg" alt="" />
        </div>
        <div>Notifications</div>
      </button>
      <button
        class="flex text-xl pl-4 w-48 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div><img class="w-7" src="@/assets/svg/messages.svg" alt="" /></div>
        <div>Messages</div>
      </button>
      <button
        class="flex text-xl pl-4 w-48 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div><img class="w-7" src="@/assets/svg/bookmarks.svg" alt="" /></div>
        <div>Bookmarks</div>
      </button>
      <button
        class="flex text-xl pl-4 w-32 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div><img class="w-7" src="@/assets/svg/list.svg" alt="" /></div>
        <div>List</div>
      </button>
      <button
        class="flex text-xl pl-4 w-40 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div><img class="w-7" src="@/assets/svg/profile.svg" alt="" /></div>
        <div>Profile</div>
      </button>
      <button
        class="flex text-xl pl-4 w-36 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div><img class="w-7" src="@/assets/svg/more.svg" alt="" /></div>
        <div>More</div>
      </button>
    </div>
  </div>
</template>

<script>
// import Home from "@/assets/svg/home.svg";
export default {
  name: "LeftSideMenu",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
