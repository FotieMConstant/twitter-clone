<template>
  <div class="home w-6/12 h-screen mx-auto">
    <div class="__headerBgBlur cursor-pointer top-0 fixed w-6/12">
      <div class="flex justify-between mx-3.5 my-3">
        <div class="text-black font-bold text-xl my-auto">
          Latest Tweets
        </div>
        <div class="p-2 hover:bg-gray rounded-full">
          <img class="w-5" src="@/assets/svg/stars.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="py-6 mt-12">
      <div class="px-6">
        <div class="flex space-x-3">
          <div>
            <img
              class="w-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/42372656?v=4"
              alt=""
            />
          </div>
          <div class="w-full">
            <textarea
              class="w-full focus:outline-none text-lg py-2"
              placeholder="What is happening?"
              style="resize: none"
            ></textarea>
          </div>
        </div>
        <div class="ml-12">
          <button class="text-twitterBlue flex space-x-1">
            <div class="my-auto">
              <img class="w-4" src="@/assets/svg/earth.svg" alt="" />
            </div>
            <div class="text-sm font-bold">Everyone can reply</div>
          </button>
          <div class="border-b my-4"></div>
          <div class="flex justify-between">
            <div class="flex">
              <div
                class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
              >
                <img class="w-5" src="@/assets/svg/picture.svg" alt="" />
              </div>
              <div
                class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
              >
                <img class="w-5" src="@/assets/svg/gif.svg" alt="" />
              </div>
              <div
                class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
              >
                <img class="w-5" src="@/assets/svg/poll.svg" alt="" />
              </div>
              <div
                class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
              >
                <img class="w-5" src="@/assets/svg/emoji.svg" alt="" />
              </div>
              <div
                class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
              >
                <img class="w-5" src="@/assets/svg/calender.svg" alt="" />
              </div>
              <div
                class="my-auto p-2 hover:bg-lightBlue rounded-full cursor-pointer"
              >
                <img class="w-5" src="@/assets/svg/location.svg" alt="" />
              </div>
            </div>
            <button
              class="bg-twitterBlue hover:bg-twitterBlueHovered transition duration-500 text-white rounded-full font-bold py-2 px-4"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
      <div class="border-b mt-4"></div>
      <div>
        <BasicTweetComponent v-for="item in 20" :key="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BasicTweetComponent from "@/components/BasicTweetComponent.vue";

export default {
  name: "Home",
  components: {
    BasicTweetComponent
  }
};
</script>
