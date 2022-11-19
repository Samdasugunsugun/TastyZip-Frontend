<script setup lang="ts">
import internal from 'stream';
import { PropType } from 'vue';
interface Item {
  id: number;
  title: string;
  representative: string;
  thumbnail: string;
}

defineProps({
  itemList: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  getDetail: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div v-if="itemList.length != 0">
    <ul>
      <li v-for="item in itemList">
        <div class="itemContainer" @click="getDetail(item.id)">
          <div>
            <img :src="item.thumbnail" alt="썸네일을 불러올 수 없습니다." />
          </div>
          <div>
            <div>
              {{ item.title }}
            </div>
            <div>대표 메뉴: {{ item.representative }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>검색 결과가 존재하지 않습니다.</div>
</template>

<style scoped>
.itemContainer {
  border: 1px solid aqua;
}
</style>
