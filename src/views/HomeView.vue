<template>
  <SearchInput></SearchInput>
  <NaverMap :stores="stores"></NaverMap>
  <ListItem
    v-for="(item, i) in stores"
    :id="item.id"
    :title="item.name"
    :address="item.address"
    :rating="item.rating"
  />
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
