<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import Container from "@/components/Container.vue";
import Input from "~/components/ui/input/Input.vue";

const route = useRoute();
const router = useRouter();
const searchQuery = ref(route.query.q || "");
const localQuery = ref(route.query.q || "");
const results = ref([]);
const loading = ref(false);

async function fetchResults(query: string) {
  loading.value = true;
  try {
    // Simulate an API call to fetch search results
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    // results.value = [query, "Result 1", "Result 2", "Result 3"]; // Dummy results
  } finally {
    loading.value = false;
  }
}

// Fetch results when the component is created or the query changes
watch(
  () => route.query.q,
  (newQuery) => {
    localQuery.value = newQuery as string;
    searchQuery.value = newQuery as string;
    fetchResults(localQuery.value);
  },
  { immediate: true },
);

function onSubmit() {
  localQuery.value = localQuery.value;
  router.push({ path: "/search", query: { q: localQuery.value } });
}
</script>

<template>
  <section class="py-20">
    <div class="flex justify-center py-4">
      <Container class="mx-auto w-full max-w-[911px]">
        <form
          @submit.prevent="onSubmit"
          class="mx-auto flex w-full items-center"
        >
          <div
            class="flex w-full rounded-full border-2 border-[#000] px-[30px] py-[10px]"
          >
            <Input
              v-model="localQuery"
              id="search"
              type="text"
              required
              placeholder="Search"
              class="border-transparent bg-transparent focus-visible:border-none focus-visible:ring-0 focus-visible:ring-transparent"
            />
            <Button type="submit" variant="link" size="icon">
              <NuxtImg
                src="/icon_search.svg"
                width="50"
                height="50"
                alt="Search"
              />
              <span class="sr-only">Search</span>
            </Button>
          </div>
        </form>

        <div class="mt-10">
          <div v-if="loading">Loading...</div>
          <div v-else-if="results.length === 0">
            <h2 class="mb-5 text-xl tracking-[.5px]">
              Your search
              <span class="font-bold italic">" - {{ searchQuery }} - "</span>
              did not match any answers we have.
            </h2>

            <p class="mb-[10px]">Suggestions:</p>
            <div class="flex flex-col pl-5">
              <p>Make sure all words are spelled correctly.</p>
              <p>Try to ask your question a different way.</p>
              <p>Try more general words.</p>
              <p>Try fewer words.</p>
            </div>
          </div>
          <div v-else>
            <ul v-for="(result, index) in results" :key="index">
              <li>{{ result }}</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  </section>
</template>
