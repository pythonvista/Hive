<template>
  <div ref="swiper" class="swiper">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div
        v-for="(n, index) in accounts"
        :key="index"
        class="swiper-slide gap-2 bg-white border-2 border-solid border-[#6f64f0] boder category_items grid-cols-1 card shadow-lg"
      >
        <lord-icon
          :src="'https://cdn.lordicon.com/' + n.avatar"
          trigger="loop"
          colors="primary:#121331,secondary:#6f64f0"
          style="width: 150px; height: 150px"
        >
        </lord-icon>
        <p class="text-2xl font-bold text-[#6f64f0]">{{ n.title }}</p>
        <p class="text-xs mx-3 font-medium text-center">{{ n.desc }}</p>
        <div class="flex p-3 justify-center items-center gap-3">
          <q-btn color="#6f64f0" class="w-full rounded-lg bg-[#6f64f0]"
            >Login as {{ n.title }}</q-btn
          >
          <q-btn color="green" class="w-full" outline
            >Register as {{ n.title }}</q-btn
          >
        </div>
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->

    <!-- If we need scrollbar -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
// Import Swiper Vue.js components
import Swiper, { EffectCards } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';

export default {
  components: {},
  data: () => ({
    accounts: [
      {
        title: 'USER',
        avatar: 'xzalkbkz.json',
        desc: ' Discover a wide range of housing options, from apartments and houses to hotels and vacation rentals, all at your fingertips. Say goodbye to the stress of finding the perfect place to stay',
      },
      {
        title: 'AGENTS',
        avatar: 'kndkiwmf.json',
        desc: 'Streamline your rental or sales process with our user-friendly interface, and reach a wider audience of potential tenants or buyers',
      },
      {
        title: 'AGENCY',
        avatar: 'rdfmytjv.json',
        desc: 'The ultimate tool for real estate agencies. Simplify your property management and rental operations with our comprehensive platform',
      },
      {
        title: 'LANDLORD',
        avatar: 'ajmsjtcp.json',
        desc: ' From listing your properties to screening tenants and collecting rent, our app simplifies every step of the landlord journey',
      },
    ],
  }),
  setup() {
    return {
      modules: [EffectCards],
    };
  },
  mounted() {
    new Swiper(this.$refs.swiper, {
      // configure Swiper to use modules
      modules: [EffectCards],
      effect: 'cards',
    });
  },
};
</script>

<style scoped>
.swiper {
  width: 75%;
  height: 60vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
