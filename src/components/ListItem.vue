<template>
  <div @click="routeToDetail" class="py-4 px-6 border-b hover:bg-gray-50 cursor-pointer">
    <div class="flex justify-between">
      <div class="flex items-end">
        <h3 class="mr-2 text-xl ">{{ title }}</h3>
        <span class="text-sm text-gray-400">{{category}}</span>
      </div>
      <div class="flex items-center text-base">
        <div class="relative text-transparent">
          <div class="z-10 absolute overflow-hidden text-red-500" :style="{width: rating * 20 + '%' }"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
          <div class="z-0 text-gray-200"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        </div>
      </div>
    </div>
    <div class="flex justify-between text-base">
      <span>{{ address }}</span>
      <span class="text-gray-400 text-sm">{{ rating.toFixed(1) }} / 5</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routeToDetail() {
      this.$router.push({ path: `/${this.id}` });
    },
  },
  props: {
    id: Number,
    title: String,
    category: String,
    address: String,
    rating: Number,
  },
};
</script>
