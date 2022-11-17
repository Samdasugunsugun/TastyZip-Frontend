<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import SearchEngine from '../components/SearchEngine.vue';
import ResultView from '../components/ResultView.vue';
import { ref } from 'vue';
import router from '../router';
import itemResults from '../dummy';

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
