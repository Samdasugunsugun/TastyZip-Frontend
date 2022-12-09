<template>
  <div>
    <div class="my-8 flex items-center gap-16 justify-center">
      <div class="flex gap-2 items-center">
        <img src="../logo.svg" width="32" height="32">
        <h2 class="text-3xl">Tastyzip</h2>
      </div>
      <SearchInput></SearchInput>
    </div>
    <NaverMap :stores="stores"></NaverMap>
    <div class="mt-8 border rounded">
      <ListItem
        v-for="(item, i) in stores"
        :id="item.id"
        :title="item.name"
        :category="item.category"
        :address="item.address"
        :rating="item.rating"
      />
    </div>
  </div>
</template>

<script>
import NaverMap from '../components/NaverMap.vue';
import ListItem from '../components/ListItem.vue';
import SearchInput from '../components/SearchInput.vue';
export default {
  components: { NaverMap, SearchInput, ListItem },
  computed: {
    stores() {
      return this.$store.state.stores;
    },
  },
};
</script>
