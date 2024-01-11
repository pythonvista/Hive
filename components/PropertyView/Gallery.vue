<template>
  <section class="py-3">
    <h2 class="text-2xl my-2 font-bold">Gallery</h2>
    <div class="grid grid-cols-3 gap-4 items-center justify-between py-3">
      <div>
        <img
          class="object-cover rounded-lg h-40"
          :src="galleryItems[0].src"
          alt=""
        />
      </div>
      <div v-if="galleryItems[1].type === 'video'" class="relative">
        <img
          class="object-cover rounded-lg h-40"
          :src="galleryItems[1].src"
          alt=""
        />
        <div class="overlay"></div>
        <div class="extra">
          <q-btn round size="9px" color="red" icon="play"></q-btn>
        </div>
      </div>
      <div
        v-if="galleryItems[2].type === 'image'"
        class="relative"
        @click="showAdditionalImages"
      >
        <img
          class="object-cover rounded-lg h-40"
          :src="galleryItems[2].src"
          alt=""
        />
        <div class="overlay"></div>
        <div class="extra">
          <p class="text-xl text-white">+{{ galleryItems[2].count }}</p>
        </div>
      </div>
    </div>
    <h2 class="text-2xl my-2 font-bold">Location</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      galleryItems: [
        { type: "image", src: "https://i.imgur.com/BA15PPk.jpg" },
        { type: "video", src: "https://i.imgur.com/BA15PPk.jpg" },
        { type: "image", src: "https://i.imgur.com/BA15PPk.jpg", count: 12 },
      ],
    };
  },
  methods: {
    showMoreImages() {},
  },
};
</script>

<style scoped>
.extra {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  cursor: pointer;
}
</style>
