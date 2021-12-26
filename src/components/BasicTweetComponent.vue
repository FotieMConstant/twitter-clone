<template>
  <div class="px-6 py-4 border-b hover:bg-hoverGrayTrendingBg">
    <div class="flex space-x-2">
      <div>
        <img
          class="w-12 rounded-full"
          src="https://avatars.githubusercontent.com/u/42372656?v=4"
          alt=""
        />
      </div>
      <div>
        <div class="flex space-x-1">
          <div class="font-bold text-base">
            fotiecodes
          </div>
          <div class="text-gray-400 text-base">
            @fotie_codes
          </div>
          <div class="text-gray-400 text-base">·</div>
          <div class="text-gray-400 text-base">
            6m
          </div>
        </div>
        <div>
          Hi, setting up my twitter clone account! I hope you love it and have a
          great time using the app.
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-3 mx-10">
      <div class="flex">
        <div class="p-2 hover:bg-lightBlue rounded-full cursor-pointer">
          <img class="w-5" src="@/assets/svg/comment.svg" alt="" />
        </div>
        <div class="my-auto text-gray-500">1</div>
      </div>
      <div class="flex">
        <div class="p-2 hover:bg-lightBlue rounded-full cursor-pointer">
          <img class="w-5" src="@/assets/svg/retweet.svg" alt="" />
        </div>
        <div class="my-auto text-gray-500">1</div>
      </div>
      <div class="flex">
        <div>
          <HeartButton />
        </div>
        <div class="my-auto text-gray-500">4</div>
      </div>
      <div class="p-2 hover:bg-lightBlue rounded-full cursor-pointer">
        <img class="w-5" src="@/assets/svg/share.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import HeartButton from "@/components/HeartButton.vue";
export default {
  name: "BasicTweetComponent",
  components: {
    HeartButton
  }
};
</script>

<style></style>
