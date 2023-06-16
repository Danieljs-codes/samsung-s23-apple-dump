<script setup>
import { onMounted , ref} from "vue";
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
import preloader from "./components/preloader.vue";

const turnOffPreloader = ref(true);

window.addEventListener('load', () => {
  turnOffPreloader.value = !turnOffPreloader.value;
})

onMounted(() => {
     split();
     skew();

     const scroll = new LoconativeScroll({
          smooth: true,
          el: document.querySelector("[data-scroll-container]"),
          lerp: 0.07,
     });

     setTimeout(() => {
          scroll.update();
     }, 500);
});
</script>

<template>
     <div data-scroll-container class="s_wrap">
          <transition
      enter-active-class="animate__animated animate__fadeOut"
      leave-active-class="animate__animated animate__fadeOut"
    >
      <preloader v-if="turnOffPreloader"></preloader>
    </transition>
          <Header />
          <Hero />
          <Performance />
          <Shoot />
          <Grid />
          <Side />
          <Last />
          <Motion />
     </div>
</template>

<style scoped></style>
