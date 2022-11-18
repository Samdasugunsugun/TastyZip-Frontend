<script setup>
import ResultView from '../components/ItemList.vue';
import { ref } from 'vue';
import { itemResults, itemDetail } from '@/data/dummy';

const keyword = ref('');
const itemList = ref([]);

function search() {
  // TODO: axios call by keyword
  itemList.value = itemResults;
}

function detailView(id) {
  // TOOD: 개별 맛집의 상세 정보 요청 api 송식
  alert(id);
}
</script>

<template>
  <div>
    <input v-model="keyword" placeholder="검색어를 입력해주세요" />
    <button @click="search">검색</button>
  </div>
  <div>{{ keyword }}</div>
  <ResultView :itemList="itemList" :getDetail="detailView" />
</template>
