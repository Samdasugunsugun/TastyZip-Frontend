<script setup>
import { ref } from 'vue';
import { itemResults, itemDetail } from '@/data/dummy';
import ItemList from '../components/ItemList.vue';
import ItemDetail from '../components/ItemDetail.vue';
import { colorScheme } from '@/styles';

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
  <div class="homeViewBody">
    <div class="searchBarContainer">
      <input
        v-model="keyword"
        class="input"
        placeholder="검색어를 입력해주세요"
      />
      <button class="submit" @click="search">검색</button>
    </div>
    <div>{{ keyword }}</div>
    <div class="searchResultContainer">
      <ItemList :itemList="itemList" :getDetail="getDetailView" />
    </div>
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
.homeViewBody {
  width: 100%;
  height: 100%;
  background-color: v-bind('colorScheme.COLOR_D');
  display: flex;
  flex-direction: column;
  align-items: center;
}
.searchBarContainer {
  margin: 20px;
  padding: 10px 20px;
  background-color: white;
  border: 2px solid;
  border-color: v-bind('colorScheme.COLOR_B');
  border-radius: 5px;
}

.searchResultContainer {
  width: 80%;
  height: 80%;
  overflow-y: scroll;
  scrollbar-width: 0;
  margin: 20px;
  padding: 20px 20px;
  background-color: white;
  border: 5px solid;
  border-radius: 20px;
  border-color: v-bind('colorScheme.COLOR_A');
}

.searchResultContainer::-webkit-scrollbar {
  display: none;
}

.input {
  min-width: 200px;
  min-height: 30px;
  max-width: 1000px;
  font-size: 20px;
  text-align: center;
  margin: 15px auto;
  border: 2px solid;
  border-color: v-bind('colorScheme.COLOR_A');
  border-radius: 4px;
  transition: 0.2s ease-out;
  outline: none;
}

.input:focus {
  border: 3px solid;
  border-color: v-bind('colorScheme.COLOR_B');
}

.submit {
  min-width: 40px;
  min-height: 30px;
  margin: 2px;
  padding: 4px auto;
  border-radius: 4px;
  background: #fff;
  border: 2px solid;
  border-color: v-bind('colorScheme.COLOR_A');
  color: v-bind('colorScheme.COLOR_A');
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.submit:hover,
.submit:focus {
  background: v-bind('colorScheme.COLOR_B');
  border: 2px solid;
  border-color: v-bind('colorScheme.COLOR_D');
  color: #fff;
  outline: 0;
}
.modal {
  width: 50%;
  height: 50%;
  background-color: v-bind('colorScheme.COLOR_D');
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  border-color: v-bind('colorScheme.COLOR_A');
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
}
.modal::-webkit-scrollbar {
  display: none;
}
</style>
