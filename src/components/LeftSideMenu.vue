<template>
  <div class="LeftSideMenu w-3/12 px-8 pt-3 border-r h-screen">
    <div>
      <!-- twitter logo -->
      <router-link to="/">
        <img
          class="w-14 p-1 hover:bg-lightBlue rounded-full cursor-pointer"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
          alt=""
        />
      </router-link>
      <!-- / twitter logo -->
    </div>
    <div class="mt-2">
      <button
        class="flex text-xl font-bold pl-4 w-40 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>Home</div>
      </button>
      <button
        class="flex text-xl pl-4 w-40 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>Explore</div>
      </button>
      <button
        class="flex text-xl pl-4 w-52 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>Notifications</div>
      </button>
      <button
        class="flex text-xl pl-4 w-48 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>Messages</div>
      </button>
      <button
        class="flex text-xl pl-4 w-48 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>Bookmarks</div>
      </button>
      <button
        class="flex text-xl pl-4 w-32 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>List</div>
      </button>
      <button
        class="flex text-xl pl-4 w-40 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>Profile</div>
      </button>
      <button
        class="flex text-xl pl-4 w-36 space-x-5 py-3 hover:bg-gray transition delay-75 duration-200 ease-in-out rounded-full"
      >
        <div>icon</div>
        <div>More</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideMenu"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
