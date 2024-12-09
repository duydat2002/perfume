<script setup lang="ts">
import Header from "@/components/Layout/Header.vue";
import HeaderHome from "@/components/Layout/HeaderHome.vue";
import Footer from "@/components/Layout/Footer.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <section class="w-full">
    <HeaderHome v-if="route.name == 'Home'" />
    <Header v-else />
    <main :class="[route.name != 'Home' ? 'mt-[88px]' : '']">
      <slot />
    </main>
    <Footer />
  </section>
</template>
