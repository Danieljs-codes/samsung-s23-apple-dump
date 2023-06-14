<script setup>
import { onMounted } from "vue";
import Header from "./components/header.vue";
import Hero from "./components/Hero.vue";
import Shoot from "./components/shoot.vue";
import Performance from "./components/performance.vue";
import { split } from "./animations/text";

onMounted(() => {
  split();
});
</script>

<template>
  <div class="s_wrap">
    <Header />
    <Hero />
    <Performance />
    <Shoot />
  </div>
</template>

<style scoped></style>
