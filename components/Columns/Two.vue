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
  @apply flex flex-col flex-wrap items-center lg:grid lg:grid-cols-2 lg:justify-items-center lg:w-full gap-6 p-4;
}
</style>
