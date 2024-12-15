<template>
  <div class="flex flex-col items-start">
    <h1 class="text-4xl font-bold uppercase text-orange-500">
      {{ title }}
    </h1>
    <p class="text-xl mt-4">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "Valar Morghulis" },
  description: {
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet justo et suscipit tincidunt. Curabitur commodo, massa elementum dapibus viverra, nisl mauris maximus augue, nec ultricies sapien nunc nec nibh. Mauris odio nunc, malesuada ac auctor nec, aliquam nec lectus. Curabitur ac enim pretium, tempor quam sed, volutpat lacus. Mauris dictum malesuada nunc, in ultricies sapien scelerisque molestie. Sed molestie dui magna, sit amet euismod neque luctus sit amet. Cras ut lorem bibendum, convallis metus sed, ultrices risus. Sed molestie massa eu nunc elementum, nec pharetra justo faucibus. In ac lacinia turpis.",
  },
});
</script>

<style lang="scss" scoped></style>
