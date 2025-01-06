<script setup lang="ts">
import SidebarLogo from './SidebarLogo.vue';
import SidebarNav from './SidebarNav.vue';
</script>

<template>
  <div class="flex flex-col h-full sm:w-1/3 md:w-1/5 lg:w-1/6 border-r border-secondary-200">
    <SidebarLogo />
    <SidebarNav />
  </div>
</template>
