<template>
  <input v-model="query" />
  <button @click="search"><i class="fa fa-search"></i></button>
</template>

<script>
export default {
  mounted() {},
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
    },
  },
  data() {
    return {
      query: '',
    };
  },
};
</script>
