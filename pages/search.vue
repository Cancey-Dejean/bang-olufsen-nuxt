<template>
  <div>
    <div class="flex justify-center py-4">
      <Container>
        <h1 class="text-2xl">Search Results for "{{ searchQuery }}"</h1>
      </Container>
    </div>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else-if="results.length === 0">No results found.</div>
      <ul v-else>
        <li v-for="(result, index) in results" :key="index">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Container from "@/components/Container.vue";

const route = useRoute();
const router = useRouter();
const searchQuery = ref(route.query.q || "");
const results = ref([]);
const loading = ref(false);

async function fetchResults(query: string) {
  loading.value = true;
  try {
    // Simulate an API call to fetch search results
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    results.value = [query, "Result 1", "Result 2", "Result 3"]; // Dummy results
  } finally {
    loading.value = false;
  }
}

// Fetch results when the component is created or the query changes
watch(
  () => route.query.q,
  (newQuery) => {
    searchQuery.value = newQuery as string;
    fetchResults(searchQuery.value);
  },
  { immediate: true },
);

function onSubmit() {
  router.push({ path: "/search", query: { q: searchQuery.value } });
}
</script>
