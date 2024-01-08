<template>
    <div class="mt-4 py-3">
       <div class="flex justify-between items-center">
              <p class="font-bold text-lg text-slate-600">Popular Agencies</p>
              <div>
                 <q-btn color="blue" size="18px" flat icon="list"></q-btn>
              </div>
     

            </div>
        <swiper :slidesPerView="1" :spaceBetween="10" :modules="modules" class="mySwiper">
            <swiper-slide v-for="i in 20" :key="i" class="py-1">
                <div
                    class="relative flex h-[140px]  p-1 flex-row w-full overflow-hidden bg-gray-100 shadow group rounded-2xl">
                    <div class=" rounded-2xl flex-2 w-[50%]  h-full  overflow-hidden ">
                        <img class="object-cover shadow-md  transition-all duration-300 transform group-hover:scale-125"
                            src="https://i.imgur.com/ks3YM8W.jpg" alt="" />
                    </div>
                    <div class="h-full w-[50%] flex flex-1 flex-col py-2 px-2 justify-center gap-1 text-black text-left">
                        <p class="font-bold text-md">Jomav Homes</p>
                        <div class="flex justify-start items-center">
                            <q-rating v-model="model" max="5" size="1em" color="blue" icon="star_border"
                                icon-selected="star" icon-half="star_half" no-dimming />
                        </div>
                        <div>
                            <q-icon name="location_on"></q-icon> <span class="text-sm">Ado Adebayo</span>
                        </div>
                        <p class="text-sm">100+ Estates</p>
                        
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import Swiper, { Pagination } from 'swiper';
// Import Swiper Vue.js components


// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';



export default {
    components: {
        Swiper,
        // SwiperSlide,
    },
    data: () => ({
        model: 4
    }),
    setup() {
        return {
            modules: [Pagination],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
