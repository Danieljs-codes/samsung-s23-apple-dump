<script setup>
import { onMounted } from "vue";
import Header from "./components/header.vue";
import Hero from "./components/Hero.vue";
import Shoot from "./components/shoot.vue";
import Performance from "./components/performance.vue";
import Grid from "./components/applegrid.vue";
import Side from "./components/side.vue";
import Motion from "./components/motion.vue";
import Last from "./components/lastsect.vue";
import { split } from "./animations/text";
import { skew } from "./animations/skew";
import LoconativeScroll from "loconative-scroll";

onMounted(() => {
     split();
     skew();

     const scroll = new LoconativeScroll({
          smooth: true,
          el: document.querySelector("[data-scroll-container]"),
     });

     setTimeout(() => {
          scroll.update();
     }, 500);
});
</script>

<template>
     <div data-scroll-container class="s_wrap">
          <Header />
          <!-- <Hero /> -->
          <Performance />
          <Shoot />
          <Grid />
          <Side />
          <Last />
          <!-- <Motion /> -->
     </div>
</template>

<style scoped></style>
