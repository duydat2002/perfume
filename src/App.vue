<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <KeepAlive>
    <component :is="route.meta.layout || 'div'">
      <RouterView />
    </component>
  </KeepAlive>
</template>
