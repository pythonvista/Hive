<template>
  <section class="px-3 pt-3 pb-5 ">
    <utils-location-hero></utils-location-hero>
    <div class="flex flex-col py-4 gap-3">
      <p class="text-xl font-semibold text-slate-600 ">Exclusive From Iworoko</p>
      <p>Our recommended properties exclusive for you</p>
      <div class="w-full ">
        <label for="" class="sr-only"> Search </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>

          <input type="search" name="" id=""
            class="border block w-full py-4 pl-10 bg-gray-200 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            placeholder="Search here" />
        </div>
      </div>
    </div>
    <utils-agents-slider></utils-agents-slider>
    <utils-featured-grid></utils-featured-grid>
    <utils-agency-slider></utils-agency-slider>
  </section>
</template>

<script>
export default {
  data: () => ({}),
  setup() {
    definePageMeta({
      layout: "home",
    });
  },
};
</script>

<style scoped>
.price {
  background: rgba(34, 34, 34, 0.5);
  padding: 5px 10px;
  border-radius: 10px;
}

@media (max-width: 350px) {
  .houseGrid {
    grid-template-columns: 1fr !important;
  }
}
</style>



