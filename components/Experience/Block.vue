<template>
  <ColumnsTwo class="mt-6" :class="{ 'grid-row-reversed': reversed }">
    <template #left>
      <Image
        :src="experience.image ?? 'https://placehold.co/600x400?text=No\nImage'"
        :alt="`Mohammad Razzaghnoori at ${experience.company.name}`"
      />
    </template>
    <template #right>
      <ExperienceTextBlock
        :title="experience.company.name"
        :description="experience.description"
        :duration="experience.duration"
        :position="experience.position"
        :link="experience.company.link ?? '#'"
      />
    </template>
  </ColumnsTwo>
</template>

<script setup>
const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
  reversed: {
    type: Boolean,
    default: false,
  },
});
console.log(props.experience.image);
</script>

<style lang="scss" scoped>
.grid-row-reversed {
  direction: rtl;
}
</style>
