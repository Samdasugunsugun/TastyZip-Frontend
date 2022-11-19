<script setup>
import { ref, computed } from 'vue';
import { itemResults } from '@/data/dummy';
import ItemList from '../components/ItemList.vue';
import ItemDetail from '../components/ItemDetail.vue';
import { itemDetail } from '../data/dummy';

const keyword = ref('');
const itemList = ref([]);
const detailedViewId = ref(-1);

function search() {
  // TODO: axios call by keyword
  itemList.value = itemResults;
}

function getDetailView(id) {
  // TOOD: 개별 맛집의 상세 정보 요청 api 송식
  detailedViewId.value = id;
}

function closeDetailView() {
  detailedViewId.value = -1;
}
</script>

<template>
  <div
    :class="detailedViewId > 0 ? 'toggleOnBackGround' : 'toggleOffBackGround'"
  >
    <div>
      <input v-model="keyword" placeholder="검색어를 입력해주세요" />
      <button @click="search">검색</button>
    </div>
    <div>{{ keyword }}</div>
    <ItemList :itemList="itemList" :getDetail="getDetailView" />
  </div>
  <div
    class="modal"
    v-if="detailedViewId > 0"
    v-click-outside="closeDetailView"
  >
    <ItemDetail :itemId="detailedViewId" v-if="detailedViewId > 0" />
  </div>
</template>

<style scoped>
.toggleOnBackGround {
  background-color: rgba(49, 45, 45, 0.608);
}
.toggleOffBackGround {
  background-color: aliceblue;
}

.modal {
  width: 50vw;
  height: 50vw;
  background-color: white;
  border: 1px solid red;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
