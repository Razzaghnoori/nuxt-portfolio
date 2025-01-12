<template>
  <Section class="reviews-section">
    <div class="container">
      <h2 class="section-title">What People Say</h2>
      <Carousel :itemCount="reviews.length" v-slot="{ transformStyle }">
        <ReviewCard
          v-for="review in reviews"
          :key="review.id"
          :review="review"
          :transformStyle="transformStyle"
          class="carousel-item"
        />
      </Carousel>
    </div>
  </Section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Carousel from './Carousel.vue'
import ReviewCard from './Card.vue'

const reviews = ref([])

onMounted(async () => {
  reviews.value = await $fetch('/api/reviews')
})
</script>

<style lang="scss" scoped>
.reviews-section {
  @apply w-screen bg-gray-200 py-16;
}

.container {
  @apply max-w-7xl mx-auto px-4;
}

.section-title {
  @apply text-4xl font-bold text-center mb-12 text-gray-800;
}

.carousel-item {
  @apply flex-shrink-0 w-full;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}
</style> 