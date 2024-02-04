<!-- TabComponent.vue -->
<template>
  <div>
    <div
      class="grid grid-cols-2 items-center w-full bg-slate-200 p-[6px] rounded-3xl justify-between"
    >
      <button
        @click="switchTab(1)"
        :class="{
          'bg-white': activeTab === 1,
          'py-[6px]': activeTab === 1,
          'rounded-2xl': activeTab === 1,
          'text-sm': activeTab === 1,
        }"
      >
        Listing
      </button>
      <button
        @click="switchTab(2)"
        :class="{
          'bg-white': activeTab === 2,
          'py-[6px]': activeTab === 2,
          'rounded-2xl': activeTab === 2,
          'text-sm': activeTab === 2,
        }"
      >
        History
      </button>
    </div>
    <div class="tab-content my-10">
      <div v-if="activeTab === 1">
        <agent-view-agent-property-tab></agent-view-agent-property-tab>
      </div>
      <div v-if="activeTab === 2">History Content</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
    };
  },
  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },
  },
  created() {
    this.activeTab = 1;
  },
};
</script>
