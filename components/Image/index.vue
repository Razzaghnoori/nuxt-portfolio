<template>
  <img :src="src" class="aspect-auto w-9/12 rounded-xl shadow-md" />
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

</script>
