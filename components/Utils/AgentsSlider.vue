<template>
    <div class=" py-3">
        <p class="text-2xl my-2 font-bold">Top Agents</p>
        <swiper :slidesPerView="2" :spaceBetween="10" :modules="modules" class="mySwiper">
            <swiper-slide v-for="i in 20" :key="i" class="py-1">
                <div
                    class="relative flex justify-center items-center  px-2 py-7 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl">
                    <q-avatar size="8rem">
                        <img :src="`https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-${i}.png`">
                    </q-avatar>
                    <div class=" flex flex-col px-2 py-2 justify-center text-black text-left">
                        <p class="font-bold text-md">Bayo Adeyemi</p>
                        <div class="flex justify-center items-center">
                           
                                <q-rating v-model="model" max="5" size="1em" color="blue" icon="star_border"
                                    icon-selected="star" icon-half="star_half" no-dimming />
                        
                        </div>
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
