<script setup lang="ts">
import SidebarLogo from './SidebarLogo.vue';
import SidebarNav from './SidebarNav.vue';
</script>

<template>
  <div class="flex h-screen">
    <div class="sm:w-1/3 md:w-1/4 lg:w-1/6 flex flex-col border-r border-secondary-200">
      <SidebarLogo />
      <SidebarNav />
    </div>
  </div>
</template>
