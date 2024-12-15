<template>
  <div class="w-9/12 m-auto">
    <div class="flex flex-col justify-center items-center m-10">
      <ScrollingHeader />
      <div class="w-full">
        <ScrollingTags />
        <ScrollingTags data-direction="right" />
      </div>
      <ColumnsTwo class="mt-6">
        <template #left>
          <Image
            src="https://en.xmag.live/wp-content/uploads/2024/02/Victoria-De-Angelis-Emporio-Armani-SS24-05.jpg"
          />
        </template>
        <template #right>
          <TextBlock/>
        </template>
      </ColumnsTwo>
    </div>
  </div>
</template>
