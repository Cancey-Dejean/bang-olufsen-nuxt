<script setup lang="ts">
const menuList = [
  { url: "/speakers", label: "Speakers" },
  { url: "/headphones", label: "Headphones" },
  { url: "/televisions", label: "Televisions" },
  { url: "/soundbars", label: "Soundbars" },
  { url: "/accessories", label: "Accessories" },
  { url: "/world-of-bo", label: "World of B&O" },
];

const showSearchBox = ref(false);
function handleMenu() {
  alert("Menu");
}

function handleSearch() {
  showSearchBox.value = !showSearchBox.value;
}
</script>

<template>
  <div>
    <header class="sticky top-0 flex h-[60px] items-center">
      <Container
        class="relative flex h-full items-center justify-between gap-4"
      >
        <button type="button" class="flex lg:hidden" @click="handleMenu">
          <NuxtImg
            src="/menu-icon-black.webp"
            width="32"
            height="32"
            alt="logo"
          />
          <span class="sr-only">Mobile menu</span>
        </button>

        <NuxtLink
          to="/"
          class="absolute left-1/2 top-1/2 max-w-[50px] -translate-x-1/2 -translate-y-1/2 lg:relative lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0"
        >
          <NuxtImg src="/bo-logo.svg" alt="logo" />
        </NuxtLink>

        <nav class="hidden grow lg:flex">
          <ul class="flex items-center gap-5">
            <li v-for="{ url, label } in menuList" :key="label">
              <NuxtLink :to="url" class="navLink">{{ label }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex h-full items-center gap-2">
          <button
            type="button"
            class="group relative h-full text-center text-[10px]"
            @click="handleSearch"
          >
            <NuxtImg
              src="/icon_search.svg"
              width="32"
              height="32"
              alt="Search"
            />
            <span
              class="absolute bottom-[4px] left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              >Search</span
            >
          </button>

          <button
            type="button"
            class="group relative h-full text-center text-[10px]"
          >
            <NuxtImg
              src="/icon_login.svg"
              width="32"
              height="32"
              alt="Account"
            />
            <span
              class="absolute bottom-[4px] left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              >Search</span
            >
          </button>

          <button
            type="button"
            class="group relative h-full text-center text-[10px]"
          >
            <NuxtImg
              src="/icon_store.svg"
              width="32"
              height="32"
              alt="Find a store"
            />
            <span
              class="absolute bottom-[4px] left-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
              >Store</span
            >
          </button>

          <Cart />
        </div>
      </Container>
    </header>

    <SearchBox v-if="showSearchBox" />
  </div>
</template>
