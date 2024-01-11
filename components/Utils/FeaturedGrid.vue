<template>
  <section class="">
    <p class="text-2xl my-2 font-bold">Top Apartments</p>
    <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 houseGrid">
      <div
        v-for="i in 8"
        :key="i"
        class="relative flex h-[250px] p-1 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl"
      >
        <div
          class="rounded-2xl relative h-[75%] overflow-hidden"
          @click="$router.push({ path: '/view_property' })"
        >
          <div class="absolute top-2 z-[1] right-2">
            <q-btn round size="9px" outline color="red" icon="favorite"></q-btn>
          </div>
          <div class="absolute bottom-2 z-[1] right-2 price">
            <p class="text-xs sm:text-sm md:text-base text-white">
              N 120k/year
            </p>
          </div>
          <img
            class="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
            src="https://i.imgur.com/BA15PPk.jpg"
            alt=""
          />
        </div>
        <div
          class="h-[25%] w-full flex flex-col px-2 justify-between text-black text-left py-1"
        >
          <p class="font-bold text-sm md:text-base">Joy Heritage Hostel</p>
          <div
            class="flex items-center justify-between sm:justify-start sm:gap-2 md:gap-4"
          >
            <div class="flex items-center gap-1">
              <q-btn round size="6px" outline color="red" icon="star"></q-btn>
              <p class="text-xs sm:text-sm md:text-base">4.9</p>
            </div>
            <div class="flex items-center gap-1">
              <q-btn round size="6px" outline color="red" icon="map"></q-btn>
              <p class="text-xs sm:text-sm md:text-base">Iworoko Ekiti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
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
