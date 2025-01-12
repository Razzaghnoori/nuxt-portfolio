<template>
  <Section class="reviews-section">
    <div class="container">
      <h2 class="section-title">What People Say</h2>
      <div class="carousel-container">
        <NavigationButton
          direction="prev"
          :disabled="isAtStart"
          @click="scrollPrev"
          class="hidden sm:flex"
        />
        
        <div class="carousel-track">
          <div class="carousel-wrapper" ref="scrollContainer">
            <div class="carousel">
              <ReviewCard
                v-for="review in reviews"
                :key="review.id"
                :review="review"
                class="carousel-item"
              />
            </div>
          </div>
        </div>

        <NavigationButton
          direction="next"
          :disabled="isAtEnd"
          @click="scrollNext"
          class="hidden sm:flex"
        />
      </div>

      <!-- Progress Dots -->
      <div class="progress-dots">
        <button
          v-for="(_, index) in reviews"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </Section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavigationButton from './NavigationButton.vue'

const reviews = ref([])
const scrollContainer = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)
const currentSlide = ref(0)

const goToSlide = (index) => {
  if (!scrollContainer.value) return
  
  const slideWidth = scrollContainer.value.offsetWidth
  scrollContainer.value.scrollTo({
    left: slideWidth * index,
    behavior: 'smooth'
  })
  currentSlide.value = index
}

const scrollNext = () => {
  if (currentSlide.value < reviews.value.length - 1) {
    goToSlide(currentSlide.value + 1)
  }
}

const scrollPrev = () => {
  if (currentSlide.value > 0) {
    goToSlide(currentSlide.value - 1)
  }
}

const checkScrollPosition = () => {
  if (!scrollContainer.value) return
  
  const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.value
  isAtStart.value = scrollLeft <= 0
  isAtEnd.value = scrollLeft >= scrollWidth - clientWidth - 1
  
  // Update current slide
  const slideWidth = clientWidth
  currentSlide.value = Math.round(scrollLeft / slideWidth)
}

onMounted(async () => {
  reviews.value = await $fetch('/api/reviews')
  
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition()
  }
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

.carousel-container {
  @apply flex items-center justify-center gap-4;
}

.carousel-track {
  @apply w-full max-w-3xl overflow-hidden;
  
  @screen sm {
    @apply w-[calc(100%-6rem)];
  }
}

.carousel-wrapper {
  @apply overflow-x-scroll overflow-y-hidden relative w-full;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  touch-action: pan-x;
  
  &::-webkit-scrollbar {
    display: none;
  }
}

.carousel {
  @apply flex;
}

.carousel-item {
  @apply flex-shrink-0 w-full;
  scroll-snap-align: center;
  scroll-snap-stop: always;
}

.progress-dots {
  @apply flex justify-center gap-2 mt-8;
}

.dot {
  @apply w-3 h-3 rounded-full bg-gray-400 transition-all duration-200;
  
  &.active {
    @apply bg-gray-800 scale-125;
  }
  
  &:hover {
    @apply bg-gray-600;
  }
}
</style> 