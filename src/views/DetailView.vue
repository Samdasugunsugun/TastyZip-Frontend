<template>
  <div>
    <span>{{ store.name }}</span>
    <span>{{ store.category }}</span>
  </div>
  <NaverMap :stores="[store]"></NaverMap>
  <div>
    <span>{{ store.address }}</span>
    <span>{{ store.score }}</span>
  </div>
  <ReviewItem
    v-for="(item, i) in reviews"
    :content="item.content"
    :rating="item.rating"
  />
</template>

<script>
import NaverMap from '../components/NaverMap.vue';
import ReviewItem from '../components/ReviewItem.vue';
export default {
  components: { NaverMap, ReviewItem },
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
