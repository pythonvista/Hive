<!-- TabComponent.vue -->
<template>
  <div class="flex items-center justify-between">
    <p class="font-medium text-base">
      <span class="font-bold">140</span> Listings
    </p>
    <div class="bg-slate-300 p-1 rounded-3xl flex items-center gap-0">
      <q-btn
        color="black"
        size="12px"
        flat
        icon="view_module"
        @click="switchView('grid')"
        :class="{ 'bg-slate-100 rounded-full': activeView === 'grid' }"
      ></q-btn>
      <q-btn
        color="black"
        size="12px"
        flat
        icon="list"
        @click="switchView('list')"
        :class="{ 'bg-slate-100 rounded-full': activeView === 'list' }"
      ></q-btn>
    </div>

    <div
      v-show="activeView === 'grid'"
      class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 houseGrid mt-6"
    >
      <div
        v-for="i in 6"
        :key="i"
        class="relative flex p-1 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl"
      >
        <div class="rounded-2xl relative overflow-hidden">
          <div class="absolute top-2 z-[1] right-0">
            <q-btn flat size="10px" color="red" icon="favorite"></q-btn>
          </div>
          <div class="absolute bottom-[14px] z-[1] left-2">
            <q-btn
              flat
              size="6px"
              color="red"
              icon="house"
              class="bg-slate-500 p-1 rounded-xl"
            ></q-btn>
          </div>
          <div class="absolute bottom-2 z-[1] right-0 price">
            <p
              class="text-[8px] sm:text-sm md:text-base text-white bg-slate-500 py-1 px-2 rounded-xl"
            >
              N 120k/year
            </p>
          </div>
          <img
            class="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-125"
            src="https://i.imgur.com/BA15PPk.jpg"
            alt=""
          />
        </div>
        <div class="w-full flex flex-col px-2 text-black py-1">
          <p class="font-bold text-[11px] md:text-base mt-2">Heritage Hostel</p>
          <div class="flex items-center gap-2 mt-1">
            <div class="flex items-center gap-1 flex-wrap">
              <q-btn round size="4px" outline color="red" icon="star"></q-btn>
              <p class="text-[10px] sm:text-sm md:text-base">4.9</p>
            </div>
            <div class="flex items-center gap-1 flex-wrap">
              <q-btn round size="4px" outline color="red" icon="map"></q-btn>
              <p class="text-[10px] sm:text-sm md:text-base">Iworoko Ekiti</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="activeView === 'list'"
      class="grid grid-cols-1 gap-6 mt-6 w-full"
    >
      <div
        v-for="i in 6"
        :key="i"
        class="relative flex h-[250px] p-1 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl"
      >
        <div class="rounded-2xl relative h-[75%] overflow-hidden">
          <div class="absolute top-2 z-[1] right-2">
            <q-btn round size="9px" outline color="red" icon="favorite"></q-btn>
          </div>
          <div class="absolute bottom-2 z-[1] left-2">
            <q-btn
              flat
              size="10px"
              color="red"
              icon="house"
              class="bg-slate-500 p-1 rounded-xl"
            ></q-btn>
          </div>
          <div class="absolute bottom-2 z-[1] right-2 price">
            <p
              class="text-xs sm:text-sm md:text-base text-white bg-slate-500 py-1 px-2 rounded-xl"
            >
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
          <div class="flex items-center justify-start gap-2 md:gap-4">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeView: "grid",
    };
  },
  methods: {
    switchView(view) {
      this.activeView = view;
    },
  },
};
</script>

<style scoped>
@media (max-width: 350px) {
  .houseGrid {
    grid-template-columns: 1fr !important;
  }
}
</style>
