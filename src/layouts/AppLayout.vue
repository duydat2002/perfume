<script setup lang="ts">
import Header from "@/components/Layout/Header.vue";
import HeaderHome from "@/components/Layout/HeaderHome.vue";
import Footer from "@/components/Layout/Footer.vue";
import SignUp from "@/components/Auth/SignUp.vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommonStore } from "@/stores";
import SignIn from "@/components/Auth/SignIn.vue";
import ForgotPassword from "@/components/Auth/ForgotPassword.vue";

const route = useRoute();
const { popupSelected } = storeToRefs(useCommonStore());
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
  <SignUp v-if="popupSelected == 'signup'" />
  <SignIn v-else-if="popupSelected == 'signin'" />
  <ForgotPassword v-else-if="popupSelected == 'forgotPassword'" />
</template>
