<template>
  <div class="LeftSideMenu w-3/12 px-8 pt-0.5 border-r h-screen fixed">
    <div class="ml-0.5">
      <!-- twitter logo -->
      <router-link to="/">
        <div class="p-2.5 w-12 hover:bg-lightBlue rounded-full cursor-pointer">
          <img class="w-8" src="@/assets/svg/logo.svg" alt="" />
        </div>
      </router-link>
      <!-- / twitter logo -->
    </div>
    <div class="mt-2 space-y-1">
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
    <div class="mt-3">
      <button
        class="bg-twitterBlue hover:bg-twitterBlueHovered transition duration-500 text-white w-56 rounded-full font-bold py-4"
      >
        Tweet
      </button>
    </div>
    <div class="mt-10">
      <div
        class="flex cursor-pointer justify-between px-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div class="flex space-x-2">
          <div>
            <img
              class="w-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/42372656?v=4"
              alt=""
            />
          </div>
          <div>
            <div class="font-bold">fotiecode</div>
            <div class="text-gray-500 text-sm">@fotie_codes</div>
          </div>
        </div>
        <div class="my-auto">
          <img class="w-5" src="@/assets/svg/threedots.svg" alt="" />
        </div>
      </div>
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
