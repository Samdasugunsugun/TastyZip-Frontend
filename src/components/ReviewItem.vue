<template>
  <div class="py-4 px-6 border-b hover:bg-gray-50 flex justify-between">
    <div class="flex items-start gap-3">
      <div class="border rounded-full flex items-center justify-center p-3 bg-purple-200 border-purple-500 border-2">
        <i class="fa-solid fa-user text-purple-500"></i>
      </div>
      <p>{{ content }}</p>
    </div>
    <div class="flex items-start">
      <span class="text-red-500 block mr-1">★</span>
      <span class="text-gray-400">{{ rating }} / 5.0</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    rating: Number,
  },
};
</script>
