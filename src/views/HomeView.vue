<script setup>
import ResultView from '../components/ResultView.vue';
import { ref } from 'vue';
import itemResults from '../data/dummy';

const keyword = ref('');
const itemList = ref([]);

function search() {
  // TODO: axios call by keyword
  itemList.value = itemResults;
}
</script>

<template>
  <div>
    <input v-model="keyword" placeholder="검색어를 입력해주세요" />
    <button @click="search">검색</button>
  </div>
  <div>{{ keyword }}</div>
  <ResultView :itemList="itemList" />
</template>
