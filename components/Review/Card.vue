<template>
  <article class="review-card text-sm sm:text-base">
    <div 
      class="card-content"
      :style="transformStyle"
    >
      <div class="review-header">
        <NuxtImg
          :src="review.avatar" 
          :alt="review.author"
          class="review-avatar"
          width="80"
          height="80"
        />
        <div class="review-author">
          <h3 class="author-name">{{ review.author }}</h3>
          <p class="author-role">{{ review.role }}</p>
          <p class="author-company">{{ review.company }}</p>
        </div>
      </div>
      <div class="review-content">
        <p class="text-justify">"{{ review.content }}"</p>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  review: {
    type: Object,
    required: true
  },
  transformStyle: {
    type: Object,
    default: () => ({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease'
    })
  }
})
</script>

<style lang="scss" scoped>
.review-card {
  @apply bg-transparent rounded-lg p-1;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.card-content {
  @apply bg-white rounded-lg shadow-lg p-8 mx-4;
  transform-style: preserve-3d;
  will-change: transform;
}

.review-header {
  @apply flex flex-col sm:flex-row gap-2 items-center mb-6;
  transform: translateZ(20px);
}

.review-avatar {
  @apply w-20 h-20 rounded-full mr-6;
  transform: translateZ(40px);
}

.review-author {
  @apply flex flex-col text-center sm:text-left;
  transform: translateZ(30px);
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
  transform: translateZ(10px);
}
</style> 