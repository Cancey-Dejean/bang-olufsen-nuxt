<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container.vue";

const query = ref("");
const router = useRouter();
const showSearchBox = ref(true);
const searchBoxRef = ref<HTMLElement | null>(null);

function onSubmit() {
  // Hide the search box
  showSearchBox.value = false;
  router.push({ path: "/search", query: { q: query.value } });
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    showSearchBox.value = false;
  }
}

function handleClickOutside(event: MouseEvent) {
  if (
    searchBoxRef.value &&
    !searchBoxRef.value.contains(event.target as Node)
  ) {
    showSearchBox.value = false;
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  document.addEventListener("mousedown", handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>

<template>
  <div
    v-if="showSearchBox"
    ref="searchBoxRef"
    class="flex justify-center py-4 shadow-md"
  >
    <Container>
      <form
        @submit.prevent="onSubmit"
        class="mx-auto flex w-full max-w-sm items-center"
      >
        <Input
          v-model="query"
          id="search"
          type="text"
          placeholder="Search"
          class="border-[#000] bg-transparent"
        />
        <Button type="submit" variant="link" size="icon">
          <NuxtImg src="/icon_search.svg" width="50" height="50" alt="Search" />
          <span class="sr-only">Search</span>
        </Button>
      </form>
    </Container>
  </div>
</template>
