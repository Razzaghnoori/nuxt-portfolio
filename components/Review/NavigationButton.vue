<template>
  <button 
    class="carousel-button"
    :class="{ 'prev': direction === 'prev' }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <font-awesome 
      :icon="['fas', direction === 'prev' ? 'chevron-left' : 'chevron-right']"
      class="text-xl"
    />
  </button>
</template>

<script setup>
defineProps({
  direction: {
    type: String,
    required: true,
    validator: (value) => ['prev', 'next'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
.carousel-button {
  @apply bg-gray-800 text-white w-9 h-9 rounded-full flex items-center justify-center
         hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed
         shrink-0; // Prevent button from shrinking
  
  &.prev {
    @apply order-first; // Ensure prev button stays on the left
  }
}
</style> 