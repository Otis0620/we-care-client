<script setup lang="ts">
import { RouterView } from 'vue-router';
import { Sidebar } from './components/'; // Ensure Sidebar is correctly imported
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="flex-1 overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
