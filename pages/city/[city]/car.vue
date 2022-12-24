<script setup>
const route = useRoute();

const { toTitleCase } = useUtilities();

useHead({
  title: `${
    route.params.made ? toTitleCase(route.params.made) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <div class="mt-32 flex">
      <NuxtErrorBoundary>
        <CarSidebar />
        <NuxtPage />
        <template #error="{ error }">
          <div class="flex flex-col justify-center text-center">
            <h1 class="text-5xl">Sorry, something went wrong</h1>
            <code class="mt-6">{{ error }}</code>
            <button class="text-white bg-blue-400" @click="error.value = null">
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
  </div>
</template>
