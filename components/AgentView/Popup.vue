<template>
  <transition name="slide" appear>
    <div class="fixed popup bottom-0 left-0 w-full z-[100000]" v-show="show">
      <div class="overlay h-[100vh] w-full flex justify-end items-end">
        <div
          class="bg-slate-100 rounded-t-3xl px-4 h-[550px] overflow-y-scroll"
        >
          <div class="flex items-center mt-8 mb-10">
            <q-btn
              round
              size="12px"
              outline
              color="red"
              @click="close()"
              icon="close"
            ></q-btn>
            <h2 class="text-xl text-center font-bold w-3/4">Agent Details</h2>
          </div>
          <div class="flex justify-between items-start">
            <img
              src="https://landingfoliocom.imgix.net/store/collection/niftyui/images/team/8/member-5.png"
              alt=""
              class="border border-solid border-gray-600 rounded-full h-16 w-16"
            />
            <div class="flex flex-col gap-1">
              <h2 class="text-lg font-semibold">Leslie Alexander</h2>
              <p class="text-xs font-medium">Rich Capital Properties LLC</p>
            </div>
            <div>
              <div
                class="flex items-center gap-2 bg-gray-200 rounded-xl px-2 py-1"
              >
                <q-btn round size="5px" outline color="red" icon="star"></q-btn>
                <span class="text-xs font-normal">4.9(9)</span>
              </div>
            </div>
          </div>
          <p class="text-sm font-normal text-slate-700 my-4">
            Here some list of the best and most Popular places around the
            property such as Restraurants, Bars, Lounges, Hotels, Schools and
            Public Places Here some list of the best and most Popular places
          </p>
          <p class="text-sm font-normal text-slate-700 my-4">
            Around the property such as Restraurants, Bars, Lounges, Hotels,
            Schools and Public Places Here some list of the best and most
            Popular places around the property such as Restraurants, Bars,
          </p>
          <div class="mb-4">
            <h2 class="text-xl font-semibold text-slate-600 mb-2">About Me</h2>
            <p
              class="text-sm font-normal text-slate-700 my-2 inline items-center"
            >
              Diane Richards is a third generation realtor and Iworoko Ekiti
              Native who lived in Iworoko since 2014. She guides her clients
              through....
              <span
                class="text-red-600 text-sm"
                @click="$router.push({ path: '/agents_profile' })"
                >More</span
              >
            </p>
          </div>
          <div class="mb-2">
            <h2 class="text-xl font-semibold text-slate-600">Highlights</h2>
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div
                class="border border-solid border-gray-400 flex gap-4 p-2 rounded-md shadow-sm"
              >
                <q-btn
                  size="15px"
                  outline
                  color="red"
                  flat
                  icon="house"
                  class="bg-slate-300 p-2 rounded-full"
                ></q-btn>
                <div class="flex flex-col">
                  <p class="text-[13px] font-medium text-slate-400">
                    Home Closed
                  </p>
                  <p class="text-[13px] font-bold text-slate-600">25</p>
                </div>
              </div>
              <div
                class="border border-solid border-gray-400 flex gap-4 p-2 rounded-md shadow-sm"
              >
                <q-btn
                  size="15px"
                  outline
                  color="red"
                  flat
                  icon="suitcase"
                  class="bg-slate-300 p-2 rounded-full"
                ></q-btn>
                <div class="flex flex-col">
                  <p class="text-[13px] font-medium text-slate-400">
                    Experience
                  </p>
                  <p class="text-[13px] font-bold text-slate-600">5+ Years</p>
                </div>
              </div>
              <div
                class="border border-solid border-gray-400 flex gap-4 p-2 rounded-md shadow-sm"
              >
                <q-btn
                  size="15px"
                  outline
                  color="red"
                  flat
                  icon="condos"
                  class="bg-slate-300 p-2 rounded-full"
                ></q-btn>
                <div class="flex flex-col">
                  <p class="text-[13px] font-medium text-slate-400">Condos</p>
                  <p class="text-[13px] font-bold text-slate-600">12+</p>
                </div>
              </div>
              <div
                class="border border-solid border-gray-400 flex gap-4 p-2 rounded-md shadow-sm"
              >
                <q-btn
                  size="15px"
                  outline
                  color="red"
                  flat
                  icon="apartment"
                  class="bg-slate-300 p-2 rounded-full"
                ></q-btn>
                <div class="flex flex-col">
                  <p class="text-[13px] font-medium text-slate-400">
                    Apartments
                  </p>
                  <p class="text-[13px] font-bold text-slate-600">10+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: ["show", "close"],
};
</script>
<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.2);
}
.bar {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.popup.slide-enter-active,
.popup.slide-leave-active {
  transition: transform 0.4s linear;
}

.popup.slide-leave-to,
.popup.slide-enter-from {
  transform: translateY(100%);
}
</style>
