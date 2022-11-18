<script setup lang="ts">
import { PropType } from 'vue';
interface Item {
  title: string;
  location: string;
  thumbnail: string;
  review: string;
}

defineProps({
  itemList: {
    type: Array as PropType<Item[]>,
    required: true,
  },
});
</script>

<template>
  <div v-if="itemList.length != 0">
    <ul>
      <li v-for="item in itemList">
        <div>
          <img :src="item.thumbnail" alt="썸네일을 불러올 수 없습니다." />
        </div>
        <div>
          <div>
            {{ item.title }}
          </div>
          <div>
            {{ item.location }}
          </div>
          <div>
            {{ item.review }}
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>검색 결과가 존재하지 않습니다.</div>
</template>
