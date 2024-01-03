<template>
    <div class=" py-3">
        <p class="text-2xl my-2 font-bold">Popular Locations</p>
        <swiper :slidesPerView="2" :spaceBetween="10" :modules="modules" class="mySwiper">
            <swiper-slide v-for="i in 20" :key="i" class="py-1">
                <div class="relative flex h-[240px] p-1 flex-col w-full overflow-hidden bg-gray-100 shadow group rounded-2xl">
                    <div class=" rounded-2xl  h-[83%]  overflow-hidden ">
                        <img class="object-contain w-full h-full transition-all duration-300 transform group-hover:scale-125"
                            src="https://i.imgur.com/v0A01uI.jpg" alt="" />
                    </div>
                    <div class="h-[17%] flex flex-col px-2 justify-center text-black text-left">
                        <p class="font-bold text-md">Iworoko</p>
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
