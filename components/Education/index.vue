<template>
  <Section>
    <div class="flex flex-col items-center">
      <span class="text-4xl font-bold">Education</span>
    </div>
    <!-- <div class="flex gap-x-4 gap-y-10 flex-wrap items-center justify-center">
      <EducationCard v-for="education in educations" :education="education" />
    </div> -->
    <ColumnsTwo>
    <template #left>
      <EducationCard :education="educations[0]" />
    </template>
    <template #right>
      <EducationCard :education="educations[1]" />
    </template>
    </ColumnsTwo>
  </Section>
</template>

<script setup>
const { data: educations, error } = await useFetch("/api/education", {
  lazy: true,
});
</script>

<style lang="scss" scoped></style>
