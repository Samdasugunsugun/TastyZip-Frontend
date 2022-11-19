<script setup lang="ts">
import { itemDetail } from '../data/dummy';
import { ref, nextTick, onMounted } from 'vue';
let id = -1;
interface Menu {
  name: string;
  image: string;
}

interface SelectedItem {
  id: number;
  title: string;
  location: string;
  contact: string;
  menus: Array<Menu>;
  images: Array<string>;
  reviews: Array<string>;
}

const selectedItemDetail = ref();

defineProps({
  itemId: {
    type: Number,
    required: true,
  },
});

// Todo: 아이템 id에 따라서 index 갱신하기
nextTick(() => {
  selectedItemDetail.value = itemDetail[0];
  console.log(selectedItemDetail.value);
  console.log(selectedItemDetail.value.title);
});
</script>

<template>
  <div>
    <h3>매장 id: {{ itemId }}</h3>
    <h4 v-if="selectedItemDetail != null">
      매장 이름: {{ selectedItemDetail.title }}
    </h4>

    <p>자세한 매장 정보가 등록되어 있습니다.</p>
  </div>
</template>
