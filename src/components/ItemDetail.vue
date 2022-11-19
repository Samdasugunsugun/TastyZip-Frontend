<script setup lang="ts">
defineProps({
  itemId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div>
    <h3>매장 id: {{ itemId }}</h3>
    <h4>매장 정보</h4>
    <p>자세한 매장 정보가 등록되어 있습니다.</p>
  </div>
</template>
