<template>
  <section class="pt-12">
    <div class="mb-4">
      <h2 class="text-3xl font-medium text-center">Profile</h2>
    </div>
    <div class="max-w-xs mx-auto w-full">
      <img
        src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-5.png"
        alt=""
        class="border border-solid border-gray-600 rounded-full mx-auto block h-[100px] w-[30%]"
      />
    </div>
    <div>
      <h2 class="font-semibold text-lg md:text-2xl text-center mt-4 mb-2">
        Amanda
      </h2>
      <p
        class="font-normal text-slate-500 tracking-wide text-xs md:text-base text-center"
      >
        amanda23@gmail.com
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4 items-center my-4">
      <div
        class="border border-solid border-gray-300 text-center rounded-lg p-2 h-full"
      >
        <p class="font-bold text-slate-700 text-sm mb-[2px]">5.0</p>
      </div>
      <div
        class="border border-solid border-gray-300 text-center rounded-lg p-2 h-full"
      >
        <p class="font-bold text-slate-700 text-sm mb-[2px]">236</p>
        <p class="font-medium text-slate-500 text-sm m-0">Reviews</p>
      </div>
      <div
        class="border border-solid border-gray-300 text-center rounded-lg p-2 h-full"
      >
        <p class="font-bold text-slate-700 text-sm mb-[2px]">112</p>
        <p class="font-medium text-slate-500 text-sm m-0">sold</p>
      </div>
    </div>
    <agent-view-agent-tab></agent-view-agent-tab>
    <div class="fixed bottom-0 left-0 w-full z-10">
      <!-- <button class="bg-blue-500 py-3 text-white text-xl w-full rounded-3xl">
        Start Chat
      </button> -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
