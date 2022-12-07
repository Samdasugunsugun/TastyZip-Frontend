<template>
  <div>
    <span>{{ content }}</span>
    <br />
    <span>{{ rating }}</span>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    rating: Number,
  },
};
</script>
