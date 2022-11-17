<script setup lang="ts">
import { PropType } from 'vue';
interface Item {
  title: String;
  location: String;
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
          <span> 이름: {{ item.title }} 위치: {{ item.location }} </span>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>검색 결과가 존재하지 않습니다.</div>
</template>
