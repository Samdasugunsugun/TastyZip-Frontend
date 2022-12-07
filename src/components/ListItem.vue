<template>
  <div @click="routeToDetail">
    <span>{{ title }}</span>
    <span>{{ address }}</span>
    <span>{{ rating }}</span>
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
    address: String,
    rating: Number,
  },
};
</script>
