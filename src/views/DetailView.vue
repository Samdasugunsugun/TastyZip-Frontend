<template>
  <div class="mt-10">
    <div class="flex items-center mb-10 w-full">
      <button
        class="mr-4 rounded-full border p-2 flex items-center justify-center border-gray-400"
        @click="routeToHome"
      >
        <i class="fa-solid fa-arrow-left text-gray-400"></i>
      </button>
      <div class="w-full">
        <div class="flex justify-between">
          <div class="flex items-end">
            <h3 class="mr-2 text-xl">{{ store.name }}</h3>
            <span class="text-sm text-gray-400">{{ store.category }}</span>
          </div>
          <div class="flex items-center text-base">
            <div class="relative text-transparent">
              <div
                class="z-10 absolute overflow-hidden text-red-500"
                :style="{ width: store.rating * 20 + '%' }"
              >
                <span>★</span><span>★</span><span>★</span><span>★</span
                ><span>★</span>
              </div>
              <div class="z-0 text-gray-200">
                <span>★</span><span>★</span><span>★</span><span>★</span
                ><span>★</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between text-base">
          <span>{{ store.address }}</span>
          <span class="text-gray-400 text-sm">{{ store.rating }} / 5</span>
        </div>
      </div>
    </div>
    <NaverMap :stores="[store]"></NaverMap>
    <div class="mt-8 border rounded">
      <ReviewItem
        v-for="(item, i) in reviews"
        :content="item.content"
        :rating="item.rating"
      />
    </div>
  </div>
</template>

<script>
import NaverMap from '../components/NaverMap.vue';
import ReviewItem from '../components/ReviewItem.vue';
export default {
  components: { NaverMap, ReviewItem },
  mounted() {
    this.$store.dispatch('getDetail', this.$route.params.id);
    this.$store.dispatch('getReviews', this.$route.params.id);
  },
  methods: {
    routeToHome() {
      this.$router.push({ path: `/` });
    },
  },
  computed: {
    store() {
      return this.$store.state.store;
    },
    reviews() {
      return this.$store.state.reviews;
    },
  },
};
</script>
