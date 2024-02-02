<template>
  <section class="bg-white px-2 py-1 rounded-md">
    <h2 class="text-2xl my-2 font-bold">Description</h2>
    <div class="flex items-center justify-between py-3">
      <div v-for="item in items" :key="item.label">
        <div class="flex items-center gap-1">
          <q-btn
            square
            size="13px"
            color="black"
            flat
            round
            :icon="item.icon"
          ></q-btn>
          <div class="flex flex-col">
            <span class="text-gray-500 text-sm font-medium">{{
              item.label
            }}</span>
            <span class="text-xs font-bold">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-2xl my-2 font-bold">About</h2>
    <p class="text-base">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ullam libero
      nemo eum eaque odit nulla? Vero culpa corporis dolorem repellendus eius,
      dignissimos maiores? Illum totam quis, libero repudiandae atque inventore,
      quod optio suscipit laboriosam
    </p>
    <p class="my-2 text-red-400">See more</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Bathroom", icon: "bathtub", value: "2 Bathub" },
        { label: "Bedroom", icon: "bed", value: "3 Rooms" },
        { label: "Square", icon: "view_module", value: "1,880ft" },
      ],
    };
  },
};
</script>
