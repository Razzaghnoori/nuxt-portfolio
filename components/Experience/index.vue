<template>
  <Section>
    <h2 class="flex flex-col items-center">
      <span class="font-bold">Professional</span>
      <span class="text-4xl font-bold">Experience</span>
    </h2>
    <ExperienceBlock
      v-for="(experience, index) in experiences"
      :experience="experience"
      :key="experience.id"
      :reversed="index % 2 === 1"
    />
  </Section>
</template>

<script setup>
const { data: experiences, error } = await useFetch("/api/experiences", {
  lazy: true,
});
</script>
