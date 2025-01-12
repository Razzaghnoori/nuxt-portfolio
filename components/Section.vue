<template>
  <section>
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
section {
  @apply flex flex-col gap-14 items-center mt-20 mb-20;
  max-width: 100vw;
}
</style>
