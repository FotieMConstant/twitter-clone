<template>
  <div
    class="LeftSideMenu w-3/12 pl-5 pr-4 pt-1 border-l h-screen fixed right-0"
  >
    <div>
      <div class="flex space-x-4 bg-tranparentGrayBg px-6 py-2 rounded-full">
        <img class="w-5" src="@/assets/svg/search.svg" alt="" />
        <input
          class="focus:outline-none bg-tranparentGrayBg text-base"
          type="text"
          placeholder="Search Twitter"
          name=""
          id=""
        />
      </div>
      <div class="mt-3 bg-trendingBg rounded-xl pt-3">
        <div class="flex justify-between px-4">
          <div class="font-bold text-lg">Trends for you</div>
          <div class="p-2 hover:bg-gray rounded-full cursor-pointer">
            <img class="w-5" src="@/assets/svg/setting.svg" alt="" />
          </div>
        </div>
        <div class="mt-6">
          <div class="px-4 py-2 cursor-pointer hover:bg-hoverGrayTrendingBg">
            <div class="flex justify-between">
              <div>
                <div class="text-xs text-gray-500">
                  Holidays · Trending
                </div>
                <div class="font-bold text-base">Merry Xmas</div>
                <div class="text-xs text-gray-500">373K Tweets</div>
              </div>
              <div>
                <img class="w-5" src="@/assets/svg/threedots.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="px-4 py-2 cursor-pointer hover:bg-hoverGrayTrendingBg">
            <div class="flex justify-between">
              <div>
                <div class="text-xs text-gray-500">Technology · Trending</div>
                <div class="font-bold text-base">JavaScript</div>
                <div class="text-xs text-gray-500">35.6K Tweets</div>
              </div>
              <div>
                <img class="w-5" src="@/assets/svg/threedots.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="px-4 py-2 cursor-pointer hover:bg-hoverGrayTrendingBg">
            <div class="flex justify-between">
              <div>
                <div class="text-xs text-gray-500">Football · Trending</div>
                <div class="font-bold text-base">AFCON</div>
                <div class="text-xs text-gray-500">9,786 Tweets</div>
              </div>
              <div>
                <img class="w-5" src="@/assets/svg/threedots.svg" alt="" />
              </div>
            </div>
          </div>
          <!-- more -->
          <button
            class="text-twitterBlue rounded-b-xl text-sm w-full text-left px-4 cursor-pointer py-3 hover:bg-hoverGrayTrendingBg"
          >
            Show more
          </button>
        </div>
      </div>
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
