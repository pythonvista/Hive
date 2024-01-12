<template>
  <section class="py-3">
    <div class="h-80   overflow-hidden relative">
      <img
        v-for="(image, index) in images"
        :key="index"
        :class="{
          'opacity-100': currentIndex === index,
          'opacity-0': currentIndex !== index,
        }"
        class="rounded-lg h-full shadow-lg absolute inset-0 transition-opacity duration-300"
        :src="image.src"
        alt=""
      />
      <div class="bg-slate-300 border-2 border-blue-300 border-solid absolute bottom-8 left-2 px-3 py-1 shadow-md rounded-md">
        <p>Grace Hostel</p>
      </div>
      <div class="pagination">
        <span
          v-for="(image, index) in images"
          :key="index"
          @click="changeSlide(index)"
          :class="{ active: currentIndex === index }"
          class="dot"
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        { src: "https://i.imgur.com/YfLrbyv.jpg" },
        { src: "https://i.imgur.com/BA15PPk.jpg" },
        { src: "https://i.imgur.com/YfLrbyv.jpg" },
        { src: "https://i.imgur.com/BA15PPk.jpg" },
      ],
      intervalId: null,
    };
  },
  mounted() {
    this.intervalId = setInterval(() => {
      const nextIndex = (this.currentIndex + 1) % this.images.length;
      this.changeSlide(nextIndex);
    }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dot {
  width: 15px;
  height: 3px;
  background-color: #ccc;
  margin: 0 2px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.dot.active {
  background-color: red;
  width: 24px;
}
</style>
