<template>
  <Section id="experience" class="experience-section">
    <div class="section-heading">
      <p>Selected chapters</p>
      <h2>Experience that compounds.</h2>
      <span>Frontend architecture, product thinking, and measurable outcomes.</span>
    </div>
    <ExperienceBlock
      v-for="(experience, index) in experiences"
      :experience="experience"
      :key="experience.id"
      :reversed="index % 2 === 1"
    />
  </Section>
</template>

<script setup>
const { data: experiences } = await useFetch("/api/experiences", {
  lazy: true,
});
</script>

<style lang="scss" scoped>
.experience-section {
  @apply w-full px-4 sm:px-8 lg:px-12;
}

.section-heading {
  @apply w-full max-w-6xl mx-auto mb-2;

  p {
    @apply text-sm font-semibold uppercase tracking-[0.2em] text-teal-300;
  }

  h2 {
    @apply mt-3 text-4xl sm:text-6xl font-semibold tracking-[-0.04em] text-white;
  }

  span {
    @apply mt-4 block text-lg text-slate-400;
  }
}
</style>
