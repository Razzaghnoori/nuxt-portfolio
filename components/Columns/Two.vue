<template>
  <div class="two-cols">
    <slot name="left">
      <div class="default-col">Left Column</div>
    </slot>
    <slot name="right">
      <div class="default-col">Right Column</div>
    </slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.default-col {
  @apply flex justify-center items-center bg-gray-500 w-full text-white;
  min-height: 20vh;
  text-align: center;
  border: 1px dashed white;
  border-radius: 1rem;
}

.two-cols {
  @apply flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center md:w-full gap-6 p-4;
}
</style>
