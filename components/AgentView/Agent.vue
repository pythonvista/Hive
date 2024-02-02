<template>
  <section class="pt-20 pb-5">
    <div class="mb-2">
      <h2 class="text-2xl font-medium">Top Estate Agents</h2>
      <p class="text-base font-normal text-slate-500 my-2">
        Find the best recommended place to live
      </p>
    </div>
    <div
      class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 houseGrid mt-10"
    >
      <div
        v-for="(agent, index) in agents"
        @click="OpenM"
        :key="index"
        class="relative flex gap-2 pt-10 pb-4 px-2 flex-col w-full overflow-hidden bg-slate-100 shadow group rounded-3xl"
      >
        <p
          class="absolute top-4 left-3 border border-solid px-[6px] py-[1.5px] bg-red-400 text-white rounded-md text-sm"
        >
          {{ index + 1 }}
        </p>
        <div class="relative overflow-hidden px-1">
          <img
            class="w-[110px] h-[110px] mx-auto block rounded-full border-4 border-solid border-white"
            :src="agent.imageUrl"
            :alt="agent.name"
          />
        </div>
        <div class="w-full flex flex-col justify-end text-black">
          <p class="font-medium text-base text-center py-2">
            {{ agent.name }}
          </p>
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <div class="flex items-center gap-1">
              <q-btn round size="6px" outline color="red" icon="star"></q-btn>
              <p class="text-xs md:text-base">{{ agent.rating }}</p>
            </div>
            <div class="flex items-center gap-1">
              <q-btn round size="6px" outline color="red" icon="home"></q-btn>
              <p class="text-xs md:text-base">
                <span class="font-bold">{{ agent.sold }}</span> sold
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- agent details popup -->
    <agent-view-popup :close="Close" :show="show"></agent-view-popup>
  </section>
</template>

<script>
export default {
  methods: {
    OpenM() {
      this.show = !this.show;
    },
    Close() {
      this.show = !this.show;
    },
  },
  data() {
    return {
      show: false,
      agents: [
        {
          name: "Amanda",
          imageUrl: "https://i.imgur.com/BA15PPk.jpg",
          rating: "4.9",
          sold: "112",
        },
        {
          name: "Anderson",
          imageUrl: "https://i.imgur.com/BA15PPk.jpg",
          rating: "4.9",
          sold: "112",
        },
        {
          name: "Samantha",
          imageUrl: "https://i.imgur.com/BA15PPk.jpg",
          rating: "4.9",
          sold: "112",
        },
        {
          name: "Andrew",
          imageUrl: "https://i.imgur.com/BA15PPk.jpg",
          rating: "4.9",
          sold: "112",
        },
        {
          name: "Micheal",
          imageUrl: "https://i.imgur.com/BA15PPk.jpg",
          rating: "4.9",
          sold: "112",
        },
        {
          name: "Tobi",
          imageUrl: "https://i.imgur.com/BA15PPk.jpg",
          rating: "4.9",
          sold: "112",
        },
      ],
    };
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
