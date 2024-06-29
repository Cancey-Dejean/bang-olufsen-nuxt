<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
</script>

<template>
  <div id="cart" popover class="main-cart">
    <div>
      <Button popovertarget="cart">Close</Button>
    </div>
  </div>

  <button popovertarget="cart">Cart</button>
  <!-- <Sheet>
    <SheetTrigger as-child>
      <Button variant="link" size="icon">
        <NuxtImg src="/cartBlack.svg" width="32" height="32" alt="Account" />
        <span class="sr-only">Open cart</span>
      </Button>
    </SheetTrigger>

    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
        <SheetClose as-child>
          <Button type="submit">Close</Button>
        </SheetClose>
      </SheetHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">Top</div>
        <div class="grid grid-cols-4 items-center gap-4">bottom</div>
      </div>
    </SheetContent>
  </Sheet> -->
</template>

<style scoped>
.main-cart,
.main-cart::backdrop {
  transition:
    500ms opacity,
    500ms overlay allow-discrete,
    500ms display allow-discrete;
  opacity: 0;
}

.main-cart::backdrop {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
}

.main-cart:popover-open {
  opacity: 1;
}

.main-cart:popover-open::backdrop {
  opacity: 1;
}

@starting-style {
  .main-cart:popover-open,
  .main-cart:popover-open::backdrop {
    opacity: 0;
  }
}
</style>
