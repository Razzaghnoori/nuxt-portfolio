<template>
  <div class="header-taimer">
    <ScrollingIndicator />
    <div class="header-container">
      <ScrollingAvatar />
      <ScrollingHeaderInfo />
    </div>
    1
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.header-container {
  width: 90vw;
  height: 200vh;
  width: 100vw;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
