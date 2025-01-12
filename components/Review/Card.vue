<template>
  <article class="review-card text-sm sm:text-base">
    <div class="review-header">
      <img 
        :src="review.avatar" 
        :alt="review.author"
        class="review-avatar"
      >
      <div class="review-author">
        <h3 class="author-name">{{ review.author }}</h3>
        <p class="author-role">{{ review.role }}</p>
        <p class="author-company">{{ review.company }}</p>
      </div>
    </div>
    <div class="review-content">
      <p class="text-justify">"{{ review.content }}"</p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.review-card {
  @apply bg-white rounded-lg shadow-lg p-8 mx-4;
}

.review-header {
  @apply flex flex-col sm:flex-row gap-2 items-center mb-6;
}

.review-avatar {
  @apply w-20 h-20 rounded-full mr-6;
}

.review-author {
  @apply flex flex-col text-center sm:text-left;
}

.author-name {
  @apply text-xl font-bold text-gray-800;
}

.author-role {
  @apply text-base text-gray-600 mt-1;
}

.author-company {
  @apply text-base text-gray-500;
}

.review-content {
  @apply text-lg text-gray-700 italic leading-relaxed;
}
</style> 