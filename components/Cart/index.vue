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
</script>

<template>
  <Sheet>
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
  </Sheet>
</template>
