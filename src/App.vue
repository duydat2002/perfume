<script setup lang="ts">
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useCommonStore } from "./stores";

const route = useRoute();

const { popupSelected } = storeToRefs(useCommonStore());

watch(popupSelected, (selected) => {
  // document.body.style.overflow = selected ? "hidden" : "visible";
});
</script>

<template>
  <KeepAlive>
    <component :is="route.meta.layout || 'div'">
      <RouterView />
    </component>
  </KeepAlive>
</template>
